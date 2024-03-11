/*implementar lógica de inserção de alunos e cálculo de aprovação na calculadora;
criar novas linhas na tabela para representar cada aluno inserido;
aplicar estruturas condicionais como if/else para tomada de decisões;
fazer a comparação entre valores e determinar a exibição dos emojis de celebração ou tristeza com base no resultado.*/


const form = document.getElementById('formAtividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji celebrando"/>`;
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji decepcionado"/>`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = Number(prompt('Digite a nota mínima: '));

let linhas = ``;
form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    }else{
            
    atividades.push(inputNomeAtividade.value);
    notas.push(Number(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value>= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha;
    }



    inputNomeAtividade.value = "";
    inputNotaAtividade.value= "";
}

function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML=mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i = 0; i< notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}
