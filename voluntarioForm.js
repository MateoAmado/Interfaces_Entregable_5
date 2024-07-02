const formUno = document.getElementById("form1");
const formDos = document.getElementById("form2");
const formTres = document.getElementById("form3");
const btnNextUno = document.getElementById("next1");
const btnNextDos = document.getElementById("next2");
const btnBackUno = document.getElementById("back1");
const btnBackDos = document.getElementById("back2");
const btnEnvio = document.getElementById("botonEnvio");
const barraProgreso = document.getElementById("progreso");

//Primer Paso
btnNextUno.addEventListener("click", ()=>{
    formUno.style.left ="-450px";
    formDos.style.left ="40px";
    barraProgreso.style.width = "240px";
});
btnBackUno.addEventListener("click", ()=>{
    formUno.style.left ="40px";
    formDos.style.left ="450px";
    barraProgreso.style.width = "120px";
});

//Segundo Paso
btnNextDos.addEventListener("click", ()=>{
    formDos.style.left ="-450px";
    formTres.style.left ="40px";
    barraProgreso.style.width = "360px";
});
btnBackDos.addEventListener("click", ()=>{
    formDos.style.left ="40px";
    formTres.style.left ="450px";
    barraProgreso.style.width = "240px";
});