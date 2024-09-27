let calc = "";

const btn1 = document.querySelector(".number1"); 
const btn2 = document.querySelector(".number2"); 
const btn3 = document.querySelector(".number3"); 
const btn4 = document.querySelector(".number4"); 
const btn5 = document.querySelector(".number5"); 
const btn6 = document.querySelector(".number6"); 
const btn7 = document.querySelector(".number7"); 
const btn8 = document.querySelector(".number8"); 
const btn9 = document.querySelector(".number9"); 
const btn0 = document.querySelector(".number0"); 

const add = document.querySelector(".smop1"); 
const sub = document.querySelector(".smop2"); 
const mul = document.querySelector(".smop3"); 
const mod = document.querySelector(".smop4"); 
const div = document.querySelector(".smop5"); 

const clr = document.querySelector(".clr"); 
const back = document.querySelector(".cmop4"); 

const see = document.getElementById('view');

back.addEventListener("click", function(event) {
    if(back && see){
        calc = calc.slice(0,-1);
        see.innerHTML = calc;        
    }
});
clr.addEventListener("click", function(event) {
    if(clr && see){
        calc = "0";
        see.innerHTML = calc;        
    }
});
btn1.addEventListener("click", function(event) {
    if(btn1 && see){
        calc = calc.concat("1");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn2.addEventListener("click", function(event) {
    if(btn2 && see){
        calc = calc.concat("2");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn3.addEventListener("click", function(event) {
    if(btn3 && see){
        calc = calc.concat("3");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn4.addEventListener("click", function(event) {
    if(btn4 && see){
        calc = calc.concat("4");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn5.addEventListener("click", function(event) {
    if(btn5 && see){
        calc = calc.concat("5");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn6.addEventListener("click", function(event) {
    if(btn6 && see){
        calc = calc.concat("6");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn7.addEventListener("click", function(event) {
    if(btn7 && see){
        calc = calc.concat("7");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn8.addEventListener("click", function(event) {
    if(btn8 && see){
        calc = calc.concat("8");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn9.addEventListener("click", function(event) {
    if(btn9 && see){
        calc = calc.concat("9");
        see.innerHTML = calc;
        console.log(calc);
    }
});
btn0.addEventListener("click", function(event) {
    if(btn0 && see){
        calc = calc.concat("0");
        see.innerHTML = calc;
        console.log(calc);
    }
});

