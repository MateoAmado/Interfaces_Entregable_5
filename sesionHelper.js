
   
   
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
        const root=document.getElementById("root");
        if(root){
            console.log("entre")
            if(!comprobarSesion()){
                root.style.display="none"
            }
        }
        if (comprobarSesion()) {
            conditionalLink.innerHTML = 'Eventos';
            conditionalLink.href="eventos.html"
            conditionalLink2.addEventListener("click",()=>{
                desloguear(false);
            })
            if(document.querySelector(".contenedor_agregar_noticia")){
                document.querySelector(".contenedor_agregar_noticia").style.display = "flex";
            }
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
        if(document.querySelector(".contenedor_agregar_noticia")){
            document.querySelector(".contenedor_agregar_noticia").style.display = "none";
        }
    }