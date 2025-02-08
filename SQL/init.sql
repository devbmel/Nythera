DROP DATABASE IF EXISTS Nythera;
CREATE DATABASE Nythera;
USE Nythera;

CREATE TABLE Rarity (
id int PRIMARY KEY AUTO_INCREMENT,
name ENUM('Common', 'Uncommon', 'Rare', 'Epic', 'Mythic') NOT NULL,
min_value int check(min_value > 0 AND min_value < 100),
max_value int CHECK (max_value > 0 AND max_value < 100)
);

INSERT INTO Rarity (name,min_value,max_value) VALUES ('Common',75,99);
INSERT INTO Rarity (name,min_value,max_value) VALUES ('Uncommon',50,74);
INSERT INTO Rarity (name,min_value,max_value) VALUES ('Rare',25,49);
INSERT INTO Rarity (name,min_value,max_value) VALUES ('Epic',6,24);
INSERT INTO Rarity (name,min_value,max_value) VALUES ('Mythic',1,5);

CREATE TABLE Items (
id int PRIMARY KEY AUTO_INCREMENT,
name varchar(50) NOT NULL,
item_type enum('meat', 'fish', 'plant', 'object') NOT NULL,
id_rarity int NOT null,
energy int NOT NULL CHECK (energy > 0 AND energy < 100), 
hunger int NOT NULL CHECK (hunger > 0 AND hunger < 100),
happiness int NOT NULL CHECK (happiness > 0 AND happiness < 100),
special_effect varchar(250),
constraint foreign key (id_rarity) references Rarity(id)

);


INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de lapin cornu','meat',1,10,15,5,'Restaure légèrement l’énergie');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de rat ailé','meat',1,8,10,2,'Aucun effet spécial');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de renard de feu','meat',3,20,25,10,'Augmente légèrement la résistance au feu');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de taupe aveugle','meat',2,12,8,3,'Augmente légèrement la perception');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de chauve-souris géante','meat',2,18,20,8,'Améliore temporairement l’agilité');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de chat spectral','meat',3,25,30,15,'Rend la créature plus furtive pendant un court moment');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de hérisson barbelé','meat',1,15,20,5,'Augmente temporairement la défense');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de lièvre lunaire','meat',5,30,35,20,'Boost la vitesse temporairement');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de belette ombragée','meat',1,22,28,10,'Augmente la furtivité de nuit');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Viande de serpent à plumes','meat',4,28,32,15,'Améliore la capacité de vol des créatures ailées');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Saumon doré','fish',3,15,20,10,'Régénère lentement l’énergie');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Anguille abyssale','fish',4,25,15,5,'Augmente la vitesse pendant 30s');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Piranha affamé','fish',2,10,25,5,'Peut mordre le joueur !');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Requin miniature','fish',5,40,30,15,'Inflige des dégâts en cas de rejet');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Hareng lumineux','fish',1,5,10,10,'Émet une faible lumière dans eau');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Carpe mystique','fish',3,20,12,20,'Double effet des autres poissons');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Brochet spectral','fish',4,30,20,5,'Invisible dans eau pendant 10s');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Poisson-chat venimeux','fish',2,15,25,10,'Peut empoisonner temporairement');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Truite géante','fish',3,18,20,8,'Peut être cuisinée pour plus effets');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Poisson-tempête','fish',5,50,40,20,'Provoque une mini-tempête aquatique');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Lichen mystique','plant',3,5,10,20,'Apporte une guérison progressive');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Fleur de vie','plant',5,30,5,25,'Annule un malus aléatoire');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Racine ancestrale','plant',4,20,15,15,'Donne un bonus de défense temporaire');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Algues énergétiques','plant',2,10,5,5,'Augmente légèrement endurance');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Baie luminescente','plant',1,3,3,15,'Permet de voir dans le noir');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Champignon ombrageux','plant',2,8,7,5,'Peut être toxique ou bénéfique');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Feuille de vent','plant',3,12,8,18,'Rend plus léger et rapide temporairement');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Liane guérisseuse','plant',4,20,10,25,'Régénère la vie sur 1 minute');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Pétale du chaos','plant',5,25,15,10,'Provoque un effet aléatoire puissant');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Nectar céleste','plant',5,35,10,30,'Soigne instantanément tous les malus');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Pierre runique','object',3,1,1,1,'Permet d’améliorer une créature');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Cristal d’énergie','object',5,50,1,30,'Recharge instantanément l’énergie');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Orbe chaotique','object',4,10,5,10,'Effet aléatoire positif ou négatif');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Amulette du vent','object',3,1,1,15,'Augmente la vitesse de déplacement');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Grimoire ancien','object',5,1,1,50,'Donne un boost de sagesse temporaire');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Anneau de feu','object',4,10,10,10,'Permet de lancer une petite boule de feu');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Potion d’éclipse','object',5,20,1,40,'Restaure énergie et santé');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Sable du temps','object',3,1,1,5,'Ralentit ou accélère le temps légèrement');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Corne mystique','object',2,15,5,20,'Appelle une monture temporaire');
INSERT INTO items (name,item_type,id_rarity,energy,hunger,happiness,special_effect) VALUES ('Rune dombre','object',4,5,1,10,'Permet de se camoufler dans lombre');


CREATE TABLE Inventory (
id int PRIMARY KEY AUTO_INCREMENT,
id_item int NOT NULL,
CONSTRAINT FOREIGN KEY (id_item) REFERENCES Items(id)
);


CREATE TABLE Beasts (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
beast_level INT NOT NULL DEFAULT 0,
happiness INT CHECK (happiness BETWEEN 0 AND 100),
energy INT CHECK (energy BETWEEN 0 AND 100),
birthdate DATE NOT NULL, 
date_last_levelup DATE CHECK (date_last_levelup >= birthdate),
beast_type enum ('water', 'fire', 'earth', 'air') NOT NULL,
sex enum ('male', 'female') NOT NULL,
mood enum ('good', 'angry', 'sad', 'happy') NOT NULL,
diet enum ('Carnivorous', 'Herbivorous', 'Omnivorous') NOT NULL
);
