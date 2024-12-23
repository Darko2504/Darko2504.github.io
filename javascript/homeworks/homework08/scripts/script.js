function createTable() {
  let rows = document.getElementById(`rows`).value;
  let columns = document.getElementById(`columns`).value;

  generatedTable = `<table style = "border : 3px solid black;">`;
  for (let i = 1; i <= rows; i++) {
    generatedTable += `<tr>`;
    for (let j = 1; j <= columns; j++) {
      generatedTable += `<td style = "border: 1px solid black;">Row-${i} Column-${j}</td>`;
    }
    generatedTable += `</tr>`;
  }
  generatedTable += `</table>`;

  let table = document.getElementById(`myDiv`);
  table.innerHTML = generatedTable;
}
let button = document.getElementById(`table`);
button.addEventListener(`click`, createTable);
