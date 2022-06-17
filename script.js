// Your code here
let table = document.getElementsByTagName("table");

const newTr = document.createElement("tr");

const tr = document.getElementsByTagName("tr");

const newTd = document.createElement("td");

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
    // console.log("the loop is running");
  }
  table[0].appendChild(row);
}

makeRow();

const addedRow = document.getElementById("add-row");

addedRow.addEventListener("click", makeRow);
