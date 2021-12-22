document.getElementById("deposite-btn").addEventListener("click", function () {
    //Update deposite amount
    const depositeField = document.getElementById("deposit-input");
    let depositeAmount = depositeField.value;
    let deposite = document.getElementById("deposite-amount");
    const previousDepositAmount = deposite.innerText;
    const newAmount = parseFloat(previousDepositAmount) + parseFloat(depositeAmount);
    deposite.innerText = newAmount;

    //Update account balance
    let balance = document.getElementById("balance-amount");
    const priviousBalanceAmount = balance.innerText;
    const newBalance = parseFloat(priviousBalanceAmount) + parseFloat(depositeAmount);
    balance.innerText = newBalance;

    depositeField.value = "";
});



//Update withdraw Balance

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-input");
    let withdrawValue = withdrawField.value;
    const withdrawParseFloat = parseFloat(withdrawValue);

    const withdrawAmount = document.getElementById("withdraw-amount");
    const withdrawText = withdrawAmount.innerText;
    const withdrawAmountParseFloat = parseFloat(withdrawText);

    const newWithdrawBalance = withdrawAmountParseFloat + withdrawParseFloat;
    withdrawAmount.innerText = newWithdrawBalance;

    //Balance update
    let balanceTotal = document.getElementById("balance-amount");
    const balanceText = balanceTotal.innerText;
    const balanceParseFloat = parseFloat(balanceText);
    const newBalanceTotal = balanceParseFloat - withdrawParseFloat;
    balanceTotal.innerText = newBalanceTotal;

    withdrawField.value = ""

})