-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/06/2025 às 01:46
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
-- Estrutura para tabela `perfis_empresa`
--

CREATE TABLE `perfis_empresa` (
  `usuario_id` int(11) NOT NULL,
  `razao_social` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) DEFAULT NULL,
  `cnpj` varchar(18) NOT NULL,
  `telefone_comercial` varchar(20) DEFAULT NULL,
  `categoria_negocio` varchar(30) DEFAULT NULL,
  `numero_funcionarios` int(11) DEFAULT NULL,
  `endereco_completo` varchar(255) DEFAULT NULL,
  `descricao` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `perfis_empresa`
--

INSERT INTO `perfis_empresa` (`usuario_id`, `razao_social`, `nome_fantasia`, `cnpj`, `telefone_comercial`, `categoria_negocio`, `numero_funcionarios`, `endereco_completo`, `descricao`) VALUES
(5, 'tectonicroom356@gmail.com', 'fesfsefsef', '123456', '231313', 'fsefsef', 122, 'teste', 'fweafw');

-- --------------------------------------------------------

--
-- Estrutura para tabela `perfis_padrao`
--

CREATE TABLE `perfis_padrao` (
  `usuario_id` int(11) NOT NULL,
  `profissao` varchar(50) DEFAULT NULL,
  `nome_de_usuario` varchar(10) DEFAULT NULL,
  `descricao` varchar(200) DEFAULT NULL,
  `certificados` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `perfis_padrao`
--

INSERT INTO `perfis_padrao` (`usuario_id`, `profissao`, `nome_de_usuario`, `descricao`, `certificados`) VALUES
(2, 'Desenvolvedor(a) de Software', 'ana.dev', 'Profissional com 5 anos de experiência em desenvolvimento web, com foco em tecnologias JavaScript como Node.js e React. Buscando novos desafios.', 'teste');

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
(3, 2, '/uploads/posts/1746549417610-print_inicio_seek.png', 'minha primeira foto', '2025-05-06 16:36:57'),
(4, 7, '/uploads/posts/1750169446408-mr-robot.jpeg', 'fghjkl', '2025-06-17 14:10:46');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT '/uploads/fotopadraousuario.svg',
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
  `cadastro_completo` tinyint(1) DEFAULT 0,
  `tipo` enum('padrao','empresa') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `foto`, `tema`, `cidade_pais`, `cargo`, `nome_de_usuario`, `descricao`, `banner`, `acessibilidade_ativa`, `url_do_perfil_do_instagram`, `url_do_perfil_do_x_twitter`, `data_de_criacao`, `cadastro_completo`, `tipo`) VALUES
(2, 'cake', 'otaviodominguessilva@gmail.com', '$2b$10$cDKMPQaOGPdgY9TWkt8jNuzunjt2RgRtdsHlOlgRuT9Wno6XL8iFW', '/uploads/fotopadraousuario.svg', 'claro', 'tesde de cidade', 'desempregado', 'cakezin', 'dgwefdszx', '/uploads/bannerteste.jpg\n', 0, '_cake.ing', 'otaviods1', '2025-04-26 19:04:23', 1, 'padrao'),
(3, 'who.jxao', 'joaojfpessoal@gmail.com', '$2b$10$fJwhob.w51UdYqGq8GV76uC7r6wE6dJw.cufVIJxvWwxdwXa7M9vK', '/uploads/fotopadraousuario.svg', 'claro', NULL, NULL, NULL, 'este usuário não possui descrição', NULL, 1, NULL, NULL, '2025-05-05 10:39:11', 0, 'empresa'),
(4, 'João da Silva', 'joao.silva@example.com', 'novaSenha123', '/uploads/fotopadraousuario.svg', 'escuro', 'São Paulo, Brasil', NULL, NULL, NULL, 'https://meusite.com/banners/banner1.jpg', 1, 'https://instagram.com/joaosilva', 'https://twitter.com/joaosilva', '2025-05-06 16:39:09', 0, NULL),
(5, 'fwsdxzfe', 'tectonicroom356@gmail.com', '$2b$10$L2VkkUv4o6G.QmpgA/nwsOJilt8.jUvj2dHA3Vt5.Fa4niTRTbMbK', '/uploads/fotopadraousuario.svg', 'claro', NULL, '', '', '', NULL, 0, NULL, NULL, '2025-05-06 21:00:45', 1, 'empresa'),
(6, 'Caua Eduardo', 'caua.edu.pessoal@gmail.com', '$2b$10$/ondjYi5RttO3RzVFY3SmuHiNOQXMLQlg0Yu6IPE0xR5vuSoVFuGu', '/uploads/fotopadraousuario.svg', 'claro', NULL, NULL, NULL, 'este usuário não possui descrição', NULL, 1, NULL, NULL, '2025-05-09 11:14:08', 0, NULL),
(7, 'carlos', 'cpcftq@gmail.com', '$2b$10$tv1bu5lYtNY9rj3SYxvuNeTnW7UQgyNwG7vbUKmtVsptCO8PFVttC', '/uploads/fotopadraousuario.svg', 'claro', NULL, NULL, NULL, 'este usuário não possui descrição', NULL, 1, NULL, NULL, '2025-06-17 14:06:16', 1, 'empresa');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `perfis_empresa`
--
ALTER TABLE `perfis_empresa`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `cnpj` (`cnpj`);

--
-- Índices de tabela `perfis_padrao`
--
ALTER TABLE `perfis_padrao`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `nome_de_usuario` (`nome_de_usuario`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `perfis_empresa`
--
ALTER TABLE `perfis_empresa`
  ADD CONSTRAINT `perfis_empresa_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `perfis_padrao`
--
ALTER TABLE `perfis_padrao`
  ADD CONSTRAINT `perfis_padrao_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
