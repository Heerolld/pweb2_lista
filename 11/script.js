function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  const numero1 = parseInt(prompt("digite o primeiro número:"));
  const numero2 = parseInt(prompt("digite o segundo número:"));
  const numero3 = parseInt(prompt("digite o terceiro número:"));
  
  const maior = maiorNumero(numero1, numero2, numero3);
  
  alert("O maior número é: " + maior);
  