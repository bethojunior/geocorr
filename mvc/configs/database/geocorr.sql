-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 02-Abr-2018 às 14:12
-- Versão do servidor: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geocorr`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aboutus`
--

CREATE TABLE `aboutus` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aboutus`
--

INSERT INTO `aboutus` (`id`, `title`, `about`) VALUES
(1, 'sdfsdf', 'sdfsdf'),
(2, 'sdf', 'sdfsd'),
(3, 'dsfsdfsdfsd', 'dsfsdfsdfsdfsdfsdfsd'),
(4, 'd', 'd'),
(5, 'df', 'df'),
(6, 'dfgdfg', 'fdgdf'),
(7, 'njn', 'jkljkl'),
(8, 'emerson', 'lindooooooo'),
(9, 'sdf', 'fsdfsd'),
(10, '321', '321');

-- --------------------------------------------------------

--
-- Estrutura da tabela `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `titleBlog` text,
  `postBlog` text,
  `dataBlog` text,
  `src` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `blog`
--

INSERT INTO `blog` (`id`, `titleBlog`, `postBlog`, `dataBlog`, `src`) VALUES
(74, 'sd', 'fsdf', '31-03-18-12-59-10', 'sd'),
(75, 'sd', 'fsdf', '31-03-18-12-59-25', 'sd.jpg'),
(76, 'sd', 'fsdf', '31-03-18-12-59-37', 'sd.jpg'),
(77, 'TESTE DE POST', 'SERÁ QUE VAI DA CERTO ?', '31-03-18-13-00-08', 'TESTE DE POST.jpg'),
(78, '', '', '31-03-18-13-00-47', '.jpg'),
(79, '', '', '31-03-18-13-01-04', '.jpg'),
(80, 'v', '', '31-03-18-13-01-16', 'v.png'),
(81, 'teste blog', ' site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site     site site site site site site site site site site site sitesitesitesite site  site  site site site site site site site site site site site site site site site site    ', '31-03-18-13-01-46', 'teste blog.jpg'),
(82, 'fffffffffffffffffffffffffffffffffffffffff', '', '31-03-18-13-02-09', 'fffffffffffffffffffffffffffffffffffffffff.jpg'),
(83, 'd d', '', '31-03-18-13-02-18', 'd d.jpg'),
(84, 'f  f', 'ffff ', '31-03-18-13-02-30', 'f  f.jpg'),
(85, 'fsdf', 'sdfsd', '31-03-18-13-03-33', 'fsdf.pdf'),
(86, 'df', 'gdfg', '31-03-18-13-04-36', 'df'),
(87, '', 'fsdf', '31-03-18-13-06-24', ''),
(88, 'd', '', '31-03-18-13-07-43', 'd'),
(89, 'd', '', '31-03-18-13-08-04', 'd'),
(90, 'd', '', '31-03-18-13-17-51', 'd'),
(91, 'dfg', 'dgfdg', '31-03-18-13-18-04', 'dfg'),
(92, 'gf', 'hgf', '31-03-18-13-18-41', 'gf'),
(93, 'gf', 'hgf', '31-03-18-13-18-52', 'gf'),
(94, 'gf', 'hgf', '31-03-18-13-39-34', 'gf'),
(95, 'dfg', 'dfgdfgdfgd', '31-03-18-13-39-52', 'dfg'),
(96, 'dfgdfg', 'dfg', '31-03-18-13-40-10', 'dfgdfg.jpg'),
(97, 'dfgdfg', 'dfg', '31-03-18-13-41-48', 'dfgdfg.jpg'),
(98, 'dsf', 'sdfsd', '31-03-18-13-42-13', 'dsf'),
(99, '', '', '31-03-18-13-42-31', ''),
(100, '', '', '31-03-18-13-42-48', ''),
(101, 'sd', 'fsdfsd', '31-03-18-13-43-34', 'sd'),
(102, '', '', '31-03-18-13-43-43', ''),
(103, '', '', '31-03-18-13-44-37', ''),
(104, '', '', '31-03-18-13-44-40', ''),
(105, '', '', '31-03-18-13-44-48', ''),
(106, '', '', '31-03-18-13-45-12', ''),
(107, '', '', '31-03-18-13-45-13', ''),
(108, '', '', '31-03-18-13-45-41', ''),
(109, '', '', '31-03-18-13-45-47', ''),
(110, '', '', '31-03-18-13-46-12', ''),
(111, '', '', '31-03-18-13-48-11', ''),
(112, '', '', '31-03-18-13-48-18', ''),
(113, '', '', '31-03-18-13-48-51', ''),
(114, '', '', '31-03-18-13-50-54', ''),
(115, '', '', '31-03-18-13-51-46', ''),
(116, '', '', '31-03-18-13-51-57', ''),
(117, '', '', '31-03-18-13-55-04', ''),
(118, '', '', '31-03-18-13-55-36', ''),
(119, '', '', '31-03-18-13-55-38', ''),
(120, '', '', '31-03-18-13-55-44', ''),
(121, '', '', '31-03-18-13-55-45', ''),
(122, '', '', '31-03-18-13-55-52', ''),
(123, '', '', '31-03-18-13-56-42', ''),
(124, '', '', '31-03-18-13-56-50', ''),
(125, '', '', '31-03-18-13-56-57', ''),
(126, '', '', '31-03-18-13-57-08', ''),
(127, '', '', '31-03-18-13-57-09', ''),
(128, '', '', '31-03-18-13-57-25', ''),
(129, '', '', '31-03-18-13-57-33', ''),
(130, '', '', '31-03-18-13-59-12', ''),
(131, '', '', '31-03-18-13-59-20', ''),
(132, '', '', '31-03-18-13-59-35', ''),
(133, '', '', '31-03-18-14-01-43', ''),
(134, '', '', '31-03-18-14-01-45', ''),
(135, '', '', '31-03-18-14-01-52', ''),
(136, '', '', '31-03-18-14-02-55', ''),
(137, '', '', '31-03-18-14-03-56', ''),
(138, '', '', '31-03-18-14-04-15', ''),
(139, '', '', '31-03-18-14-04-58', ''),
(140, '', '', '31-03-18-14-05-41', ''),
(141, '', '', '31-03-18-14-06-05', ''),
(142, '', '', '31-03-18-14-06-11', ''),
(143, '', '', '31-03-18-14-06-18', ''),
(144, '', '', '31-03-18-14-06-32', ''),
(145, 'aqui estou enviadn', 'ghjghjg', '31-03-18-14-10-30', 'aqui estou enviadn.jpg'),
(146, 'joo', 'dgdgdfg', '31-03-18-15-07-53', 'joo.jpg'),
(147, 'dfg', 'dfgdfgdfg', '01-04-18-10-50-30', 'dfg'),
(148, NULL, NULL, '01-04-18-10-50-54', ''),
(149, 'ulysses', 'serrá ??', '01-04-18-11-01-17', 'ulysses.png'),
(150, 'sadsadas ', 'sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf sddddddddddd sdfs df sdf sdf sdf sdf sdf sdfgsd fsdf sdfsdf sdf ', '01-04-18-11-01-56', 'sadsadas .jpg'),
(151, 'teste na frente do ulyses ', 'fb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjyfb hgfn thnjyj uyjy', '01-04-18-11-14-57', 'teste na frente do ulyses .jpg'),
(152, 'dfgdfgfd', 'dfgfdgfd', '01-04-18-15-51-12', 'dfgdfgfd.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `pass` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `email`, `pass`) VALUES
(31, 'enel@enel.com', 'enel', '123'),
(32, 'cagece@gmail.com', 'Cagece', '123'),
(33, 'carbomil.hotmail.com', 'carbomil', '123'),
(35, 'fabrica@fabrica704.com.br', 'Fabrica 704', '123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `filesclient`
--

CREATE TABLE `filesclient` (
  `id` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `src` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `filesclient`
--

INSERT INTO `filesclient` (`id`, `idClient`, `src`, `title`) VALUES
(1, 0, ':src', ':title'),
(2, 0, ':src', ':title'),
(3, 39, 'reia.jpg', 'reia'),
(4, 39, 'reia.jpg', 'reia'),
(5, 39, 'reia.jpg', 'reia'),
(6, 39, 'teste.jpg', 'teste'),
(7, 39, 'dsfdsfsd39.jpg', 'dsfdsfsd'),
(8, 39, 'dsds?39.jpg', 'dsds'),
(9, 39, 'sdfsdf39.jpg', 'sdfsdf'),
(10, 39, '01-04-18-15-50-4639.jpg', 'teste hoje'),
(11, 39, '01-04-18-15-51-2639.jpg', 'ssss'),
(12, 39, '01-04-18-15-52-0139.jpg', '1'),
(13, 38, '01-04-18-15-52-0738.jpg', '2'),
(14, 37, '01-04-18-15-52-1337.jpg', '3'),
(15, 35, '01-04-18-19-09-5735.jpg', 'hjkhjkb '),
(16, 35, '01-04-18-19-10-5735.jpg', 'fdgdfg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `mission`
--

INSERT INTO `mission` (`id`, `post`) VALUES
(1, 'dfgfd'),
(2, 'sdfdsfdsf'),
(3, 'sdfsdf'),
(4, 'dfgdfg'),
(5, 'dsdsds'),
(6, 'joao');

-- --------------------------------------------------------

--
-- Estrutura da tabela `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `valores`
--

CREATE TABLE `valores` (
  `id` int(11) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `valores`
--

INSERT INTO `valores` (`id`, `post`) VALUES
(1, 'dfgfdgdf'),
(2, 'ertrete'),
(3, 'valor teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vision`
--

CREATE TABLE `vision` (
  `id` int(11) NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `vision`
--

INSERT INTO `vision` (`id`, `post`) VALUES
(1, 'sdfsd'),
(2, 'ertert'),
(3, 'teste visão');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `filesclient`
--
ALTER TABLE `filesclient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `valores`
--
ALTER TABLE `valores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vision`
--
ALTER TABLE `vision`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `filesclient`
--
ALTER TABLE `filesclient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `valores`
--
ALTER TABLE `valores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vision`
--
ALTER TABLE `vision`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
