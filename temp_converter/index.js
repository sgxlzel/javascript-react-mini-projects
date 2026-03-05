const textInput = document.getElementById('text');
const Tofahrenheit = document.getElementById('Tofahrenheit');
const Tocelsius = document.getElementById('Tocelsius');
const result = document.getElementById('result');
let temp;

function convert() {
    
    if(Tofahrenheit.checked){
        // result.textContent = "you selected a c to f";
        temp = Number(textInput.value);
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is ${fahrenheit.toFixed(2)}°F`;

    }
    else if(Tocelsius.checked){
        // result.textContent = "you selected a f to c";
        temp = Number(textInput.value);
        let celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is ${celsius.toFixed(2)}°C`;

    }
    else{
        result.textContent = "select a unit";
    }
}