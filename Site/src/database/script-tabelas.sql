Create database M1Racing;
use M1Racing;

create table usuario(
IdUsuario int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100)
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



);
