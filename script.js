const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const startBtn = document.querySelector('#startBtn');
const timerEl = document.querySelector('#timer');
const alarm = document.querySelector('#alarm')

let minutes, seconds, totalTime;

minutesEl.addEventListener('input', (e) => {
    minutes = e.target.value * 60;

    if (minutes) {
        if (seconds) {
            totalTime = minutes + seconds;
        } else {
            totalTime = minutes;
        }
    }

    localStorage.setItem("time", totalTime);
})

secondsEl.addEventListener('input', (e) => {
    seconds = +e.target.value;
    if (seconds) {
      if (minutes) {
        totalTime = minutes + seconds;
      } else {
        totalTime = seconds;
      }
    }

    localStorage.setItem("time", totalTime);
})

// start the timer as soon as user clicks the start button

startBtn.addEventListener('click', () => {
    if (totalTime <= 0 || !totalTime) return;
    // disable the start btn
    startBtn.disable = true;
    // let time = localStorage.getItem('time');

    // if (time > 0) {
    
    //     let timer = setInterval(() => {
    //         localStorage.setItem('time', time - 1);
    //         console.log('time left  : ' ,time);
    //         if (time <= 0) {
    //             clearInterval(timer);
    //             console.log("Timer Ended!");
    //         };
    //     }, time)
    
    // }
    let timer = setInterval(() => {
        timerEl.textContent = `Time left : ${totalTime}`

        if (totalTime <= 0) {
            clearInterval(timer)
            timerEl.textContent = `Time up!!!`;
            alarm.play()
        }

    }, 1000);
})