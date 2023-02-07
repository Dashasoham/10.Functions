"use strict";

/*
const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 500 * numPass) {
  //ES5
  //   numPass = numPass || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2);
createBooking("LH123", undefined, 200);


let flight = "LH234";
const jonas = {
  name: "Smith",
  passport: 23418293,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "JK736";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 23418293) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string`);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer("javascript is the best", upperFirstWord);
transformer("javascript is the best", oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log(`🙌🏼`);
};
document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);


const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");


const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book:function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Daria K");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

// const euroWings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

const book = lufthansa.book;

// DOES NOT WORK
// book(23, "Sarah W");

// book.call(euroWings, 23, "Sarah W");
// console.log(euroWings);

// book.call(lufthansa, 456, "Marry C");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Airlines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 4234, "Lucy Liu");
// console.log(swiss);

//Apply method

// const flightData = [593, "George C"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

//Bind method
// book.call(euroWings, 23, "Sarah W");

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, "Steven H");

//Partial application
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23("Jonas J");
// bookEW23("Martha M");

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyNewPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyNewPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyNewPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

console.log("---CHALLENGE---");
//Returning other Function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const runOnce = function () {
  console.log("Run Once1");
};

runOnce();

//Immediately Invoced f-n expression
(function () {
  console.log("Run Once2");
  const isPrivate = 23;
})();
//
(() => console.log("Run Once3"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate);
console.log(isPrivate);


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
//Exapmple 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
//Re-assigning f-function
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);

    console.log(`There´re 3 groups, each with ${perGroup} passengers `);
  }, wait * 1000);
  console.log(`We´ll start boarding in ${wait} minutes`);
};

// const perGroup = 1000;
boardPassengers(180, 3);

// setTimeout(function () {
//   console.log("Timer");
// }, 1000)
