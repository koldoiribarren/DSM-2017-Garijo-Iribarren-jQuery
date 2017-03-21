jQuery(document).ready(function(){

	$('#content div').hide();
    /*$('#precio').attr('id','current');*/
    $('#precio').fadeIn();

    $('.descripcion_panel').hide();
    $('.imagen_panel').hide();
    $('.precio_panel').hide();

    var seleccionado;
    var unidades1 = 1;
    var unidades2 = 2;
    var unidades3 = 3;
    var total = 0;
 
    $('#tabs a').on('click',function(e){
        e.preventDefault();
        $('#content div').hide();
        $('#tabs li').attr('id','');
        $(this).parent().attr('id','current');
        $('#' + $(this).attr('title')).fadeIn();
    });

    $('.buy').on('click',function(){
        seleccionado = $(this).parent().parent().attr('id');

        $('.descripcion_panel').find('div').empty();

        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');
        
        if(seleccionado == "Genuino_ZERO"){

            $('.descripcion_panel').find('div').append('ZERO');

            $('.imagen_panel').find('.main_image').attr('src','img/genuino01.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/genuino01.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/genuino02.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/genuino03.jpeg');

            $('.precio_panel').find('input').attr('value',unidades1);
            $('.precio_panel').find('input').val(unidades1);

        } else if(seleccionado == "Arduino_UNO"){

            $('.descripcion_panel').find('div').append('UNO');

            $('.imagen_panel').find('.main_image').attr('src','img/arduino11.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/arduino11.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/arduino12.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/arduino13.jpeg');

            $('.precio_panel').find('input').attr('value',unidades2);
            $('.precio_panel').find('input').val(unidades2);

        } else if(seleccionado == "Genuino_101"){

            $('.descripcion_panel').find('div').append('101');

            $('.imagen_panel').find('.main_image').attr('src','img/genuino21.jpeg');
            $('.imagen_panel').find('.small_1').attr('src','img/genuino21.jpeg');
            $('.imagen_panel').find('.small_2').attr('src','img/genuino22.jpeg');
            $('.imagen_panel').find('.small_3').attr('src','img/genuino23.jpeg');

            $('.precio_panel').find('input').attr('value',unidades3);
            $('.precio_panel').find('input').val(unidades3);

        }

        $('.descripcion_panel').show();
        $('.imagen_panel').hide();
        $('.precio_panel').hide();
    });

    $('#descripcion').on('click',function(){
        $('.descripcion_panel').show();
        $('.imagen_panel').hide();
        $('.precio_panel').hide();
    });

    $('#imagen').on('click',function(){
        $('.descripcion_panel').hide();
        $('.imagen_panel').show();
        $('.precio_panel').hide();
    });

    $('#precio').on('click',function(){
        $('.descripcion_panel').hide();
        $('.imagen_panel').hide();
        $('.precio_panel').show();
    });

    $('.actualizar_carrito').on('click',function(){

        if(seleccionado == "Genuino_ZERO"){

            alert(('#Genuino_ZERO').find('div').find('img').attr('data-precio'));
            unidades1 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades1);
            $('.precio_panel').find('input').val(unidades1);

        } else if(seleccionado == "Arduino_UNO"){

            unidades2 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades2);
            $('.precio_panel').find('input').val(unidades2);

        } else if(seleccionado == "Genuino_101"){

            unidades3 = $('.precio_panel').find('input').val();
            $('.precio_panel').find('input').attr('value',unidades3);
            $('.precio_panel').find('input').val(unidades3);

        }

        total = (unidades1*('#Genuino_ZERO').find('img').attr('data-precio'))+(unidades2*('#Arduino_UNO').find('img').attr('data-precio'))+(unidades3*('#Genuino_101').find('img').attr('data-precio'));
        $('.carrito').find('p').empty();
        $('.carrito').find('p').append('Total: '+total+'€');

    });

});