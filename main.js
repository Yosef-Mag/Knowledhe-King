$(document).ready(  
    $("#button").click(
    function () {
        var question1 = $("#Answer1").val();
        var question2 = $('input[name=Q1]:checked').val();
        var question3 = $("#Answer3").val();
            question3 = question3.toLowerCase();
        var question4 = $("#Answer4").val();
            question4 = question4.toLowerCase();
        var question5 = $('input[name=Q5]:checked').val();
        var correct = 0;
    
    if (question1 === "3") {
        correct++;
    };

    if (question2 === "25/5/1946") {
        correct++;
    };

    if (question3 === "david") {
        correct++;
    };

    if (question4 === "flower") {
        correct++;
    };

    if (question5 === "74") {
        correct++;
    };
      
    var pictures = ["imgs/crown.gif", "imgs/meh.jpeg", "imgs/unlucky.gif"];
    var messages = ["Congratz you are the new knowledge King ", "You could do better", "Unlucky!!"];
    var score;

    if (correct === 0) {
        score = 2;
    };

    if (correct > 0 && correct < 4) {
        score = 1;
    };

    if (correct === 5) {
        score = 0;
    };

    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";

    document.getElementById("quiz").style.display = "none";
    document.getElementById("quiz").style.visibility = "hidden";

    document.getElementById("message_reslult").innerHTML = messages[score];
    document.getElementById("message_reslult").style.color = "#b380ff"
    document.getElementById("message_reslult").style.fontSize = "xx-large"
    document.getElementById("message_reslult").style.marginLeft = "90px"

    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("number_correct").style.color = "#b380ff"
    document.getElementById("number_correct").style.fontSize = "xx-large"
    document.getElementById("number_correct").style.marginLeft = "50px"

    document.getElementById("picture").src = pictures[score];

})
);