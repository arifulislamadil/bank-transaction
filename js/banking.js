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



document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-input");
    const withdrawValue = withdrawField.value;
    const withdrawAmount = document.getElementById("withdraw-amount");
    withdrawAmount.innerText = withdrawValue;
})