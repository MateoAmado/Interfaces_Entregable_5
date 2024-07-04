
    function setearLogin(sesion) {
        localStorage.setItem("sesion", sesion);
    }

    function comprobarSesion() {
        if(localStorage.getItem("sesion")=="usuarioActivo"){
            return true;
        }
        return false;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const conditionalLink = document.getElementById('conditionalLink');
        if (comprobarSesion()) {
            conditionalLink.innerHTML = '<a href="agregarNoticia.html"><i class="fa-solid fa-plus"></i>Agregar Noticia</a>';
        }
    });