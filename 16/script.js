const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
  const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
    break;
  } else if (palpite < numeroAleatorio) {
    alert("Tente um número maior.");
  } else {
    alert("Tente um número menor.");
  }
}
