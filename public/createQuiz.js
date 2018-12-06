var addQuestionButton = document.getElementById('add-question');
addQuestionButton.addEventListener('click', addQuestion);


var saveButton = document.getElementById('submit-quiz');
saveButton.addEventListener('click', saveQuiz);


window.onload = init;



globalQuestionList = [];


function init(){
    console.log("onload()");
    
    loadJSON(function(response) {
        //console.log(response);
        var actual_JSON = JSON.parse(response);
		var quizData = actual_JSON;

        pathArr = window.location.pathname.split('/');

        var quizID = pathArr[3];
        var ourQuizData = quizData[quizID];
        if(ourQuizData){
            var numQuestions = ourQuizData["quiz-array"].length
            for(var i = 0; i < numQuestions; i++){
                var question = ourQuizData["quiz-array"][i]["question"];
                var firstAnswer = ourQuizData["quiz-array"][i]["firstAnswer"];
                var secondAnswer = ourQuizData["quiz-array"][i]["secondAnswer"];
                var thirdAnswer = ourQuizData["quiz-array"][i]["thirdAnswer"];
                var fourthAnswer = ourQuizData["quiz-array"][i]["fourthAnswer"];
                var correctAnswerIndex = ourQuizData["quiz-array"][i]["correctAnswerIndex"];
                globalQuestionList.push({
                                         "question": question,
                                         "firstAnswer": firstAnswer,
                                         "secondAnswer": secondAnswer,
                                         "thirdAnswer": thirdAnswer,
                                         "fourthAnswer": fourthAnswer,
                                         "correctAnswerIndex": correctAnswerIndex
                                         });
                addQuestionWithParams(question,firstAnswer,secondAnswer,thirdAnswer,fourthAnswer,correctAnswerIndex);
            }
        }
        console.log(globalQuestionList);
    });
}

function saveQuiz() {

    
    if(globalQuestionList.length == 0){
        alert("A quiz needs at least one question.");
        return;
    }
    sendQuizSave(globalQuestionList, function(response) {
        console.log(response);
    });
    alert("The quiz has been saved.");
    bURL = window.location.protocol + '//' + window.location.host + '/';
    window.location.href = bURL;
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
    globalQuestionList.push({
                             "question": question,
                             "firstAnswer": answerOne,
                             "secondAnswer": answerTwo,
                             "thirdAnswer": answerThree,
                             "fourthAnswer": answerFour,
                             "correctAnswerIndex": correctAnswer
                            });

    console.log(globalQuestionList);
    var quizHTML = Handlebars.templates.quiz2(quizContext);
    var questionSection = document.getElementById('quiz-create-holder');
    questionSection.insertAdjacentHTML('beforeend', quizHTML); 
    console.log("questionSection childnodes.length:" + questionSection.childNodes.length);
    var doc = null;
    for (var i = questionSection.childNodes.length-1; i >= 0; i--) {
        if (questionSection.childNodes[i].className == "question") {
            doc = questionSection.childNodes[i];
            break;
        }
    }
    var radioButtons = null;
    for (var i = 0; i < doc.childNodes.length; i++) {
        //console.log("nodes:" + doc.childNodes[i]);
        //console.log("node classname:" + doc.childNodes[i].className);
        if (doc.childNodes[i].className == "radio-buttons") {
            radioButtons = doc.childNodes[i];
            
            var questionHeader = null;
            var actualQuestionText = null;
            //console.log("radioButtons chilren:" + radioButtons.childNodes.length);
            for (var g = 0; g < radioButtons.childNodes.length; g++) {
                console.log("node classname:" + radioButtons.childNodes[g].className);
                if (radioButtons.childNodes[g].className == "questionTextHeader") {
                    questionHeader = radioButtons.childNodes[g];
                    
                    //console.log("!!!!questionHeader found!");
                    for (var h = 0; h < questionHeader.childNodes.length; h++) {
                        if (questionHeader.childNodes[h].className == "actualText") {
                            actualQuestionText = questionHeader.childNodes[h];
                            console.log("!!!!actualQuestionText found!");
                        }
                    }
                }
            }
            
            var closeButtonDiv = null;
            for (var a = 0; a < radioButtons.childNodes.length; a++) {
                if (radioButtons.childNodes[a].className == "close-button") {
                    closeButtonDiv = radioButtons.childNodes[a];
                    var closeButton = null;
                    for (var b = 0; b < closeButtonDiv.childNodes.length; b++) {
                        if (closeButtonDiv.childNodes[b].className == "close") {
                            closeButton = closeButtonDiv.childNodes[b];
                            //console.log("close actually found!");
                            closeButton.onclick= function()
                            {
                                var questionStatement = actualQuestionText.getAttribute("data-name");
                                loadJSON(function(response) {
                                    var actual_JSON = JSON.parse(response);
                                    var quizData = actual_JSON;
                                    var ourQuizData = quizData[quizID];
                                    if (ourQuizData) {
                                        //console.log("Found Quiz Data");
                                        // time to go through each question and tally up score
                                        var numQuestions = ourQuizData["quiz-array"].length;
                                        //console.log(numQuestions);
                                        
                                        var answerIndexes = [];
                                       
                                        for(var u = 0; u < numQuestions; u++){
                                            
                                            var currentQuestionName = ourQuizData["quiz-array"][u]["question"];
                                            console.log("currentQuestionName: " + currentQuestionName);
                                            console.log("questionStatement: " + questionStatement);
                                            if(currentQuestionName == questionStatement){
                                                console.log("Found correct index!!!!!!!!!!!!");
                                                globalQuestionList.splice(u, 1);
                                            }  
                                        }
                                    }
                                });
                                questionSection.removeChild(doc);
                            };
                        }
                    }
                }
            }
            break;
        }
        else
        {
            console.log("close failed!");
        }

    }
}

function addQuestionWithParams(question,answerOne,answerTwo,answerThree,answerFour,correctAnswer) {
	var quizContext = {
		question: question,
		firstAnswer: answerOne,
		secondAnswer: answerTwo,
		thirdAnswer: answerThree,
		fourthAnswer: answerFour
	};
    
    pathArr = window.location.pathname.split('/');

    var quizID = pathArr[3];

    var quizHTML = Handlebars.templates.quiz2(quizContext);
    var questionSection = document.getElementById('quiz-create-holder');
    questionSection.insertAdjacentHTML('beforeend', quizHTML); 
    
    console.log("questionSection childnodes.length:" + questionSection.childNodes.length);
    var doc = null;
    for (var i = questionSection.childNodes.length-1; i >= 0; i--) {
        if (questionSection.childNodes[i].className == "question") {
            doc = questionSection.childNodes[i];
            break;
        }
    }
    var radioButtons = null;
    for (var i = 0; i < doc.childNodes.length; i++) {
        //console.log("nodes:" + doc.childNodes[i]);
        //console.log("node classname:" + doc.childNodes[i].className);
        if (doc.childNodes[i].className == "radio-buttons") {
            radioButtons = doc.childNodes[i];
            
            var questionHeader = null;
            var actualQuestionText = null;
            //console.log("radioButtons chilren:" + radioButtons.childNodes.length);
            for (var g = 0; g < radioButtons.childNodes.length; g++) {
                console.log("node classname:" + radioButtons.childNodes[g].className);
                if (radioButtons.childNodes[g].className == "questionTextHeader") {
                    questionHeader = radioButtons.childNodes[g];
                    
                    //console.log("!!!!questionHeader found!");
                    for (var h = 0; h < questionHeader.childNodes.length; h++) {
                        if (questionHeader.childNodes[h].className == "actualText") {
                            actualQuestionText = questionHeader.childNodes[h];
                            console.log("!!!!actualQuestionText found!");
                        }
                    }
                }
            }
            
            
            var closeButtonDiv = null;
            for (var a = 0; a < radioButtons.childNodes.length; a++) {
                if (radioButtons.childNodes[a].className == "close-button") {
                    closeButtonDiv = radioButtons.childNodes[a];
                    var closeButton = null;
                    for (var b = 0; b < closeButtonDiv.childNodes.length; b++) {
                        if (closeButtonDiv.childNodes[b].className == "close") {
                            closeButton = closeButtonDiv.childNodes[b];
                            //console.log("close actually found!");
                            closeButton.onclick= function()
                            {
                                var questionStatement = actualQuestionText.getAttribute("data-name");
                                loadJSON(function(response) {
                                    var actual_JSON = JSON.parse(response);
                                    var quizData = actual_JSON;
                                    var ourQuizData = quizData[quizID];
                                    if (ourQuizData) {
                                        //console.log("Found Quiz Data");
                                        // time to go through each question and tally up score
                                        var numQuestions = ourQuizData["quiz-array"].length;
                                        //console.log(numQuestions);
                                        
                                        var answerIndexes = [];

                                        for(var u = 0; u < numQuestions; u++){
                                            
                                            var currentQuestionName = ourQuizData["quiz-array"][u]["question"];
                                            console.log("currentQuestionName: " + currentQuestionName);
                                            console.log("questionStatement: " + questionStatement);
                                            if(currentQuestionName == questionStatement){
                                                console.log("Found correct index!!!!!!!!!!!!");
                                                globalQuestionList.splice(u, 1);
                                            }  
                                        }
                                    }
                                });
                                questionSection.removeChild(doc);
                            };
                        }
                    }
                }
            }
            break;
        }
        else
        {
            console.log("close failed!");
        }

    }
	//}
}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '../../quizData.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
	  callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function sendQuizSave(globalQuestionList, callback) {   
    var xobj = new XMLHttpRequest();
    //xobj.overrideMimeType("application/json");

    pathArr = window.location.pathname.split('/');

    var quizID = pathArr[3];
    
    var requestBody = JSON.stringify({
      id: quizID,
      globalQuestionList: globalQuestionList
    });
    
    
    xobj.open('POST', '../../../../quizzes/quizSave');
    xobj.setRequestHeader(
      'Content-Type', 'application/json'
    );
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(requestBody);  
}
