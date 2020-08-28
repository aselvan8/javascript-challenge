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

function filterData(data, key, input) {
    if(input !== "") {
        return data.filter(function(ufosighting) {
            if (ufosighting[key] === input) {
                return true;
            }
        });
    }
    return data;
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

    filteredData = tableData;

    filteredData = filterData(filteredData, 'datetime', inputDateValue);
    filteredData = filterData(filteredData, 'city', inputCityValue);
    filteredData = filterData(filteredData, 'state', inputStateValue);
    filteredData = filterData(filteredData, 'country', inputCountryValue);
    filteredData = filterData(filteredData, 'shape', inputShapeValue);
    // remove info from table
    tbody.html("");

    filteredData.forEach((ufoinfo) => {
        var row = tbody.append('tr');
        Object.entries(ufoinfo).forEach(([key, value]) => {
            var cell = row.append('td').text(value);
        });
    });

};

button.on("click", runEnter);
form.on("submit",runEnter);