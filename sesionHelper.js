
    function setearLogin(sesion) {
        localStorage.setItem("sesion", sesion);
    }

    function comprobarSesion() {
        if(localStorage.getItem("sesion")=="usuarioActivo"){
            return true;
        }
        return false;
    }
    const conditionalLink = document.getElementById('conditionalLink');
    const conditionalLink2 = document.getElementById('conditionalLinklogout');

    document.addEventListener('DOMContentLoaded', function () {
        if (comprobarSesion()) {
            conditionalLink.innerHTML = '<i class="fa-solid fa-plus"></i>Agregar Noticia';
            conditionalLink.href="agregar.html"
            conditionalLink2.addEventListener("click",()=>{
                desloguear(false);
            })
            conditionalLink2.href="index.html"
            conditionalLink2.innerHTML='<i class="fa-solid fa-right-to-bracket"></i>Desloguear'
        }
    });
    function desloguear(){
        localStorage.setItem("sesion", false);
        conditionalLink.innerHTML='<i class="fa-solid fa-plus"></i>Forestaton'
        conditionalLink2.href='index.html'
        conditionalLink2.href="logIn.html"
        conditionalLink2.innerHTML='<i class="fa-solid fa-right-to-bracket"></i>Iniciar sesión'
    }