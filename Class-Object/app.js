// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: '1977',
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,

//     2021: 'Clarusway FS',
//     true: 'is it working',
// }

// const teacher = {};
// teacher.fullName = 'Barry Mitchell',
// teacher.age = 44;

// console.log(person.firstName);
// console.log(person.birthYear);

// console.log(teacher.fullName);

// console.log(person[2021]);
// console.log(person.true);

// const year = 2021;
// console.log(person[year]);
// console.log(person.year);

// const keyTag = 'Name';
// console.log(person['first' + keyTag]);

// console.log(person.birthYear);
// person.birthYear = 1978;
// console.log(person.birthYear);

// console.log(person.midName);
// person.midName = 'Alexis';
// console.log(person.midName);

// person. lasName = 'Brown';
// console.log(person);

// //be careful for typos
// delete person.lasName;
// console.log(person.lastName);

// for (let item of Object.keys(person)) {
//     console.log(item);
// }

// const person = {
//     firstName: 'Barry',
//     lastName: 'Mitchell',
//     birthYear: 1977,
//     skills: ['JS', 'AWS', 'Dockers', 'Python'],
//     employed: true,

//     //bad code:
//     calcAgeBad: function (bYear) {
//         return 2021 - bYear;
//     },
//     //better code:
//     calcAge: function() {
//         return 2021 - this.birthYear;
//     }
// }
// console.log(person.calcAgeBad(1977));

// console.log(person.calcAge());

//this

// console.log(this)

// const baby = {
//     nickname: 'Tina',
//     birthYear: 2019,
// };

// baby.calcAge = person.calcAge;
// console.log(baby.calcAge());

// const newPerson = person;
// newPerson.firstName = 'alexis';
// console.log(newPerson.firstName);
// console.log(person.firstName);

// const hotel = {
//     name: 'Hotel Clarusway',
//     categories: ['Spa', 'Swimming Pool', 'Resort'],
//     options: ['just stay', 'free breakfast', 'all inclusive'],
//     rooms: ['2-bed', '3-bed', '4-bed'],
//     receptionHours: {
//       mon: {
//         open: 8,
//         close: 22,
//       },
//       fri: {
//         open: 9,
//         close: 21,
//       },
//       sat: {
//         open: 10,
//         close: 20,
//       },
//     },
// }

//destructing objects

// const arr = [1, 2, 3, 4, 5, 6];

// let [x, , y, ...others] = arr;
// console.log(x, y, others);

// const { name, options, rooms, local = 'Paris'} = hotel;

// console.log(name, options, rooms, local);

// const {mon} = hotel.receptionHours;
// console.log(mon);

// const {fri: {open, close}} = hotel.receptionHours;
// console.log(open, close);

// console.log(hotel.receptionHours.sat);

// const guests = hotel.numGuests || 50;
// console.log(guests);

// hotel.numGuests = 0;
// const guests2 = hotel.numGuests || 40;
// console.log(guests2);

// const guests3 = hotel.numGuests ?? 40;
// console.log(guests3);

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(55, 55, 55);
// console.log(firstColor);
// console.log(firstColor.rgb());
// console.log(firstColor.hex());

// const div1 = document.getElementById("mydiv1");
// const div2 = document.getElementById("mydiv2");

// div1.style.backgroundColor = firstColor.rgb();

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// console.log(Color(55, 55, 55));

// const color1 = new Color(55, 55, 55);
// console.log(color1);

// const person = {
//   name: "Barry",
//   age: 44,
// };

// for (let item of Object.keys(person)) console.log(item);

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   info() {
//     return `This pet's name is ${this.name} and it is ${this.age} years old `;
//   }
// }

// const pet1 = new Pet("karabas", 5);
// console.log(pet1.info());

// class Dog extends Pet {
//   eat() {
//     return `${this.name} eats meat`;
//   }
// }

// const karabas = new Dog("karabas ", 5);
// console.log(karabas.eat());
// console.log(karabas.info());
// console.log(karabas.age);

// class Cat extends Pet {
//   constructor(name, age, eyes = "black") {
//     super(name, age);
//     this.eyes = eyes;
//   }

//   eat() {
//     return `${this.name} eats fish`;
//   }
//   info() {
//     return `This pet's name is ${this.name} and it is ${this.age} years old and it has ${this.eyes} eyes`;
//   }
// }

// const Tekir = new Cat("Tekir", 3, "blue");
// console.log(Tekir.eat());
// console.log(Tekir.info());

class Pet {
  //private properties
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  info() {
    return `This pet's name is ${this.name} and it is ${this.age} years old `;
  }

  // karabas.name = "tekir";

  // console.log(karabas.age);

  get petAge() {
    return this.#age;
  }
  set petAge(newAge) {
    this.#age = newAge;
  }

  setPetAge(newAge) {
    this.#age = newAge;
  }
}

const karabas = new Pet("Karbaş", 5);
console.log(karabas.petAge);

karabas.petAge = 4;
console.log(karabas.petAge);

karabas.setPetAge(11);
console.log(karabas.petAge);
