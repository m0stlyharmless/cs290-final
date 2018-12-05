var quizButton = document.getElementById('start-quiz');
quizButton.addEventListener('click', startQuiz);

function startQuiz() {
	var quizID = document.getElementById('get-id-text').value;
	var studentName = document.getElementById('name-text').value;
	var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes' + '/' + quizID;
	window.location.href = quizURL;
}
