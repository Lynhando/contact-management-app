(function ($) {
  "use strict";

  $("#contactForm").validate({
    rules: {
      name : {
        required: true,
      },
      phone: {
        required: true,
        number: true,
        maxlength: 10
      },
      email: {
        required: true,
        email: true
      },
      address: {
        required: true,
      },   
    },
    messages : {
      name: {
        required: "Please enter your full name"
      },
      phone: {
        required: "Please enter your phone number",
        number: "Phone number format is invalid",
        maxlength: "Please enter no more 10 digits"
      },
      email: {
        required: "Please enter your email",
        email: "The email format is not correct"
      },
      address: {
        required: "Please enter your address",
      }
    }
  });


  $("#editForm").validate({
    rules: {
      name : {
        required: true,
      },
      phone: {
        required: true,
        number: true,
        maxlength: 10
      },
      email: {
        required: true,
        email: true
      },
      address: {
        required: true,
      },   
    },
    messages : {
      name: {
        required: "Please enter your full name"
      },
      phone: {
        required: "Please enter your phone number",
        number: "Phone number format is invalid",
        maxlength: "Please enter no more 10 digits"
      },
      email: {
        required: "Please enter your email",
        email: "The email format is not correct"
      },
      address: {
        required: "Please enter your address",
      }
    }
  });
})(jQuery);
