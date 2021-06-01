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


document.getElementById("currentDate").innerHTML = "Last updated " + document.lastModified;

document.getElementById("lastModified").innerHTML = year;


/* const aside = document.querySelector("#fiday-only");

if(dayNames[d.getDay()] = Tuesday){
        //Create the elements to display Friday message.
      let aside = document.createElement("aside");
      
      //Display the appropriate message in the element.
      aside.textContent = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
         
    }*/
  




















   display: block;
 }
}