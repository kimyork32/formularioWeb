function limpiar(){
    document.getElementsByName("nombre")[0].value = "";
    document.getElementsByName("apellidos")[0].value = "";
    document.getElementsByName("sexo")[0].checked = false;
    document.getElementsByName("sexo")[1].checked = false;
    document.getElementsByName("correo")[0].value = "";
    document.getElementsByName("direccion")[0].value = "";
    document.getElementsByName("ciudad")[0].selected = true;
    document.getElementsByName("requerimiento")[0].value = "";
    
}
function enviar(){
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellidos = document.getElementsByName("apellidos")[0].value;
    let correo = document.getElementsByName("correo")[0].value;
    if(!check(nombre)){
        alert("Error en Nombre");
        limpiar();
        return false;
    }
    if(!check(apellidos)){
        alert("Error en Apellidos");
        limpiar();
        return false;
    }
    if(!marcado()){
        alert("Sexo no indicado");
        limpiar();
        return false;
    }
    if(!correoCheck(correo)){
        alert("Error en correo");
        limpiar();
        return false;
    }
    if(!ciudadCheck()){
        alert("seleccionar una Ciudad");
        limpiar();
        return false;
    }
    alert(Date());
    limpiar();
}

function check(string) {
    if (string.length === 0) {
      return false;
    }
    for (let i = 0; i < string.length; i++) {
      let char = string[i].toLowerCase(); // Convertir el carácter a minúscula para verificar el rango
      if (!((char >= 'a' && char <= 'z') || char === ' ')) {
        return false;
      }
    }
    return true; // Mover el return true fuera del bucle para que se ejecute después de verificar todos los caracteres
  }

function marcado(){
    const listOpc = document.querySelectorAll('input[name="sexo"]');
    for(let i = 0; i < listOpc.length; i++){
        if(listOpc[i].checked){
            return true;
        }
    }
    return false;
}
function correoCheck(string) {
  let dom = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '@') {
      dom = string.slice(i + 1, string.length);
      break; // Agrega un break para salir del bucle después de encontrar el símbolo "@"
    }
  }
  if (dom === "unsa.edu.pe") {
    return true;
  }

  return false;
}
function ciudadCheck(){
    const ciudad = document.getElementsByName("ciudad")[0].value;
    if(ciudad === ""){
        return false;
    }
    return true;
}
