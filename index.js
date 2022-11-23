// var myname="AKA";
// console.log(myname);
// console.log(typeof(myname))
  

// var myAge=10;
// console.log(typeof(myAge));

// var isTrue=true;
 
// var phoneNumber=1234567890;
// var myname = "dnkkddks";
// console.log(isNaN(phoneNumber)); // here isNan stands for is not a number.
// console.log(isNaN(myname));

// console.log(NaN==NaN); /// === checks both datatype and value.
// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.Nan));
// console.log(Number.isNaN(NaN)); 

// Expressions and operators 

// 1. Assignment operator
// 2. Arithmetic operator
// 3. Comparison operator
// 4. Logical operator
// 5. String operator
// 6. Conditional(ternary) operator

// 1) Assignment operator
// a=10;
// b=20
// a=b;
// console.log()

// 2) arithmetic operators :
//  console.log(3+3);
//  console.log(3-3);
//  console.log(3*3);
//  console.log(3/3);
//  console.log(3%3);
// var num=15;
// var newnum=++num;
// console.log(num);
// console.log(newnum);

// 3) Comparison operator : 
// var a=10;
// var b=20;
// console.log(a!=b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a<b);

// 4)Logocal operator :
//  var a=30;
//  var b=-20;

//  console.log(a>b && b>0);
//  console.log(a>b || b>0);
//  console.log(!(a>b));
// console.log(NaN);

// 5) String Concatenation(operator):
// console.log("anuj"+" agrawal");

// console.log(3**3);
// console.log(10**-1); this will do negative power and is 10^-1 means 1/10=0.1
 
// JavaScript Program to swap two numbers
// var a=5;
// var b=6;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a+" "+b);

// Control Statements and Loops:
 
// if else
// switch
// while
// dowhile
// for
// forin 
// forof 
// conditional(ternary)

// if else

// var tom="rain";
// if(tom=="rain"){
//     console.log("take a raincoat");

// }
// else{
// console.log("Don't take raincoat");
// }

// js program to check whether a year is leap year or not
// var year=1900;
// if(year%4==0){
//     if(year%100==0){
//         if(year&400==0){
//             console.log("The year "+year+" is  a leap year");
//         }
//         else{
//             console.log("The year "+year+" is not a leap year");
//         }
//     }
//     else{
//         console.log("The year "+year+" is  a leap year");
//     }
// }
// else{
//     console.log("The year "+year+" is not a leap year");
// }
// var score=90;
// if(null)
// console.log("Fail");
// else
// console.log("Pass");

// Conditional (ternary) operator:
// var age=18;
// (age>=18)? console.log("Vote") : console.log("Can't vote");

// var area="circle";
// var pi=3.142,l=5,b=4,r=3;
// switch(area){
//     case 'circle':
//         console.log("Area of circle="+pi*r**2);
//         break;
//     case 'triangle':
//         console.log("area of triangle="+(l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("area of rectagle="+l*b);
//         break;
//     default:
//         console.log("Please enter valid data");
        

// }

// while loop:
// var x=4;
// while(x>0){
//     console.log(x);
//     x--;
// }

// do while
// var num=0;
// do{
//     console.log(num);
//     num++;
// }
// while(num<=10);

// for loop
// for(var num=20;num<=30;num++)
// console.log(num);

//program for printing table of a number
// var num=8;
// for(var i=1;i<=10;i++){
//     console.log(num+"*"+i+"="+(num*i));
// }

// Function definitions:

// function sum(a,b){
// console.log(a+b);
// }
// sum(1,2);

// Function Expresssion: Create a function and put it into variable.

// function sum(a,b){
//     var total=a+b;
//     return total;
// }
// console.log(sum(1,2));

// Anonymous Function:

// var total = function(a,b){
//     return total=a+b;
// }

// console.log(total(1,2));
//  var has function scope while let and scope have block scope.

// let myname="AKA";
// console.log(myname);
//  myname="Anuj";
// console.log(myname);



// const myname="AKA";
// console.log(myname);
//  myname="Anuj";
// console.log(myname);

// function biodata(){
//     var myFirstname="Aka";
//     console.log(myFirstname);
//     if(true){
//         var myLastname="thapa";
//         console.log("inner="+myLastname);
//         console.log("inner="+myFirstname);
        
//     }
//     console.log("outer="+myLastname);
// }
// biodata();

// function biodata(){
//     let myFirstname="Aka";
//     console.log(myFirstname);
//     if(true){
//         let myLastname="thapa";
//         console.log("inner="+myLastname);
//         console.log("inner="+myFirstname);
        
//     }
//     console.log("outer="+myLastname);
//     console.log("outer="+myFirstname);
// }
// biodata();

// template literals

// for(let i=1;i<=10;i++){
//     let num=2;
//     console.log(`${2}*${i}=${i*num}`);
// }

// default parameters 
// function mult(a,b=5){   // b has default value if we just pass one argument but for two it is correct
//     return a*b;
// }
// console.log(mult(2,2,4));

// Fat arrow function
  //Normal way
//   function sum(){
//     let a=5,b=6;
//     let sum=a+b;
//     return `sum= ${sum}`;
//   }
//   console.log(sum());

  // Fat Array Way
  // const sum = ()=> {
  //   let a=5,b=6;
  //   let sum=a+b;
  //   console.log(`sum= ${sum}`);
  // }
  // sum();
  // Arrays:
// var myFriends = ['aka','abc','xyz',true,34];
// for(let i=0;i<myFriends.length;i++){
//   console.log(myFriends[i]);
// }

// var myFriends=new Array;
// for in loop

// var myFriends = ['aka','abc','xyz',true,34];

// for(let ele in myFriends){
//   console.log(ele); simply return the index
// }

// for(let i of myFriends){
//   console.log(i);
// }

// var myFriends = ['aka','abc','xyz',true,34];

// myFriends.forEach( function(element,index,array)
// {
// console.log(element);
// });

// for each loop using fat arrow function:

// var myFriends = ['aka','abc','xyz',true,34];
// myFriends.forEach((element,index,array)=>{
//   console.log(element);
// });


// Array Methods: 
// indexOf()

// var Friends=["A","B","C","D","E","F","A"];
// console.log(Friends.indexOf("E"));   returns the very firstindex of given argument  
// console.log(Friends.indexOf("A",2));  returns the very first index of given argument but will start searching from idx=2
// console.log(Friends.lastIndexOf("A"));
// var arr=["cat","rat","bat","sat"];
// console.log(arr.includes("bat"));


// Array Filtration
const prices = [200,300,350,400,450,500,600];

// searching how many elemnets greater than 400

const findPrice = prices.find((currVal)=>
{
  return currVal>400;
})

// console.log(findPrice);

// const findIdx= prices.findIndex((currval)=>{
//   return currVal>300;
// })

