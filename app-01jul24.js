
//esta funcion mostrarà true o false al comparar nro secreto con nro usuario
function intentoUsuario(){

   
    numeroDeUsuario = validarNroUsuario();

    

    if (numeroSecreto === numeroDeUsuario){
        agregaElementoTexto('p',`ACERTASTE EL NRO SECRETO EN ${intentos} ${(intentos==1) ? "VEZ" : "VECES"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
        else{
            if (numeroDeUsuario > numeroSecreto){
                agregaElementoTexto('p', 'El numero ingresado es MAYOR que el nro secreto');
            }
            else{
                agregaElementoTexto('p', 'El numero ingresado es MENOR que el nro secreto');
                }
            console.log(intentos++); 
        
            limpiarCaja();
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
   
    
    let nroSecreto =  Math.floor(Math.random()*lim)+1;

if (listaNroSorteado.includes(nroSecreto) ){

    nroSecreto = generaNroAleatorio(lim);
return nroSecreto;

}
else{

    listaNroSorteado.push(nroSecreto);

}    

console.log(listaNroSorteado);
console.log(listaNroSorteado.length);



if (listaNroSorteado.length == 10){

    listaNroSorteado.length = 0;
}


return nroSecreto







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

    agregaElementoTexto('h1', 'Juego del NUMERO SECRETO');
    agregaElementoTexto('p', `Por favor, indica un nro del 1 al ${cantMaxNros}` );
    numeroSecreto = generaNroAleatorio(cantMaxNros);
    console.log(numeroSecreto);
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}


let cantMaxNros = 20;

let numeroSecreto = 0;

let intentos = 0;

let listaNroSorteado = [];

agregaElementoTexto('h1', 'Juego del nro secretooooo');


agregaElementoTexto('p', 'Por favor, indica un nro del 1 al 10');


condicionesIniciales();
intentoUsuario();


