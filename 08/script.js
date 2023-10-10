let numRandom = Math.floor(Math.random() * 10) + 1;
let chute;

do {
  chute = parseInt(prompt("digite um número de 1 a 10:"));

  if (chute === numRandom) {
    console.log("parabens, numero correto");
  } else {
    console.log("ERROOU");
  }
} 
while (chute !== numRandom);
