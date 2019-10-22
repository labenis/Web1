// $("#webheader").load("../../header.html");
// $("#webfooter").load("../../footer.html");

// var requiredMessage = "Please Fill In The Field";

// var numbersMessage = "Please Add Password thats longer than 8 Characters";

// var numbersMessage2 = "Passwords Dont Match";


$("#registration_form").validate({
  rules: {
      first_name: "required",
      last_name: "required",
      user_name: "required",
      matchone: {
        required: true,
        minlength: 8
      },
      matchtwo: {
          equalTo: "#matchone"
      },

      
  },
  messages: {
    required: "Please provide a password",
    minlength: "Your password must be at least 8 characters long",
    equalTo: "Please enter the same password as above"
  }


});