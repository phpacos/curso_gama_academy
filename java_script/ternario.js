let isValid = true;

//sem ternário
function verify (isValid){
    if(isValid){
        return
    }else{
        return false;
    }
}

console.log(verify(isValid));

//com ternário
const result = isValid ? true : false; 

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1; 