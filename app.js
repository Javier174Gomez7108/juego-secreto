
function intentoUsuario(){
    numeroDeUsuario = validarNroUsuario();
    console.log(numeroSecreto == numeroDeUsuario);
    return;
}

function agregaElementoTexto(elem , text){

    let elemento = document.querySelector(elem);
    elemento.innerHTML = text ;
    
    return;
}

function generaNroAleatorio (limite){

    return Math.floor(Math.random()*limite)+1;

}

numeroSecreto = generaNroAleatorio(5);
console.log(numeroSecreto);

agregaElementoTexto('h1', 'Juego del nro secretooooo');

agregaElementoTexto('p', 'Por favor, indica un nro del 1 al 10');

function validarNroUsuario (){

let nroDeUsuario = document.getElementById('nroIngresado').value;
console.log(nroDeUsuario);
return nroDeUsuario;
}


