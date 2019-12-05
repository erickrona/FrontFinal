
$('#signup_button').on('click', function(){
  // cargar los valores de password, email, name, age
  let password = $('#password').val()
  let email = $('#email').val()
  let age = $('#age').val()
  let name = $('#name').val()
  
  json_to_send = {
    "password" : password,
    "email": email,
    "name": name,
    "age": age
  };

  json_to_send = JSON.stringify(json_to_send);
  console.log(json_to_send)

  $.ajax({
    //url: 'http://localhost:3000/users',
    url: 'https://finalexamweb.herokuapp.com',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Usuario creado con exito");
      console.log('success: '+ data);
      window.location = './index.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});