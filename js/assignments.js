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
  d.getDate() +
  " " +
  dayNames[d.getDay()] +
  " " +
  monthNames[d.getMonth()] +
  " " +
  d.getFullYear();

//let currentDate = dayNames[2] + " " + monthNames[3];
document.getElementById("currentDate").innerHTML ="Last updated" + myDate;
