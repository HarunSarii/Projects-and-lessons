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