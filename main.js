document.getElementById("btn").addEventListener("click", btnClicked);

let outputEl = document.getElementById("output");
let names = ["hidious", "ugly", "poor", "mean", "hateful", "godly"];
function btnClicked() {
  let selection = document.getElementById("menu-select").value;
  let firstname = document.getElementById("f").value;
  let lastname = document.getElementById("l").value;

  if (selection === "displayAll") {
    display(names, firstname, lastname);
  } else if (selection === "randName") {
    random(names, firstname, lastname);
  } else if (selection === "addName") {
    add(names, firstname, lastname);
  } else if (selection === "removeName") {
    remove(names);
  } else if (selection === "removeNameI") {
    removeI(names, firstname, lastname);
  }
}

function display(name, first, last) {
  outputEl.innerHTML = "";
  count = 0;
  for (n = 0; n < name.length; n++) {
    outputEl.innerHTML += `<div>${count}:${first} "${name[n]}" ${last} </div>`;
    count++;
  }
}

function random(name, first, last) {
  outputEl.innerHTML = "";
  let rand = randomInt(0, name.length);
  outputEl.innerHTML += `<div>${rand}: ${first} ${name[rand]} ${last} </div>`;
}

function add(name, first, last) {
  outputEl.innerHTML = "";
  let addname = prompt("enter a nickname to add to the list");
  name.push(addname);
  outputEl.innerHTML += `<div>${
    name.length - 1
  }: ${first} "${addname}" ${last} </div>`;
}

function remove(name) {
  outputEl.innerHTML = "";
  outputEl.innerHTML += `<div> the name"${name.length - 1}: ${
    name[name.length - 1]
  }" was removed </div>`;
  name.pop(name.length - 1);
}

function removeI(name, first, last) {
  let remove = prompt("type the number of the name to remove").value;
  outputEl.innerHTML = "";
  outputEl.innerHTML += `<div> the name"${remove}: ${name[remove]}" was removed </div>`;
  name.pop(remove);
}
