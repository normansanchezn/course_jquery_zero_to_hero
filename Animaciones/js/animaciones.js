(function() {

    var $cajaRoja = $('.cajaRoja');
    
    function mover(dir) {

        $cajaRoja.clearQueue();

        switch (dir) {
            case 'arr':
                $cajaRoja.animate({
                    top: '-=50px'
                }, 200);
                break;
            case 'aba':
                $cajaRoja.animate({
                    top: '+=50px'
                }, 200);
                break;
            case 'der':
                $cajaRoja.animate({
                    left: '+=50px'
                }, 200);
                break;
            case 'izq':
                $cajaRoja.animate({
                    left: '-=50px'
                }, 200);
                break;
            default:
                $cajaRoja.animate({
                    top: '0px',
                    left: '0px'
                }, 200)
        }
    }

    $('button').on('click', function() {
        var dir = $(this).data('dir');

        mover(dir);
    });

})();