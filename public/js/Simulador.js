// Lista com todos os pilotos que vão largar na corrida
let corredores = [
    "Alexander Albon", "Kimi Antonelli", "Carlos Sainz", "Charles Leclerc",
    "Esteban Ocon", "Fernando Alonso", "Gabriel Bortoleto", "George Russell",
    "Isack Hadjar", "Kevin Magnussen", "Lance Stroll", "Lando Norris",
    "Lewis Hamilton", "Liam Lawson", "Logan Sargeant", "Max Verstappen",
    "Nico Hülkenberg", "Oscar Piastri", "Pierre Gasly", "Sergio Pérez",
    "Valtteri Bottas", "Zhou Guanyu"
];

// O peso de cada piloto — quanto maior, mais esse cara manda na pista
// Segue a mesma ordem da lista de cima
let pesos = [2, 2, 4, 6, 3, 5, 2, 6,2, 2, 2, 7, 6, 2, 1, 9, 3, 7, 4, 5, 3, 2];

// Copia dos corredores
let posicoes = corredores.slice()

// Trava pra não deixar o usuário ficar clicando feito louco no botão
let correndo = false;

// Quantas voltas a corrida vai ter — bora lá
const TOTAL_VOLTAS = 10;

function iniciarCorrida() {

    // Se já tiver rolando uma corrida, não deixa o usuario dar doubleclick
    if (correndo) return;
    correndo = true;

    // Descobre qual piloto o usuário apostou
    const escolha = parseInt(document.getElementById('ipt_aposta').value);

    // Desativa o botão
    const botaocorrer = document.getElementById('btnCorrer');
    botaocorrer.disabled = true;
    botaocorrer.textContent = 'Correndo...';

    // Coloca todo mundo na largada, na ordem original

    console.log(posicoes)

    // Mostra a área da corrida e esconde o resultado velho
    document.getElementById('areaVolta').style.display = 'block';
    document.getElementById('resultadoFinal').style.display = 'none';

    // Começa a contar as voltas do zero
    let volta = 1;

    // simula cada volta
    const intervalo = setInterval(function () {

        // Embaralha a ordem dos pilotos usando os pesos — os pesados têm mais chance de mandar
        posicoes.sort(function (a, b) {
            const pesoA = pesos[corredores.indexOf(a)];
            const pesoB = pesos[corredores.indexOf(b)];
            return (Math.random() * pesoB) - (Math.random() * pesoA);
        });

        // Atualiza o placar de voltas na tela pra galera acompanhar
        document.getElementById('voltaTexto').textContent = `Volta ${volta} / ${TOTAL_VOLTAS}`;

        // Enche a barrinha de progresso conforme as voltas passam
        document.getElementById('progressoFill').style.width =
            Math.round((volta / TOTAL_VOLTAS) * 100) + '%';

        // Pega o grid e limpa tudo que tava antes pra redesenhar
        const grid = document.getElementById('gridCorrida');
        
        // CORREÇÃO: Declarado com 'F' maiúsculo para combinar com o loop
        let htmlFinal = "";

        // Só mostra os 8 primeiros
        const top8 = posicoes.slice(0, 8);

        // Passa por cada um dos 8 e monta o card deles na tela
        for (let i = 0; i < top8.length; i++) {
            const nome = top8[i];

            // Esse cara é o piloto que o usuário escolheu?
            const Voce = nome == corredores[escolha];

            // Esse cara tá na ponta, mandando ver?
            const Lider = i == 0;

            // Define o estilo da linha vermelho se for você, dourado se for o líder
            let classeDiv = 'linha-piloto';
            if (Voce) classeDiv += ' destaque';
            else if (Lider) classeDiv += ' lider';

            // Cor diferente pra quem tá no pódio ouro, prata e bronze
            let classePosicao = 'pos-num';
            if (i == 0) classePosicao += ' p1';
            else if (i == 1) classePosicao += ' p2';
            else if (i == 2) classePosicao += ' p3';

            let classeDestaque = '';
            let tagVoce = '';
            let tagLider = '';

            if (Voce) {
                classeDestaque = 'destaque-nome';
                tagVoce = '<span class="tag-voce">Você</span>';
            }

            if (Lider && !Voce) {
                tagLider = '<span class="tag-lider">Líder</span>';
            }
            
            htmlFinal += `
                <div class="${classeDiv}">
                    <span class="${classePosicao}">${i + 1}º</span>
                    <span class="piloto-nome ${classeDestaque}">${nome}</span>
                    ${tagVoce}
                    ${tagLider}
                </div>
            `;
        } // Fim do loop FOR

        // ADICIONADO: Injeta o resultado final acumulado no grid da tela
        grid.innerHTML = htmlFinal;

        // Se chegar na ultima volta
        if (volta >= TOTAL_VOLTAS) {

            // Para tudo
            clearInterval(intervalo);

            // Pega o vencedor e descobre em que posição o usuário chegou
            const vencedor = posicoes[0];
            const posVoce = posicoes.indexOf(corredores[escolha]) + 1;

            // Mostra a caixinha de resultado final
            const caixaFinal = document.getElementById('resultadoFinal');
            caixaFinal.style.display = 'block';

            // resultado final
            if (vencedor == corredores[escolha]) {
                caixaFinal.className = 'resultado-final vitoria';
                caixaFinal.textContent = 'Você venceu a corrida!';
            } else {
                caixaFinal.className = 'resultado-final derrota';
                caixaFinal.textContent = `Você terminou em ${posVoce}º — vencedor: ${vencedor}`;
            }

            // Libera o botão pra tentar de novo
            botaocorrer.disabled = false;
            botaocorrer.textContent = '↺ Correr de novo';
            correndo = false;
        }

        // Mais uma volta no contador
        volta++;

    }, 900);
}