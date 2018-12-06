var inputField = document.getElementById('id-text');
var createButton = document.getElementById('create-quiz');
var editButton = document.getElementById('edit-quiz');

createButton.addEventListener('click', createButtonPressed);
editButton.addEventListener('click', editButtonPressed);


//tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub';
console.log(5 + 6);

function createButtonPressed() {
    quiz = inputField.value;
    if(quiz == ""){
        alert("Please enter a valid ID");
        return;
    }
    console.log("QuizRequested = <" + quiz + ">");
    loadJSON(function(response) {
        // Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		quizData = actual_JSON;
		console.log(quizData);
		if (quizData[quiz]) {
			alert("This quiz ID is already in use. Consider editting this quiz.");
		}
		else
		{
			// Passed
            var tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub/create-quiz/'+inputField.value;
            window.location.href = tURL;
		}
	 });
}

function editButtonPressed() {
	quiz = inputField.value;
    if(quiz == ""){
        alert("Please enter a valid ID");
        return;
    }
	console.log("QuizRequested = <" + quiz + ">");
    loadJSON(function(response) {
        // Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		var quizData = actual_JSON;
		console.log(quizData);
		if (quizData[quiz]) {
			// Passed
            var tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub/create-quiz/'+inputField.value;
            window.location.href = tURL;
		}
		else
		{
			alert("This quiz ID doesn't exist yet. Consider creating this quiz.");
		}
	 });
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
