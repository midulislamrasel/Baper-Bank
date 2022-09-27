document.getElementById('deposit-button').addEventListener('click', function () {
    const userInputDepositFiled = document.getElementById('deposit-input');
    const userInputDeposit = userInputDepositFiled.value;
    const userInput = parseFloat(userInputDeposit)


    const depositTotalFiled = document.getElementById('deposit-total');
    const depositTotalValue = depositTotalFiled.innerText;
    const deposit = parseFloat(depositTotalValue)
    const depositTotal = depositTotalFiled.innerText = deposit + userInput ;

    const inputBalanceTotalField = document.getElementById('balance-total');
    const inputBalanceTotal = inputBalanceTotalField.innerText;
    const inputBalance = parseFloat(inputBalanceTotal)
    const totalBalance = inputBalanceTotalField.innerText = inputBalance + userInput;

    console.log(depositTotal ,inputBalance)
    userInputDepositFiled.value = '';
})



document.getElementById('withdraw-button').addEventListener('click', function () {
    const userOutputWithdrawFiled = document.getElementById('withdraw-input');
    const userOutputWithdraw = userOutputWithdrawFiled.value;
    const withdrawOutput = parseFloat(userOutputWithdraw)



    const withdrawTotalFiled = document.getElementById('withdraw-total');
    const withdrawTotalValue = withdrawTotalFiled.innerText;
    const withdraw = parseFloat(withdrawTotalValue)
    const withdrawTotal = withdrawTotalFiled.innerText = withdraw + withdrawOutput;
    



    const inputBalanceTotalField = document.getElementById('balance-total');
    const inputBalanceTotal = inputBalanceTotalField.innerText;
    const inputBalance = parseFloat(inputBalanceTotal)
    const total = inputBalanceTotalField.innerText =  inputBalance -  withdrawOutput;
   
    userOutputWithdrawFiled.value = '';
})