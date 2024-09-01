let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteDigit() {
  currentInput = currentInput.trim().slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/')).toString();
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}