function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = -parseFloat(display.value);
    }
}

function calculatePercentage() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}

function backspace() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    if (currentValue !== "") {
        display.value = currentValue.slice(0, -1);
    }
}

function calculateSquare() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

function calculateLogarithm() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.log10(parseFloat(display.value));
    }
}
function calculateCube() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.pow(parseFloat(display.value), 3);
    }
}

function calculateCubeRoot() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.cbrt(parseFloat(display.value));
    }
}

function calculateFactorial() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        const n = parseFloat(display.value);
        if (Number.isInteger(n) && n >= 0) {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            display.value = result;
        } else {
            display.value = "Error";
        }
    }
}

function calculateSin() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.sin(parseFloat(display.value));
    }
}

function calculateCos() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.cos(parseFloat(display.value));
    }
}

function calculateTan() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = Math.tan(parseFloat(display.value));
    }
}



