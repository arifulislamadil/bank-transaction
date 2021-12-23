function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    let inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //Clerar input field
    inputField.value = "";
    return amountValue;
}

function updateAmount(totalFieldId, depositeParseFloat,) {
    let totalElement = document.getElementById(totalFieldId);
    const previousDepositAmount = totalElement.innerText;
    const depositeAmountParseFloat = parseFloat(previousDepositAmount);
    const newAmount = depositeAmountParseFloat + depositeParseFloat;
    totalElement.innerText = newAmount;
}

function getCurrentBalance() {
    let balance = document.getElementById("balance-amount");
    const balanceAmountText = balance.innerText;
    const balanceAmountParseFloat = parseFloat(balanceAmountText);
    return balanceAmountParseFloat;
}

function updateBalance(depositeParseFloat, isAdd) {
    let balance = document.getElementById("balance-amount");
    // const balanceAmountText = balance.innerText;
    // const balanceAmountParseFloat = parseFloat(balanceAmountText)
    const balanceAmountParseFloat = getCurrentBalance()
    if (isAdd == true) {
        balance.innerText = balanceAmountParseFloat + depositeParseFloat;
    } else {
        balance.innerText = balanceAmountParseFloat - depositeParseFloat;
    }
}



document.getElementById("deposite-btn").addEventListener("click", function () {
    //Update deposite input 

    // const depositeField = document.getElementById("deposit-input");
    // let depositeAmount = depositeField.value;
    // const depositeParseFloat = parseFloat(depositeAmount);


    //get and update deposite total
    // let deposite = document.getElementById("deposite-amount");
    // const previousDepositAmount = deposite.innerText;
    // const depositeAmountParseFloat = parseFloat(previousDepositAmount);
    // const newAmount = depositeAmountParseFloat + depositeParseFloat;
    // deposite.innerText = newAmount;


    //Update account balance
    // let balance = document.getElementById("balance-amount");
    // const balanceAmountText = balance.innerText;
    // const balanceAmountParseFloat = parseFloat(balanceAmountText)
    // const newBalance = balanceAmountParseFloat + depositeParseFloat;
    // balance.innerText = newBalance;
    const depositeParseFloat = getInputValue("deposit-input");

    if (depositeParseFloat > 0) {
        const updateTotalField = updateAmount("deposite-amount", depositeParseFloat)
        updateBalance(depositeParseFloat, true)
    }


});



//Update withdraw Balance

document.getElementById("withdraw-btn").addEventListener("click", function () {
    // const withdrawField = document.getElementById("withdraw-input");
    // let withdrawValue = withdrawField.value;
    // const withdrawParseFloat = parseFloat(withdrawValue);


    //Get and update withdraw total
    // const withdrawAmount = document.getElementById("withdraw-amount");
    // const withdrawText = withdrawAmount.innerText;
    // const withdrawAmountParseFloat = parseFloat(withdrawText);
    // const newWithdrawBalance = withdrawAmountParseFloat + withdrawFunc;
    // withdrawAmount.innerText = newWithdrawBalance;


    //withdraw update
    // let balanceTotal = document.getElementById("balance-amount");
    // const balanceText = balanceTotal.innerText;
    // const balanceParseFloat = parseFloat(balanceText);
    // const newBalanceTotal = balanceParseFloat - withdrawFunc;
    // balanceTotal.innerText = newBalanceTotal;
    const withdrawFunc = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawFunc > 0 && withdrawFunc < currentBalance) {
        const withdrawTotalField = updateAmount("withdraw-amount", withdrawFunc);
        updateBalance(withdrawFunc, false)
    }

    if (withdrawFunc > currentBalance) {
        alert("You can't withdraw moren then you saving balance")
    }

});

