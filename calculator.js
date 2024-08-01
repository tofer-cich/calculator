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

let num1;
let operator;
let num2;

let displayValue = "";

const screen = document.querySelector("#screen");
const screenDisplay = document.createElement("span");
screenDisplay.textContent = displayValue;
screen.appendChild(screenDisplay);

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target.className);

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
            alert("+");
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
            num1 = null;
            num2 = null;
            break;
        case "equal":
            alert("equal");
            break;
        default:
            alert("nothing");
    }
    if (screenDisplay.textContent.length < 15) {
        screenDisplay.textContent += displayValue;
    }
    if (displayValue === "") {
        screenDisplay.textContent = displayValue;
    }
    screen.appendChild(screenDisplay);
});

// addEventListener that uses switch case to get the button pushed.
// It changes the textContent to display the bumber selected.

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

console.log(operate("-", 5, 2));