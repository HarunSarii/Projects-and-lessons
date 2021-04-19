// QUIZ QESTIONS
// const nums = [true+3, null+10, 1e1+11];
// if (nums.includes(10)) {
//     console.log(nums);
// }
// let c = 1;
// let l = (c%=1);
// let a = (l &&= 3);
// let r = (a ||= 5);
// let u = (r ??= 7);
// let s = (u ? 9 : 11);

// console.log(s);
// var arr = [7, 3, 5, 9];
// arr.reverse().find(n=>n%3); //output:5

// for (var i = 1; i < 3; i++)
// {
//     console.log(i);
//     setTimeout(function(){
//         console.log(i);}, i*1000);
//     }
// console.log(i+2); 

// output: 1 2 5 3 3 

// var price = [
//     {pr$: 700, name: 'pc'},
//     {pr$: 30, name: 'book'},
//     {pr$: 90, name: 'pen'}

// ];
// const lower100 = price.map(n => n.pr$ < 100 && console.log(n));

// output: {pr$: 30, name: "book"} 
//         {pr$: 90, name: "pen"}

// var x = ["a", "b", "c"];
// var y = ["a", "b", "c"];
// console.log(x == y);
// console.log(x === x.reverse());
// console.log(x);

// output:
// false
// true
// (3) ["c", "b", "a"]

// const $ = [10, 100];
// const euro = $.forEach(n => console.log(n*0.82));
// console.log(euro);

//output:
// 8.2
// 82
// undefined

// var dog = {
//     name: "Rocky",
//     legs: 4,
//     tail: 1,
//     qualities: ["loyalty","companionship"],
//     bark : function() {
//       console.log("woof");  },
//     result : function() {
//       return this.name+ " has " + this.legs + " legs.";
//     }
//     };
  
//   dog.bark();
//   console.log(dog.result());

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     current(){
//        return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
//     }
//   }
//   myDog = new Dog("Buldog", 4) 
//   document.getElementById("content").innerHTML = myDog.current();

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     current(){
//        return "I have a " + this.dogName;
//     }
//   }
  
//   class Specy extends Dog {
//     constructor(name, foot, char) {
//       super(name, foot);
//       this.character = char;
//     }
//     show() {
//       return this.current() + ', it is  ' + this.character;
//     }
//   }
  
//   myDog = new Specy("Buldog", 4, "curious");
//   document.getElementById("content").innerHTML = myDog.show();

// class Song {
//     constructor(genre) {
//       this.genre = genre;
//     }
//     get sgenre() {
//       return this.genre;
//     }
//     set sgenre(newgenre) {
//       this.genre = newgenre;
//     }
//   }

//   mysong = new Song("Classical");

//   document.getElementById("content").innerHTML =
//     "My favourite is " + mysong.sgenre;

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['b', 'c', 'a'];
// console.log(
//  arr1.sort() === arr1,
//  arr2.sort() == arr2,
//  arr1.sort() === arr2.sort()
// );

// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];
// console.log(numberStore);

// const arr1=[1,2]; const arr2=[...arr1]; arr1.push(3);
// console.log(arr2);
// const obj1={a:1,b:2}; const obj2={...obj1}; obj1['c']=3;
// console.log(obj2);

// const arr = [...new Set([3, 1, 2, 3, 4])];
// console.log(Set);

// const arr = [...new Set([3, 1, 2, 3, 4])];
// console.log(arr.length, arr[2]);

// var x=5;
// var y=6;
// var res=eval("x*y");
// document.write(res);

// var x = ["a", "b", "c"];
// var y = ["a", "b", "c"];
// console.log(x == y);
// console.log(x === x.reverse());
// console.log(x);

// const c1 = {f:"adam"};
// const c2 = c1;

// c2.f = "elvis";
// console.log(c1.f); 
//output:elvis

// var a = Array.from("Clarusway");
// console.log(a);

// const b = Array.from([3,5,7], n => n*n);
// console.log(b);
//output:
// ["C", "l", "a", "r", "u", "s", "w", "a", "y"]
// [9, 25, 49]

// var a = 0.3;
// var b = 0.6;
// console.log( (a+b)==0.9 );
//false 0.8999999999999999

//FOR-IN  VS. FOR-OF
// let mySchool = ["c", "l", "a"];
// for (i in mySchool) {
//     console.log(i);
// };
// for (i of mySchool) {
//     console.log(i);
// }
// quiz.js:183 0
// quiz.js:183 1
// quiz.js:183 2
// quiz.js:186 c
// quiz.js:186 l
// quiz.js:186 a

// for (var i = 5; i < 7; i++)
// {
//     console.log(i);
//     setTimeout(function(){
//         console.log( i);}, i*1000);
//     }
// console.log(i+2); 
// 5
// quiz.js:198 6
// quiz.js:202 9
// 2quiz.js:200 7 //2 times

// const studentId = {
//     firstName: 'elon',
//     lastName: 'musk',
// };
// const studentgrade = {
//     HTML: '85',
//     CSS: '95',
// };

// const student = {... studentId, ... studentgrade};
// console.log(student);
// {firstName: "elon", lastName: "musk", HTML: "85", CSS: "95"}

// const arr = [ [[1,2], [-1,-2]], ["a", "b"] ];
// console.log(arr.flat(2));
// [1, 2, -1, -2, "a", "b"]

// const mySec = ["1","2","3","4","5","6","7", "8", "9", "0"];
// let result = mySec.reduce((pre, cur) => {
//     return pre + cur;
// });
// console.log(result);
// 1234567890


// var swapCase = function(letters){
//     var newLetters = "";
//     for(var i = 0; i<letters.length; i++){
//         if(letters[i] === letters[i].toLowerCase()){
//             newLetters += letters[i].toUpperCase();
//         }else {
//             newLetters += letters[i].toLowerCase();
//         }
//     }
//     console.log(newLetters);
//     return newLetters;
// }

// var text = 'The Quick Brown Fox';
// var swappedText = swapCase(text);
// tHE qUICK bROWN fOX


// function spec_opr(...numbers){
//     let sum = 0;
//     for(let i of numbers){
//         i%2 == 0 ? sum += i/2 : sum += i*3;
//     }
//     return sum;
// }
// console.log(spec_opr(3, 2, 6));  
//13

// for (let i=1; i<=1000; i++) {
//     let sum = 0;
//     for (let j=1; j < i; j++) {
//         if (i%j==0)
//         sum += j;
//     }
// }
// if (sum == i || i==1) console.log(i)


// function is_perfect(number) {
// var temp = 0;
//    for(var i=1;i<=number; i++)
//      {
//          if(number%i === 0){
//             temp += i;
//           }
//      }
//      if(temp === number && temp !== 0)
//         {
//        console.log(`${number} is a perfect number.`)
//         } 
//      else
//         {
//        console.log(`${number} is not a perfect number.`);
//         }   
//  } 
// is_perfect(28);
// 28 is a perfect number.


//     backwards = "";
//     for(let i=0; i<word.length; i++ ){

//     }
// }

// function reverseString(word) {
//     var output = word.split("").reverse().join("");
//     if (output === word){
//         console.log(`${word} is a palindrome`)
//     } else {
//         console.log(`${word} is NOT a palindrome`);
//     }
// }
// reverseString("madam");

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.reduce((accumulator, item) => accumulator + item));
//45

