let timer = document.querySelector(".timer");
let timerBtn = document.querySelector(".timerBtn");
let textTitle = document.querySelector(".title");
let interval;
function getStarted() {
  let count = 9;

  interval = setInterval(() => {
    if (count >= 0) {
      timerBtn.style.display = "none";
      timer.innerHTML = `${count}`;
    }
    if (count <= 3 && count >= 0) {
      timer.style.color = "red";
      textTitle.innerHTML = "Vaxtınız azalır...";
    }
    count--;
    if (count < 0) {
      textTitle.innerHTML = "Vaxtınız bitdi";
      count = 10;
      timerBtn.style.display = "block";
      timerBtn.innerHTML = "Yenidən başla";
      clearInterval(interval);
    }
  }, 1000);
}

timerBtn.addEventListener("click", getStarted);
