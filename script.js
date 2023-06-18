function insert_Row() {
  //Write your code here
  const newRow = sampleTable.insertRow(0);
  const newRowCell1 = newRow.insertCell(0);
  newRowCell1.innerHTML = "New Cell1"
  const newRowCell2 = newRow.insertCell(1);
  newRowCell2.innerHTML = "New Cell2"

}

let sampleTable = document.getElementById("sampleTable");


