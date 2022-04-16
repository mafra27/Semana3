//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(diaCorrespondente) {
    switch (diaCorrespondente) {
        case '1':
            return 'SEGUNDA FEIRA'
        case '2':
            return 'TERCA FEIRA'
        case '3':
            return 'QUARTA FEIRA'
        case '4':
            return 'QUINTA FEIRA'
        case '5':
            return 'SEXTA FEIRA'
        case '6':
            return 'SABADO'
        case '7':
            return 'DOMINGO'

        default:
            return 'Consultar Calendario'
    }
}
console.log(diaDaSemana('11'))