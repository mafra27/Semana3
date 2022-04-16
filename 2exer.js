//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


function determinarMaiorNumero(num1, num2) {
    if (num1 > num2) {
        return ` ${num1} e menor que ${num2} `
    }
    if (num1 < num2) {
        return `${num2} e maior que ${num1}`
    }
    if (num1 = num2) {
        return `${num1} e igual a ${num2}`
    }
}
console.log(determinarMaiorNumero('11', '11'))