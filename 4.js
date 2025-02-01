function calculateFinalScore(obj) {
    if(typeof obj!=="object" || obj===null){
       return  "Invalid Input";
    }
    if(typeof obj.name === "string" &&
       typeof obj.testScore === "number" && obj.testScore <= 50 && 
       typeof obj.schoolGrade === "number" && obj.schoolGrade <=30 && 
       typeof obj.isFFamily === "boolean") 
       {
        if(obj.isFFamily==true){
            obj.isFFamily=20;
         }
         else{
            obj.isFFamily =0;
             }
        return obj.testScore + obj.schoolGrade + obj.isFFamily;
    }   
    return "Invalid Input";
}
const obj ="hello" ;
const calculate = calculateFinalScore(obj);
if(calculate>=80){
    console.log("true");
}
else if(calculate<80){
    console.log("false");
}
else{
    console.log(calculate);
}
