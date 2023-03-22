document.getElementById("btn").addEventListener("click", btnClicked);

let outputEl = document.getElementById("output");

function btnClicked() {
  let firstname = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastName").value;
  let selection = document.getElementById("menu-select").value;
  outputEl.innerHTML = firstname;
  outputEl.innerHTML = lastname;
  if (selection === "displayAll") {
    display();
  } else if (selection === "randName") {
    random();
  } else if (selection === "addName") {
    add();
  } else if (selection === "removeName") {
    remove();
  } else if (selection === "removeNameI") {
    removeI();
  }
}

function display() {}

function random() {
  console.log("2");
}

function add() {
  console.log("3");
}

function remove() {
  console.log("4");
}

function removeI() {
  console.log("5");
}
