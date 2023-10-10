const num = parseInt(prompt("Digite um número"))
let x = 1
for(i=1;i<=num;i=i+1){
    x=x*i
}
document.write("O fatorial de ",num, " é: ",x )