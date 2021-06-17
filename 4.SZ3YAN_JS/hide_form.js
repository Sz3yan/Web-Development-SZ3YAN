$("#seeAnotherField").change(function() {
    if ($(this).val() == "email") {
        $('#emailshow').show();
        $('#emailshow').attr('required','');

        $('#colabshow').hide();
        $('#hishow').hide();
        $('#colabshow').removeAttr('required');
        $('#hishow').removeAttr('required');
    } 

    else if (($(this).val() == "colab")) {
        $('#colabshow').show();
        $('#colabshow').attr('required','');

        $('#emailshow').hide();
        $('#hishow').hide();
        $('#emailshow').removeAttr('required');
        $('#hishow').removeAttr('required');
    }

    else if (($(this).val() == "hi")) {
        $('#hishow').show();
        $('#hishow').attr('required','');

        $('#emailshow').hide();
        $('#colabshow').hide();        
        $('#emailshow').removeAttr('required');
        $('#colabshow').removeAttr('required');
    }
    
    else {
        $('#emailshow').hide();
        $('#colabshow').hide();
        $('#hishow').hide();
        $('#emailshow').removeAttr('required');
        $('#colabshow').removeAttr('required');
        $('#hishow').removeAttr('required');
    }

});

$("#seeAnotherField").trigger("change");