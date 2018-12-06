var addQuestionButton = document.getElementById('add-question');
addQuestionButton.addEventListener('click', addQuestion);

function addQuestion() {
	var question = document.getElementById('get-question').value;
	var answerOne = document.getElementById('get-question-one').value;
	var answerTwo = document.getElementById('get-question-two').value;
	var answerThree = document.getElementById('get-question-three').value;
	var answerFour = document.getElementById('get-question-four').value;
	var correctAnswer = document.getElementById('get-key').value;
	
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
