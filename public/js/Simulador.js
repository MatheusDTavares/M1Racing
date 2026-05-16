// Lista de todos os corredores
let corredores = [
    "Alexander Albon", "Kimi Antonelli", "Carlos Sainz", "Charles Leclerc",
    "Esteban Ocon", "Fernando Alonso", "Gabriel Bortoleto", "George Russell",
    "Isack Hadjar", "Kevin Magnussen", "Lance Stroll", "Lando Norris",
    "Lewis Hamilton", "Liam Lawson", "Logan Sargeant", "Max Verstappen",
    "Nico Hülkenberg", "Oscar Piastri", "Pierre Gasly", "Sergio Pérez",
    "Valtteri Bottas", "Zhou Guanyu"
];

// Quanto maior o peso, mais chances o piloto tem de ganhar
let pesos = [2, 2, 4, 6, 3, 5, 2, 6, 2, 2, 2, 7, 6, 2, 1, 9, 3, 7, 4, 5, 3, 2];

let posicoes = [];   // vai guardar a ordem dos pilotos durante a corrida
let correndo = false; // impede clicar duas vezes enquanto a corrida acontece

const TOTAL_VOLTAS = 10;

function iniciarCorrida() {
    // Se já está correndo, não faz nada
    if (correndo) return;
    correndo = true;

    // Pega o número do piloto escolhido no select
    const escolha = parseInt(document.getElementById('ipt_aposta').value);

    // Desabilita o botão durante a corrida
    const btn = document.getElementById('btnCorrer');
    btn.disabled = true;
    btn.textContent = 'Correndo...';

    // Começa com todos os pilotos em ordem de lista
    posicoes = [...corredores];

    // Mostra a área da corrida e esconde o resultado anterior
    document.getElementById('areaVolta').style.display = 'block';
    document.getElementById('resultadoFinal').style.display = 'none';

    let volta = 1;

    // setInterval repete a função a cada 900ms (quase 1 segundo)
    const intervalo = setInterval(function () {

        // Embaralha a ordem com base nos pesos (mais peso = mais chance de ficar na frente)
        posicoes.sort(function (a, b) {
            const pesoA = pesos[corredores.indexOf(a)];
            const pesoB = pesos[corredores.indexOf(b)];
            return (Math.random() * pesoB) - (Math.random() * pesoA);
        });

        // Atualiza o texto "Volta X / 10"
        document.getElementById('voltaTexto').textContent = `Volta ${volta} / ${TOTAL_VOLTAS}`;

        // Atualiza a barra de progresso (Math.round evita número quebrado)
        document.getElementById('progressoFill').style.width =
            Math.round((volta / TOTAL_VOLTAS) * 100) + '%';

        // Redesenha o grid com o top 8
        const grid = document.getElementById('gridCorrida');
        grid.innerHTML = '';

        posicoes.slice(0, 8).forEach(function (nome, i) {
            const ehVoce = nome === corredores[escolha];
            const ehLider = i === 0;

            // Monta as classes CSS da linha
            let classeDiv = 'linha-piloto';
            if (ehVoce) classeDiv += ' destaque';
            else if (ehLider) classeDiv += ' lider';

            // Cor especial para top 3
            let classePosicao = 'pos-num';
            if (i === 0) classePosicao += ' p1';
            else if (i === 1) classePosicao += ' p2';
            else if (i === 2) classePosicao += ' p3';

            // Monta o HTML de cada linha
            const div = document.createElement('div');
            div.className = classeDiv;
            div.innerHTML = `
                <span class="${classePosicao}">${i + 1}º</span>
                <span class="piloto-nome ${ehVoce ? 'destaque-nome' : ''}">${nome}</span>
                ${ehVoce ? '<span class="tag-voce">Você</span>' : ''}
                ${ehLider && !ehVoce ? '<span class="tag-lider">Líder</span>' : ''}
            `;
            grid.appendChild(div);
        });

        // Quando chegar na última volta, encerra a corrida
        if (volta >= TOTAL_VOLTAS) {
            clearInterval(intervalo);

            const vencedor = posicoes[0];
            const posVoce = posicoes.indexOf(corredores[escolha]) + 1;
            const caixaFinal = document.getElementById('resultadoFinal');
            caixaFinal.style.display = 'block';

            if (vencedor === corredores[escolha]) {
                caixaFinal.className = 'resultado-final vitoria';
                caixaFinal.textContent = '🏆 Você venceu a corrida!';
            } else {
                caixaFinal.className = 'resultado-final derrota';
                caixaFinal.textContent = `Você terminou em ${posVoce}º — vencedor: ${vencedor}`;
            }

            // Reabilita o botão para jogar de novo
            btn.disabled = false;
            btn.textContent = '↺ Correr de novo';
            correndo = false;
        }

        volta++;

    }, 900);
}