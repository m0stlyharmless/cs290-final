var addQuestionButton = document.getElementById('add-question');
addQuestionButton.addEventListener('click', addQuestion);


window.onload = onload;



function onload(){
    loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
		var quizData = actual_JSON;
        // do stuff with json
        
        if(quizData[quizID]){
            
            
            
        }
        
        addQuestionWithParams();
    });
}

function addQuestion() {
	var question = document.getElementById('get-question').value;
	var answerOne = document.getElementById('get-question-one').value;
	var answerTwo = document.getElementById('get-question-two').value;
	var answerThree = document.getElementById('get-question-three').value;
	var answerFour = document.getElementById('get-question-four').value;
	var correctAnswer = document.getElementById('get-key').value;
	if(correctAnswer < 1) {
		alert("The correct answer # must be 1-4.");
        return;
	}
    if(correctAnswer > 4) {
		alert("The correct answer # must be 1-4.");
        return;
	}
    if(!(question && answerOne && answerTwo && answerThree && answerFour && correctAnswer)) {
		alert("One or more fields left blank!");
        return;
	}
    correctAnswer = correctAnswer-1;
	var quizContext = {
		question: question,
		firstAnswer: answerOne,
		secondAnswer: answerTwo,
		thirdAnswer: answerThree,
		fourthAnswer: answerFour
	};
	console.log(quizContext);
    console.log(correctAnswer);


    var quizHTML = Handlebars.templates.quiz(quizContext);
    var questionSection = document.getElementById('quiz-create-holder');
    questionSection.insertAdjacentHTML('beforeend', quizHTML); 
}

function addQuestionWithParams(question,answerOne,answerTwo,answerThree,answerFour,correctAnswer) {
	var quizContext = {
		question: question,
		firstAnswer: answerOne,
		secondAnswer: answerTwo,
		thirdAnswer: answerThree,
		fourthAnswer: answerFour
	};

    
	console.log(quizContext);
	if(!(question && answerOne && answerTwo && answerThree && answerFour && correctAnswer)) {
		alert("One or more fields left blank!");
	}
	else {
		var quizHTML = Handlebars.templates.quiz(quizContext);
		var questionSection = document.getElementById('quiz-create-holder');
		questionSection.insertAdjacentHTML('beforeend', quizHTML); 
	}
}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'quizData.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
	  callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}