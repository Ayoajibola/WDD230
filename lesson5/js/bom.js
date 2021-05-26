const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value != "") {
    //Create the elements provided by user in the list.
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");

    //Change the value textContent.
    li.textContent = input.value;
    deletebutton.textContent = "❌";

    li.append(deletebutton);
    output.append(li);

    deletebutton.addEventListener("click", function () {
      // this line of code should use the removeChild() (Links to an external site.) method
      output.removeChild(li);
      input.focus();
    });

    input.value = "";
    input.focus;
  }
});
