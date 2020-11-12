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

function isVowel(input){
    const vowel = "aeiouAEIOU";
    return (vowel.indexOf(input) !==-1)
};

function add(input1, input2){
    if (isNaN(input1) || isNaN(input2)){
        return "NaN";
    }
    return Number(input1)+ Number(input2);
}