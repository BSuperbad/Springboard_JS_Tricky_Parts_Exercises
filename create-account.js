function createAccount(pin, amount = 0) {
    let balance = amount;
    return{
        checkBalance(enteredPin){
            if(enteredPin === pin){
                return `$${balance}`
            } else {
                return "Invalid PIN."
            }
        },
        deposit(enteredPin, depositAmount) {
            if(enteredPin === pin){
                balance += depositAmount
                return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
            }else {
                return "Invalid PIN."
            }

        },
        withdraw(enteredPin, withdrawAmount) {
            if(enteredPin === pin){
                if(withdrawAmount > balance){
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
                balance -= withdrawAmount;
                return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
            }else {
                return "Invalid PIN."
            }

        },
        changePin(oldPin, newPin) {
            if(oldPin === pin) {
                pin = newPin;
                return "PIN successfully changed!"
            }else {
                return "Invalid PIN."

            }
        }
    }

}

module.exports = { createAccount };
