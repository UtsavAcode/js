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

prompt("What is your name??");
prompt("What is your crush name??");
function loveCalculator() {
  var n = Math.random() * 100;
  var love = Math.floor(n) + 1;
  return love;
}

var love = loveCalculator();

if (love == 100) {
  alert("They lovee you");
} else if (love <= 10) {
  alert("I am sorry but you have low compatibility.");
} else if ((love <= 50) & (love > 10)) {
  alert("You can try to woo her maybe you have a chance");
} else if ((love > 50) & (love < 99)) {
  alert("You should definitly try harder you can have them.");
}

 alert("This is the amount of love you will have: " + love + "%");


