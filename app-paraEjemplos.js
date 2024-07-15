
//esta funcion mostrarà true o false al comparar nro secreto con nro usuario
function eleccionUsuario(){

   
    numeroDeUsuario = validarNroUsuario();

    

    if (numeroDeUsuario = 1){

        console.log(nroDeUsuario);
    } 
        

return;
}

function limpiarCaja(){
    document.querySelector('#nroIngresado').value= "";
    
}


//esta funcion le asigna a un elemento dado (elem), el texto (text) ingresado como parametro
function agregaElementoTexto(elem , text){

    let elemento = document.querySelector(elem);
    elemento.innerHTML = text ;
    
    return;
}

function generaNroAleatorio(lim){
   
    
    return  Math.floor(Math.random()*lim)+1;

}

function validarNroUsuario (){
    //esta funcion devuelve el numero ingresado por el input
    let nroDeUsuario = parseInt(document.getElementById('nroIngresado').value);
    console.log(nroDeUsuario);
    return nroDeUsuario;
    }
function reiniciarJuego(){

    limpiarCaja();
    condicionesIniciales();
}    
    
function condicionesIniciales(){

    agregaElementoTexto('h1', 'EJERCICIOS');
    agregaElementoTexto('h2', '1) INDICE DE MASA CORPORAL');
    agregaElementoTexto('h3', '2) AREA CUADRADO');
    agregaElementoTexto('p', 'Por favor, indique que opcion elige (1/2) :');
    numeroSecreto = generaNroAleatorio(10);
    console.log(numeroSecreto);
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}



//genero el numero secreto
let numeroSecreto = 0;

let intentos = 0;

agregaElementoTexto('h1', 'EJERCICIOS');
agregaElementoTexto('h2', '1) INDICE DE MASA CORPORAL');
agregaElementoTexto('h3', '2) AREA CUADRADO');


agregaElementoTexto('p', 'Por favor, que opcion elige (1/2) : ');


condicionesIniciales();
intentoUsuario();


