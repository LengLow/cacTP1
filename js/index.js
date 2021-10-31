let rango = document.querySelector("#rangoedad")


rango.addEventListener("input", ()=>{
    
    let rangoValor = rango.value
    let spanEdad = document.querySelector("#valorEdad")
    spanEdad.innerText = rangoValor

})

let botonEnviar = document.querySelector("#btnEnviar")





botonEnviar.addEventListener("click", (evento)=>{
    
    let entradas = document.querySelectorAll(".fs-datos input")
    console.log(entradas)

    for (let entrada of entradas){
        if(entrada.value === ''){
            alert("Debe rellenar todos los campos")
            evento.preventDefault()
            break;
            
        }

    
}
var formData = JSON.stringify($("#formulario").serializeArray());

})
  
/* let entradas = document.querySelectorAll(".fs-datos input")
    console.log(entradas)

    for (let entrada of entradas){
        if(entrada.innerText === ''){
            alert("Debe rellenar todos los campos")
            break;
        }
} */


