// enoncé 2 

let number = parseInt("saisir un nombre entier compris entre 1 et 10")

do {
     number = parseInt(prompt("saisir un nombre entier compris entre 1 et 10"))
} while (isNaN(Number(number)) || number < 1 || number > 10);
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}
function tableauDeMultiplication(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
}}
tableauDeMultiplication(number)