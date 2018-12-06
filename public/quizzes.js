let questionResults = [];

function getResults() {
    let questions = document.getElementsByClassName("question");
    console.log("Number of questions: " + questions.length);
    for (let i = 0; i < questions.length; i++) {
        let fieldset = questions[i];
        for (let j = 0; j < fieldset.length; j++) {
            let checkbox = fieldset[j];
            if (checkbox.value) {
                questionResults.push(j);
                break;
            }
        }
    }
}

document.getElementById("submit").onclick = function () {
    getResults();
};
    
