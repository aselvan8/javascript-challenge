// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// to append table in html
var tbody = d3.select("tbody");

tableData.forEach((ufoinfo) => {
    var row = tbody.append('tr');
    Object.entries(ufoinfo).forEach(([key, value]) => {
        var cell = row.append('td').text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node and Get the value property of the input element
    var inputDateValue = d3.select("#datetime").property("value");

    // var inputCityValue = d3.select("#city").property("value");
    // var inputStateValue = d3.select("#state").property("value");
    // var inputCountryValue = d3.select("#country").property("value");
    // var inputShapeValue = d3.select("#shape").property("value");

    // var inputCommentValue = d3.select("#comment").property("value");

    console.log("inputdatevalue: ", inputDateValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoinfo => ufoinfo.datetime === inputDateValue);

    console.log(filteredData);

    // remove info from table
    tbody.html("");

    filteredData.forEach((ufoinfo) => {
        var row = tbody.append("tr");
        Object.entries(ufoinfo).forEach(([key, value]) => {
            var cell = row.append("td").text(value);
        });
    });


};

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);