var quizButton = document.getElementById('start-quiz');
quizButton.addEventListener('click', startQuiz);

function startQuiz() {
	var quizID = document.getElementById('get-id-text').value;
	var studentName = document.getElementById('name-text').value;
    loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        var quizData = actual_JSON;
        if (quizData[quizID]) {
            //var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes' + '/' + quizID;// + '/' + studentName;
            var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes/id/' + quizID + '/name/' + studentName;
            //var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes' + '?id=' + quizID + '&name=' + studentName;
            //var quizURL = window.location.protocol + '//' + window.location.host + '/quizzes' + '/' + {"id":quizID, "name", studentName};
            window.location.href = quizURL;
        }//http://localhost/articles?year=2016&month=1&day=19
        else
        {
            alert("This quiz ID doesn't exist. See your system administrator for assistance.");
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
