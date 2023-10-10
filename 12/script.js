const numero = parseInt(prompt("Digite um número:"));

let Primo = true;

if (numero <= 1) {
  Primo = false;
} else {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      Primo = false;
      break;
    }
  }
}

if (Primo) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}
