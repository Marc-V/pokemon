var num ="";

function drawPoke(){
    for(var i=1; i<152;i++){
        num += '<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png">';

    }
    document.getElementById('pokedex').innerHTML = num;
}

drawPoke();
