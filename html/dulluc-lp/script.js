var timescroll = 1000

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 

    //Totals de Pixels Scrolados
      scrollTop: targetOffset - 155
    
      //Velocidade da Animação
    }, timescroll);
});


