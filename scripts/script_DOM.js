//HAS CONSULTADO¿?
const divsDOM={}
//DOM REGISTRO.HTML
divsDOM.div_consulta_sino= 
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

module.exports =divsDOM