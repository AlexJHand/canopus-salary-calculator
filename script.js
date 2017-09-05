var totalSalary = 0;
var people = [];

$(document).ready(function(){
    console.log('jquery sourced.');

    $('#submitButton').on('click', function(){
        people.push(getPerson());
        displayAllPeople();

        var monthlyAverage = totalSalary / 12;
        // Limit to two decimals
        monthlyAverage = Math.floor(monthlyAverage * 100) / 100; // Also look at toFixed
        // append the monthly average to the DOM
        $('#averageTotal').html('<strong>' + monthlyAverage + '</strong>');

        // Clear all values
        $('.salaryInput').val('');
    });
});

function displayAllPeople() {
    $('#employeeData').empty();
    totalSalary = 0;
    for(var i = 0; i < people.length; i += 1) {
        var person = people[i];
        var $row = $('<tr></tr>');

        // First, last, job title, id, salary
        $row.append('<td>' + person.firstName + '</td>');
        $row.append('<td>' + person.lastName + '</td>');
        $row.append('<td>' + person.jobTitle + '</td>');
        $row.append('<td>' + person.id + '</td>');
        $row.append('<td>' + person.salary + '</td>');

        var salaryNumber = parseFloat(person.salary);
        totalSalary = totalSalary + salaryNumber;

        // Put the row on the DOM
        $('#employeeData').append($row);
    }
}

function getPerson() {
    var person = {};
    person.firstName = $('#firstName').val();
    person.lastName = $('#lastName').val();
    person.jobTitle = $('#jobTitle').val();
    person.id = $('#employeeId').val();
    person.salary = $('#salary').val();
    return person;
}