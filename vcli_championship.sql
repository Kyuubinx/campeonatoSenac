-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Fev-2024 às 01:37
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `vcli_championship`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `game`
--

CREATE TABLE `game` (
  `idGame` int(11) NOT NULL,
  `idTeamHome` int(11) NOT NULL,
  `idTeamAway` int(11) NOT NULL,
  `round` int(11) NOT NULL,
  `goalHome` int(11) DEFAULT 0,
  `goalAway` int(11) NOT NULL DEFAULT 0,
  `idLeague` int(11) NOT NULL,
  `cardHome` int(2) NOT NULL DEFAULT 0,
  `cardAway` char(2) NOT NULL DEFAULT '0',
  `active` enum('true','false') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Acionadores `game`
--
DELIMITER $$
CREATE TRIGGER `trg_points_champion` AFTER UPDATE ON `game` FOR EACH ROW BEGIN
    IF EXISTS (SELECT * FROM game WHERE active = 'true' AND idGame = NEW.idGame) THEN
        IF NEW.goalHome > NEW.goalAway THEN
            UPDATE ranking
            SET 
            	victory = victory + 1,
                points = points + 3,
                goalsPro = goalsPro + NEW.goalHome, 
                goalsTaken = goalsTaken + NEW.goalAway, 
                goalSum = goalSum - (NEW.goalAway - NEW.goalHome)
            WHERE idTeam = NEW.idTeamHome;

            UPDATE ranking
            SET 
                loss = loss + 1,
                goalsPro = goalsPro + NEW.goalAway, 
                goalsTaken = goalsTaken + NEW.goalHome, 
                goalSum = goalSum - (NEW.goalHome - NEW.goalAway)
            WHERE idTeam = NEW.idTeamAway;
        ELSE
            IF NEW.goalHome = NEW.goalAway THEN
                UPDATE ranking
                SET 
                	draw = draw + 1,
                    points = points + 1,
                    goalsPro = goalsPro + NEW.goalAway,
                    goalsTaken = goalsTaken + NEW.goalHome 
                WHERE idTeam IN (NEW.idTeamHome, NEW.idTeamAway);
            END IF;
        END IF;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `league`
--

CREATE TABLE `league` (
  `idLeague` int(11) NOT NULL,
  `nameLeague` varchar(80) NOT NULL,
  `gender` enum('M','F') NOT NULL,
  `active` enum('true','false','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `league`
--

INSERT INTO `league` (`idLeague`, `nameLeague`, `gender`, `active`) VALUES
(1, 'A', 'M', 'true');

-- --------------------------------------------------------

--
-- Estrutura da tabela `player`
--

CREATE TABLE `player` (
  `idPlayer` int(11) NOT NULL,
  `playerName` varchar(60) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL,
  `status` enum('holder','reserve') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `player`
--

INSERT INTO `player` (`idPlayer`, `playerName`, `idTeam`, `age`, `idPosition`, `status`) VALUES
(1, 'Messi', 2, 24, 1, 'holder'),
(2, 'Iago', 2, 18, 2, 'holder'),
(3, 'Lucas', 2, 18, 3, 'holder'),
(4, 'Vitor', 2, 17, 4, 'holder'),
(6, 'Gustavo', 7, 31, 1, 'holder'),
(7, 'João', 9, 21, 2, 'holder'),
(8, 'Diego', 10, 21, 2, 'holder'),
(9, 'Nairo', 2, 21, 2, 'holder'),
(10, 'Regis', 7, 19, 3, 'holder'),
(11, 'Tomas', 7, 18, 1, 'holder'),
(14, 'Ronaldo', 7, 19, 1, 'holder'),
(15, 'Casemiro', 2, 20, 4, 'reserve'),
(16, 'Ricardo', 2, 20, 4, 'reserve'),
(17, 'Rodrifo', 2, 20, 3, 'reserve');

-- --------------------------------------------------------

--
-- Estrutura da tabela `position`
--

CREATE TABLE `position` (
  `idPosition` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `position`
--

INSERT INTO `position` (`idPosition`, `description`) VALUES
(1, 'Pivot'),
(2, 'Fixed'),
(3, 'Right wing'),
(4, 'Left wing'),
(5, 'Goalkeeper');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ranking`
--

CREATE TABLE `ranking` (
  `idRanking` int(11) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `points` int(11) NOT NULL DEFAULT 0,
  `victory` int(11) NOT NULL DEFAULT 0,
  `draw` int(11) NOT NULL DEFAULT 0,
  `loss` int(11) NOT NULL DEFAULT 0,
  `goalsPro` int(11) NOT NULL DEFAULT 0,
  `goalsTaken` int(11) NOT NULL DEFAULT 0,
  `goalSum` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `ranking`
--

INSERT INTO `ranking` (`idRanking`, `idTeam`, `points`, `victory`, `draw`, `loss`, `goalsPro`, `goalsTaken`, `goalSum`) VALUES
(1, 1, 0, 0, 0, 0, 0, 0, 0),
(2, 2, 0, 0, 0, 0, 0, 0, 0),
(3, 3, 0, 0, 0, 0, 0, 0, 0),
(4, 4, 0, 0, 0, 0, 0, 0, 0),
(5, 5, 0, 0, 0, 0, 0, 0, 0),
(6, 6, 0, 0, 0, 0, 0, 0, 0),
(7, 7, 0, 0, 0, 0, 0, 0, 0),
(8, 8, 0, 0, 0, 0, 0, 0, 0),
(9, 9, 0, 0, 0, 0, 0, 0, 0),
(10, 10, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `team`
--

CREATE TABLE `team` (
  `idTeam` int(11) NOT NULL,
  `teamName` varchar(120) NOT NULL,
  `teamTag` char(3) NOT NULL,
  `idLeague` int(11) NOT NULL DEFAULT 1,
  `gender` enum('M','F') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `teamTag`, `idLeague`, `gender`) VALUES
(1, 'Internacional', 'INT', 1, 'M'),
(2, 'Gremio', 'GRE', 1, 'M'),
(3, 'Real Madrid', 'RMC', 1, 'M'),
(4, 'Barcelona', 'BAR', 1, 'M'),
(5, 'Figueirense', 'FIG', 1, 'M'),
(6, 'Flamengo', 'FLA', 1, 'M'),
(7, 'Caxias', 'CAX', 1, 'M'),
(8, 'Madureira', 'MAD', 1, 'M'),
(9, 'Palmeiras', 'PAL', 1, 'M');

--
-- Acionadores `team`
--
DELIMITER $$
CREATE TRIGGER `trg_insert_ranking` AFTER INSERT ON `team` FOR EACH ROW INSERT INTO ranking(idTeam) VALUES(NEW.idTeam)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `userName` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(64) NOT NULL,
  `cpf` int(11) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `idType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`idUser`, `userName`, `email`, `password`, `cpf`, `phone`, `idType`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456', 11122233, '51911111111', 1),
(4, 'User', 'user@gmail.com', '123456', 11122233, '51911111111', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usertype`
--

CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usertype`
--

INSERT INTO `usertype` (`id`, `description`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`idGame`),
  ADD KEY `idLeague` (`idLeague`),
  ADD KEY `idTeamHome_fk` (`idTeamHome`),
  ADD KEY `idTeamAway_fk` (`idTeamAway`);

--
-- Índices para tabela `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`idLeague`);

--
-- Índices para tabela `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`idPlayer`),
  ADD KEY `idTeam` (`idTeam`),
  ADD KEY `idPosition` (`idPosition`);

--
-- Índices para tabela `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`idPosition`);

--
-- Índices para tabela `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`idRanking`),
  ADD KEY `idTeam_fk` (`idTeam`);

--
-- Índices para tabela `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`idTeam`),
  ADD KEY `idLeague` (`idLeague`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `idType` (`idType`);

--
-- Índices para tabela `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `game`
--
ALTER TABLE `game`
  MODIFY `idGame` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `league`
--
ALTER TABLE `league`
  MODIFY `idLeague` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `player`
--
ALTER TABLE `player`
  MODIFY `idPlayer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `position`
--
ALTER TABLE `position`
  MODIFY `idPosition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `ranking`
--
ALTER TABLE `ranking`
  MODIFY `idRanking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `team`
--
ALTER TABLE `team`
  MODIFY `idTeam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usertype`
--
ALTER TABLE `usertype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `idLeague_fk` FOREIGN KEY (`idLeague`) REFERENCES `league` (`idLeague`),
  ADD CONSTRAINT `idTeamAway_fk` FOREIGN KEY (`idTeamAway`) REFERENCES `team` (`idTeam`),
  ADD CONSTRAINT `idTeamHome_fk` FOREIGN KEY (`idTeamHome`) REFERENCES `team` (`idTeam`);

--
-- Limitadores para a tabela `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`),
  ADD CONSTRAINT `player_ibfk_2` FOREIGN KEY (`idPosition`) REFERENCES `position` (`idPosition`);

--
-- Limitadores para a tabela `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `idTeam_fk` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`);

--
-- Limitadores para a tabela `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_2` FOREIGN KEY (`idLeague`) REFERENCES `league` (`idLeague`);

--
-- Limitadores para a tabela `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idType`) REFERENCES `usertype` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
