// sorteando o número entre 0 e 1
// let primeiroNumero = Math.random();
// console.log(primeiroNumero);

// gerando uma parte inteira para o número
// primeiroNumero*=100;
// console.log(primeiroNumero);

// retornando apenas a parte inteira do número
// primeiroNumero = parseInt(primeiroNumero);

//retornando o próximo número inteiro
// primeiroNumero = Math.ceil(primeiroNumero)

// retornando o próprio inteiro
// primeiroNumero = Math.floor(primeiroNumero);

// retorna o próximo inteiro caso decimal seja >=50
// retorna o mesmo inteiro caso decimal seja <= 49
// primeiroNumero = Math.round(primeiroNumero);
// console.log(primeiroNumero);


const primeiroNumero = Math.round(Math.random()*100);
const segundoNumero = Math.round(Math.random()*100);

document.querySelector('#primeiroNumero').textContent = primeiroNumero;
document.querySelector('#segundoNumero').textContent = segundoNumero;

let resultado = (primeiroNumero + segundoNumero);
document.querySelector('#soma').textContent = resultado;

resultado = (primeiroNumero - segundoNumero);
document.querySelector('#subtracao').textContent = resultado;

resultado = (primeiroNumero * segundoNumero);
document.querySelector('#multiplicacao').textContent = resultado;

resultado = (primeiroNumero / segundoNumero);
document.querySelector('#divisao').textContent = resultado.toFixed(2);

resultado = (primeiroNumero ** segundoNumero);
// resultado = Math.pow(primeiroNumero,segundoNumero);
document.querySelector('#potencia').textContent = resultado.toFixed(2);

// método construtor
// const meuArray = new Array();

// const numeros = [1,2,true, 'Eu mesmo', 3,4,5,6,7,8,9];
// console.log(numeros);
// console.table(numeros);


const numeros = [];
// pegar o botão, adicionar um listener para o click e criar uma função
// para gerar o array quando o botão for clicado

document.querySelector('#btnArray').addEventListener('click', function() {
    for(let i = 0; i <= 9; i++){
        numeros[i] = Math.round(Math.random()*100);
    }
    document.querySelector('#array').textContent = numeros;
})


document.querySelector('#btnMaior').addEventListener('click', () => {
    let maior = Math.max(...numeros);
    // for(let i = 0; i < numeros.length; i++){
    //     if(numeros[i] > maior){
    //         maior = numeros[i];
    //     }
    // }
    document.querySelector('#maiorArray').textContent = maior;
})


document.querySelector('#btnMenor').addEventListener('click', () => {
    let menor = Math.min(...numeros);
    // for(let i = 0; i < numeros.length; i++){
    //     if(numeros[i] > maior){
    //         maior = numeros[i];
    //     }
    // }
    document.querySelector('#menorArray').textContent = menor;
})

const arrayMultiplicado = [];
document.querySelector('#btnMultiplica').addEventListener('click', () =>{
    arrayMultiplicado.splice(0);
    numeros.forEach(numero => {
        arrayMultiplicado.push(numero * 2);
    })  
    document.querySelector('#arrayMultiplicado').textContent = arrayMultiplicado;
})

const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];

// Inserir no início
pessoas.unshift('QQ Pessoa');

// excluir o primeiro valor do array - EXCLUIR MESMO
pessoas.shift();

// inserir no fim do array
pessoas.push('QQ Pessoa');

// excluir o último valor do array - EXCLUIR MESMO
pessoas.pop();

// inserir e excluir em qq posição do array
// excluindo 
pessoas.splice(2,2);

// inserindo
pessoas.splice(2,0,'Ele','Nós');

//juntando
pessoas.splice(3,2,'QQ Pessoa','Outra Pessoa',9809809, false, 'kkkkk', 369.99)

document.querySelector('#arrayPessoas').textContent = pessoas;
console.table(pessoas);