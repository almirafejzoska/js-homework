// Homework
// Create a dynamic table

// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
let table = document.createElement('table');

function myTable(rows, columns) {
 
  for (let i = 0; i < rows; i++) {
    let tableRow = document.createElement('tr');
    for (let m = 0; m < columns; m++) {
      let tableData = document.createElement('td');
      tableData.style.border = '1px solid black';
      tableData.textContent = `Row ${i + 1} - Column ${m + 1}`;
      tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
  }
  return table;
}

btn.addEventListener("click", function() {
  let rows = prompt("Enter the number of rows:");
  let columns = prompt("Enter the number of columns:");
  let table = myTable(rows, columns);
  document.body.appendChild(table);
});

table.style.border = '1px solid black';