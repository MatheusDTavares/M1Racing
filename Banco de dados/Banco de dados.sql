Create database F1site;
use F1site;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(100),
	saldo int default 0,
	ultimo_login date
);

CREATE TABLE pilotos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	nacionalidade VARCHAR(100)
);

CREATE TABLE equipe (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	descricao VARCHAR(150)
);

CREATE TABLE usuario_piloto (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fk_piloto INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	FOREIGN KEY (fk_piloto) REFERENCES pilotos(id)
);

CREATE TABLE usuario_equipe (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fk_equipe INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
	FOREIGN KEY (fk_equipe) REFERENCES equipe(id)
);

create table aposta(
id int priamry key AUTO_INCREMENT,
fk_usuario int,
pilotos varchar(50),
valor int,
resultado varchar(50),
foreign key (fk_usuario) references usuario(id)
);

INSERT INTO pilotos (nome, nacionalidade) VALUES

-- Red Bull
('Max Verstappen', 'Holandês'),
('Liam Lawson', 'Neozelandês'),

-- Mercedes
('George Russell', 'Britânico'),
('Kimi Antonelli', 'Italiano'),

-- Ferrari
('Charles Leclerc', 'Monegasco'),
('Lewis Hamilton', 'Britânico'),

-- McLaren
('Lando Norris', 'Britânico'),
('Oscar Piastri', 'Australiano'),

-- Aston Martin
('Fernando Alonso', 'Espanhol'),
('Lance Stroll', 'Canadense'),

-- Alpine
('Pierre Gasly', 'Francês'),
('Jack Doohan', 'Australiano'),

-- Williams
('Alexander Albon', 'Tailandês'),
('Carlos Sainz', 'Espanhol'),

-- Racing Bulls
('Yuki Tsunoda', 'Japonês'),
('Isack Hadjar', 'Francês'),

-- Audi F1 Team (Sauber)
('Nico Hülkenberg', 'Alemão'),
('Gabriel Bortoleto', 'Brasileiro'),

-- Haas
('Esteban Ocon', 'Francês'),
('Oliver Bearman', 'Britânico'),

-- Cadillac

('Sergio Pérez', 'Mexicano'),
('Valterri Bottas', 'Finlandês');

INSERT INTO equipe (nome, descricao) VALUES
('Red Bull Racing', 'Equipe dominante da era moderna da F1'),
('Mercedes', 'Equipe multicampeã da era híbrida'),
('Ferrari', 'A equipe mais tradicional da F1'),
('McLaren', 'Equipe em grande ascensão recente'),
('Aston Martin', 'Equipe com forte investimento'),
('Alpine', 'Equipe oficial da Renault'),
('Williams', 'Equipe histórica em reconstrução'),
('Racing Bulls', 'Equipe júnior da Red Bull'),
('Audi F1 Team', 'Nova fase da Sauber como equipe oficial Audi'),
('Haas F1 Team', 'Equipe norte-americana da Fórmula 1'),
('Cadillac F1 Team', 'Nova equipe da General Motors entrando na Fórmula 1 em 2026');

