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
    return num1 / num2;
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
let answer = null;
container.addEventListener("click", (event) => {
    let target = event.target;
    displayValue = "";

    if (answer !== null && answer === num1) {
        screenDisplay.textContent = "";
        answer = null;
    }
    switch (target.className) {
        case "1":
            displayValue = "1";
            break;

        case "2":
            displayValue = "2";
            break;

        case "3":
            displayValue = "3";
            break;

        case "4":
            displayValue = "4";
            break;

        case "5":
            displayValue = "5";
            break;

        case "6":
            displayValue = "6";
            break;

        case "7":
            displayValue = "7";
            break;

        case "8":
            displayValue = "8";
            break;

        case "9":
            displayValue = "9";
            break;

        case "0":
            displayValue = "0";
            break;

        case "+":
            console.log(`num1: ${num1},  num2: ${num2}`);
            if (screenDisplay.textContent.length === 0) {
                break;
            } else if (num1 === null) {
                num1 = parseInt(screenDisplay.textContent);
                screenDisplay.textContent = "";
                operator = "+";
            } else  {
                // operate and add to screen
                num2 = parseInt(screenDisplay.textContent);
                num1 = operate(operator, num1, num2);
                answer = num1;
                screenDisplay.textContent = num1;
                operator = "+";
            } 
            break;

        case "-":
            alert("-");
            break;

        case "*":
            alert("*");
            break;

        case "/":
            alert("/");
            break;

        case "clear":
            displayValue = "";
            screenDisplay.textContent = "";
            num1 = null;
            num2 = null;
            break;

        case "equal":
            if (num2 === null) {
                num2 = parseInt(screenDisplay.textContent);
            }

            screenDisplay.textContent = operate(operator, num1, num2);
            num1 = null;
            num2 = null;
            break;

        default:
            alert("nothing");
    }

    if (screenDisplay.textContent.length < 15) {
        screenDisplay.textContent += displayValue;
    }

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
