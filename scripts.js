function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, operator, n2) {
    let sum = 0;

    if(operator === "+") {
        sum = add(n1, n2);
        return sum;
    } else if(operator === "-"){
        sum = subtract(n1, n2);
        return sum;
    } else if(operator === "*"){
        sum = multiply(n1, n2);
        return sum;
    } else if(operator === "/"){
        sum = divide(n1, n2);
        return sum;
    }
}

// let zero = document.getElementById("zero").addEventListener("click", populateDisplay);






document.querySelectorAll("button").forEach(el => {
    el.addEventListener('click', () => {
        digit_pressed(el.textContent);
    });
});

function digit_pressed(digit) {
    document.getElementById("numbers").innerHTML = digit;
}
