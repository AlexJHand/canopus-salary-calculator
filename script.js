$(document).ready(function(){
    console.log('jquery sourced.');

    $('#submitButton').on('click', function(){
        var firstName = $('#firstName').val();
        console.log(firstName);
        var $row = $('<tr></tr>');
        $row.append('<td>' + firstName + '</td>');
        // <tr><td>Name</td></tr>
        $('#employeeData').append($row); 
        // Also written as...
        //$('#employeeData').append('<tr><td>' + firstName + '</td></tr>');

    });
});