let corredores = [
    "Alexander Albon", "Kimi Antonelli", "Carlos Sainz", "Charles Leclerc",
    "Esteban Ocon", "Fernando Alonso", "Gabriel Bortoleto", "George Russell",
    "Isack Hadjar", "Kevin Magnussen", "Lance Stroll", "Lando Norris",
    "Lewis Hamilton", "Liam Lawson", "Logan Sargeant", "Max Verstappen",
    "Nico Hülkenberg", "Oscar Piastri", "Pierre Gasly", "Sergio Pérez",
    "Valtteri Bottas", "Zhou Guanyu"
];

let pesos = [2, 2, 4, 6, 3, 5, 2, 6, 2, 2, 2, 7, 6, 2, 1, 9, 3, 7, 4, 5, 3, 2];

let posicoes = corredores.slice()

let correndo = false;

const TOTAL_VOLTAS = 10;

function iniciarCorrida() {

    if (correndo) return;
    correndo = true;

    const escolha = parseInt(document.getElementById('ipt_pilotos').value);

    const botaocorrer = document.getElementById('btnCorrer');
    botaocorrer.disabled = true;
    botaocorrer.textContent = 'Correndo...';

    console.log(posicoes)

    document.getElementById('areaVolta').style.display = 'block';
    document.getElementById('resultadoFinal').style.display = 'none';

    let volta = 1;

    const intervalo = setInterval(function () {

        posicoes.sort(function (a, b) {
            const pesoA = pesos[corredores.indexOf(a)];
            const pesoB = pesos[corredores.indexOf(b)];
            return (Math.random() * pesoB) - (Math.random() * pesoA);
        });

        document.getElementById('voltaTexto').textContent = `Volta ${volta} / ${TOTAL_VOLTAS}`;

        document.getElementById('progressoFill').style.width =
            Math.round((volta / TOTAL_VOLTAS) * 100) + '%';

        const grid = document.getElementById('gridCorrida');
        
        let htmlFinal = "";

        const top8 = posicoes.slice(0, 8);

        for (let i = 0; i < top8.length; i++) {

            const nome = top8[i];
            const Voce = nome == corredores[escolha];
            const Lider = i == 0;

            let classeDiv = 'linha-piloto';
            if (Voce) classeDiv += ' destaque';
            else if (Lider) classeDiv += ' lider';

            
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
        }
        grid.innerHTML = htmlFinal;

        if (volta >= TOTAL_VOLTAS) {

            clearInterval(intervalo);

            const vencedor = posicoes[0];
            const posVoce = posicoes.indexOf(corredores[escolha]) + 1;

            const caixaFinal = document.getElementById('resultadoFinal');
            caixaFinal.style.display = 'block';

            if (vencedor == corredores[escolha]) {
                caixaFinal.className = 'resultado-final vitoria';
                caixaFinal.textContent = 'Você venceu a corrida!';
            } else {
                caixaFinal.className = 'resultado-final derrota';
                caixaFinal.textContent = `Você terminou em ${posVoce}º — vencedor: ${vencedor}`;
            }

            botaocorrer.disabled = false;
            botaocorrer.textContent = '↺ Correr de novo';
            correndo = false;
        }

        volta++;

    }, 900);
}