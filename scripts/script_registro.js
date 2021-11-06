//HAS CONSULTADO¿?
const div_consulta_sino= 
    `<p>¿Nos ha realizado alguna consulta previamente?</p>
    <button id="registro_si_consultas">SI</button>
    <button id="registro_no_consultas">NO</button>`

    
    // DIVS REGISTRO
    //<!-- NOMBRE -->
    const div_registro_nombre=
    `<label for="input_nombre_signup">Nombre</label>
    <input type="text" name="input_nombre_signup" id="input_nombre_signup"></input>`
    
    //<!-- DNI -->
    const div_registro_DNI=
    `<label for="input_dni_signup">DNI</label>
    <input type="text" name="input_dni_signup" id="input_dni_signup"></input>`
    
    //<!-- TELÉFONO -->
    const div_registro_telefono=
    `<label for="input_telefono_signup">Teléfono de contacto</label>
    <input type="tel" name="input_telefono_signup" id="input_telefono_signup"></input>`
    
    //<!-- EMAIL -->
    const div_registro_email=
    `<label for="input_email_signup">Email</label>
    <input type="email" name="input_email_signup" id="input_email_signup"></input>`
    //<!-- DIRECCION -->
    const div_registro_direccion=
    `<label for="input_direccion_signup">Dirección</label>
    <input type="text" name="input_direccion_signup" id="input_direccion_signup"></input>`
    
    //<!-- CONTRASEÑA -->
    const div_registro_password=
    `<label for="input_password_signup">Contraseña</label>
    <input type="password" name="input_password_signup" id="input_password_signup"></input>`

    
//PINTADO:
document.getElementById("crearCuenta").addEventListener("click",
    ()=>{
        document.getElementById("root_registro").innerHTML=div_consulta_sino
        //PINTAR REGISTRO COMPLETO
        document.getElementById("registro_no_consultas").addEventListener("click",
        ()=>{
            document.getElementById("root_registro").innerHTML= `<p>Rellena los siguientes campos para realizar su registro en nuestra aplicación de forma gratuita.</p>`+div_registro_nombre + div_registro_DNI + div_registro_telefono +  div_registro_direccion + div_registro_email + div_registro_password + `<button id="finalizar_registro_completo">Registrar</button>`
        }    
        )
    }
)

async function filtrado_campos_null(){
    
}
console.log(window)
document.getElementById("button_login").addEventListener("click", window.validar_Usuario())