let imagem = 1;

function esquerda() {
    if(imagem == 1) {
        imagem = 3
    } else {
        imagem --
    }
    conteudo()
}

function direita() {
    if(imagem == 3) {
        imagem == 1
    } else {
        imagem++
    }

    conteudo()
}

function conteudo() {
    let textoM = document.getElementById('texto')
    
    if(imagem == 1) {
        textoM.innerHTML = `<h1>Como surgiu meu interesse pelo tema?</h1><p>Meu interesse por Fórmula 1 surgiu ainda na infância, entre 2011 e 2012. 
          Eu lembro claramente dos domingos em que meu pai acordava cedo para assistir às corridas do Felipe Massa correndo pela Ferrari. 
          Naquela época, meus pais estavam construindo nossa casa, porque ainda morávamos na casa dos meus avós.</p><br>`
    } else if (imagem == 2) {
        textoM.innerHTML = `<h1>Como surgiu meu interesse pelo tema?</h1><p>
          Durante essa fase, nosso vizinho acabou se tornando muito amigo do meu pai, e consequentemente o filho dele virou meu amigo também. 
          O assunto principal entre nossos pais sempre era corrida, Fórmula 1 e automobilismo. O pai dele inclusive competia de moto em campeonatos no Autódromo de Interlagos, 
          e um dia ele convidou eu e meu pai para assistirmos uma corrida. Essa foi minha primeira vez em um autódromo, 
          e eu fiquei completamente impressionado com aquele ambiente, com o barulho dos motores e toda a emoção das pistas.
        </p>`
    } else if (imagem == 3) {
        textoM.innerHTML = `<h1>Como surgiu meu interesse pelo tema?</h1><p>
          Desde pequeno, sempre fui apaixonado por duas coisas: tecnologia e automobilismo. 
          Uma das minhas melhores lembranças era passar noites jogando Gran Turismo 5 com meu pai em corridas online. 
          Eu ficava extremamente empolgado nas primeiras voltas, mas depois de muitas voltas acabava deixando ele terminar as corridas sozinho. 
          Essas experiências fortaleceram ainda mais meu amor por corridas.
        </p>`
    } else if (imagem == 4) {
         textoM.innerHTML = `<h1>Como surgiu meu interesse pelo tema?</h1><p>
        Meu gosto pelo automobilismo também aparecia em vários momentos da minha vida. Tive festa de aniversário com tema de corrida, 
        ganhei um macacão da Ferrari e sempre gostei quando meu pai acelerava o carro durante as viagens. 
        Meus pais até contam que eu falava “liga o turbo” quando era pequeno.
      </p>`
    } else if (imagem == 5) {
        textoM.innerHTML = `<h1>Como esse tema está presente no meu dia a dia?</h1><p>Hoje em dia, 
        o automobilismo continua sendo algo muito presente na minha vida. 
        Sempre acompanho corridas, vídeos e conteúdos sobre pilotagem. 
        Além disso, também gosto da parte tecnológica envolvida na Fórmula 1, 
        como análise de dados, desempenho dos carros, estratégias e engenharia.</p><br><p>Esse interesse também se conecta diretamente com minha área de estudos em tecnologia. 
        Por isso escolhi esse tema para meu projeto individual: ele une algo que sempre fez parte da minha história com algo que quero seguir profissionalmente.</p>`
    } else if (imagem == 6) {
         textoM.innerHTML = `<h1>Valores representados no projeto</h1><p>Meu projeto representa vários valores importantes para mim:
Persistência, porque corridas são decididas nos detalhes e exigem concentração até o final.
Competitividade saudável, sempre buscando melhorar desempenho e aprender mais.
Disciplina, já que automobilismo exige preparação, estratégia e controle emocional.
Conexão familiar, porque grande parte da minha paixão nasceu dos momentos que vivi com meu pai.
Paixão por tecnologia, principalmente pela análise de dados e desempenho presente na Fórmula 1.</p>`
    } else if (imagem == 7) {
         textoM.innerHTML = `<h1>Momentos marcantes que reforçaram essa paixão</h1><p>Mesmo sem nunca ter corrido de kart quando era criança, 
         eu sempre acompanhava vídeos e aprendia sobre pilotagem. 
         Isso fez diferença quando finalmente tive a oportunidade de correr.</p><br><p>Na minha festa de 13 anos, 
         meus pais fizeram a comemoração na SP Diversões, 
         onde havia uma pista de kart. Na corrida estavam meus amigos, meus tios e meu pai. 
         Mesmo sendo minha primeira experiência, 
         consegui vencer a corrida em uma disputa que lembro até hoje contra meu amigo Leonardo. 
         Nós passamos a última volta inteira disputando posição e nos tocando na pista. 
         Na reta final, acelerei até o limite enquanto ele freou cedo demais, 
         e consegui garantir a vitória.</p><br><p>Outro momento muito importante aconteceu no ano passado, 
         quando comemorei meu aniversário no Kartódromo Granja Viana. 
         Mesmo estando fora de forma, consegui disputar entre as primeiras posições em uma bateria aberta, 
         onde também havia pilotos profissionais patrocinados. Larguei em 4º lugar, 
         cheguei a ocupar a 2ª posição, mas acabei cometendo um erro no final da corrida e terminei em 4º. 
         Apesar disso, saí extremamente feliz porque alguns pilotos profissionais elogiaram meu desempenho e disseram que eu tinha potencial.</p>
         <p>Também lembro com carinho da moto do meu pai, a Honda CB 300, 
         chamada por nós de “Neguinha”. Ele chegou a competir com ela utilizando o número 43,
          algo que marcou muito minha infância.</p>`
    } else if (imagem == 8) {
         textoM.innerHTML = `<h1>Maior dificuldade no projeto</h1><p></p><br>`
    } else if (imagem == 9) {
         textoM.innerHTML = `<h1>Maior superação</h1><p>Minha maior superação foi conseguir unir minhas duas maiores paixões: tecnologia e automobilismo. 
         Mais do que apenas criar um site, 
         consegui desenvolver algo que representa minha história, 
         minhas memórias e os momentos que vivi com minha família.</p>`
    } else if (imagem == 10) {
         textoM.innerHTML = `<h1>Agradecimentos</h1><p>Grande parte dessa paixão surgiu por causa do meu pai. 
         Foi ele quem me apresentou o mundo das corridas, das viagens, dos jogos e das pistas. 
         Muitos dos meus melhores momentos da infância envolveram automobilismo, 
         então esse projeto também representa uma homenagem a tudo que vivi ao lado dele.</p>`
    }
    
}
