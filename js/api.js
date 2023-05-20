$(function () {
    let usd = false;
    $(".btnUSD").click(function () {
        usd = !usd;

        if (!usd) {
            window.location.reload();
        }
        else if (usd) {
            $(this).text('Cambiar a CLP');
            $.getJSON('https://mindicador.cl/api', function (data) {
                $(".text-muted").each(function () {
                    var precio = $(this).text();
                    var precioNuevo = (parseFloat(precio.replace(/\$|\./g, '')) / data.dolar.valor);
                    $(this).text('$' + precioNuevo.toFixed(2));
                });
            }).fail(function () {
                console.log('Error al consumir la API!');
            });
        }
    });
});