class Noticia{
    constructor(id, ruta_img, titulo, descripcion, fecha){
        this.id = id;
        this.ruta_img = ruta_img;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.descripcion_breve = descripcion.substring(0, 150) + "...";
        this.fecha = fecha;
    }
}