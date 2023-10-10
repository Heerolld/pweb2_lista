const altura = parseFloat(prompt("Digite sua altura"));
const peso = parseFloat(prompt("Digite seu peso"));

let imc = peso/(altura*altura);

document.write("O seu IMC é: ", imc);

