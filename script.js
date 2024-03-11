/*implementar lógica de inserção de alunos e cálculo de aprovação na calculadora;
criar novas linhas na tabela para representar cada aluno inserido;
aplicar estruturas condicionais como if/else para tomada de decisões;
fazer a comparação entre valores e determinar a exibição dos emojis de celebração ou tristeza com base no resultado.*/


const form = document.getElementById('formAtividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji celebrando"/>`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji decepcionado"/>`;


let linhas = ``;
form.addEventListener('submit',function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value>= 7 ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;

    inputNomeAtividade.value = "";
    inputNotaAtividade.value= "";


});
