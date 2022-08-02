// Scroll Barra de Menu
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

// Barra lateral

  //mostrar barra oculta
$('.bt-abrir').click(function(){
  $('.menu-oculto').toggleClass('menu-abrir');
});

  //fecha a barra oculta
$('.bt-sair').click(function(){
  $('.menu-oculto').removeClass('menu-abrir');
});

  //redireciona os links
$('.menu a').click(function(){
  $('.menu-oculto').removeClass('menu-abrir');
});