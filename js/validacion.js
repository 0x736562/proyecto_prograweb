$(function () {
    // regex de validacion de correo
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    var rutRegex = /[^0-9]/g;
    var dvRegex = /(?!K|k)[^0-9]/g;

    hideAlert();

    // limitar solo numeros en rut
    $('.txt-rut').keyup(function () {
        $(this).val($(this).val().replace(rutRegex, ''));
    });

    // limitar caracteres en dv
    $('.txt-dv').keyup(function () {
        $(this).val($(this).val().replace(dvRegex, ''));
    })

    $('.btn-aceptar').click(function () {
        if (!$('.txt-rut').val()) {
            showAlert('Falta el RUT.');
            $('.txt-rut').focus();
        }
        else if (!$('.txt-dv').val()) {
            showAlert('Falta el digito verificador.');
            $('.txt-dv').focus();
        }
        else if (!$.trim($('.txt-nombre').val())) {
            showAlert('Falta el nombre');
            $('.txt-nombre').focus();
        }
        else if (!emailRegex.test($('.txt-email').val())) {
            showAlert('El formato del correo no es correcto');
            $('.txt-email').focus();
        }
        else {
            hideAlert();
            alert('Usuario creado.');
        }
    });

    $('.btn-limpiar').click(function () {
        hideAlert();
        $('.txt-rut, .txt-dv, .txt-nombre, .txt-email').val('');
        $('.txt-rut').focus();
    });

    function hideAlert() { $('.alert').hide(); }

    function showAlert(texto) {
        $('.alert').text(texto);
        $('.alert').show();
    }
})