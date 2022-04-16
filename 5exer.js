//Crie uma função que recebe o ano de nascimento da pessoa informando 
//se ela é maior de idade ou menor.

function definindoMaiorIdade(num1) {
    if (num1 < 2004) {
        return 'Nao e maior de idade'
    } else if (num1 = 2004) {
        return 'Consultar documento com foto para verificar idade'
    } else if (num1 > 2004) {
        return 'Menor de Idade'
    }
}
console.log(definindoMaiorIdade(2004))