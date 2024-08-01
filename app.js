let listaDeNumerosSorteados = [];
let numeroLimite = 25;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let selecionado = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 25');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = selecionado;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou! ');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor - tentativas: '+tentativas);
           // exibirTextoNaTela('p', 'número de tentativas:'+tentativas)
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior - tentativas: '+tentativas);
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    resetSelection()
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

        // Função para gerar uma matriz 5x5
        function generateMatrix() {
            const table = document.getElementById('matrix');
            let number = 1;

            for (let i = 0; i < 5; i++) {
                // Cria uma nova linha
                const tr = document.createElement('tr');

                for (let j = 0; j < 5; j++) {
                    // Cria uma nova célula
                    const td = document.createElement('td');
                    td.textContent = number;
                    number++;

                    td.addEventListener('click', function() {
                        // Remove a classe 'selected' de todas as células
                        const cells = table.getElementsByTagName('td');
                        for (let cell of cells) {
                            cell.classList.remove('selected');
                        }
                        selecionado = td.textContent;
                        // Adiciona a classe 'selected' à célula clicada
                        td.classList.add('selected');
                    });


                    // Adiciona a célula à linha
                    tr.appendChild(td);
                }

                // Adiciona a linha à tabela
                table.appendChild(tr);
            }
        }
        function resetSelection() {
            const cells = document.getElementById('matrix').getElementsByTagName('td');
            for (let cell of cells) {
                cell.classList.remove('selected');
            }
            selectedNumber = null; // Limpa a variável selectedNumber
        }

        // Gera a matriz ao carregar a página
        window.onload = generateMatrix;
