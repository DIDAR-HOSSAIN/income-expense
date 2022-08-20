
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

// document.getElementById('save-button').addEventListener('click', function(){
//     const savings = document.getElementById('')
// })

