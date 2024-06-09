var dice = document.querySelector(".dice");

dice.addEventListener("click", function () {
  rollDice();
});

function rollDice() {
  var rolledNumber = Math.floor(Math.random() * 6 + 1);
  console.log(rolledNumber);

  for (var i = 1; i <= 6; i++) {
    dice.classList.remove("show-" + i);

    if (dice === i) {
      dice.classList.add("show-" + rolledNumber);
    }
  }
}
