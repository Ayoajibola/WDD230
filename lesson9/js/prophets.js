const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.table(jsonObject); // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      

      let image = document.createElement("img");

      image.setAttribute("src", prophets[i].imageurl);

      image.setAttribute("alt", prophets[i].name + prophets[i].lastname + prophets[i].order);

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;

      card.appendChild(h2);

      p.textContent = "Date of birth: " + prophets[i].birthdate;
      card.appendChild(p);

     // p2.textContent = "Place of birth: " + prophets[i].birthplace;
      //card.appendChild(p2);





      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  });
