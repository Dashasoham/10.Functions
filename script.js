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
*/

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
