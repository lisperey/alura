var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);


function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

var sentido = 1;
var x = 20;
var r = 20;
var crescimento = 1;
function atualizaTela() {

    limpaTela()
    if(r > 20){
        crescimento = -1;

    }
    else if(r < 10){
        crescimento = 1;
    }
    if( x > 600){
        sentido = -1;
    }
    else if( x < 0){
        sentido = 1;
    }
    desenhaCirculo(x, 20, r);
    x = x + sentido;
    r = r + crescimento;
    
   
    

}

function leDoTeclado(evento){

}

document.onkeydown = leDoTeclado;




setInterval(atualizaTela, 20);



