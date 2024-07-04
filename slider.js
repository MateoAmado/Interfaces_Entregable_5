const sliderInner=document.querySelector(".slide");

let imagenes=sliderInner.querySelectorAll("div")
let circulos=document.getElementsByClassName("fa-circle");

let index=0;
circulos[index].classList.add("fa-solid");



function derecha(){
    circulos[index].classList.remove("fa-solid");
    circulos[index].classList.add("fa-regular");
    index++;
    if(index>imagenes.length-1){
        index=0;
    }
    let porcentaje=index*-95;
    sliderInner.style.transform="translateX("+porcentaje+"vw)";
    circulos[index].classList.add("fa-solid");
}

function izquierda(){
    circulos[index].classList.remove("fa-solid");
    circulos[index].classList.add("fa-regular");
    index--;
    if (index < 0) {
        index = imagenes.length - 1;
    }
    let porcentaje = index * -95;
    sliderInner.style.transform = "translateX(" + porcentaje + "vw)";
    circulos[index].classList.add("fa-solid");
}