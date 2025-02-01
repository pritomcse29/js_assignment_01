function calculateTax(income, expenses) {
    let tax;
    if(expenses > income || income < 0 || expenses < 0){
         return errMessage = "Invalid Input";
        
    }
    else if(income>=expenses){
     tax = income - expenses;
    }
    let final_tax = tax * (20/100);
    return final_tax;
}

const result = calculateTax(6000, -1500);
console.log(result);