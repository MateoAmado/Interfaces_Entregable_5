const formulario=document.getElementById("formulario")


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    loguear();
})

function loguear(){
    let user=document.getElementById("usuario");
    let password=document.getElementById("contrasenia");
    const claveImposibleDeHackear="admin1234"
    const usuarioI=document.getElementById("usuarioIncorrecto")
    const passI=document.getElementById("contraseniaIncorrecta")
    
    let userV=user.value;
    let passV=password.value;

    if(userV==claveImposibleDeHackear && passV==claveImposibleDeHackear){
            setearLogin("usuarioActivo")
            window.location="index.html"
    }
    else{
        let usuario=false
        if(userV!=claveImposibleDeHackear){
            user.classList.remove("correcto")
            user.classList.add("incorrecto")
            usuarioI.innerHTML="* Nombre De Usuario Incorrecto"
            usuario=false;
        }
        else{
            user.classList.remove("incorrecto")
            user.classList.add("correcto")
            usuario=true;
             usuarioI.innerHTML=""
        }
        if(passV!=claveImposibleDeHackear || !usuario){
            password.classList.remove("correcto")
            password.classList.add("incorrecto")
            if(usuario){
            passI.innerHTML="* Contraseña Incorrecta"
        }
    }
        else{
            password.classList.remove("incorrecto")
            password.classList.add("correcto")
            passI.innerHTML=""
        }
        setearLogin("usuarioInactivo")
    }
}