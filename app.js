let listaDeNumerosSorteados = [];
let numeroLimite = 10;
// variáveis do chute do numero secreto
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; // inicia com 1 tentativa



// Função para mudar texto no h1 e p
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

// função para exibir mensagem inicial ao clicar em novo jogo
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 3');



// função do botão de chute do número
function verificarChute(){
    let chute = document.querySelector('input').value; // vai pegar o valor inserido no input
    console.log(chute == numeroSecreto); // vai verificar se o valor de chute inserido no input é igual ao número sorteado

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!'); // texto caso acerte (h1)
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; // palavraTentativa irá formatar o português
        exibirTextoNaTela('p', mensagemTentativas);
        //botão novo jogo habilidade
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor.');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo()
}

// função para gerar número aleatório 
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
} 

// função para limpar campo caso erre (input)
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

// função para clicar no botão novo jogo e ele reiniciar
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




