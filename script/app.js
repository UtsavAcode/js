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
