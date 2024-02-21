-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/02/2024 às 22:16
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

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
-- Estrutura para tabela `game`
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
  `dateGame` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `game`
--

INSERT INTO `game` (`idGame`, `idTeamHome`, `idTeamAway`, `round`, `goalHome`, `goalAway`, `idLeague`, `cardHome`, `cardAway`, `dateGame`) VALUES
(5, 7, 8, 0, 0, 0, 1, 0, '0', '2024-02-14 23:52:25'),
(6, 13, 12, 0, 0, 0, 1, 0, '0', '2024-02-16 23:52:25');

-- --------------------------------------------------------

--
-- Estrutura para tabela `league`
--

CREATE TABLE `league` (
  `idLeague` int(11) NOT NULL,
  `nameLeague` varchar(80) NOT NULL,
  `gender` enum('M','F') NOT NULL,
  `active` enum('true','false','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `league`
--

INSERT INTO `league` (`idLeague`, `nameLeague`, `gender`, `active`) VALUES
(1, 'A', 'M', 'false');

-- --------------------------------------------------------

--
-- Estrutura para tabela `player`
--

CREATE TABLE `player` (
  `idPlayer` int(11) NOT NULL,
  `playerName` varchar(60) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `photo` text NOT NULL,
  `age` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL,
  `status` enum('holder','reserve') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `player`
--

INSERT INTO `player` (`idPlayer`, `playerName`, `idTeam`, `photo`, `age`, `idPosition`, `status`) VALUES
(1, 'Carlos', 7, '...', 24, 1, 'holder'),
(2, 'Iago', 8, '...', 18, 2, 'holder'),
(3, 'Lucas', 7, '...', 18, 3, 'holder'),
(4, 'Vitor', 8, '...', 17, 4, 'holder'),
(6, 'Gustavo', 7, '...', 31, 1, 'holder'),
(7, 'João', 9, '...', 21, 2, 'holder'),
(8, 'Diego', 10, '...', 21, 2, 'holder'),
(9, 'Ago', 14, '...', 21, 2, 'holder'),
(10, 'teste', 7, 'SEM FOT', 19, 3, 'holder'),
(11, 't', 7, 'SEM FOTO', 18, 1, ''),
(12, 'teste1', 7, 'SEM FOTO', 19, 1, ''),
(13, 'teste5', 7, 'SEM FOTO', 18, 1, ''),
(14, 'Iago3', 7, 'SEM FOTO', 19, 1, '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `position`
--

CREATE TABLE `position` (
  `idPosition` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `position`
--

INSERT INTO `position` (`idPosition`, `description`) VALUES
(1, 'Pivot'),
(2, 'Fixed'),
(3, 'Right wing'),
(4, 'Left wing'),
(5, 'Goalkeeper');

-- --------------------------------------------------------

--
-- Estrutura para tabela `ranking`
--

CREATE TABLE `ranking` (
  `idRanking` int(11) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `points` int(11) NOT NULL,
  `victory` int(11) NOT NULL,
  `draw` int(11) NOT NULL,
  `loss` int(11) NOT NULL,
  `goalsPro` int(11) NOT NULL,
  `goalsTaken` int(11) NOT NULL,
  `goalSum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `team`
--

CREATE TABLE `team` (
  `idTeam` int(11) NOT NULL,
  `teamName` varchar(120) NOT NULL,
  `teamTag` char(3) NOT NULL,
  `idLeague` int(11) NOT NULL DEFAULT 1,
  `gender` enum('M','F') NOT NULL,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `teamTag`, `idLeague`, `gender`, `active`, `photo`) VALUES
(7, 'Internacional', 'INT', 1, 'M', 'true', ''),
(8, 'Gremio', 'GRE', 1, 'M', 'true', ''),
(9, 'Real Madrid', 'RMC', 1, 'M', 'true', ''),
(10, 'Barcelona', 'BAR', 1, 'M', 'true', ''),
(12, 'Figueirense', 'FIG', 1, 'M', 'true', ''),
(13, 'Flamengo', 'FLA', 1, 'M', 'true', ''),
(14, 'Caxias', 'CAX', 1, 'M', 'true', ''),
(15, 'Madureira', 'MAD', 1, 'M', 'true', ''),
(16, 'Palmeiras', 'PAL', 1, 'M', 'true', ''),
(17, 'Bragantino', 'BRA', 1, 'M', 'true', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `userName` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(64) NOT NULL,
  `cpf` int(11) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `idType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`idUser`, `userName`, `email`, `password`, `cpf`, `phone`, `idType`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456', 11122233, '51911111111', 1),
(3, 'Tec', 'tec@gmail.com', '12345', 11122233, '51911111111', 2),
(4, 'User', 'user@gmail.com', '123456', 11122233, '51911111111', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usertype`
--

CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usertype`
--

INSERT INTO `usertype` (`id`, `description`) VALUES
(1, 'admin'),
(2, 'technician'),
(3, 'user');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`idGame`),
  ADD KEY `idLeague` (`idLeague`),
  ADD KEY `idTeamHome_fk` (`idTeamHome`),
  ADD KEY `idTeamAway_fk` (`idTeamAway`);

--
-- Índices de tabela `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`idLeague`);

--
-- Índices de tabela `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`idPlayer`),
  ADD KEY `idTeam` (`idTeam`),
  ADD KEY `idPosition` (`idPosition`);

--
-- Índices de tabela `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`idPosition`);

--
-- Índices de tabela `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`idRanking`),
  ADD KEY `idTeam_fk` (`idTeam`);

--
-- Índices de tabela `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`idTeam`),
  ADD KEY `idLeague` (`idLeague`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `idType` (`idType`);

--
-- Índices de tabela `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `game`
--
ALTER TABLE `game`
  MODIFY `idGame` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=730;

--
-- AUTO_INCREMENT de tabela `league`
--
ALTER TABLE `league`
  MODIFY `idLeague` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `player`
--
ALTER TABLE `player`
  MODIFY `idPlayer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `position`
--
ALTER TABLE `position`
  MODIFY `idPosition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `ranking`
--
ALTER TABLE `ranking`
  MODIFY `idRanking` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `team`
--
ALTER TABLE `team`
  MODIFY `idTeam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `idLeague_fk` FOREIGN KEY (`idLeague`) REFERENCES `league` (`idLeague`),
  ADD CONSTRAINT `idTeamAway_fk` FOREIGN KEY (`idTeamAway`) REFERENCES `team` (`idTeam`),
  ADD CONSTRAINT `idTeamHome_fk` FOREIGN KEY (`idTeamHome`) REFERENCES `team` (`idTeam`);

--
-- Restrições para tabelas `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`),
  ADD CONSTRAINT `player_ibfk_2` FOREIGN KEY (`idPosition`) REFERENCES `position` (`idPosition`);

--
-- Restrições para tabelas `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `idTeam_fk` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`);

--
-- Restrições para tabelas `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_2` FOREIGN KEY (`idLeague`) REFERENCES `league` (`idLeague`);

--
-- Restrições para tabelas `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idType`) REFERENCES `usertype` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
