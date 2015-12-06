$(function(){

$('.pokeBoton .btn').click(function(event){
  event.preventDefault();
  callToPokemon();
});

function callToPokemon (){
  var randomNum = getRandomInt(1,700)

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

    $.ajax('http://pokeapi.co/api/v1/sprite/'+randomNum+'/' )
      .done(function(data){
        var pokename = data.pokemon.name;
        var $name = $('#pokenombre h1');
        var pokenameUpper = pokename.toUpperCase();
        $name.text(pokenameUpper);

        var img = data.image;
        var $imagenPoke = $('#imagenPo img');
        $imagenPoke.attr('src', 'http://pokeapi.co' + img);
      })
    $.ajax('http://pokeapi.co/api/v1/description/'+randomNum+'/')
        .done(function(data){
          var datos = data.description;
          var $descri = $('#datosPoke p')
          $descri.text(datos);
        })
}



});
