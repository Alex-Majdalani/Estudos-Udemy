var nome = document.querySelector("#exampleInputName");
var genero = document.querySelectorAll(
  "#form-user-create [name=gender]:checked"
);
var nascimento = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail1");
var senha = document.querySelector("#exampleInputPassword1");
var foto = document.querySelector("#exampleInputFile");
var usuario = document.querySelector("#exampleInputAdmin");

var campos = document.querySelectorAll("#form-user-create [name]");
campos.forEach(function (campos, index) {
  console.log(campos);
});
