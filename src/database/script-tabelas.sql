Create database M1Racing;
use M1Racing;

create table usuario(
id int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100)
);

create table piloto(
    idPiloto int primary key auto_increment,
    nome varchar(60)
);

create table equipe(
    idEquipe int primary key auto_increment,
    nome varchar(100)
);

create table GrandePremio(
    idGP int primary key auto_increment,
    nome varchar(100)
);

create table pesquisa(
fkUsuario int not null,
r1 varchar(30) not null,
r2 varchar(30) not null,
r3 varchar(30) not null,
r4 varchar(30) not null,
r5 varchar(30) not null,
r6 varchar(30) not null,
primary key(fkUsuario),
constraint fk_usuario_pesquisa foreign key (fkUsuario) references usuario(id),
constraint chk_r1 check(r1 >= 1 and r1 <=22),
constraint chk_r2 check(r2 in ('Novato', 'Amador', 'Intermediario', 'Sabio')),
constraint chk_r3 check(r3 in ('Tudo', 'Treino', 'Qualificacao', 'Corrida', 'Nada')),
constraint chk_r4 check(r4 >= 1 and r4 <= 11),
constraint chk_r6 check(r6 >= 1 and r6 <=10)
);
