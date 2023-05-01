$(document).ready(function(){
  $("#registrar").submit(function(e){
    e.preventDefault();
    var nombre=$("#name").val();
    var correo=$("#email").val();
    var clave=$("#password").val();

    var msjMostrar="";
    let enviar=false;

    if(nombre.trim().length < 4 || nombre.trim().length > 10){
      msjMostrar+="El nombre debe tener entre 4 y 10 caracteres";
      enviar=true;
    }
    var letra=nombre.trim().charAt(0);
    if(!esMayuscula(letra)){
      msjMostrar+="<br>La primera letra debe ser mayúscula";
      enviar=true;
    }

    if(correo.trim().length<4 || correo.trim().length>10){
      msjMostrar+="Formato invalido"
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
