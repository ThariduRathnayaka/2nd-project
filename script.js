
$(function() {

  $("form[name= 'registration']").validate({

    rules: {

      name: "required",

      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      Confirmpassword: {
        required: true,
        minlength : 5,
        equalTo : "#password"
      },


    },

    messages: {
      name: "Please enter your name",
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      password: {
        required :  "Please provide the password",
        minlength : "Your password must be consist of at least 5 characters",
        equalTo : "Please enter the same password above" 
      },

      Confirmpassword : {
        required : "Please Re-enter the password ",
        minlength : "Your password must be consist of at least 5 characters",
        equalTo : "Please enter the same password as above"

      }
    },

    submitHandler: function(form) {
      form.submit();

    },
    errorPlacement: function(error, element) {
      error.insertAfter(element);
    }
  })
})