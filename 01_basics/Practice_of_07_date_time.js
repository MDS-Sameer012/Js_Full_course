// Certainly! Here are five JavaScript practice questions related to Date and Time:

// Question 1:
// Write a function that takes a date as a parameter and returns the current day of the week.

// Answer : 

function func1(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return weekdays[date.getDay()];
}

let date = new Date();
// console.log(func1(date));

// Question 2:
// Create a function that calculates the difference in days between two given dates.

// Answer : 

let d1 = new Date(2024,0,16,23,35,23,545);
let d2 = new Date(2024, 0, 21);

function func2(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    let diffInDatesInMillisecond = Math.abs(date1 - date2);
    return Math.floor(diffInDatesInMillisecond / oneDay);
}
// console.log(func2(d1,d2));

// Question 3:
// Write a script that displays the current date and time in a human-readable format, such as "Tuesday, January 25, 2024 - 14:30:00".

// Answer : 

let d3 = new Date(2024, 0, 25, 14, 30, 0, 0);
// console.log(`"${d3.toLocaleDateString('default', { weekday: 'long' })} , ${d3.toLocaleDateString('default', { month: 'long' })} ${d3.getDate()} , ${d3.getFullYear()} - ${d3.toLocaleTimeString()} ".`);

// console.log(`"${d3.toLocaleString('en-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })}"`);


// Question 4:
// Develop a function that takes a date in the format "YYYY-MM-DD" and returns the corresponding day of the week.

// Answer : 

let d4 = '16-01-2024';
let d5 = '17-01-2024';

function getDayOfWeek(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let [day, month, year]=[];
    if (date.includes('-')) {
        [day, month, year] = date.split('-');
    }
    else if (date.includes('/')) {
        [day, month, year] = date.split('/');
    }
    
    let newDate = new Date(year, month - 1, day);
    return weekdays[newDate.getDay()];
}

// console.log(`${getDayOfWeek(d4)} will be On ${d4}`);
// console.log(`${getDayOfWeek(d5)} will be On ${d5}`);

// Question 5:
// Build a countdown timer that displays the time remaining in minutes and seconds until a specific date and time.

// Answer : 

function countdownTimer(targetDate) {
    // Convert the target date string to a Date object
    // const targetDateTime = new Date(targetDate);

    // Update the countdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        let i = 0;
        for (; ;){// Get the current date and time
            i++
        const currentDate = new Date(2024,0,17,0,25,i,0);

        // Calculate the difference in milliseconds
        const difference = targetDate - currentDate;
        // const difference = targetDateTime - currentDate;

        // Check if the target date has passed
        if (difference <= 0) {
            clearInterval(timerInterval);
            console.log("Countdown expired!");
            return;
        }

        // Calculate minutes and seconds
        const minutes = Math.floor(difference / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Display the countdown
            console.log(`Time remaining: ${minutes} minutes and ${seconds} seconds`);
            if ((minutes == 0) && (seconds==0)) {
                return;
            }
        }
    }
}

// Example usage: Set the target date and time in "YYYY-MM-DDTHH:mm:ss" format
const targetDate = new Date(2024,0,17,0,25,30,0);
countdownTimer(targetDate);
