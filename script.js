const inputContainer = document.querySelector("#topContainer");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
const timerEl = document.querySelector("#timer");
const alarm = document.querySelector("#alarm");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const buttons = [btn1, btn2, btn3];

let minutes = 0,
  seconds = 0,
  totalTime = 0;
let timer;

localStorage.setItem("time", totalTime);

function startTimer() {
  if (timer) {
    clearInterval(timer);
  }

  let time = localStorage.getItem("time");
  if (time > 0) {
    minutesEl.disabled = true;
    secondsEl.disabled = true;
    startBtn.disabled = true;

    timer = setInterval(() => {
      time--;
      localStorage.setItem("time", time);
      timerEl.textContent = `Time Left: ${time}`;
      // startBtn.style.color = 'white';
      // startBtn.style.backgroundColor = 'cadetblue';
      // startBtn.style.opacity = 0.6;
      startBtn.classList.add('faded');
      startBtn.classList.remove('startBtn');

      if (time <= 0) {
        clearInterval(timer);
        timerEl.textContent = `Time up!!!`;
        alarm.play();
        resetInputs();
      }
    }, 1000);
  }
}


function resetInputs() {
  minutesEl.disabled = false;
  secondsEl.disabled = false;
  startBtn.disabled = false;
  // disabl
//   resetBtn.disabled = true;  
  minutesEl.value = "";
  secondsEl.value = "";
  startBtn.classList.add('startBtn');
  startBtn.classList.remove('faded');
  // startBtn.style.color = "cadetblue";
  // startBtn.style.backgroundColor = "white";
  // startBtn.style.opacity = 1;
}

function setTotalTime() {
  totalTime = (minutes * 60 || 0) + (seconds || 0);
  localStorage.setItem("time", totalTime);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const [minStr, secStr] = btn.textContent.split(":");
    minutes = parseInt(minStr.trim());
    seconds = parseInt(secStr.trim());

      if (seconds < 0 || seconds > 60) {
        alert("Seconds are invalid.");
        return;
      }

      if (minutes < 0) {
        alert("Minutes are invalid.");
        return;
      }

    setTotalTime();
    resetInputs();
    startTimer();
  });
});

minutesEl.addEventListener("input", (e) => {

  if (e.target.value < 0) {
    alert("Minutes are invalid.");
    e.target.value = '';
    localStorage.setItem("time", 0);
    return;
  }

  minutes = parseInt(e.target.value) || 0;

  setTotalTime();
});

secondsEl.addEventListener("input", (e) => {
  if (e.target.value < 0 || e.target.value > 60) {
    alert('Seconds are invalid.');
    e.target.value = '';
    localStorage.setItem('time', 0);
    return;
  }

  
  seconds = parseInt(e.target.value) || 0;
  setTotalTime();
});


startBtn.addEventListener("click", () => {
  if (totalTime > 0) {
    this.disabled = true;
    startTimer();
  }
});

resetBtn.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
    }
      resetInputs()
      timerEl.textContent = `Start Timer`;
      localStorage.setItem('time', 0);
})

window.addEventListener("DOMContentLoaded", () => {
  totalTime = parseInt(localStorage.getItem("time"), 10) || 0;
  timerEl.textContent =
    totalTime > 0 ? `Time Left: ${totalTime}` : "Start Timer";
  if (totalTime > 0) {
    startTimer();
  }
});