// Variables for setting the countdown time
let countdownDays = 2; // Days
let countdownHours = 6; // Hours
let countdownMinutes = 42; // Minutes
let countdownSeconds = 19; // Seconds
let timeFinishedWord = "EXPIRED";

// Current time
let now = new Date().getTime();

// Calculate the target date by adding the chosen days, hours, minutes, and seconds to the current time
let countdownDate =
  now +
  (countdownDays * 24 * 60 * 60 * 1000 + // Convert days to milliseconds
    countdownHours * 60 * 60 * 1000 + // Convert hours to milliseconds
    countdownMinutes * 60 * 1000 + // Convert minutes to milliseconds
    countdownSeconds * 1000); // Convert seconds to milliseconds

// Helper function to add leading zero if the value is less than 10
function addLeadingZero(value) {
  return value < 10 ? "0" + value : value;
}

// Update the countdown every 1 second
let countdownFunction = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in the respective elements with leading zeros
  document.getElementById("days").innerHTML = addLeadingZero(days);
  document.getElementById("hours").innerHTML = addLeadingZero(hours);
  document.getElementById("minutes").innerHTML = addLeadingZero(minutes);
  document.getElementById("seconds").innerHTML = addLeadingZero(seconds);

  // If the countdown is finished, display "EXPIRED"
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h2 class="time-finish">${timeFinishedWord}</h2>`;
  }
}, 1000);

// save fonction

// function save() {
//   const image = document.querySelector(".save_image");
//   image.src = "assets/icons/heart small fill.png";
// }
