function calculateRisk() {

    const balance = parseFloat(document.getElementById("balance").value);
    const riskPercent = parseFloat(document.getElementById("riskPercent").value);
    const stopLoss = parseFloat(document.getElementById("stopLoss").value);

    if (!balance || !riskPercent || !stopLoss) {
        document.getElementById("result").innerHTML =
            "Please fill all fields.";
        return;
    }

    const riskAmount = balance * (riskPercent / 100);
    const positionSize = riskAmount / stopLoss;

    document.getElementById("result").innerHTML = `
        <strong>Results</strong><br><br>
        Risk Amount: $${riskAmount.toFixed(2)}<br>
        Position Size: ${positionSize.toFixed(2)} units
    `;
}