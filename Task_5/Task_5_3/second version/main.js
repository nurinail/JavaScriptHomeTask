let redLight = document.querySelector(".lightBulbRed");
let yellowLight = document.querySelector(".lightBulbYellow");
let greenLight = document.querySelector(".lightBulbRedGreen");

function getLight() {
  redLight.classList.add("red");
  setTimeout(() => {
    redLight.classList.remove("red");
    yellowLight.classList.add("yellow")
    setTimeout(() => {
      yellowLight.classList.remove("yellow");
      greenLight.classList.add("green");
      setTimeout(() => {
        greenLight.classList.remove("green");
        getLight();
      }, 3000);
    }, 2000);
  }, 3000);
}
getLight();
