// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(name="World"){
    if(typeof name !== "string"){
        return "Hello, World!"
    };
    return "Hello, "+ name + "!";
}

function isFive(input){
    return input==5;
};

function isEven(input){
    if (input===false){
        return false;
    }
    return input %2===0;
};