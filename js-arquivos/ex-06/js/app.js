//recuperar o tbody da página
const tbody = document.querySelector('#historicoContas');


//recuperar o formulário - atribuir um listener submit
// o envio será cancelar - criar uma função para colocar
// os dados na tabela

document.querySelector('form').addEventListener('submit', function(e) {
    // cancelar o submit
    e.preventDefault();
    
    // criar um array contendo os campos do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // criar uma tr
    const tr = document.createElement('tr');

    // percorrer o array campos
    campos.forEach(campo => {
        
        //criar uma td
        const td = document.createElement('td');

        // passar o valor do formulário para a td
        td.textContent = campo.value;

        // colocar a td dentro da tr
        tr.appendChild(td);
    });

    // colocar a tr dentro do tbody
    tbody.appendChild(tr);


    // limpar o formulário
    this.reset();
});
