var inputField = document.getElementById('id-text');
var createButton = document.getElementById('create-quiz');
var editButton = document.getElementById('edit-quiz');

createButton.addEventListener('click', createButtonPressed);
editButton.addEventListener('click', editButtonPressed);

sURL = window.location.protocol + '//' + window.location.host + '/student-hub';
tURL = window.location.protocol + '//' + window.location.host + '/teacher-hub';


function createButtonPressed() {
	//alert("This quiz ID is already in use. Consider editting this quiz.");
	//window.location.href = sURL;
}

function editButtonPressed() {
	//alert("This quiz ID doesn't exist yet. Consider creating this quiz.");
	//window.location.href = tURL;
}
