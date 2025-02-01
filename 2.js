
function sendNotification(email) {
    if(!email.includes('@')){
        return("Invalid Email");
    }
    let sliceMail = email.split("@");
    let firstPart = sliceMail[0];
    let secondPart = sliceMail[1];
   
    return finalMessage= firstPart+" sent you an email from "+secondPart;

    
}
const email ="sadia8icloud.com"
const e = sendNotification(email);
console.log(e);
