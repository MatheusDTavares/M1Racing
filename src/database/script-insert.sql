INSERT INTO equipe (idEquipe, nome) VALUES
(1, 'Mercedes'),
(2, 'Aston Martin'),
(3, 'Cadillac'),
(4, 'Ferrari'),
(5, 'Haas'),
(6, 'Williams'),
(7, 'Audi'),
(8, 'RB Racing'),
(9, 'Red Bull'),
(10, 'Alpine'),
(11, 'McLaren');


INSERT INTO GrandePremio (idGp, nome) VALUES
(1, 'GP de Mônaco'),
(2, 'GP de Silverstone'),
(3, 'GP de Interlagos'),
(4, 'GP de Monza'),
(5, 'GP de Suzuka'),
(6, 'GP de Spa-Francorchamps'),
(7, 'GP de Singapura'),
(8, 'GP de Las Vegas'),
(9, 'GP de Abu Dhabi'),
(10, 'GP do Japão');

INSERT INTO piloto (idPiloto, nome) VALUES
(1, 'Alexander Albon'),
(2, 'Kimi Antonelli'),
(3, 'Carlos Sainz'),
(4, 'Charles Leclerc'),
(5, 'Esteban Ocon'),
(6, 'Fernando Alonso'),
(7, 'Gabriel Bortoleto'),
(8, 'George Russell'),
(9, 'Isack Hadjar'),
(10, 'Kevin Magnussen'),
(11, 'Lance Stroll'),
(12, 'Lando Norris'),
(13, 'Lewis Hamilton'),
(14, 'Liam Lawson'),
(15, 'Logan Sargeant'),
(16, 'Max Verstappen'),
(17, 'Nico Hülkenberg'),
(18, 'Oscar Piastri'),
(19, 'Pierre Gasly'),
(20, 'Sergio Pérez'),
(21, 'Valtteri Bottas'),
(22, 'Zhou Guanyu');

INSERT INTO usuario (nome, email, senha) VALUES
('Ana Silva', 'ana@email.com', '123456'),
('Bruno Costa', 'bruno@email.com', '123456'),
('Carla Mendes', 'carla@email.com', '123456'),
('Diego Lima', 'diego@email.com', '123456'),
('Eva Rocha', 'eva@email.com', '123456'),
('Felipe Gomes', 'felipe@email.com', '123456'),
('Gabriela Nunes', 'gabriela@email.com', '123456'),
('Henrique Alves', 'henrique@email.com', '123456'),
('Isabela Ferreira', 'isabela@email.com', '123456'),
('João Pereira', 'joao@email.com', '123456');

INSERT INTO pesquisa (fkUsuario, r1, r2, r3, r4, r5, r6) VALUES
(1,  '16', 'Sabio',         'Tudo',        '9',  'Hamilton',    '3'),  -- Verstappen, Red Bull, Interlagos
(2,  '12', 'Amador',        'Corrida',     '11', 'Senna',       '1'),  -- Norris, McLaren, Mônaco
(3,  '13', 'Intermediario', 'Tudo',        '1',  'Schumacher',  '6'),  -- Hamilton, Mercedes, Spa
(4,  '4',  'Novato',        'Qualificacao','4',  'Verstappen',  '2'),  -- Leclerc, Ferrari, Silverstone
(5,  '16', 'Sabio',         'Tudo',        '9',  'Senna',       '3'),  -- Verstappen, Red Bull, Interlagos
(6,  '12', 'Amador',        'Nada',        '11', 'Hamilton',    '5'),  -- Norris, McLaren, Suzuka
(7,  '13', 'Sabio',         'Tudo',        '1',  'Lauda',       '1'),  -- Hamilton, Mercedes, Mônaco
(8,  '18', 'Novato',        'Corrida',     '11', 'Verstappen',  '4'),  -- Piastri, McLaren, Monza
(9,  '16', 'Intermediario', 'Treino',      '9',  'Vettel',      '3'),  -- Verstappen, Red Bull, Interlagos
(10, '7',  'Novato',        'Corrida',     '9',  'Hamilton',    '2');  -- Bortoleto, Red Bull, Silverstone