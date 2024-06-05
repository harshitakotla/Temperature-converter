function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;

    if (isNaN(temp)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
    }

    document.getElementById('result').innerText = 
        `Celsius: ${celsius.toFixed(2)}°C\nFahrenheit: ${fahrenheit.toFixed(2)}°F\nKelvin: ${kelvin.toFixed(2)}K`;
}
