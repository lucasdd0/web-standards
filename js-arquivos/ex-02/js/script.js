const primeiroNumero = Math.round(Math.random() * 100);
console.log(primeiroNumero);

const segundoNumero = Math.round(Math.random() * 100);
console.log(segundoNumero);

document.querySelector('#primeiroNumero').textContent = primeiroNumero;
document.querySelector('#segundoNumero').textContent = segundoNumero;


let resultado = primeiroNumero + segundoNumero;
document.querySelector('#soma').textContent = resultado;

resultado = primeiroNumero - segundoNumero;
document.querySelector('#subtracao').textContent = resultado;

resultado = primeiroNumero * segundoNumero;
document.querySelector('#multiplicacao').textContent = resultado;

resultado = primeiroNumero / segundoNumero;
document.querySelector('#divisao').textContent = resultado.toFixed(2);

resultado = primeiroNumero ** segundoNumero;
document.querySelector('#potencia').textContent = resultado.toFixed(2);

const numeros = [];
document.querySelector('#btnArray').addEventListener('click', function() {

    for(let i = 0; i <= 9; i++){
        numeros[i] = Math.round(Math.random() * 100);
    }
    document.querySelector('#array').textContent = numeros;
});

document.querySelector('#btnMaior').addEventListener('click', () => {
    let maior = Math.max(...numeros);
    document.querySelector('#maiorArray').textContent = maior;
});

document.querySelector('#btnMenor').addEventListener('click', () => {
    let menor = Math.min(...numeros);
    document.querySelector('#menorArray').textContent = menor;
})

const arrayMultiplicado = [];
document.querySelector('#btnMultiplica').addEventListener('click', () => {
    menor = document.querySelector('#menorArray').textContent;

    arrayMultiplicado.splice(0);
    numeros.forEach(numero => {
        arrayMultiplicado.push(numero * menor);
    })

    document.querySelector('#arrayMultiplicado').textContent = arrayMultiplicado;
})
