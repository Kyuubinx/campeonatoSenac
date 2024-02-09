-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Fev-2024 às 01:51
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

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
  `teamHome` char(3) NOT NULL,
  `teamAway` char(3) NOT NULL,
  `goalHome` int(11) DEFAULT 0,
  `goalAway` int(11) NOT NULL DEFAULT 0,
  `idLeague` int(11) NOT NULL,
  `card` int(2) NOT NULL DEFAULT 0,
  `dateGame` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `game`
--

INSERT INTO `game` (`idGame`, `teamHome`, `teamAway`, `goalHome`, `goalAway`, `idLeague`, `card`, `dateGame`) VALUES
(1, 'INT', 'GRE', 0, 0, 1, 0, '2024-01-31 21:30:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `gender`
--

CREATE TABLE `gender` (
  `idGender` int(11) NOT NULL,
  `description` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `gender`
--

INSERT INTO `gender` (`idGender`, `description`) VALUES
(1, 'M'),
(2, 'F');

-- --------------------------------------------------------

--
-- Estrutura da tabela `league`
--

CREATE TABLE `league` (
  `idLeague` int(11) NOT NULL,
  `nameLeague` varchar(80) NOT NULL,
  `idGender` int(11) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `league`
--

INSERT INTO `league` (`idLeague`, `nameLeague`, `idGender`, `idUser`) VALUES
(1, 'A', 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `player`
--

CREATE TABLE `player` (
  `idPlayer` int(11) NOT NULL,
  `playerName` varchar(60) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `photo` text NOT NULL,
  `age` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL,
  `status` enum('pending','holder','reserve','injured','suspended') NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `player`
--

INSERT INTO `player` (`idPlayer`, `playerName`, `idTeam`, `photo`, `age`, `idPosition`, `status`) VALUES
(1, 'Carlos', 7, '...', 24, 1, 'injured'),
(2, 'Iago', 8, '...', 18, 2, 'holder'),
(3, 'Lucas', 7, '...', 18, 3, 'holder'),
(4, 'Vitor', 8, '...', 17, 4, 'holder'),
(6, 'Gustavo', 7, '...', 31, 1, 'holder'),
(7, 'João', 9, '...', 21, 2, 'holder'),
(8, 'Diego', 10, '...', 21, 2, 'holder'),
(9, 'Ago', 14, '...', 21, 2, 'holder');

-- --------------------------------------------------------

--
-- Estrutura da tabela `position`
--

CREATE TABLE `position` (
  `idPosition` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `teamName` varchar(60) NOT NULL,
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
-- Estrutura da tabela `team`
--

CREATE TABLE `team` (
  `idTeam` int(11) NOT NULL,
  `teamName` varchar(120) NOT NULL,
  `teamTag` char(3) NOT NULL,
  `idGender` int(11) NOT NULL,
  `idLeague` int(11) NOT NULL DEFAULT 1,
  `active` enum('true','false') NOT NULL DEFAULT 'true',
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `teamTag`, `idGender`, `idLeague`, `active`, `photo`) VALUES
(7, 'Internacional', 'INT', 1, 1, 'true', ''),
(8, 'Gremio', 'GRE', 1, 1, 'true', ''),
(9, 'Real Madri', 'RMC', 1, 1, 'true', ''),
(10, 'Barcelona', 'BAR', 1, 1, 'true', ''),
(12, 'Figueirense', 'FIG', 1, 1, 'true', ''),
(13, 'Flamengo', 'FLA', 1, 1, 'true', ''),
(14, 'Caxias', 'CAX', 1, 1, 'true', ''),
(15, 'Madureira', 'MAD', 1, 1, 'true', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`idUser`, `userName`, `email`, `password`, `cpf`, `phone`, `idType`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456', 11122233, '51911111111', 1),
(3, 'Tec', 'tec@gmail.com', '12345', 11122233, '51911111111', 2),
(4, 'User', 'user@gmail.com', '123456', 11122233, '51911111111', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usertype`
--

CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `usertype`
--

INSERT INTO `usertype` (`id`, `description`) VALUES
(1, 'admin'),
(2, 'technician'),
(3, 'user');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`idGame`),
  ADD KEY `idLeague` (`idLeague`);

--
-- Índices para tabela `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`idGender`);

--
-- Índices para tabela `league`
--
ALTER TABLE `league`
  ADD PRIMARY KEY (`idLeague`),
  ADD KEY `idGender` (`idGender`),
  ADD KEY `idUser` (`idUser`);

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
  ADD PRIMARY KEY (`idRanking`);

--
-- Índices para tabela `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`idTeam`),
  ADD KEY `idGender` (`idGender`),
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
  MODIFY `idGame` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `gender`
--
ALTER TABLE `gender`
  MODIFY `idGender` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `league`
--
ALTER TABLE `league`
  MODIFY `idLeague` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `player`
--
ALTER TABLE `player`
  MODIFY `idPlayer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
  MODIFY `idTeam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
-- Limitadores para a tabela `league`
--
ALTER TABLE `league`
  ADD CONSTRAINT `league_ibfk_1` FOREIGN KEY (`idGender`) REFERENCES `gender` (`idGender`),
  ADD CONSTRAINT `league_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`);

--
-- Limitadores para a tabela `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `player_ibfk_1` FOREIGN KEY (`idTeam`) REFERENCES `team` (`idTeam`),
  ADD CONSTRAINT `player_ibfk_2` FOREIGN KEY (`idPosition`) REFERENCES `position` (`idPosition`);

--
-- Limitadores para a tabela `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_1` FOREIGN KEY (`idGender`) REFERENCES `gender` (`idGender`),
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
