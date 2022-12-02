//OPERATIONS
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(num1, operator, num2){
    if (operator == "*"){
        multiply(num1, num2);
    } else if (operator == "/") {
        divide(num1, num2);
    } else if (operator == "+") {
        add(num1, num2)
    } else if (operator == "-") {
        subtract(num1, num2)
    } else {
        display == "OOPS"
    }
}


let display = "80085"


let numbers = document.querySelectorAll(".number")
numbers.forEach(number => 
    number.addEventListener('click', (e) => {
        display = e.target.innerText;
        document.getElementById("display").innerText = display;
    })
)

