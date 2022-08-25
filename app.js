// https://calculator.swiftutors.com/cost-per-acquisition-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerAcquisitionRadio = document.getElementById('costPerAcquisitionRadio');
const totalAdvertisementCostRadio = document.getElementById('totalAdvertisementCostRadio');
const totalImpressionsRadio = document.getElementById('totalImpressionsRadio');
const clickThroughRateRadio = document.getElementById('clickThroughRateRadio');
const conversionRateRadio = document.getElementById('conversionRateRadio');

let costPerAcquisition;
let totalAdvertisementCost = v1;
let totalImpressions = v2;
let clickThroughRate = v3;
let conversionRate = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

costPerAcquisitionRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Advertisement Cost ($)';
  variable2.textContent = 'Total Impressions';
  variable3.textContent = 'Click Through Rate (%)';
  variable4.textContent = 'Conversion Rate (%)';
  totalAdvertisementCost = v1;
  totalImpressions = v2;
  clickThroughRate = v3;
  conversionRate = v4;
  result.textContent = '';
});

totalAdvertisementCostRadio.addEventListener('click', function() {
  variable1.textContent = '(CPA) Cost Per Acquisition ($)';
  variable2.textContent = 'Total Impressions';
  variable3.textContent = 'Click Through Rate (%)';
  variable4.textContent = 'Conversion Rate (%)';
  costPerAcquisition = v1;
  totalImpressions = v2;
  clickThroughRate = v3;
  conversionRate = v4;
  result.textContent = '';
});

totalImpressionsRadio.addEventListener('click', function() {
  variable1.textContent = '(CPA) Cost Per Acquisition ($)';
  variable2.textContent = 'Total Advertisement Cost ($)';
  variable3.textContent = 'Click Through Rate (%)';
  variable4.textContent = 'Conversion Rate (%)';
  costPerAcquisition = v1;
  totalAdvertisementCost = v2;
  clickThroughRate = v3;
  conversionRate = v4;
  result.textContent = '';
});

clickThroughRateRadio.addEventListener('click', function() {
  variable1.textContent = '(CPA) Cost Per Acquisition ($)';
  variable2.textContent = 'Total Advertisement Cost ($)';
  variable3.textContent = 'Total Impressions';
  variable4.textContent = 'Conversion Rate (%)';
  costPerAcquisition = v1;
  totalAdvertisementCost = v2;
  totalImpressions = v3;
  conversionRate = v4;
  result.textContent = '';
});

conversionRateRadio.addEventListener('click', function() {
  variable1.textContent = '(CPA) Cost Per Acquisition ($)';
  variable2.textContent = 'Total Advertisement Cost ($)';
  variable3.textContent = 'Total Impressions';
  variable4.textContent = 'Click Through Rate (%)';
  costPerAcquisition = v1;
  totalAdvertisementCost = v2;
  totalImpressions = v3;
  clickThroughRate = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerAcquisitionRadio.checked)
    result.textContent = `Cost Per Acquisition = ${computeCostPerAcquisition().toFixed(2)} $`;

  else if(totalAdvertisementCostRadio.checked)
    result.textContent = `Total Advertisement Cost = ${computeTotalAdvertisementCost().toFixed(2)} $`;

  else if(totalImpressionsRadio.checked)
    result.textContent = `Total Impressions = ${computeTotalImpressions().toFixed(2)}`;

  else if(clickThroughRateRadio.checked)
    result.textContent = `Click Through Rate = ${computeClickThroughRate().toFixed(2)} %`;

  else if(conversionRateRadio.checked)
    result.textContent = `Conversion Rate = ${computeConversionRate().toFixed(2)} $`;
})

// calculation

function computeCostPerAcquisition() {
  return Number(totalAdvertisementCost.value) / (Number(totalImpressions.value) * (Number(clickThroughRate.value) / 100) * (Number(conversionRate.value) / 100));
}

function computeTotalAdvertisementCost() {
  return Number(costPerAcquisition.value) * Number(totalImpressions.value) * (Number(clickThroughRate.value) / 100) * (Number(conversionRate.value) / 100);
}

function computeTotalImpressions() {
  return Number(totalAdvertisementCost.value) / (Number(costPerAcquisition.value) * (Number(clickThroughRate.value) / 100) * (Number(conversionRate.value) / 100));
}

function computeClickThroughRate() {
  return (Number(totalAdvertisementCost.value) / (Number(totalImpressions.value) * Number(costPerAcquisition.value) * (Number(conversionRate.value) / 100))) * 100;
}

function computeConversionRate() {
  return (Number(totalAdvertisementCost.value) / (Number(totalImpressions.value) * (Number(clickThroughRate.value) / 100) * Number(costPerAcquisition.value))) * 100;
}