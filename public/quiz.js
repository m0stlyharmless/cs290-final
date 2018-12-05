let questionResults = [];

function getResults() {
    let fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.size; i++) {
        let fieldset = fieldsets[i];
        for (let j = 0; j < fieldset.size; j++) {
            let checkbox = fieldset[j];
            if (checkbox.value) {
                questionResults.push(j);
                break;
            }
        }
    }
}