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
  
  
  document.getElementById("currentDate").innerHTML = "Last updated " + document.lastModified;
  
  document.getElementById("lastModified").innerHTML= year;