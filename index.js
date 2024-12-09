
const length = 12;
const includeLower = true;
const includeUpper = true;
const includeSymbols = true;
const includeNum = true;

function passGenerator(length,includeLower,includeUpper,includeSymbols,includeNum){
     
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+/-";
    const num = "0123456789";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLower ? lowerCase : "";
    allowedchars += includeUpper ? upperCase : "";
    allowedchars += includeSymbols ? symbols : "";
    allowedchars += includeNum ? num : "";
    if(length <= 0){
        return`(password length must be at least 1 )`;
    }

    if(allowedchars.length === 0){
        return `(at least 1 set of character needs to be selected. )`;
    }
    
for(let i = 0; i < length; i++){
    const randomIndex = Math.floor( Math.random() * allowedchars.length );
    password += allowedchars[randomIndex];
}
    return password;
}


const password = passGenerator(length,includeLower,includeUpper,includeSymbols,includeNum);

//console.log(`Generated password: ${password}`);