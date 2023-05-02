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

    if(nombre.trim().length < 4 || nombre.trim().length > 10){
      msjMostrar+="<br>El nombre debe tener entre 4 y 10 caracteres";
      enviar=true;
    }
    var letra=nombre.trim().charAt(0);
    if(!esMayuscula(letra)){
      msjMostrar+="<br>La primera letra debe ser mayúscula";
      enviar=true;
    }
    var letra=apellido.trim().charAt(0);
    if(!esMayuscula(letra)){
      msjMostrar+="<br>La primera letra debe ser mayúscula";
      enviar=true;

    if(apellido.trim().length<4 || apellido.trim().length>10){
      msjMostrar+="<br>El apelllido debe tener de 4 a 10 caracteres";
      enviar=true;
    }
    }

    if(correo.trim().length<4 || correo.trim().length>10){
      msjMostrar+="Formato invalido";
      enviar=true;
    }

    if(correo.val().indexOf('@', 0) == -1 || correo.val().indexOf('.', 0) == -1) {
      msjMostrar+="El correo electrónico introducido no es correcto.";
      enviar=true;
      return false;
    }
    if(telefono.trim().length<8 || telefono.trim().length>8){
      msjMostrar+="El mínimo/maximo de caracteres es 8";
      enviar=true;
    }

    if(clave.trim().length<4 || clave.trim().length>10){
      msjMostrar+="La contraseña debe tener entre 4 y 10 caracteres";
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
