$(document).ready(function () {
  $("#res_div").hide();
  var timerId;
  var timeLeft = 30;
  $("#game-start").click(function () {
      $("#res_div").hide();
      timerId = setInterval(countdown, 1000);
      function countdown() {
          if (timeLeft === -1) {
              clearTimeout(timerId);
              resultCount();
              $("#ques_div").hide();
              $("#res_div").show();
          }
          else {
              $("#rem-time").text(timeLeft);
              timeLeft--;
          }
      }
  });

  $("#game-done").click(function () {
      $("#ques_div").hide();
      $("#res_div").show();
      resultCount();
      clearTimeout(timerId);
      timeLeft = 30;
      $("#rem-time").text(0);
  });
  $("#new-game").click(function () {
      $("#res_div").hide();
      $("#ques_div").show();
  });

  function resultCount() {

      var rightAns = 0;
      var wrongAns = 0;
      var unAnswered = 0;
      var checkQ1 = $("input[name='Q1']:checked").val();
      console.log(checkQ1);

      var checkQ2 = $("input[name='Q2']:checked").val();
      console.log(checkQ2);

      var checkQ3 = $("input[name='Q3']:checked").val();
      console.log(checkQ3);

      var checkQ4 = $("input[name='Q4']:checked").val();
      console.log(checkQ4);

      var checkQ5 = $("input[name='Q5']:checked").val();
      console.log(checkQ5);

      var checkQ6 = $("input[name='Q6']:checked").val();
      console.log(checkQ6);

      var userAnswersArray = [checkQ1, checkQ2, checkQ3, checkQ4, checkQ5, checkQ6];

      var rightAnswerArray = ["op1_3", "op2_4", "op3_1", "op4_3", "op5_2", "op6_3"];

      for (var i = 0; i < userAnswersArray.length; i++) {
          if (userAnswersArray[i] === rightAnswerArray[i]) {
              rightAns++;

          }
          else if (userAnswersArray[i] === undefined) {
              unAnswered++;

          }
          else {
              wrongAns++;

          }
      }
      console.log(rightAns);
      console.log(wrongAns);
      console.log(unAnswered);

      $('input[type=radio]').prop('checked', false);
      $("#r-ans").text(rightAns);
      $("#w-ans").text(wrongAns);
      $("#u-ans").text(unAnswered);
      /*window.location.href = "https://www.google.co.in";*/
  }
});