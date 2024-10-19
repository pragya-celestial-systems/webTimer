"use strict";

const inputContainer = document.querySelector("#topContainer");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const startButton = document.querySelector(".startBtn");
const resetButton = document.querySelector(".resetBtn");
const timerDisplay = document.querySelector("#timer");
const alarmSound = document.querySelector("#alarm");
const presetButton1 = document.querySelector("#btn1");
const presetButton2 = document.querySelector("#btn2");
const presetButton3 = document.querySelector("#btn3");
const presetButtons = [presetButton1, presetButton2, presetButton3];

let minutes = 0,
  seconds = 0,
  totalTimeInSeconds = 0;
let countdownTimer;

function startTimer() {
  let remainingTime = localStorage.getItem("time");
  console.log();

  if (remainingTime > 0) {
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    startButton.disabled = true;

    countdownTimer = setInterval(() => {
      remainingTime--;
      localStorage.setItem("time", remainingTime);
      const remainingMinutes = Math.floor(remainingTime / 60) || 0;
      const remainingSeconds = remainingTime % 60 || 0;

      timerDisplay.textContent = `Time Left: ${String(
        remainingMinutes
      ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

      startButton.classList.add("faded");
      startButton.classList.remove("startBtn");

      if (remainingTime <= 0) {
        clearInterval(countdownTimer);
        timerDisplay.textContent = `Time up!!!`;
        alarmSound.currentTime = 0;
        alarmSound.play();
        resetInputs();
      }
    }, 1000);
  }
}

function resetInputs() {
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  startButton.disabled = false;
  minutesInput.value = "";
  secondsInput.value = "";
  seconds = 0;
  minutes = 0;
  startButton.classList.add("startBtn");
  startButton.classList.remove("faded");
}

function calculateTotalTime() {
  totalTimeInSeconds = (minutes * 60 || 0) + (seconds || 0);
  localStorage.setItem("time", totalTimeInSeconds);
}

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const [minutesStr, secondsStr] = button.textContent.split(":");
    minutes = parseInt(minutesStr.trim());
    seconds = parseInt(secondsStr.trim());

    if (seconds < 0 || seconds > 60) {
      alert("Seconds are invalid.");
      return;
    }

    if (minutes < 0) {
      alert("Minutes are invalid.");
      return;
    }

    calculateTotalTime();
    resetInputs();

    if (countdownTimer) {
      clearInterval(countdownTimer);
    }

    startTimer();
  });
});

minutesInput.addEventListener("input", (e) => {
  if (e.target.value < 0) {
    alert("Minutes are invalid.");
    e.target.value = "";
    localStorage.setItem("time", 0);
    return;
  }

  minutes = parseInt(e.target.value) || 0;
  calculateTotalTime();
});

secondsInput.addEventListener("input", (e) => {
  if (e.target.value < 0 || e.target.value > 60) {
    alert("Seconds are invalid.");
    e.target.value = "";
    localStorage.setItem("time", 0);
    return;
  }

  seconds = parseInt(e.target.value) || 0;
  calculateTotalTime();
});

startButton.addEventListener("click", () => {
  if (minutesInput.value === "" && secondsInput.value === "") {
    alert("Please set time to start the timer.");
    return;
  }

  if (totalTimeInSeconds > 0) {
    startButton.disabled = true;
    startTimer();
  }
});

resetButton.addEventListener("click", () => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  resetInputs();
  alarmSound.pause();
  timerDisplay.textContent = `Start Timer`;
  localStorage.setItem("time", 0);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTime = localStorage.getItem("time");

  if (savedTime > 0) {
    startTimer();
  }
});
