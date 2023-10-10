const palavra = prompt("digite uma palavra:");
const palavraInvertida = palavra.split('').reverse().join('');

if (palavra === palavraInvertida) {
  document.write(`${palavra} é um palíndromo`);
} else {
  document.write(`${palavra} não é um palindromo`);
}
