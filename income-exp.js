
document.getElementById('calculate-id').addEventListener('click', function(){
const incomeField = document.getElementById('income-id');
const incomeVal = incomeField.value;
const incomeValStringToFloat = incomeVal;
    

const foodExp = document.getElementById('food-id');
const foodVal = foodExp.value;
const foodValStringToFlot = parseFloat(foodVal);
// console.log(foodValStringToFlot);

const rentExp = document.getElementById('rent-id');
const rentVal = rentExp.value;
const rentValStringToFlot = parseFloat(rentVal);
// console.log(rentValStringToFlot);

const clothExp = document.getElementById('cloth-id');
const clothVal = clothExp.value;
const clothValStringToFlot = parseFloat(clothVal);
// console.log(clothValStringToFlot);

// Total Expense
const totalExp = document.getElementById('total-exp-id');
const allExpItems = foodValStringToFlot + rentValStringToFlot + clothValStringToFlot;
totalExp.innerText = allExpItems;

// Total Balance
const totalBal = document.getElementById('balance-id');
const allExp = foodValStringToFlot + rentValStringToFlot + clothValStringToFlot;
const expBal = incomeValStringToFloat - allExp;
totalBal.innerText = expBal;

// console.log(foodValStringToFlot + rentValStringToFlot + clothValStringToFlot);

})

document.getElementById('save-button').addEventListener('click', function(){
    // incomeField
    const savings = document.getElementById('income-id');
    const incomeVal = savings.value;
    const stringToFlot = parseFloat(incomeVal);

    // Percent or Saving field Calculation
    const savingsPercent = document.getElementById('save-id');
    const savingsVal = savingsPercent.value;
    const stringToFloatSavings = savingsVal;
    const savingResult = stringToFlot / 100;
    const percentCalculate = savingResult*stringToFloatSavings;

    const savingsAmount = document.getElementById('savings-amount');
    // const savingAmountVal = savingsAmount.innerText;
    // const stringSavingAmount = 
    savingsAmount.innerText = percentCalculate;

    const remainingBal = document.getElementById('remaining-balance');
    // const remainDeduct = remainingBal.innerText;
    const remainTotal = totalBal - savingsAmount;
    remainingBal.innerText = remainTotal;


    console.log(remainingBal);
})

