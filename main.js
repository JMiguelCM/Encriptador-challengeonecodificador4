// Declaración de variables para seleccionar los elementos del HTML
var botonEncriptar = document.querySelector('.btn-encriptar');
var botonDesencriptar = document.querySelector('.btn-desencriptar');
var munieco = document.querySelector('.contenedor-munieco');
var h3 = document.querySelector('.contenedor-h3');
var parrafo = document.querySelector('.contenedor-parrafo');
var resultado = document.querySelector('.texto-resultado');
// Asignación de eventos click a cada uno de los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

// Función encriptar
function encriptar() {
    // Oculta elementos del HTML
    ocultarAdelante();
    // Recupera el texto del área de texto
    var area = recuperarTexto();
        ocultarAdelante();  
        // Asigna el resultado de la encriptación al elemento HTML resultado
        resultado.textContent = encriptarTexto(area);
        //bloquea acentos
        var expresion = /^[a-zA-Zch\s0-9]+$/;
        if (!expresion.test(area)) {
        alert("No se permiten acentos");
        location.reload();
}

}
function desencriptar(){
    ocultarAdelante();  
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
    // console.log(resultado);
}
function recuperarTexto (){
    var area = document.querySelector('.area');
    return area.value;

}

function ocultarAdelante() {
    munieco.classList.add('ocultar');
    h3.classList.add('ocultar');
    parrafo.classList.add('ocultar');
}
// Función para encriptar el texto
// La letra a = ai e = enter i = imes o = ober u = ufat
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";    
    
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == 'a'){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == 'e'){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == 'i'){
        textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == 'o'){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == 'u'){
            textoFinal = textoFinal + "ufat"
        }    
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}
//funcion desencriptar
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
       
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == 'a'){
            textoFinal = textoFinal + "a"
            i = i + 1; 
        }
        else if(texto[i] == 'e'){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == 'i'){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == 'o'){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == 'u'){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }    
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}
//boton copiar
const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    alert("Texto Copiado con exito")
    // console.log("hola");
})
//boton limpiar el area donde se pone el texto
const botonLimpiar = document.querySelector('.btn-limpiar');
botonLimpiar.addEventListener('click', limpiar = () => {
  const area = document.querySelector('.area');
  const area2 = document.querySelector('.texto-resultado');
  area.value = '';
  location.reload();
});
