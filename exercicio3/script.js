//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

//a) 5 é maior que 20 e também é menor que 2;
let op1 = (5 > 20) && (5 < 2)
console.log("5 é maior que 20 e também é menor que 2",op1)
//b) 5 é igual a 5 ou é igual a “5”;
let op2 = (5 === 5) || (5 === "5")
console.log(" 5 é igual a 5 ou é igual a \"5\"",op2)
//c) negação de (vinte é maior que cinquenta)
let op3 = !20 > 50
console.log("negação de (vinte é maior que cinquenta)",op3)
//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
let op4 = (!20 > 50) || (50 > 60)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)",op4)

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.*/

//Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:
let salarioFixo = 2000.00
//a) Auxílio creche por filho:  R$45,50
let auxilioC = 45.50 * 2
//b) Comissão de 10% sobre o total de vendas mensal

//c) Total de vendas dos meses de janeiro a junho:

   // - Janeiro: R$ 5.784,50
   let vm1 = 5784.50
   // - Fevereiro: R$ 3.418,41
   let vm2 = 3418.41
   let comissao2 = vm2 * 0.1
   // - Março: R$ 4.124,10
   let vm3 = 4124.10
   let comissao3 = vm3 * 0.1
   // - Abril: R$ 1.874,00
   let vm4 = 1874.00
   let comissao4 = vm4 * 0.1
   // - Maio: R$ 7.000,00
   let vm5 = 7000.00
   let comissao5 = vm5 * 0.1
   // - Junho: R$ 9.450,00
   let vm6 = 9450.00
   let comissao6 = vm6 * 0.1

//d)  Desconto do INSS 5% do salário
//Calcule:

//1) O salário fixo mais o auxílio creche
let salario = salarioFixo + auxilioC
//2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissao1 = vm1 * 0.1
//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
let salario1 = salario + comissao1
let descInss1 = salario1 * 0.05

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
let salarioJan = salario1 - descInss1
console.log("O salário de janeiro é",salarioJan.toFixed(2))

let salario2 = salario + comissao2
let descInss2 = salario2 * 0.05
let salarioFev = salario2 - descInss2
console.log("O salario de fevereiro é",salarioFev.toFixed(2))

let salario3 = salario + comissao3
let descInss3 = salario3 * 0.05
let salarioMar = salario3 - descInss3
console.log("O salário de março é", salarioMar.toFixed(2))

let salario4 = salario + comissao4
let descInss4 = salario4 * 0.05
let salarioAbr = salario4 - descInss4
console.log("O salário de abril é", salarioAbr.toFixed(2))

let salario5 = salario + comissao5
let descInss5 = salario5 * 0.05
let salarioMai = salario4 - descInss5
console.log("O salario de maio é", salarioMai.toFixed(2))

let salario6 = salario + comissao6
let descInss6 = salario6 * 0.05
let salarioJun = salario6 - descInss6
console.log("O salário de junho é", salarioJun.toFixed(2))
/*5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)*/
let mediaSal = (salarioJan + salarioFev + salarioMar + salarioAbr + salarioMai + salarioJun) / 6
console.log("A média salarial em 6 meses é", mediaSal.toFixed(2))