function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "can't divide by 0";
    }
    return Math.round(num1 / num2 * 1000000000) / 1000000000;
}

let num1 = null;
let operator = null;
let num2 = null;

let displayValue = "";

const screen = document.querySelector("#screen");
const screenDisplay = document.createElement("span");
screenDisplay.textContent = displayValue;
screen.appendChild(screenDisplay);

const container = document.querySelector("#container");

let newNumber;

let answer = null;
container.addEventListener("click", (event) => {
    let target = event.target;

    console.log("answer: " + answer);

    console.log("num1: " + num1);
    console.log("op: " + operator);
    if (newNumber && operator != null) {
        displayValue = "";
        newNumber = false;
    }
    switch (target.className) {
        case "1":
            displayValue += "1";
            break;

        case "2":
            displayValue += "2";
            break;

        case "3":
            displayValue += "3";
            break;

        case "4":
            displayValue += "4";
            break;

        case "5":
            displayValue += "5";
            break;

        case "6":
            displayValue += "6";
            break;

        case "7":
            displayValue += "7";
            break;

        case "8":
            displayValue += "8";
            break;

        case "9":
            displayValue += "9";
            break;

        case "0":
            displayValue += "0";
            break;

        case "+":
            if (num1 === null) {
                num1 = parseFloat(displayValue);
            } else if (num2 === null) {
                num2 = parseFloat(displayValue);
                displayValue = operate(operator, num1, num2);
                num1 = displayValue;
                num2 = null;
            } else {
                num2 = null;
            }
            
            operator = "+";
            newNumber = true;
            break;

        case "-":
            if (num1 === null) {
                num1 = parseFloat(displayValue);
            } else if (num2 === null) {
                num2 = parseFloat(displayValue);
                displayValue = operate(operator, num1, num2);
                num1 = displayValue;
                num2 = null;
            } else {
                num2 = null;
            }
            
            operator = "-";
            newNumber = true;
            break;

        case "*":
            if (num1 === null) {
                num1 = parseFloat(displayValue);
            } else if (num2 === null) {
                num2 = parseFloat(displayValue);
                displayValue = operate(operator, num1, num2);
                answer = displayValue;
                num1 = displayValue;
                num2 = null;
            } else {
                num2 = null;
            }
            
            operator = "*";
            newNumber = true;
            break;

        case "/":
            if (num1 === null) {
                num1 = parseFloat(displayValue);
            } else if (num2 === null) {
                num2 = parseFloat(displayValue);
                displayValue = operate(operator, num1, num2);
                num1 = displayValue;
                num2 = null;
            } else {
                num2 = null;
            }
            
            operator = "/";
            newNumber = true;
            break;

        case "clear":
            displayValue = "";
            screenDisplay.textContent = "";
            answer = null;
            num1 = null;
            num2 = null;
            operator = null;
            break;

        case "equal":
            if (num2 === null) num2 = parseFloat(displayValue);

            displayValue = operate(operator, num1, num2);
            answer = displayValue;
            num1 = answer;
            newNumber = true;
            operator = null;
            break;

        default:
            // do nothing;
    }

    if (screenDisplay.textContent.length < 15 || displayValue === "" || displayValue <= 15) {
        screenDisplay.textContent = displayValue;
    } else {
        displayValue = screenDisplay.textContent;
    }

    if (answer != null) {
        if (answer > 999999999999999) {
            answer = answer.toExponential(4);
        }
        screenDisplay.textContent = answer;
    }
    answer = null;

    screen.appendChild(screenDisplay);
});

function operate(operator, num1, num2) {
    let answer;
    switch (operator) {
        case "+":
            answer = add(num1, num2);
            break;
        case "-":
            answer = subtract(num1, num2);
            break;
        case "*":
            answer = multiply(num1, num2);
            break;
        case "/":
            answer = divide(num1, num2);
            break;
        default:
            alert("Unrecognized operator!");
    }

    return answer;
}
