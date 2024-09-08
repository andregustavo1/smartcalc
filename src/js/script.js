const result = document.getElementById('result');

function ruleOfThree() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const calc = (num2 * num3) / num1;

    if (isNaN(calc)) {
        result.textContent = 'X';
    } else {
        result.textContent = calc
    }
}

const darkBrowser = window.matchMedia("(prefers-color-scheme: dark)").matches;

const favicon = document.querySelector('link[rel="icon"]');

if (darkBrowser) {
    favicon.href = "/src/img/icon-white.svg";
} else {
    favicon.href = "/src/img/icon-black.svg";
}
