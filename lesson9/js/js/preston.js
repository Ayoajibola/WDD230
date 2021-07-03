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

let pancakeDay = weekday[d.getDay()];
if (pancakeDay == weekday[5]) {
  document.getElementById("friday-only").innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
}



const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.table(jsonObject); // temporary checking for valid response and data parsing

   

      for (let i = 0; i < 3; i++) {
     
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let image = document.createElement("img");
  
        image.setAttribute("src", towns[i].photo);
  
        image.setAttribute(
          "alt",
          towns[i].name
        );
  
        h2.textContent = towns[i].name;
  
        card.appendChild(h2);
  
        p.textContent = "Name of Town: " + towns[i].name;
        card.appendChild(p);
  
        p2.textContent = towns[i].motto;
        card.appendChild(p2);
  
        p3.textContent ="Current population: " + towns[i].currentPopulation;
        card.appendChild(p3);
  
        p4.textContent ="Average rainfall: " + towns[i].averageRainfall;
        card.appendChild(p4);
  
  
  
        card.appendChild(image);
  
        document.querySelector("div.cards").appendChild(card);
      
      }
    });
  
      
