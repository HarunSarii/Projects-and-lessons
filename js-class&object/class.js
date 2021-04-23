// class User{
//     constructor(firstname, lastname, credit) {
//         this.firstname = firstname
//         this.lastname = lastname
//         this.credit = credit
//     }
//     getFullName() {
//         let fullname = `${this.firstname} ${this.lastname} is my full name`;
//         return fullname;
//     }
//     editName(newname){
//         const myname = newname.split(' ')
//         this.firstname = myname[0]
//         this.lastname = myname[1]
//     }
// }

// const John = new User('John', 'Anderson', 34);
// // console.log(John)
// console.log(John.getFullName());

// John.editName('Johnny Anderson');
// console.log(John.getFullName());

// const Sammy = new User();
// console.log(Sammy)


// // Class declaration
// class ColorClass {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }

//   rgb() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }

//   rgba(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
//   }

//   hex() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   // adding static method to Class, not available in instances
//   static test() {
//     console.log('This is static method');
//   }
// }

// const red = new ColorClass(255, 67, 89, 'kırmızı');
// const white = new ColorClass(255, 255, 255, 'beyaz');

// div1.style.backgroundColor = red.rgba(0.8);
// div2.style.backgroundColor = white.rgb();

// // examples of static methods in Objects and Arrays

// const arr = [1, 2, 3, 4];
// // arr.from does not exist
// // but we can use Array.from() because this method is static

// const person = {
//   name: 'Barry',
//   age: 44,
// };

// for (let item of Object.keys(person)) console.log(item);
// // Object.keys() is a static method

/*
class Pet {
constructor(name, age) {
  this.name = name;
  this.age = age;
}
info() {
  return `This pet's name is ${this.name} and it is ${this.age} years old.`;
}
}
// const pet1 = new Pet('Karabaş', 5);
// console.log(pet1.info());
class Dog extends Pet {
eat() {
  return `${this.name} eats meat.`;
}
}
const karabas = new Dog('Karabaş', 5);
// console.log(karabas.eat());
// console.log(karabas.info());
// console.log(karabas.age);
class Cat extends Pet {
constructor(name, age, eyes = 'black') {
  super(name, age);
  this.eyes = eyes;
}
eat() {
  return `${this.name} eats fish.`;
}
info() {
  return `This pet's name is ${this.name} and it is ${this.age} years old and it has ${this.eyes} eyes.`;
}
}
const tekir = new Cat('Tekir', 3, 'blue');
console.log(tekir.eat());
console.log(tekir.info());
*/
/*
class Pet {
  // private properties
  #age;
  constructor(name, age) {
    this._name = name;
    this.#age = age;
  }
  info() {
    return `This pet's name is ${this._name} and it is ${this.age} years old.`;
  }
  #test() {
    return 'private method';
  }
  get petAge() {
    return this.#age;
  }
  set petAge(newAge) {
    // if required validation
    this.#age = newAge;
  }
  setPetAge(newAge) {
    // if required validation
    this.#age = newAge;
  }
}
const karabas = new Pet('Karbaş', 5);
console.log(karabas.petAge); // here getter works
karabas.petAge = 4; // here setter works
karabas.setPetAge(11);
console.log(karabas.petAge);
*/

// const lineItems = [
//   { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
//   { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
//   { description: 'Butter', quantity: 2, price: 6, total: 12 }
// ];

// function add() {
//   let counter = 0;
//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// const addFunc = add();

// console.log(addFunc());
// console.log(addFunc());
// console.log(addFunc());

// map.set('add', function (x, y) {
//   return x + y
// });

// const addition = map.get('add');
// console.log(addition(3, 5));

// for (let key of map.keys()) console.log(key);


const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);

mySet.add('string');

const obj = {a:1 , b:2};
mySet.add(obj);

// console.log(mySet);

mySet.add({a:1, b:2});

console.log(mySet.size);

// console.log(mySet);


