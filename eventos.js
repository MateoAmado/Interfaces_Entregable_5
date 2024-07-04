let eventos = [];
let cordoba_ubicacion = "https://www.google.com/maps/place/Córdoba/@-31.3987201,-64.256172,12z/data=!4m6!3m5!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761!16zL20vMDFrMDNy?entry=ttu";
let evento_forestar = new Evento("Plantacion de arboles", cordoba_ubicacion, "10/7/2024", "15:00hs");

eventos.push(evento_forestar);


function main(){
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = '';
    eventos.forEach((evento, index) => {
        const noticiaHTML = `
            <h1 class="titulo_evento">${evento.titulo}</h1>
            <div class="ubicacion_horario"> 
                   <div class="ubicacion">
                   <i class="fa-solid fa-location-dot"></i>
                        <a href="${evento.ubicacion}">Maps</a>                  
                   </div>
                   <div class="horario">
                   <i class="fa-solid fa-calendar-days"></i>
                        <h2>${evento.fecha}</h2>
                        <h2>${evento.horario}</h2>
                   </div>
                   
            </div>
             <div class="enviar_voluntarios"><h2>Enviar a voluntarios</h2></div>
             <div class="borrar_evento"><h2 onclick="borrarEvento(${index})">Borrar evento</h2></div>
           
        `;
        contenedor.innerHTML += noticiaHTML;
    });
}

function borrarEvento(index){
    if (index > -1) {
        eventos.splice(index, 1);
    }
    main(); // Vuelve a renderizar la lista de eventos
}

document.addEventListener('DOMContentLoaded', main);