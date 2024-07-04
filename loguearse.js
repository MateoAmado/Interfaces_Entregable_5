const formulario=document.getElementById("formulario")


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    loguear();
})

function loguear(){
    let user=document.getElementById("usuario").value;
    let password=document.getElementById("contrasenia").value;
    const claveImposibleDeHackear="admin1234"

    if(user==claveImposibleDeHackear && password==claveImposibleDeHackear){
            setearLogin("usuarioActivo")
            window.location="index.html"
    }
    else{
        setearLogin("usuarioInactivo")
        alert("datos erroneos");
    }
}