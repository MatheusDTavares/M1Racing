let corredores = [
"Alexander Albon","Kimi Antonelli","Carlos Sainz","Charles Leclerc",
"Esteban Ocon","Fernando Alonso","Gabriel Bortoleto","George Russell",
"Isack Hadjar","Kevin Magnussen","Lance Stroll","Lando Norris",
"Lewis Hamilton","Liam Lawson","Logan Sargeant","Max Verstappen",
"Nico Hülkenberg","Oscar Piastri","Pierre Gasly","Sergio Pérez",
"Valtteri Bottas","Zhou Guanyu"
];

let pesos = [
2,2,4,6,3,5,2,6,2,2,2,7,6,2,1,9,3,7,4,5,3,2
];

let posicoes = [];


function iniciarCorrida() {
    posicoes = [...corredores];
}


function atualizarVolta() {
    posicoes.sort((a, b) => {
        let pesoA = pesos[corredores.indexOf(a)];
        let pesoB = pesos[corredores.indexOf(b)];

        return (Math.random() * pesoB) - (Math.random() * pesoA);
    });
}


async function Correr() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let pilotoEscolhido = Number(ipt_aposta.value);
    

    iniciarCorrida();

    let volta = 1;
    let totalVoltas = 10;

    let intervalo = setInterval(async () => {
        atualizarVolta();

        resultado.innerHTML = `<b> Volta ${volta}/${totalVoltas}</b><br><br>`;
        for (let i = 0; i < 5; i++) {
            resultado.innerHTML += `${i+1}º - ${posicoes[i]} <br>`;
        }

        volta++;

        if (volta > totalVoltas) {
            clearInterval(intervalo);

            resultado.innerHTML += "<br><b> Corrida finalizada!</b><br><br>";

            let vencedor = posicoes[0];


            if (vencedor === corredores[escolha]) {
                resultado.innerHTML += " Você acertou o vencedor!";
            } else {
                resultado.innerHTML += ` Você escolheu ${corredores[escolha]}, mas o vencedor foi ${vencedor}`;
                }
            }
        }, 1000);
    }
