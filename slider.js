let imagenes = [
    'url(img/arboles_plantados.png)',
    'url(img/voluntarios.png)',
    'url(img/cordoba_lago.png)'
  ];
  
  let estadisticas = [
    '5076 Árboles plantados',
    '729 Voluntarios',
    '26 Localidades de cordoba'
  ];
  
  
let indiceActual = 0;

function mostrarImagen() {
  document.querySelector('.imagen_cifras').style.backgroundImage = imagenes[indiceActual];
  document.querySelector('.estadistica').innerText = estadisticas[indiceActual];

  let circles = document.querySelectorAll('.imagen_posicion i');
  circles.forEach((circle, index) => {
    if (index === indiceActual) {
      circle.classList.remove('fa-regular');
      circle.classList.add('fa-solid');
    } else {
      circle.classList.remove('fa-solid');
      circle.classList.add('fa-regular');
    }
  });
}

function izquierda() {
  indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
  mostrarImagen();
}

function derecha() {
  indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
  mostrarImagen();
}

function cambiarImagen(indice) {
  indiceActual = indice;
  mostrarImagen();
}

// Inicializar
mostrarImagen();
  