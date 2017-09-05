$(document).ready(function(){
    console.log('jquery sourced.');

    $('#submitButton').on('click', function(){
        var firstName = $('#firstName').val();
        console.log(firstName);
    });
});