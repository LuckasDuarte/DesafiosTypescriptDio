"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
if (campoSaldo) {
    campoSaldo.innerHTML = saldoTotal.toString();
}
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    if (soma) {
        soma.value = '';
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        if (soma) {
            somarAoSaldo(Number(soma.value));
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
