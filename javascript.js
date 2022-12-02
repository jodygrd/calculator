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

function operate(num1, num2, operator){
    if (operator == "*"){
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else if (operator == "+") {
        return add(num1, num2)
    } else if (operator == "-") {
        return subtract(num1, num2)
    } else {
        display == "OOPS"
    }
}


//VARIABLES
let display = ""
let num1;
let num2;
let operand;

//NUMBERS
let numbers = document.querySelectorAll(".number")
numbers.forEach(number => 
    number.addEventListener('click', (e) => {
        display = display + e.target.innerText;
        document.getElementById("display").innerText = display;
    })
)

//OPERATIONS
let operators = document.querySelectorAll(".operation")
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        //if an operator is clicked, make what's currently displayed, num1
            //clear the display
            //make the operator the operand
        if (!operand) {
            console.log(parseInt(display));
            num1 = parseInt(display);

            operand = e.target.innerText;
            console.log(e.target.innerText);    

            display = "";
            document.getElementById("display").innerText = display;
        } else {
            //when another operator is clicked, make what's currently displayed num 2
            //run operate
            //display the answer 
            num2 = parseInt(display);
            console.log(num2);
            display = operate(num1, num2, operand);
            console.log(display);
            document.getElementById("display").innerText = display;
            //reset
        }
    })
})


//CLEAR
document.querySelector("#clear").addEventListener('click', function(){
    num1 = "";
    num2 = "";
    operand = "";
    display = "";
    document.getElementById("display").innerText = display;
})