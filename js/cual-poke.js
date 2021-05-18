$(document).ready(function(){

    
        num="";
        for(var i=1; i<153; i++){
            num += '<img id="'+i+'" src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png">';
        }
        
        $('#container').html(num);


    $('img').click(function(){
        $.get("https://pokeapi.co/api/v2/pokemon/"+this.id+"/", function(res) {
            console.log(res);
            var types="";
            for(let i=0; i<res.types.length; i++){
                var table_type = "<tr><td>"+res.types[i].type.name+"</td></tr>";
                types += table_type;
            }
            $('#td').html('Type')
            $('#types').html(types);
            $('#weight').text("Weight: "+(res.weight*0.1).toFixed(1)+'kg');
            $('#height').text("Height: "+(res.height*0.1).toFixed(1)+'m');

            $('header').text(res.name);

            $('test').html(num);
        }, "json");
    })
})

