$(document).ready(function(){
  $("#registrar").validate({
    rules:{
      name:{
        required: true,
        minlength: 3,
      },
      lastname:{
        required: true,
        minlength: 3
      },
      email:{
        required: true,
        email: true
      }
    }
  });
});