function convertDistance() {
    const value = parseFloat(document.getElementById("distance").value);
    const conversionType = document.getElementById("conversionType").value;
    const resultElement = document.getElementById("result");

    if (isNaN(value)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let result;

    if (conversionType === "inToCm") {
        result = value * 2.54;
        resultElement.textContent = `${value} inches = ${result.toFixed(2)} centimeters`;
    } else {
        result = value / 2.54;
        resultElement.textContent = `${value} centimeters = ${result.toFixed(2)} inches`;
    }
}
