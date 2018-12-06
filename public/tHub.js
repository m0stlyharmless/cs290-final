var inputField = document.getElementById('id-text');
var createButton = document.getElementById('create-quiz');
var editButton = document.getElementById('edit-quiz');

createButton.addEventListener('click', createButtonPressed);
editButton.addEventListener('click', editButtonPressed);

//sURL = window.location.protocol + '//' + window.location.host + '/student-hub';
//tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub';
console.log(5 + 6);

function createButtonPressed() {
    quiz = inputField.value;
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
		}
	 });
}

function editButtonPressed() {
	quiz = inputField.value;
	console.log("QuizRequested = <" + quiz + ">");
    loadJSON(function(response) {
        // Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		quizData = actual_JSON;
		console.log(quizData);
		if (quizData[quiz]) {
			// Passed
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
