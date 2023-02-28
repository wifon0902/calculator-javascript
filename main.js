



// Przypisanie zmiennych



const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number, .zero');

const operatorsButtons = document.querySelectorAll('.operator, .special');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

let result = '';



// Funkcje



function displayNumbers() {
        if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
        if(this.textContent === '.' && currentNumber.innerHTML === '' && previousNumber.innerHTML === '') return currentNumber.innerHTML = '0.0';
        if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

        if(currentNumber.innerHTML.length == 28) return;
        currentNumber.innerHTML += this.textContent;
}


function operate() {
        if(currentNumber.innerHTML === '' && this.textContent === '-') {
                currentNumber.innerHTML = '-';
                return;
        }

        else if(currentNumber.innerHTML === '') {
                return;
        }

        if(mathSign.innerHTML !== '') {
                showResult();
        }

        previousNumber.innerHTML = currentNumber.innerHTML;
        mathSign.innerHTML = this.textContent;
        currentNumber.innerHTML = '';
}


function showResult() {
        if(previousNumber.innerHTML === '') return;

        let a = Number(currentNumber.innerHTML);
        let b = Number(previousNumber.innerHTML);
        let sign = mathSign.innerHTML;

        switch(sign) {
                case '+':
                result = a + b;
                break;

                case '-':
                result = b - a;
                break;

                case '×':
                result = a * b;
                break;

                case '÷':
                result = (b/a);
                break;

                case '%':
                result = b/100;
                break;

                case 'x²':
                result = Math.pow(b, 2);
                break;
        }

        currentNumber.innerHTML = result;
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
}


function clearScreen() {
        currentNumber.innerHTML = '';
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
        result = '';
}



// Nasłuchiwanie przycisków



operatorsButtons.forEach((button) => button.addEventListener('click', operate));

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
    })




// Motywy



const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');
const sunIcon = document.querySelector('.toggle .bxs-sun');
const moonIcon = document.querySelector('.toggle .bx-moon');

toggle.addEventListener('change', () => {
        body.classList.toggle('dark');
        sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun"
        moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
})
