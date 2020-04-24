function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        

        if (choices.length==0)
        {
            var opt = document.getElementById("buttons");
            opt.style.display="none";
            var opt2 = document.getElementById("answerid");
            opt2.style.display="block";
            var opt3 = document.getElementById("nxt");
            opt3.style.display="block";

        }
        else
        {
            var opt2 = document.getElementById("answerid");
            opt2.style.display="none";
            var opt3 = document.getElementById("nxt");
            opt3.style.display="none";
            var opt = document.getElementById("buttons");
            opt.style.display="block";
        }

        for(var i = 0; i < choices.length; i++) {
            var button = document.getElementById("btn" + i);
            button.style.display="block";

            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        if(choices.length==3)
        {
            var button = document.getElementById("btn3");
            button.style.display="none";
        }

        
    }
};


function submit()
{
    quiz.questionIndex++;
    populate();


};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showScores() {
   
    var gameOverHTML = " &emsp;&emsp;&emsp;&emsp;&emsp; Thanks! Your personlised designs coming to you soon!"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What brings you to ClothWrks today?", ["Shopping for an upcoming event or an occasion","Update your wardrobe with new styles", "Buy better brands in yout budget"]),
    new Question("What size do you usually wear?", ["S [2-4]", "M [6-8]", "L [10-12]", "XL [12-14]"]),
    new Question("Enter your age",[]),
    new Question("Enter your height",[]),
    new Question("Enter your weight",[]),
    new Question("What stage of life are you at?", ["Teenage", "College","Young adult", "Professional"]),
    new Question("Feel free to add your Social Media Handles",[]),
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





