// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// to append table in html
var tbody = d3.select("tbody");

var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input the data into the HTML
var table = (dataInput) => {
    dataInput.forEach(ufoSighting => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSighting[column])
        )
    });
}

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node and Get the value property of the input element
    var inputDateValue = d3.select("#datetime").property("value");
    var inputCityValue = d3.select("#city").property("value").toLowerCase();
    var inputStateValue = d3.select("#state").property("value").toLowerCase();
    var inputCountryValue = d3.select("#country").property("value").toLowerCase();
    var inputShapeValue = d3.select("#shape").property("value").toLowerCase();

    console.log("Date: " + inputDateValue +"City: " +inputCityValue +"State: " + inputStateValue +"Country: "+ inputCountryValue);
    console.log(tableData);


    var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue && tableData.city === inputCityValue && tableData.state === inputStateValue && tableData.country === inputCountryValue);

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