//variables globales de los ataques
let ataqueJugado
let ataqueEnemigo
//variables globales de las vidas
let vidaJugado=3
let vidaEnemigo=3

//funcion donde inicia el juego
function iniciarJuego(){
    //proceso para ocultar section ataque
    let sectionseleccionarAtaque=document.getElementById("selecciona-ataque")
    sectionseleccionarAtaque.style.display = "none"
    //proceso para ocultar boton reiniciar
    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display="none"
    //proceso para selecionar la mascota
    let botonMacotaJugador = document.getElementById("boton-mascota")
    botonMacotaJugador.addEventListener("click", seleccionarMacotaJugador)

    //proceso para seleccionar los ataques
    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonReiniciar=document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
} 
//funcion donde selecciona la mascota del enemigo aleatoriamente
function seleccionaMascotaEnemigo(){
    let mascotaAleatrio=aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatrio==1) {
        spanMascotaEnemigo.innerHTML = "hipo"
    }else if (mascotaAleatrio==2) {
        spanMascotaEnemigo.innerHTML = "Capi"
    }else {
        spanMascotaEnemigo.innerHTML = "Rati"
    }
}
//funcion donde selecciona el jugador a la mascota
function seleccionarMacotaJugador(){
    //prodeso para ocultar selecciona mascota
    let sectionseleccionaMascota=document.getElementById("seleccina-mascota")
    sectionseleccionaMascota.style.display = "none"
    //proceso para mostrar seccion de ataque
    let sectionseleccionarAtaque=document.getElementById("selecciona-ataque")
    sectionseleccionarAtaque.style.display = "block"
    //asignacion de nombres a las mascotas
    let inputHipo = document.getElementById("hipo")
    let inputCapi = document.getElementById("capi")
    let inputRati = document.getElementById("rati")
    let spanMascotaJuador = document.getElementById("mascota-jugador")
    
    if (inputHipo.checked) {
        spanMascotaJuador.innerHTML = "hipo"
    }else if (inputCapi.checked) {
        spanMascotaJuador.innerHTML = "capi"
    }else if (inputRati.checked) {
        spanMascotaJuador.innerHTML = "rati"
    } else {
        alert("selecciona una mascota")
    }
    seleccionaMascotaEnemigo()

}

//funciones de ataques que selecciono el jugador
function ataqueFuego(){
    ataqueJugado="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugado="AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugado="TIERRA"
    ataqueAleatorioEnemigo()
}
//seleccion de mascota del enemigo aleatoriamente
function seleccionaMascotaEnemigo(){
    let ataqueAleatrio=aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (ataqueAleatrio==1) {
        spanMascotaEnemigo.innerHTML = "hipo"
    }else if (ataqueAleatrio==2) {
        spanMascotaEnemigo.innerHTML = "Capi"
    }else {
        spanMascotaEnemigo.innerHTML = "Rati"
    }
}
//ataque aleatorio del enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatrio=aleatorio(1,3)

    if (ataqueAleatrio==1) {
        ataqueEnemigo="FUEGO"
    }else if (ataqueAleatrio==2) {
        ataqueEnemigo="AGUA"
    }else {
        ataqueEnemigo="TIERRA"
    }
    //llama a la funcion conbate
    combate()
}
//obteer valores aleatorios
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//funcion de resultados del combate
function combate(){
    let spanVidaJugador=document.getElementById("vida-jugador")
    let spanVidaEnemigo=document.getElementById("vida-enemigo")
    if (ataqueEnemigo==ataqueJugado) {
        crearMensaje("EMPATE")
    }else if (ataqueJugado=="FUEGO" && ataqueEnemigo=="TIERRA") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }else if (ataqueJugado=="AGUA" && ataqueEnemigo=="FUEGO") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }
    else if (ataqueJugado=="TIERRA" && ataqueEnemigo=="AGUA") {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML= vidaEnemigo
    }
    else {
        crearMensaje("PIERDES")
        vidaJugado--
        spanVidaJugador.innerHTML= vidaJugado
    }
    
    revisarVidas()
}
//obtner resultado de vidas
function revisarVidas(){
    if (vidaEnemigo==0) {
        crearMensajeFinal("FELICITACIONES GANASTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    }else if (vidaJugado==0) {
        crearMensajeFinal("TE GANO LA PC ============================")
        
    }
}
//muestra los mensajes de cada ataque
function crearMensaje(resultado){
    let sectionMensaje = document.getElementById("mensajes")
    let parafo = document.createElement("p")
    parafo.innerHTML= "Tu mascota ataco con "+ataqueJugado+" la mascota del enemigo ataco con "+ataqueEnemigo +" resultado: "+resultado

    sectionMensaje.appendChild(parafo)
}
//muestra mensaje para el combate final
function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById("mensajes")
    let parafo = document.createElement("p")
    parafo.innerHTML=resultadoFinal

    sectionMensaje.appendChild(parafo)
    //bloquea los botones de ataques una vez finalizado
    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua=document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.disabled = true
    //muestra el boton reiniciar despues de terminar el juego
    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display="block"
}
//recarga la paina principal
function reiniciarJuego(){
    location.reload()
}
//este comando es donde aranca el jueo desde a funcion principal
window.addEventListener("load", iniciarJuego)