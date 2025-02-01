function checkDigitsInName(name) {
    if(Array.isArray(name)){
        return "Invalid Input";
    }
       for (const e of name){
            if(!isNaN(e) && e !== " "){
            return true;
            }
            
        
       }
       return false;
}
const name = "!@#";
const result = checkDigitsInName(name);
console.log(result);


