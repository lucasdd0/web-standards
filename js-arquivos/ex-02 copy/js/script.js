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
document.querySelector('#btnArray').addEventListener('click', () => {
    for(let i = 0; i < 10; i++){
        numeros[i] = Math.round(Math.random() * 100);
    }
    document.querySelector('#array').textContent = numeros;
});

document.querySelector('#btnMaior').addEventListener('click', () => {
    const maior = Math.max(...numeros);
    document.querySelector('#maiorArray').textContent = maior;
});

document.querySelector('#btnMenor').addEventListener('click', () => {
    const maior = Math.min(...numeros);
    document.querySelector('#menorArray').textContent = maior;
});

const arrayMultiplicado = [];
document.querySelector('#btnMultiplica').addEventListener('click', () => {
    arrayMultiplicado.splice(0);

    numeros.forEach(numero => {
        arrayMultiplicado.push(numero * 2);
    });

    document.querySelector('#arrayMultiplicado').textContent = arrayMultiplicado;
});