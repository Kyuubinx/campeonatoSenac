-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Fev-2024 às 00:14
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
-- Estrutura da tabela `detailteam`
--

CREATE TABLE `detailteam` (
  `idDetail` int(11) NOT NULL,
  `goal` int(11) NOT NULL,
  `idGame` int(11) NOT NULL,
  `card` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `detailteam`
--

INSERT INTO `detailteam` (`idDetail`, `goal`, `idGame`, `card`) VALUES
(1, 0, 1, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `game`
--

CREATE TABLE `game` (
  `idGame` int(11) NOT NULL,
  `teamHome` char(3) NOT NULL,
  `teamAway` char(3) NOT NULL,
  `goal` int(11) DEFAULT 0,
  `idLeague` int(11) NOT NULL,
  `card` int(2) NOT NULL DEFAULT 0,
  `dateGame` date NOT NULL,
  `summary` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `game`
--

INSERT INTO `game` (`idGame`, `teamHome`, `teamAway`, `goal`, `idLeague`, `card`, `dateGame`, `summary`) VALUES
(1, 'INT', 'GRE', 0, 1, 0, '2024-01-31', '...');

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
  `goal` int(11) NOT NULL DEFAULT 0,
  `photo` text NOT NULL,
  `age` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL,
  `idStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `player`
--

INSERT INTO `player` (`idPlayer`, `playerName`, `idTeam`, `goal`, `photo`, `age`, `idPosition`, `idStatus`) VALUES
(1, 'Carlos', 7, 0, '...', 23, 1, 1),
(2, 'Iago', 8, 0, '...', 18, 2, 1),
(3, 'Lucas', 7, 0, '...', 18, 3, 1),
(4, 'Vitor', 8, 0, '...', 17, 4, 1);

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
-- Estrutura da tabela `status`
--

CREATE TABLE `status` (
  `idStatus` int(11) NOT NULL,
  `description` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `status`
--

INSERT INTO `status` (`idStatus`, `description`) VALUES
(1, 'Holder'),
(2, 'Reserve'),
(3, 'Injured');

-- --------------------------------------------------------

--
-- Estrutura da tabela `team`
--

CREATE TABLE `team` (
  `idTeam` int(11) NOT NULL,
  `teamName` varchar(120) NOT NULL,
  `teamTag` char(3) NOT NULL,
  `idGender` int(11) NOT NULL,
  `idLeague` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `team`
--

INSERT INTO `team` (`idTeam`, `teamName`, `teamTag`, `idGender`, `idLeague`) VALUES
(7, 'Internacional', 'INT', 1, 1),
(8, 'Gremio', 'GRE', 1, 1);

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
-- Índices para tabela `detailteam`
--
ALTER TABLE `detailteam`
  ADD PRIMARY KEY (`idDetail`),
  ADD KEY `idGame` (`idGame`);

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
  ADD KEY `idPosition` (`idPosition`),
  ADD KEY `idStatus` (`idStatus`);

--
-- Índices para tabela `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`idPosition`);

--
-- Índices para tabela `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`idStatus`);

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
-- AUTO_INCREMENT de tabela `detailteam`
--
ALTER TABLE `detailteam`
  MODIFY `idDetail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `idPlayer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `position`
--
ALTER TABLE `position`
  MODIFY `idPosition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `status`
--
ALTER TABLE `status`
  MODIFY `idStatus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `team`
--
ALTER TABLE `team`
  MODIFY `idTeam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
-- Limitadores para a tabela `detailteam`
--
ALTER TABLE `detailteam`
  ADD CONSTRAINT `detailteam_ibfk_1` FOREIGN KEY (`idGame`) REFERENCES `game` (`idGame`);

--
-- Limitadores para a tabela `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`idLeague`) REFERENCES `league` (`idLeague`);

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
  ADD CONSTRAINT `player_ibfk_2` FOREIGN KEY (`idPosition`) REFERENCES `position` (`idPosition`),
  ADD CONSTRAINT `player_ibfk_3` FOREIGN KEY (`idStatus`) REFERENCES `status` (`idStatus`);

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
