    let nombre = ""
    let dni = ""
    let email = ""
    let telefono= ""
    let message = ""




const buttonSubmit = document.getElementById("submit");
buttonSubmit.addEventListener("click", e => {
    e.preventDefault();
     nombre = document.getElementById("name").value;
     dni = document.getElementById("dni").value;
     email = document.getElementById("email").value;
     telefono= document.getElementById("tel").value;
     message = document.getElementById("mensaje").value;
     console.log(nombre)
     console.log(dni)
     console.log(email)
     console.log(telefono)
     console.log(message)
})


