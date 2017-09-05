var totalSalary = 0;

$(document).ready(function(){
    console.log('jquery sourced.');

    $('#submitButton').on('click', function(){
        var firstName = $('#firstName').val();
        console.log(firstName);
        var $row = $('<tr></tr>');
        $row.append('<td>' + firstName + '</td>');
        // <tr><td>Name</td></tr>

        // First, last, job title, id, salary
        var lastName = $('#lastName').val();
        $row.append('<td>' + lastName + '</td>');

        var jobTitle = $('#jobTitle').val();
        $row.append('<td>' + jobTitle + '</td>');

        var id = $('#employeeId').val();
        $row.append('<td>' + id + '</td>');

        var salary = $('#salary').val();
        $row.append('<td>' + salary + '</td>');

        console.log(salary);
        console.log(parseInt(salary));
        console.log(parseFloat(salary));
        var salaryNumber = parseFloat(salary);
        totalSalary = totalSalary + salaryNumber;

        var monthlyAverage = totalSalary / 12;
        // Limit to two decimals
        monthlyAverage = Math.floor(monthlyAverage * 100) / 100; // Also look at toFixed
        // append the monthly average to the DOM
        $('#averageTotal').html('<strong>' + monthlyAverage + '</strong>');

        // Put the row on the DOM
        $('#employeeData').append($row);
        // Also written as...
        //$('#employeeData').append('<tr><td>' + firstName + '</td></tr>');

        // Clear all values
        $('.salaryInput').val('');
    });
});