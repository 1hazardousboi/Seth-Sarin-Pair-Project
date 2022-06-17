// Your code here
let table = document.getElementsByTagName("table")[0];

const newTr = document.createElement("tr");

const tr = document.getElementsByTagName("tr")[0];

const newTd = document.createElement("td");

const td = document.getElementsByTagName("td")[0];

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 8; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
    // console.log("the loop is running");
  }
  table.appendChild(row);
}

makeRow();

const addedRow = document.getElementById("add-row");

addedRow.addEventListener("click", makeRow);

table.addEventListener("click", colorize);

selector = document.getElementsByTagName("select")[0];

let chosenColor = "red";

selector.addEventListener("change", function (event) {
  chosenColor = event.target.value;
});

function colorize(event) {
  const target = event.target;
  console.log("CLICKED WHOOO");
  if (event.target.tagName === "TD") {
    if (target.className.length) {
      target.className = "";
    } else {
      target.className = chosenColor;
    }
  }
}
