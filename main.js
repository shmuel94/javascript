// 1.
// var num1;
// var num2;
// num1 = Number(prompt("enetr the first number"));
// num2 = Number(prompt("enter the second"));
// console.log(num1 , num2);
// var sum = num1 + num2;

// if(sum >= 13){
  //     console.log("bar-mitzva");
// }
 // else if(sum = 12){
 //     console.log("bat-mitzva")
// }
// else {
    //     console.log("kid");
    // }

// 2.
// var counter = 0;
// while (counter < 100){
//      console.log("yes");
//     counter++;
//  }
 
// 3.
// var counter = 0;
// var num = Number(prompt("enter a number"));
// while (counter < num){
//     counter++;
//      console.log("no");
//  }

// 4.
// for(i = 0; i <1000; i++) {
//     console.log("javascript is not JAVA" );
// }

// 5.
// var num = Number(prompt("enter a number"));
// var userName = prompt("enter a name");
// for(i = 0; i < num; i++){
//      console.log(userName);
// }

// 6.
// var age = Number(prompt("enter your age"));
// var userName = prompt("enter your name");
// var userEmaile = prompt("enter your emile");
// var MinimumAge = Number(prompt("enter a number"));
// if(age >= 18){
//     for(i = 0; i > MinimumAge; i++){
//         console.log(userName, age, userEmaile);
//     }
// }
// console.log("your a kid");

// 7.
// var num;
// var userName;
// var myName = "shmuel"; 
// num = Number(prompt("enter a number"));
// userName = prompt("enter a name");
// if(userName == myName){
// for(i = 0; i < num; i++){ 
//     console.log("hi boss " + myName);    
// }
// }
// else{
//     console.log("no entry");
// }

// 8.
// var num1;
// var num2;
// num1 = Number(prompt("enter the first number"));
// num2 = Number(prompt("enetr the second number"));
// for(var i = 1; i <= num1; i++){
//     for(var j = 1; j <=num2; j++){
//         console.log(i * j);
//     } 
// }

// 9.
// var array = [1, 2, 3, 4, 5];
// console.log(array);

// 10.
// var arrayName = ["shmuel", "haim", "jakov", "ezra", "nadav"];
// for(i = 0; i< arrayName.length; i++){
//     console.log(arrayName[i]);
// }

// 11.
// var arryNumber = [53, 24, 27, 11, 35, 42, 73, 22];
// for(i = 0; i < arryNumber.length; i++){
//     if(arryNumber[i] % 2 == 0){
//         console.log(arryNumber[i]);
//     }
// }

// 12.
// var arryUser = [];
// for(i = 0; i< 5; i++){
//     UserInput = prompt("enter 5 names");
//     arryUser.push(UserInput);
// }
// console.log(arryUser);

// 13.
// var arryNumbers = [];
// for(i = 0; i< 7; i++){
//   var UserInputs = Number(prompt("enter 7 numbers"));
//     if(UserInputs % 2 != 0){
//         arryNumbers.push(UserInputs);
//      }
//      else{
//          console.log("no even!")
//      }
// }   console.log(arryNumbers);
 
// 14.
// var arryOfAll = [27, "shmuel", 28, "ezra", 29, "nadav"];
// var number;
// for(var i = 0; i < arryOfAll.length; i++){
//     if(Number(arryOfAll[i])){
//         console.log(arryOfAll[i]);
//     }
//     else{
//         console.log("not number");
//     }
// }

// 15.
// var i = 0;
// var num;
// var array = [];
// while(i < 10){
//     num = Number(prompt("enetr a number"));
//     if(num % 2 ==0){
//         console.log(array);
//         array.push(num);
//         i++;
//     }
//     else{
//         console.log("not evevn");
//     }
// }

 // 16.
 // var width;
 // var height;
 // var wS;
 // var rP;
 // width = Number(prompt("enter a width"));
 // height = Number(prompt("enter a height"));
 //     if(width && height){
 //         wS = width * height;
 //         rP = 2 * width + 2 * height;
 //         console.log(wS , rP);
 //     }
 //     else{
 //         alert("try again!!");
 //     }

 // 17.
 // var numOne;
 // var numTwo;
 // var numThree;
 // numOne = Number(prompt("enter the first number"));
 // numTwo = Number(prompt("enter the second number"));
 // numThree = Number(prompt("enter the third number"));
 // if(numOne < numTwo && numTwo < numThree){
     //     console.log("The Order is rising");
     // }
     // else if((numOne > numTwo && numTwo > numThree)){
         //     console.log("The Order goes down");
         // }
         // else{
             //     console.log("There is no order here");
             // }
 
 // 18.
 // var number = Number(prompt("enter a number"));
// while(number> 0){
//     var modulu = number % 10;
 //     var number = (number / 10) - (modulu / 10);
 //     console.log(modulu);
 // }