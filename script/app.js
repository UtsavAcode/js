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
