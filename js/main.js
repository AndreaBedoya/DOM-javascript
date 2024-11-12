// function cambiarTexto(){
//     const selectorTitulo = document.getElementById("titulo")
//     const nombreUsuario = prompt("Ingrese su nombre")
//     const contenedor = document.getElementById("cont-general")

//     // CAMBIANDO CONTENIDO DE UNA ETIQUETA DESDE JS
//     selectorTitulo.innerText="Andrea Niño"
//     selectorTitulo.innerHTML ="<strong> USUARIO: </strong> " + nombreUsuario
    
//     // CAMBIANDO ESTILOS DE UNA ETIQUETA DESDE JS
//     selectorTitulo.style.backgroundColor="purple"
//     selectorTitulo.style.color="#000"
//     selectorTitulo.style.padding="20px"
    
//     // CAMBIO ESTRUCTURA DE UNA ETIQUETA DESDE JS
//     contenedor.classList.add("dia")

// }
// ---------------------------------------------------------------------------
function circulo(){
    const texto = document.getElementById("titulo")
    const figuraCirculo = document.getElementById("figura")
    texto.innerText ="Circulo"
    figuraCirculo.style.borderRadius = "50%"
    figuraCirculo.style.rotate = "0deg"
    
}
 
// ----------------------------------------------------------------------------
function rombo(){
    const texto = document.getElementById("titulo")
    const rombo = document.getElementById("figura")
    texto.innerText ="Rombo"
    rombo.style.borderRadius ="0%"
    rombo.style.rotate = "45deg"
    
}
// ----------------------------------------------------------------------------
function fondoColor(){
    const fondo = document.getElementById("figura")
    fondo.style.backgroundColor ="white"
    fondo.style.rotate = "0deg"
}
// ----------------------------------------------------------------------------
function imagen(){
    const imagen = document.getElementById("figura")
    imagen.style.backgroundImage = "url('img/imagen.jfif')"
    imagen.style.backgroundSize = "cover"
    imagen.style.borderRadius = "20px"
}
// ----------------------------------------------------------------------------
function arriba(){
    const arriba = document.getElementById("figura")
    arriba.style.marginTop ="-30px"
}
// ----------------------------------------------------------------------------
function izquierda(){
    const izquierda = document.getElementById("figura")
    izquierda.style.marginLeft ="120px"
    izquierda.style.marginRight ="800px"
}
// -----------------------------------------------------------------------------
function abajo(){
    const abajo =document.getElementById("figura")
    abajo.style.marginTop ="200px"

}
// -----------------------------------------------------------------------------
function derecha(){
    const derecha = document.getElementById("figura")
    derecha.style.marginRight ="60px"
    derecha.style.marginLeft ="450px"
} 
// -----------------------------------------------------------------------------
function diagonal() {
    const diagonal = document.getElementById("figura");
    diagonal.style.marginTop = "180px"; 
    diagonal.style.marginLeft = "100px"; 
    
}

function estrella(){
    const estrella = document.getElementById("figura")
    estrella.classList.toggle ("estrella")
}

// -----------------------------------------------------------------------------
function fondoDegradado() {
    const degradado = document.getElementById("figura")
    degradado.style.backgroundImage = "linear-gradient(to right, aquamarine, purple)"
    degradado.style.borderRadius = "0%" 
}

function animacion(){
    const animacion =document.getElementById("figura")
    animacion.classList.toggle("animacion")
}

function panelLateral(){
    const panel = document.getElementById("panel-lateral")
    panel.classList.toggle("active")
}

function panelSuperior(){
    const superior = document.getElementById("panel-superior")
    superior.classList.toggle("active")
}