var input = document.getElementById("AGBInput");
var table = document.getElementById("AGBTable");

var rows = Array.prototype.slice.call(table.querySelectorAll("tr:not(.header)"));  

function AGBFunction() {
  // Always trim user input
  var filter = input.value.trim().toUpperCase();

  // Loop the rows
  rows.forEach(function(row) {
  
    // You really don't need to know if the search criteria
    // is in the first or second cell. You only need to know
    // if it is in the row.
    var data = "";
    // Loop over all the cells in the current row and concatenate their text
    Array.prototype.slice.call(row.getElementsByTagName("td")).forEach(function(r){
      // Don't use .innerHTML unless there is HTML. Use textContent when there isn't.
      data += r.textContent;  
    });

    // Check the string for a match and show/hide row as needed
    // Don't set individual styles. Add/remove classes instead
    if(data.toUpperCase().indexOf(filter) > -1){
      // show row
      row.classList.remove("hidden");
    } else {
      // hide row
      row.classList.add("hidden");
    }
  });
  
}