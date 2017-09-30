$( document ).ready(function() {
    $('#toggle-1').click(function() {
        if ($('#toggle-1').is(':checked')) {
            $('.warning').hide()
        } else {
            $('.warning').show()
        }
    });
});

