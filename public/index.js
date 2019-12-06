var index = (function () {

    var cantidadElefantes = 2;
    var template = " elefantes se balanceaban sobre la tela de una araña <br> como ve&iacute;an que resist&iacute;an fueron a llamar a otro elefante,"


    function llamarOtroElefante() {
        var cantidadElefantesEnLetras = NumeroALetras(cantidadElefantes)
        var cantidadElefantesEnLetrasMin = cantidadElefantesEnLetras.toLowerCase();
        var frase = cantidadElefantesEnLetrasMin + template
        var html = '<p>' + frase + '<p>'
        $("#letra-container").append(html);
        cantidadElefantes++;
    }

    function primerosElefantes() {
        while (cantidadElefantes < 100) {
            llamarOtroElefante();
        }
    }

    function initScroll() {
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                llamarOtroElefante();
            }
        });
    }

    function init() {
        primerosElefantes();
        initScroll();
    }

    return {
        init: init
    }
})();