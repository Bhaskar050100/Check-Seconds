let buttonEl = document.getElementById("convertBtn");
let hoursInput = document.getElementById("hoursInput");
let minInput = document.getElementById("minutesInput");
let errorMsgEl = document.getElementById("errorMsg");
let resultCont = document.getElementById("timeInSeconds");

let resultLine = document.createElement("span");
resultCont.appendChild(resultLine)

function getResult() {
    let hoursInputValue = hoursInput.value;
    let minInputValue = minInput.value;
    if (hoursInputValue === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minInputValue === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else {
        let hours = parseInt(hoursInputValue);
        let mins = parseInt(minInputValue)

        let result = hours * 3600 + mins * 60
        resultLine.textContent = result + "s"
        resultLine.classList.add("sec-btn")
        errorMsgEl.textContent = ""
        errorMsgEl.textContent = ""
    }
}
buttonEl.addEventListener("click", getResult)