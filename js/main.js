$(document).ready(function(){
  $("#registrar").validate({
    rules:{
      name:{
        required: true,
        minlenght: 3,
      },
      lastname:{
        required: true,
        minlenght: 3
      },
      email:{
        required: true,
        email: true
      }
    }
  });
});