/*var nome = document.querySelector("#exampleInputName");
var genero = document.querySelectorAll(
  "#form-user-create [name=gender]:checked"
);
var nascimento = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail1");
var senha = document.querySelector("#exampleInputPassword1");
var foto = document.querySelector("#exampleInputFile");
var usuario = document.querySelector("#exampleInputAdmin");*/

var campos = document.querySelectorAll("#form-user-create [name]");
var user = {};
campos.forEach(function (campos, index) {
  if (campos.name == "gender") {
    if (campos.checked === true) {
      user[campos.name] = campos.value;
    }
  } else {
    user[campos.name] = campos.value;
  }

  //console.log(campos.id, campos.name, campos.value, index);
});

console.log(user);

document.querySelectorAll("button").forEach(function () {
  this.addEventListener("click", function () {
    console.log("clicou");
  });
});
