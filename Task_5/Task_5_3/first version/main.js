let redLight = document.querySelector(".lightBulbRed");
let yellowLight = document.querySelector(".lightBulbYellow");
let greenLight = document.querySelector(".lightBulbRedGreen");
let step = 0;
let firstCount = 4;
let secondCount = 2;
let thirdCount = 4;
setInterval(() => {
  if (step <= 3) {
    greenLight.innerHTML = null;
    greenLight.classList.remove("green");
    redLight.classList.add("red");
    redLight.innerHTML = `${(firstCount -= 1)}`;
  } else if (step > 3 && step <= 5) {
    redLight.classList.remove("red");
    yellowLight.classList.add("yellow");
    yellowLight.innerHTML = `${(secondCount -= 1)}`;
    redLight.innerHTML = null;
  } else if (step > 5 && step <= 9) {
    yellowLight.classList.remove("yellow");
    greenLight.classList.add("green");
    greenLight.innerHTML = `${(thirdCount -= 1)}`;
    yellowLight.innerHTML = null;
  }

  step++;
  if (step == 10) {
    step = 0;
    firstCount = 4;
    secondCount = 2;
    thirdCount = 4;
  }
}, 1000);
