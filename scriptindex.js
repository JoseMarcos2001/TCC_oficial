function logar(){

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if(email == "admin" && senha == "admin"){
      alert('Sucesso');
      location.href = "tela_inicial.html";
  }else{
      alert('Usuario ou senha incorretos');
  }

}

