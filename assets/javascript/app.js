


$(document).ready(function() {
   
    var triviaQuestions = [
        {
            question: "What was the name of Arya's direwolf?",
            choices: ["Lady", "Grey Wind", "Nymeria", "Ghost", "Summer"],
            answer: 2,
        },
        {
            question: "Which dragon was the only one that lived through the show?",
            choices: ["Rhaegal", "Drogon", "Viserion", "Khal Drogo"],
            answer: 1,
        },
        {
            question: "Who was responsible for poisoning King Joffrey?",
            choices: ["Tyrion", "Sansa", "Cersei", "Olenna Tyrell"],
            answer: 3,
        },
        {
            question: "Who promises Catelyn Stark that she will protect her daughters?",
            choices: ["Jamie Lannister", "Breanne of Tarth", "Podrick Payne", "The Hound"],
            answer: 1,
        },
        {
            question: "What was the name of Ned Stark's Valyrian steel sword?",
            choices: ["Ice", "Longclaw", "Hearteater", "Needle"],
            answer: 0,
        },
        {
            question: "Who was responsible for the creation of the Night King?",
            choices: ["The Lord of Light", "The Children of the Forest", "The Drowned God", "The First Men"],
            answer: 1,
        },
        {
            question: "Whose skull was crushed at the giant hands of The Mountain?",
            choices: ["Ned Stark", "Littlefinger", "Oberyn Martell", "Robb Stark"],
            answer: 2,
        },
        {
            question: "Who did Ramsey Bolton keep locked up and torchered?",
            choices: ["Bran Stark", "Theon Greyjoy", "Euron Greyjoy", "Robin Arryn"],
            answer: 1,
        },
        {
            question: "What were special weapons made out of to battle the white walkers/wights?",
            choices: ["Wildfire", "Dragonglass", "Elephant tusks", "Metal"],
            answer: 1,
        },
        {
            question: "Who saves Jon Snow, Jorah Mormont, Tormund, and The Hound from certain death when they travel north of the wall to try to catch a wight?",
            choices: ["Bronn of Blackwater", "Jamie Lannister", "Stannis Baratheon", "Danaerys Targaryan"],
            answer: 3,
        }];
    
    // create variable holders
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer = 60;
    var userGuess = [];
    var placeholder = [];
    qCount = triviaQuestions.length

    $("#submit").hide();
    $("#reset").hide();

    // create start game function
    $("#start").on("click", function () {
        $("#start").hide();
        showQuiz();
        startTimer ();
        for(var i = 0; i < triviaQuestions.length; i++) {
            placeholder.text(triviaQuestions[i]);
            }
        }

    // start running the timer
    function startTimer() {
        timer = setTimeout(decrement, 1000);
        $("#time-left").text("<h2>Time Remaining: " + timer + "</h2>");
        timer --;
        if (timer === 0) {
            unanswered++;
            stop ();
            results ();
        }
    }

    // stop and clear timer
    function stop () {
        clearTimeout(timer);
    }

    // display the trivia questions in the quiz div
    function showQuiz() {
        $("#start").hide();
        $("#reset").hide();
        $("#submit").show();
        triviaQuestions.text("#quiz");
        choices.text("<input type=radio>");
        }
    }

    // match user guess with correct answer and increase score
    $("userGuess").on("click", function() {
        userGuess = parseInt($(this).attr("data-guessvalue"));
        if (userGuess === answer) {
            correct++
        } else {
            wrong++
        }
    })

    // when all questions have been answered, show results
    if ((wrong + correct + unanswered) === qCount) {
        $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answerblock").append("<h4> Correct: " + correct + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + wrong + "</h4>" );
		$("#answerblock").append("<h4> Unanswered: " + unanswered + "</h4>" );
		$("#reset").show();
		correct = 0;
		wrong = 0;
		unanswered = 0;

	} else {
		runTimer();
		showQuiz();

    }
    
    // create reset function
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answer-block").empty();
        $("#question-block").empty();
        for(var i = 0; i < placeholder.length; i++) {
            triviaQuestions.text(placeholder[i]);
        }
        startTimer();
        showQuiz();
        correct = 0;
        wrong = 0;
        unanswered = 0;
    
    })
})