document.addEventListener("DOMContentLoaded", function() {
    const container = document.createElement("div");
    container.style.width = "250px";
    container.style.backgroundColor = "black";
    container.style.padding = "10px";
    container.style.borderRadius = "10px";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(4, 1fr)";
    container.style.gap = "5px";
    document.body.appendChild(container);
    
    const display = document.createElement("div");
    display.textContent = "0";
    display.style.gridColumn = "span 4";
    display.style.backgroundColor = "gray"; // Alterado para cinza
    display.style.color = "white";
    display.style.textAlign = "right";
    display.style.padding = "20px";
    display.style.fontSize = "2em";
    display.style.borderRadius = "5px"; // Adicionado um leve arredondamento
    container.appendChild(display);
    
    const buttons = [
        ["AC", "+/-", "%", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ",", "="]
    ];
    
    let currentInput = "0";
    let operator = "";
    let previousInput = "";
    let shouldResetDisplay = false;
    let maxDigits = 10;
    
    buttons.flat().forEach(text => {
        if (text !== "") {
            const button = document.createElement("button");
            button.textContent = text;
            button.style.fontSize = "1.5em";
            button.style.padding = "15px";
            button.style.borderRadius = "50%";
            button.style.border = "none";
            button.style.cursor = "pointer";
            button.style.backgroundColor = ["+", "-", "*", "/", "="].includes(text) ? "orange" : ["AC", "+/-", "%"].includes(text) ? "gray" : "darkgray";
            button.style.color = "white";
            if (text === "0") {
                button.style.gridColumn = "span 2"; // O botão "0" ocupa duas colunas
                button.style.borderRadius = "25px"; // Bordas mais suaves para um retângulo
            }
            button.addEventListener("click", () => handleButtonClick(text));
            container.appendChild(button);
        }
    });
    
    function handleButtonClick(value) {
        if (!isNaN(value) || value === ",") {
            if (shouldResetDisplay || currentInput === "0") {
                currentInput = value === "," ? "0," : "";
                shouldResetDisplay = false;
            }
            if (!(value === "," && currentInput.includes(",")) && currentInput.length < maxDigits) {
                currentInput += value;
            }
            display.textContent = currentInput;
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (operator && previousInput) {
                currentInput = eval(previousInput.replace(",", ".") + operator + currentInput.replace(",", ".")).toString().replace(".", ",");
            }
            previousInput = currentInput;
            operator = value;
            shouldResetDisplay = true;
        } else if (value === "=") {
            if (previousInput && operator) {
                currentInput = eval(previousInput.replace(",", ".") + operator + currentInput.replace(",", ".")).toString().replace(".", ",");
                if (currentInput.length > maxDigits) {
                    currentInput = parseFloat(currentInput).toExponential(4).replace(".", ",");
                }
                display.textContent = currentInput;
                operator = "";
                previousInput = "";
            }
        } else if (value === "AC") {
            currentInput = "0";
            operator = "";
            previousInput = "";
            display.textContent = "0";
        } else if (value === "+/-") {
            currentInput = (parseFloat(currentInput.replace(",", ".")) * -1).toString().replace(".", ",");
            display.textContent = currentInput;
        } else if (value === "%") {
            currentInput = (parseFloat(currentInput.replace(",", ".")) / 100).toString().replace(".", ",");
            display.textContent = currentInput;
        }
    }
});
