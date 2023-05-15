$(function(){
    let usd = false;
    $(".btnUSD").click(function() {
        usd = !usd;

        if (!usd) {
            window.location.reload();
        }
        else if (usd) {
            $.getJSON('https://mindicador.cl/api', function(data) {
                $( ".text-muted" ).each(function() {
                    console.log($(this).text());
                    var precio = $(this).text();
                    console.log(parseFloat(precio.replace(/\$|\./g, '')) * data.dolar.valor);
                    var precioNuevo = (parseFloat(precio.replace(/\$|\./g, '')) / data.dolar.valor);
                    $(this).text('$'+precioNuevo.toFixed(2));
                });
            }).fail(function() {
                console.log('Error al consumir la API!');
            });
        }
    });
});