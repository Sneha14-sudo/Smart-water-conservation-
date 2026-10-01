const gallonsInput = document.getElementById('gallons');
const reductionInput = document.getElementById('reduction');
const costInput = document.getElementById('cost');
const resultAmount = document.getElementById('resultAmount');
const resultText = document.getElementById('resultText');

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function updateCalculation() {
  const gallons = Number(gallonsInput.value) || 0;
  const reduction = Number(reductionInput.value) || 0;
  const costPer1000 = Number(costInput.value) || 0;

  const reducedGallons = gallons * (reduction / 100);
  const monthlyGallons = reducedGallons * 30;
  const monthlySavings = (monthlyGallons / 1000) * costPer1000;

  resultAmount.textContent = formatCurrency(monthlySavings);
  resultText.textContent = `You could conserve approximately ${Math.round(monthlyGallons).toLocaleString()} gallons per month.`;
}

[gallonsInput, reductionInput, costInput].forEach((input) => {
  input.addEventListener('input', updateCalculation);
});

updateCalculation();

