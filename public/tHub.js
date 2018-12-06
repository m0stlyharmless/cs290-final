var inputField = document.getElementById('id-text');
var createButton = document.getElementById('create-quiz');
var editButton = document.getElementById('edit-quiz');

createButton.addEventListener('click', createButtonPressed);
editButton.addEventListener('click', editButtonPressed);

//sURL = window.location.protocol + '//' + window.location.host + '/student-hub';
//tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub';
console.log(5 + 6);

function createButtonPressed() {
	
	//alert("This quiz ID is already in use. Consider editting this quiz.");
	//window.location.href = sURL;
}

function editButtonPressed() {
	quiz = inputField.value;
	console.log("QuizRequested = <" + quiz + ">");
	//console.log(loadJSON());
	quizData = {};
	 //JSON.parse(loadJSON("quizData"));
	 
	 loadJSON(function(response) {
	  // Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		quizData = actual_JSON;
		console.log(quizData);
		if (quizData[quiz]) {
			alert("Passed");
		}
		else
		{
			alert("This quiz ID doesn't exist yet. Consider creating this quiz.");
		}
	 });
	 
	//quizData = loadJSON();
	console.log(quizData);
	
	//window.location.href = tURL;
}

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'quizData.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
	  //console.log ("Response: " + xobj.responseText);
	  //console.log(JSON.parse(xobj.responseText));
      //return JSON.parse(xobj.responseText);
	  callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}
