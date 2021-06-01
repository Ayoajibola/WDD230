function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let d = new Date();

let myDate =
  dayNames[d.getDay()] +
  ", " +
  monthNames[d.getMonth()] +
  " " +
  d.getDate() +
  " " +
  d.getFullYear();

let year = d.getFullYear();

document.getElementById("currentDate").innerHTML =
  "Last updated " + document.lastModified;

document.getElementById("lastModified").innerHTML = year;

let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let fridy = weekday[d.getDay()];
if (fridy == weekday[2]) {
  document.getElementById("friday-only").innerHTML =
    "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
}
