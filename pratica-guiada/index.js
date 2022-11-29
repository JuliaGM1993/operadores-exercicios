console.log(" - Operadores -")

let saldo = 15
console.log("Meu saldo é",saldo)
saldo = saldo + 22.40
console.log("Agora meu saldo é",saldo)
saldo = saldo - 12.34
console.log("Gastei 12.43, agora meu saldo é", saldo)
saldo = saldo / 2
console.log("Dividi o que tinha com meu irmão, meu saldo ficou em", saldo)
saldo = saldo * 3.42
console.log("Apliquei minha parte do dinheiro até ficar 3.42 vezes maior. Agora meu saldo é", saldo.toFixed(2))
let resto = saldo % 3
console.log("Reparti o dinheiro em fatias inteiras entre tres contas, deixei o resto para comprar um chiclete. Quanto sobrou para o chiclete?", resto.toFixed(2))
saldo = (saldo - resto)/3
console.log("O valor dividido para cada irmão ficou em", saldo)

let res
// 5 === 5;
res = 5===5;
console.log("5===5 :"+res)
// 5 !== 5;
res = 5!==5;
console.log("5!==5 :"+res)
// 5 !== "5";
res = 5!=="5";
console.log("5!==\"5\" :"+res)
// "5" === "cinco";
res = "5"==="cinco";
console.log("\"5\" === \"cinco\" :"+res)
// typeof5 === typeof20;
res = typeof 5 === typeof 20
console.log("typeof 5 === typeof 20 :"+res)
// typeof"5" === typeof"cinco"
res = typeof"5" === typeof"cinco"
console.log("typeof \"5\" === typeof \"cinco\" :"+res)



