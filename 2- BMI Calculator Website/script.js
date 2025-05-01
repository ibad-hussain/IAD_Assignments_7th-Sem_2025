function calculateBMI() {
    const heightIn = parseFloat(document.getElementById("height").value);
    const weightLb = parseFloat(document.getElementById("weight").value);
    const resultElement = document.getElementById("result");

    if (isNaN(heightIn) || isNaN(weightLb) || heightIn <= 0 || weightLb <= 0) {
        resultElement.textContent = "Please enter valid height and weight.";
        return;
    }

    const bmi = (weightLb / (heightIn * heightIn)) * 703;

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultElement.textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}
