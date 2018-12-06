var quizButton = document.getElementById('submit');
quizButton.addEventListener('click', endQuiz);

function endQuiz() {
	//var quizID = document.getElementById('get-id-text').value;
	//var studentName = document.getElementById('name-text').value;
    loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        var quizData = actual_JSON;
        
        var ourQuizData = quizData[quizID];
        
        if (ourQuizData) {
            // time to go through each question and tally up score
            var numQuestions = ourQuizData["quiz-array"].length
            console.log(numQuestions);
            
            var answerIndexes = [];
            
            var quizButton = document.getElementById('submit');
            quizButton.addEventListener('click', endQuiz);
            
            for(var i = 0; i < numQuestions; i++){
                var currentQuestionName = ourQuizData["quiz-array"][i]["question"];
                var inputs = document.getElementsByName(currentQuestionName);
                for(var b = 0; b < inputs.length; b++){
                    if(inputs[b].checked){
                        answerIndexes[i] = b;
                        break;
                    }
                    if(b == inputs.length-1){
                        // user hasn't answered this question yet
                        // give them an alert
                        alert("Please answer all questions before submitting your answers.");
                        return;
                    }
                }
                console.log(inputs);
            }
            console.log(answerIndexes);
            // send the answers to the server
            sendQuizData(function(response) {
                 console.log(response);
            }
            
            //var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes' + '/' + quizID;
            //window.location.href = quizURL;
        }
    });
}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '../quizData.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
	  callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function sendQuizData(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('POST', '/quizzes/name/postResponse', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

