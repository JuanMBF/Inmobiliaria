$(document).ready(function() {
    $('#filter-form').on('submit', function(e) {
        e.preventDefault(); 

        var type = $('#type').val();
        var price = $('#price').val();

        $('.propiedad').each(function() {
            var propertyType = $(this).data('type');
            var propertyPrice = $(this).data('price');

            var show = (type === 'all' || type === propertyType) && (!price || propertyPrice <= price);
            $(this).toggleClass('hidden', !show);
        });
    });

    $('.propiedad img').hover(
        function() { $(this).addClass('zoom'); },
        function() { $(this).removeClass('zoom'); }
    );
    var d = new Date();
            var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            var today = weekday[d.getDay()];
            $('.fila-resaltar tr').removeClass('resaltado');
            $('.fila-resaltar tr:contains("' + today + '")').addClass('resaltado');
});