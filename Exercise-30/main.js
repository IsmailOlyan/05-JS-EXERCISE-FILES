function operate(x,y, callback){
    return callback (x,y)

}

function Mulitiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}

console.log("Mulitiply :", operate(9,5,Mulitiply));
console.log("divide :", operate(50,4,divide));
