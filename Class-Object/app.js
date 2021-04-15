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

const hotel = {
    name: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
}

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

const guests = hotel.numGuests || 50;
console.log(guests);

hotel.numGuests = 0;
const guests2 = hotel.numGuests || 40;
console.log(guests2);

const guests3 = hotel.numGuests ?? 40;
console.log(guests3);
