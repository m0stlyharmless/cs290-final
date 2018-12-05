let questionResults = [];

function getResults() {
    alert("Getting results...");
    let questions = document.getElementsByClassName("question");
    for (let i = 0; i < questions.size; i++) {
        let fieldset = questions[i];
        for (let j = 0; j < fieldset.size; j++) {
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
    
