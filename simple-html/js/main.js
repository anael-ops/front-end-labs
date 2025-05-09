const calc = (a, b, operacao) => {
    return operacao === "+" ? a + b
        : operacao === "-" ? a - b
        : operacao === "*" ? a * b
        : operacao === "/" ? a / b
        : "Operação inválida";
};

const calcCase = (a, b, operacao) => {
    if (b === 0 && operacao === "/"){
        return "Não há divisão por zero!";
    }
    else{
    switch(operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operação Inválida";
        }
    }
};