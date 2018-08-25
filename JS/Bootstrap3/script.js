/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var age = Number(prompt("Please type your age?:"));
//
//if(age < 0){
//    alert("Error age cannot be negative");
//}else if(age % Math.sqrt(age) === 0){
//    alert("Peferct square");
//}else if(age < 18){
//    alert("Sorry, you are not old enough to eneter the venue");
//}else if(age < 21){
//    alert("You may enter, but cannot drink");
//}else if(age === 21){
//    alert("Happy 21st biertday!!");
//}

//console.log("Number from -10 to 19");
//var number = -10;
//
//while(number <= 19){
//    console.log(number);
//    number++;
//}
//
//console.log("Even numbers between 10 and 40");
//
//var number = 10;
//
//while(number <= 40){
//    if(number % 2 === 0){
//        console.log(number);
//    }
//    number++;
//}
//
//console.log("Odd numbers between 300 and 333");
//
//var number = 300;
//
//while(number <= 333){
//    if(number % 2 !== 0){
//        console.log(number);
//    }
//    number++;
//}
//
//console.log("Number divisible by 5 and 3 between 5 and 50");
//
//var number = 5;
//
//while(number <= 50){
//    if(number % 5 === 0 && number % 3 === 0){
//        console.log(number);
//    }
//    number++;  
//}

//indexOf

//For loops

//console.log("Number from -10 to 19");
//
//for (var i = -10; i <= 19; i++) {
//    console.log(i);
//}
//
//console.log("Even numbers between 10 and 40");
//
//for (var i = 10; i <= 40; i++) {
//    if (i % 2 === 0) {
//        console.log(i);
//    }
//}
//
//console.log("Odd numbers between 300 and 333");
//
//for (var i = 300; i <= 333; i++) {
//    if (i % 2 !== 0) {
//        console.log(i);
//    }
//}
//
//console.log("Number divisible by 5 and 3 between 5 and 50");
//
//for (var i = 5; i <= 50; i++) {
//    if(i % 5 === 0 && i % 3 === 0){
//        console.log(i);
//    }
//}

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    return false;
}

function factorial(number){
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

function bebabToSnake(word){
    return word.replace(/-/g, "_");
}