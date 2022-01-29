//Title constructor function that creates a Title object
function Title(t1) {
    this.mytitle = t1;
}
Title.prototype.getName = function() {
    return (this.mytitle);
}

//Main Content start..
function disableButton() {
    $("button").prop("disabled", true);
    $("button").css("background-color", "grey");
}

function cbEvent(row) {
    if ($("#cb" + row).is(':checked')) {
        $("#row" + row).css("background-color", "yellow");
        $("button").prop("disabled", false);
        $("button").css("background-color", "orange");
    } else {
        $("#row" + row).css("background-color", "");
    }
    if (!$("#cb1").is(':checked') && !$("#cb2").is(':checked') &&
        !$("#cb3").is(':checked')) {
        disableButton();
    }
}
$("#hide1").click(function() {
    $("#textArea1").toggle();
});
$("#hide2").click(function() {
    $("#textArea2").toggle();
});
$("#hide3").click(function() {
    $("#textArea3").toggle();
});

function addRow() {


    var tableRef = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    var newRow = tableRef.insertRow(tableRef.rows.length);

    var colCount = tableRef.rows[0].cells.length;


    for (var i = 0; i < 9; i++) {

        var newCell = newRow.insertCell(i);
        var newText = document.createTextNode("new one");
        newCell.appendChild(newText)
    }
}

function delTableRow() {
    document.getElementsByTagName("tr")[3].remove();
}
//Main Content ends..

var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");