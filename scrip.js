const formulario = document.getElementById("formularioComentario");
const contenedor = document.getElementById("contenedorComentarios");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const texto = document.getElementById("textoComentario").value;
    const fechaHora = new Date().toLocaleString();
    
    const divComentario = document.createElement("div");
    
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;
    
    const pFecha = document.createElement("small");
    pFecha.textContent = "Publicado el: " + fechaHora;
    
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    
    botonEliminar.addEventListener("click", function() {
        divComentario.remove();
    });
    
    divComentario.appendChild(pTexto);
    divComentario.appendChild(pFecha);
    divComentario.appendChild(botonEliminar);
    
    contenedor.appendChild(divComentario);
    
    formulario.reset();
});