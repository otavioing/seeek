-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/05/2025 às 23:20
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `seekdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `legenda` text DEFAULT NULL,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `imagem`, `legenda`, `criado_em`) VALUES
(1, 2, '/uploads/1746548148508-print_inicio_seek.png', 'minha primeira foto', '2025-05-06 16:15:48'),
(2, 2, '/uploads/posts/1746549039385-print_inicio_seek.png', 'minha primeira foto', '2025-05-06 16:30:39'),
(3, 2, '/uploads/posts/1746549417610-print_inicio_seek.png', 'minha primeira foto', '2025-05-06 16:36:57');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `tema` varchar(50) DEFAULT 'claro',
  `cidade_pais` varchar(255) DEFAULT NULL,
  `cargo` varchar(255) DEFAULT NULL,
  `nome_de_usuario` varchar(255) DEFAULT NULL,
  `descricao` varchar(300) DEFAULT 'este usuário não possui descrição',
  `banner` varchar(255) DEFAULT NULL,
  `acessibilidade_ativa` tinyint(1) DEFAULT 1,
  `url_do_perfil_do_instagram` varchar(255) DEFAULT NULL,
  `url_do_perfil_do_x_twitter` varchar(255) DEFAULT NULL,
  `data_de_criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  `cadastro_completo` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `foto`, `tema`, `cidade_pais`, `cargo`, `nome_de_usuario`, `descricao`, `banner`, `acessibilidade_ativa`, `url_do_perfil_do_instagram`, `url_do_perfil_do_x_twitter`, `data_de_criacao`, `cadastro_completo`) VALUES
(2, 'cake', 'otaviodominguessilva@gmail.com', '$2b$10$cDKMPQaOGPdgY9TWkt8jNuzunjt2RgRtdsHlOlgRuT9Wno6XL8iFW', '/uploads/foto_perfil1746565007613-print_inicio_seek.png', 'claro', 'tesde de cidade', 'desempregado', 'cakezin', 'dgwefdszx', '/uploads/bannerteste.jpg\n', 0, '_cake.ing', 'otaviods1', '2025-04-26 19:04:23', 1),
(3, 'who.jxao', 'joaojfpessoal@gmail.com', '$2b$10$fJwhob.w51UdYqGq8GV76uC7r6wE6dJw.cufVIJxvWwxdwXa7M9vK', '/uploads/1746441551159-(,,_ï¹_,,).jpeg', 'claro', NULL, NULL, NULL, 'este usuário não possui descrição', NULL, 1, NULL, NULL, '2025-05-05 10:39:11', 0),
(4, 'João da Silva', 'joao.silva@example.com', 'novaSenha123', '/uploads/foto_perfil1746562118695-print_inicio_seek.png', 'escuro', 'São Paulo, Brasil', NULL, NULL, NULL, 'https://meusite.com/banners/banner1.jpg', 1, 'https://instagram.com/joaosilva', 'https://twitter.com/joaosilva', '2025-05-06 16:39:09', 0),
(5, 'fwsdxzfe', 'tectonicroom356@gmail.com', '$2b$10$L2VkkUv4o6G.QmpgA/nwsOJilt8.jUvj2dHA3Vt5.Fa4niTRTbMbK', '/uploads/foto_perfil1746565276500-print_inicio_seek.png', 'claro', NULL, 'desempregado', 'cakezin', 'rsdssaxfeadsx', NULL, 1, NULL, NULL, '2025-05-06 21:00:45', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
