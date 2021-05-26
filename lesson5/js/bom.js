const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value != "") {
    //Create the elements to display user input.
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");

    //Change the value of created elements based on user input.
    li.textContent = input.value;
    deletebutton.textContent = "❌";

    li.append(deletebutton);
    output.append(li);

    // Remove initial input after deletebuttion is clicked
    deletebutton.addEventListener("click", function () {
      output.removeChild(li);
      input.focus();
    });

    input.value = "";
    input.focus();
  }
});
