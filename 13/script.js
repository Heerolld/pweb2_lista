let totalNotas = 0;
for (let i = 1; i <= 5; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i}:`));

  if (isNaN(nota)) {
    console.log("Por favor, digite um número válido.");
  } else {
    totalNotas += nota;
  }
}
const media = totalNotas / 5;
console.log("A média das notas é:", media);
document.write("A média das notas é:", media)