alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 28;
let numeroDigitado;
let tentativas = 1;


while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt('Escolha um número entre 1 e 30');

    if (numeroSecreto == numeroDigitado) {
        break;
        //alert('Você acertou o número secreto ' + numeroSecreto);
        alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert('O número secreto é menor que ' + numeroDigitado);
        } else {
            alert('O número secreto é maior que ' + numeroDigitado);
        }
        tentativas++ //contando o número de tentativas a certa e a errada
    }
}
if (tentativas > 1) {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}

