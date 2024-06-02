document.addEventListener("DOMContentLoaded", function () {
  var tweets = document.getElementById("tweet");
  var totals = document.getElementById("max");
  var remains = document.getElementById("remaining");

  var maxLength = tweets.maxLength;

  tweets.addEventListener("input", function () {
    var currentLength = tweets.value.length;
    totals.innerHTML = currentLength;
    remains.innerHTML = maxLength - currentLength;
  });
});

function daysToLive(age) {
  var TimeToLive = 90 - age;
  var days = TimeToLive * 365;
  var weeks = TimeToLive * 52;
  var months = TimeToLive * 12;

  console.log(
    "You have " + days + " days " + weeks + " weeks and " + months + " to live."
  );
}

daysToLive(89);

function milk(money) {
  var bottles = Math.floor(money / 1.5);
  console.log("Buy " + bottles + " bottles of milk.");
  return money % 1.5;
}

var change = milk(4);
console.log("This is the money returned " + change);

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

var bmi = bmiCalculator(80, 1.9);
console.log("Your BMI is: " + bmi);

// Random number

var n = Math.random();
console.log("This is a random number " + n);

// Dice roll simulation

// var love = loveCalculator();

// if (love == 100) {
//   alert("They lovee you");
// } else if (love <= 10) {
//   alert("I am sorry but you have low compatibility.");
// } else if ((love <= 50) & (love > 10)) {
//   alert("You can try to woo her maybe you have a chance");
// } else if ((love > 50) & (love < 99)) {
//   alert("You should definitly try harder you can have them.");
// }

//  alert("This is the amount of love you will have: " + love + "%");

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("The year " + year + " is a leap year");
  } else {
    console.log("This year is not a leap year.");
  }

  return year;
}

leapYear(2020);

// arrays

// function guests() {
//   var list = ["Ram", "shyam", "hari", "david"];
//   var name = prompt("What is your name??");

//   if (list.includes(name)) {
//     alert("You can go in ...");
//   } else {
//     alert("You cannot go in ...");
//   }
// }

// guests();

//fizz buzz

// function fizzBuzz() {
//   var numbers = [];
//   for (var i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       numbers.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       numbers.push("Fizz");
//     } else if (i % 5 === 0) {
//       numbers.push("Buzz");
//     } else {
//       numbers.push(i);
//     }
//   }

//   return numbers;
// }

// var numbers = fizzBuzz();
// console.log(numbers);

//Random person problem

// function randomPerson() {
//   var people = ["Utsav", "Ram", "Shyam", "Hari", "Xotey"];
//   var numberOfPeople = people.length;
//   var place = Math.floor(Math.random() * numberOfPeople);
//   var person = people[place];
//   return person + " Will pay for the lunch";
// }

// console.log(randomPerson());

//fibonacci sequence

// function fibonacci(n) {
//   var sequence = [];

//   if (n === 1) {
//     sequence = [0];
//   } else if (n === 2) {
//     sequence = [0, 1];
//   } else {
//     sequence = [0, 1];

//     for (var i = 2; i <= n; i++) {
//       sequence.push(sequence[i - 2] + sequence[i - 1]);
//     }
//   }
//   return sequence;
// }

// console.log(fibonacci(5));
