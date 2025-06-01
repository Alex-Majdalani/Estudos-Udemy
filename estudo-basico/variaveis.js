/* Quando eu declaro a variável como "var" (var, let, const), ex: let carro = duster, ela vai pertencer ao escopo local, quando eu não declaro nada ela vai pertencer ao escopo global, ou seja, vai rodar em todo o código independente do bloco {}  */

a = 10; // variável global

um = () => {
  let a = 20; /* varável local, se eu colocar uma variável global aqui ela vai modificar o valor de "a" pq também será uma variável global*/
  console.log(a);
};

um();
console.log(a);

let a = 10,
  b = 20,
  c = 30;
