let questionResults = [];

function getResults() {
    let questions = document.getElementsByClassName("answers");
    console.log("Number of questions: " + questions.length);
    for (let question in questions) {
        console.log("question: " + question.valueOf());
    }
}

document.getElementById("submit").onclick = function () {
    getResults();
    console.log("Question results: " + questionResults.length);
};
    
