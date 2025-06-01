//alert("hello word");
let Carro = {
  marca: "Renault",
  modelo: "Logan",
  ipva: "valor('rb15')",
  dimensoes: {
    c: "4.250mm",
    l: "1.735mm",
    h: "1.525mm",
  },
};
marca = Carro.marca;
modelo = Carro.modelo;
comprimento = Carro.dimensoes.c;

executar = function () {
  console.log(marca);
  console.log(modelo);
  console.log(comprimento);
};

executar();
