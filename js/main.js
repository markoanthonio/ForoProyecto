$(document).ready(function(){
  $("#registrar").submit(function(e){
    e.preventDefault();
    var nombre=$("#name").val();
    var apellido=$("#lastname").val();
    var correo=$("#email").val();
    var telefono=$("#telefono").val();
    var clave=$("#password").val();

    var msjMostrar="";
    let enviar=false;

    if(nombre.trim().length < 4 || nombre.trim().length > 20){
      msjMostrar+="<br>El nombre debe tener entre 4 y 20 caracteres";
      enviar=true;
    }
    var letra=nombre.trim().charAt(0);
    if(!(letra.toUpperCase() === letra)){
      msjMostrar+="<br>La primera letra del nombre debe ser en Mayuscula";
      enviar=true;
    }
    var letra=apellido.trim().charAt(0);
    if(!(letra.toUpperCase() === letra)){
      msjMostrar+="<br>La primera letra del nombre debe ser en Mayuscula";
      enviar=true;
    if(apellido.trim().length<4 || apellido.trim().length>10){
      msjMostrar+="<br>El apelllido debe tener de 4 a 10 caracteres";
      enviar=true;
    }
    }
    if(correo.trim().length<4 || correo.trim().length>50){
      msjMostrar+="<br>Formato invalido";
      enviar=true;
    }
    if(correo.indexOf('@', 0) == -1 || correo.indexOf('.', 0) == -1) {
      msjMostrar+="<br>El correo electrónico introducido no es correcto.";
      enviar=true;
      return false;
    }
    if(telefono.trim().length<8 || telefono.trim().length>8){
      msjMostrar+="<br>El telefono debe tener 8 numeros";
      enviar=true;
    }
    if(clave.trim().length<4 || clave.trim().length>30){
      msjMostrar+="<br>La contraseña debe tener entre 4 y 10 caracteres";
      enviar=true;
    }
    var passw=clave.trim().charAt(0);
    if(!(passw.toUpperCase() === passw)){
      msjMostrar+="<br>La contraseña debe una mayuscula al comienzo";
      enviar=true;
    }
    if(enviar){
  
      $("#warnings").html(msjMostrar);
    }
    else{
      $("#warnings").html("Enviado");
    }
  });
});
