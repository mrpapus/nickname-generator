document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let selection = document.getElementById("menu-select").value;
  let firstname = document.getElementById("firstName");
  let lastname = document.getElementById("lastName");

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

function display() {
  console.log("1");
}

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
