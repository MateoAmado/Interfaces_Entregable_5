const sliderInner=document.querySelector(".slide");

let imagenes=sliderInner.querySelectorAll("div")

let index=0;

setInterval(function(){
    let porcentaje=index*-98
    sliderInner.style.transform="translateX("+porcentaje+"vw)"
    index++;
    if(index>imagenes.length-1){
        index=0;
    }
},3000)