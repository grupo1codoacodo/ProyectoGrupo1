// Actualiza con la cantidad de articulos comprados
// actualizarCarrito();

// Valida el login de usuario y redirecciona al home si pudo ingresar
function login(){
    const email= document.getElementById ("exampleInputEmail1").value;
    const password= document.getElementById("exampleInputPassword1").value;

    if (usuario.validarLoginUsuario(email, password) == true){
        alert ("Bienvenido a San Tallarin - Pudo ingresar Correctamente");
        location.href="./index.html";
    }
    else {
        alert ("El usuario con ese email no existe o la password no es válida");
    }

}

// Valida si los datos del usuario son correctos
function validarDatosUsuario(user){
    let sts= true;
    // Valida que se ingrese nombre y apellido
    if (user.nombre == null || user.nombre == "" || user.apellido == null || user.apellido == ""){
        document.getElementById("valnombreapellido").style.visibility="visible";
        sts= false;
    }
    // Valida que se ingrese email
    if (user.email == null || user.email == "" ){
        document.getElementById("valemail").style.visibility="visible";
        sts= false;
    }
    
    // Valida que se ingrese password
    if (user.password == null || user.password == "" ){
        document.getElementById("valpassword").style.visibility="visible";
        sts= false;
    }       
    return sts;
}

// Registra el usuario en localstorage con los datos ingresados
function registracion(){
    const email= document.getElementById ("email").value;
    const password= document.getElementById("password").value;
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const novedades= document.getElementById("novedades").value;
    const username= email;

    user= new usuario(nombre, apellido, email,password, username, novedades);
    console.log ("nombre " + nombre);
    console.log(user.nombre);
    // Valida que se ingrese nombre y apellido
    if (validarDatosUsuario(user) == true){
        user.registrarUsuario();    
        alert ("el usuario fue registrado exitosamente");
    }
}

// Oculta los mensajes de error
document.getElementById("valnombreapellido").style.visibility="hidden";
console.log ("ocultando mensajes de validacion")
document.getElementById("valemail").style.visibility="hidden";
document.getElementById("valpassword").style.visibility="hidden";