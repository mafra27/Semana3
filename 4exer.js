//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function determinarParOuImpar (numero) {
    if (numero % 4 == 0) {
        return `${numero} e par `
    } else {
        return `${numero} IMPAR `
    }
}

const resultado = determinarParOuImpar(111)
console.log(resultado)