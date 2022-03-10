const firstNumber = document.getElementById("firstNum");
const secondNumber = document.getElementById("secondNum");
const inputNumber = document.getElementById("input");
const message = document.getElementById("message");
const button = document.getElementById("btn");

let randomNum = Math.floor(Math.random() * 10);
let randomNum2 = Math.floor(Math.random() * 10);
let sum = randomNum + randomNum2;

function firstDiv() {
    firstNumber.innerHTML = randomNum;

}

function secondDiv() {
    secondNumber.innerHTML = randomNum2;
}

function divSum() {
    if (sum == input.value) {
        message.innerHTML = "Correct";
    } else {
        message.innerHTML = `The correct answer is: ${sum}`;
    }

    if (input.value == "") {
        message.innerHTML = "You have to fill input field";
    }
}

button.addEventListener("click", divSum);

firstDiv();
secondDiv();