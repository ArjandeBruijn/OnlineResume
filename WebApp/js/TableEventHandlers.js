

function watch(targetElement, triggerFunction) {
    /// store the original html to compare with later
    var html = targetElement.innerHTML;
    /// start our constant checking function
    setInterval(function () {
        /// compare the previous html with the current
        if (html != targetElement.innerHTML) {
            /// trigger our function when a change occurs
            triggerFunction();
            /// update html so that this doesn't keep triggering
            html = targetElement.innerHTML;
        }
    }, 500);
}
function whenChangeHappens() {

    table = document.getElementById("LUCtable");
    // Set the from-from-props

    for (var i = 1, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop

        var sum = 0;

        for (var j = 1, col; col = row.cells[j]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            sum += parseFloat(table.rows[i].cells[j].innerText);
        }
        table.rows[i].cells[i].innerText = Math.round((table.rows[i].cells[i].innerText - (sum - 1)) * 100) / 100;


    }
}
watch(document.getElementById('LUCtable'), whenChangeHappens);