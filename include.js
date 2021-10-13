function ValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(function() {

//     var childs = $('.input-group-append').children().children();
//     // for (let index = 0; index < childs['length']; index++) {
//     //     console.log(childs[index]);
//     // }
//     $.each(childs, function(indexInArray, valueOfElement) {
//         console.log(valueOfElement);
//     });

    $('#login').keyup(function(e) {
        if ($(this).val() == '') {
            $('#log').attr('class', 'input-group-text glass');
            $('#log i').attr('class', 'fa fa-sad-tear text-white');
            $(this).css('border-color', '');
            return;
        }
        if (ValidateEmail($(this).val())) {
            $('#log').attr('class', 'input-group-text bg-success');
            $('#log i').attr('class', 'fa fa-smile text-white');
            $(this).css('border-color', '');
            return;
        } else {
            $('#log').attr('class', 'input-group-text bg-danger');
            $('#log i').attr('class', 'fa fa-angry text-white');
            $(this).css('border-color', 'red');
            return;
        }
    });
    $('#password').keyup(function(e) {
        if ($(this).val().length < 8) {
            $('#pwd').attr('class', 'input-group-text glass');
            $('#pwd i').attr('class', 'fa fa-sad-tear text-white');
            $(this).css('border-color', '');
            return;
        }
        $('#pwd').attr('class', 'input-group-text bg-success');
        $('#pwd i').attr('class', 'fa fa-smile text-white');
        $(this).css('border-color', '');
        return;

    });
});
