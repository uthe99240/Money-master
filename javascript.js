
function expense(component) {
    const cost = document.getElementById(component)

    if (isNaN(cost.value) || cost.value < 0) {
        return -1;
    }
    return cost.value;
}

function totalExpense() {
    let m = parseFloat(expense('food'));
    let sum = m;
    if (m < 0) {
        return -1;
    }
    m = parseFloat(expense('rent'));
    if (m < 0) {
        return m;
    }
    sum = sum + m;
    m = parseFloat(expense('clothes'));
    if (m < 0) {
        return m;
    }
    sum = sum + m;

    return sum;
}

function Income() {
    const income = document.getElementById('income');
    return income.value;
}

document.getElementById('calculate').addEventListener('click', function () {
    const expenses = parseFloat(totalExpense());
    const income = parseFloat(Income());
    if (expenses < 0) {
        // console.log('faisal');
        const validError = document.getElementById('notify-valid');
        validError.style.display = 'block';
        const expenseError = document.getElementById('notify-expense');
        expenseError.style.display = 'none';
    }
    else {
        if (income >= expenses) {
            const TotalExpense = document.getElementById("TotalExpense");
            TotalExpense.innerText = expenses;

            const Balance = document.getElementById("Balance");
            Balance.innerText = income - expenses;
            const validError = document.getElementById('notify-valid');
            validError.style.display = 'none';
            const expenseError = document.getElementById('notify-expense');
            expenseError.style.display = 'none';
        }
        else {
            const expenseError = document.getElementById('notify-expense');
            expenseError.style.display = 'block';
            const validError = document.getElementById('notify-valid');
            validError.style.display = 'none';
        }

    }

})

document.getElementById('saveButton').addEventListener('click', function () {
    const saveInput = document.getElementById('saveInput');
    const percentage = parseFloat(saveInput.value);

    const incomeValue = parseFloat(Income());
    const expenseValue = parseFloat(totalExpense());
    const amount = (percentage * incomeValue) / 100;

    if (incomeValue - (expenseValue + amount) >= 0) {
        const savingAmount = document.getElementById("savingAmount");
        savingAmount.innerText = amount;
        const remainingBalance = document.getElementById('remaining');
        remainingBalance.innerText = incomeValue - (expenseValue + amount);
        const savingError = document.getElementById('notify-saving');
        savingError.style.display = 'none';
    }
    else{
        const savingError = document.getElementById('notify-saving');
        savingError.style.display = 'block';
    }

})
