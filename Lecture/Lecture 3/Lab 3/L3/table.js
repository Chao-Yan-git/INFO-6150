
function addRow(){


    var tableRef = document.getElementById("companyTable").getElementsByTagName('tbody')[0];

    var newRow = tableRef.insertRow(tableRef.rows.length);

    var colCount = tableRef.rows[0].cells.length;


    for (var i=0 ; i < colCount ; i++){


        var newCell = newRow.insertCell(i);
        var newText = document.createTextNode("New Row");
        newCell.appendChild(newText)
    }



}