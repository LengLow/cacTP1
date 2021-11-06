let rango = document.querySelector("#rangoedad")
let formulario = document.querySelector("form")

rango.addEventListener("input", ()=>{
    
    let rangoValor = rango.value
    let spanEdad = document.querySelector("#valorEdad")
    spanEdad.innerText = rangoValor

})

let botonEnviar = document.querySelector("#btnEnviar")




let checks = document.querySelectorAll(".checkbox")


formulario.addEventListener("submit", (evento)=>{
    
    let entradas = document.querySelectorAll(".fs-datos input")
    console.log(entradas)
    

    for (let entrada of entradas){
        if(entrada.value === '' || entrada.value == null ){
            alert("Debe rellenar todos los campos")
            evento.preventDefault()
            
            break;
            
        }
    
        let chequeado = 0;
        
        
    }
    

    
})
/* var formData = JSON.stringify($("#formulario").serializeArray()); */




