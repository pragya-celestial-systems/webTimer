## WebTimer: A Simple Vanilla JS Countdown Timer

This project implements a countdown timer using vanilla JavaScript. It offers features like:

* Setting time in minutes and seconds with validations.
* Predefined timers for 30 seconds, 1 minute, and 5 minutes.
* Start button and a Reset button.
* Alarm sound upon timer completion.
* Persistence of ongoing timer even on page refresh.

### Features

* **Time Setting:** Enter desired time in the text boxes (minutes and seconds). Each field validates input for non-negative numbers.
* **Predefined Timers:** Click buttons labeled "30s," "1m," or "5m" to start the corresponding timer.
* **Start/Reset Button:** The button changes functionality based on the timer state. It starts the timer when idle and resets it when running.
* **Alarm Sound:** An alarm sound plays for at least 15 seconds upon timer completion.
* **Persistence:** Ongoing timers persist through page refresh, ensuring uninterrupted operation.

### Usage

1. Clone or download the project.
2. Open the index.html file in your web browser.
3. Enter a desired time in the text boxes (minutes and seconds) or click a predefined timer button.
4. Click the "Start" button to begin the countdown.
5. The button will change to "Reset" while the timer runs. Click it to reset the timer.
6. Upon reaching zero, an alarm sound will play for at least 15 seconds.

### Technologies Used

* HTML: for structure
* CSS: for styling
* JavaScript: for functionality

### Project Structure

The project includes these files:

* `index.html`: Main HTML page containing the timer UI.
* `style.css`: Stylesheet for the timer layout.
* `script.js`: JavaScript code for timer logic.
* `assets` : Directory which contains the assets of the projects (e.g. alarm sound).

### Contributing

I welcome contributions to this project. Feel free to fork the repository, make changes, and submit pull requests. 

Please ensure your code adheres to good coding practices and includes comments for better maintainability.