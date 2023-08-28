// skriv din kode her.
const roser = document.querySelectorAll("main img")
// vælg alle blomster og add en click eventlistener til dem.
roser.forEach((rose) => rose.addEventListener("click", plukRose));
// lav en funktion der tilføjer class'en "pluk" til den blomst der bliver klikket på.
function plukRose(){
    this.classList.toggle("pluk");
}