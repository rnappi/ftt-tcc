CREATE DATABASE  IF NOT EXISTS `questionarios` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `questionarios`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: questionarios
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alternativas`
--

DROP TABLE IF EXISTS `alternativas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternativas` (
  `id_Alternativa` int NOT NULL AUTO_INCREMENT,
  `id_Pergunta` int NOT NULL,
  `Descricao` varchar(200) NOT NULL,
  `Alternativa_Correta` tinyint DEFAULT '0',
  PRIMARY KEY (`id_Alternativa`),
  UNIQUE KEY `id_Alternativa_UNIQUE` (`id_Alternativa`),
  KEY `fk_alternativa_pergunta_idx` (`id_Pergunta`),
  CONSTRAINT `fk_alternativa_pergunta` FOREIGN KEY (`id_Pergunta`) REFERENCES `perguntas` (`id_Pergunta`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternativas`
--

LOCK TABLES `alternativas` WRITE;
/*!40000 ALTER TABLE `alternativas` DISABLE KEYS */;
INSERT INTO `alternativas` VALUES (1,1,'Correto',1),(2,1,'Errado',0),(3,2,'Correto',0),(4,2,'Errado',1),(5,3,'Errado',0),(6,3,'Correto',1),(7,4,'Correto',0),(8,4,'Errado',1),(9,5,'Correto',1),(10,5,'Errado',0),(11,6,'Correto',1),(12,6,'Errado',0),(13,7,'Correto',1),(14,7,'Errado',0),(15,8,'Correto',1),(16,8,'Errado',0),(17,9,'Correto',0),(18,9,'Errado',1),(19,10,'Correto',0),(20,10,'Errado',1);
/*!40000 ALTER TABLE `alternativas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alunos`
--

DROP TABLE IF EXISTS `alunos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alunos` (
  `id_Aluno` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_Aluno`),
  UNIQUE KEY `id_Aluno_UNIQUE` (`id_Aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alunos`
--

LOCK TABLES `alunos` WRITE;
/*!40000 ALTER TABLE `alunos` DISABLE KEYS */;
INSERT INTO `alunos` VALUES (1,'Monalisa Perrone'),(2,'Maria Júlia'),(3,'Alexandre Garcia'),(4,'Glória Maria'),(5,'Glória Maria'),(6,'Glória Maria');
/*!40000 ALTER TABLE `alunos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conteudos`
--

DROP TABLE IF EXISTS `conteudos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conteudos` (
  `id_Aluno` int NOT NULL,
  `id_Questionario` int NOT NULL,
  `id_Material` int NOT NULL,
  PRIMARY KEY (`id_Aluno`,`id_Questionario`),
  KEY `fk_conteudo_questionario_idx` (`id_Questionario`),
  KEY `fk_conteudo_material_idx` (`id_Material`),
  CONSTRAINT `fk_conteudo_aluno` FOREIGN KEY (`id_Aluno`) REFERENCES `alunos` (`id_Aluno`),
  CONSTRAINT `fk_conteudo_material` FOREIGN KEY (`id_Material`) REFERENCES `material` (`id_Material`),
  CONSTRAINT `fk_conteudo_questionario` FOREIGN KEY (`id_Questionario`) REFERENCES `questionarios` (`id_Questionario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conteudos`
--

LOCK TABLES `conteudos` WRITE;
/*!40000 ALTER TABLE `conteudos` DISABLE KEYS */;
/*!40000 ALTER TABLE `conteudos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `id_Material` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `Link` varchar(200) NOT NULL,
  PRIMARY KEY (`id_Material`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perguntas`
--

DROP TABLE IF EXISTS `perguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perguntas` (
  `id_Pergunta` int NOT NULL AUTO_INCREMENT,
  `id_Questionario` int NOT NULL,
  `Pergunta` varchar(500) NOT NULL,
  PRIMARY KEY (`id_Pergunta`),
  UNIQUE KEY `id_Perguntas_UNIQUE` (`id_Pergunta`),
  KEY `fk_pergunta_questionario_idx` (`id_Questionario`),
  CONSTRAINT `fk_pergunta_questionario` FOREIGN KEY (`id_Questionario`) REFERENCES `questionarios` (`id_Questionario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perguntas`
--

LOCK TABLES `perguntas` WRITE;
/*!40000 ALTER TABLE `perguntas` DISABLE KEYS */;
INSERT INTO `perguntas` VALUES (1,1,'Durante a execução de um programa, o conteúdo de uma variável pode mudar ao longo do tempo, no entanto ela só pode armazenar um valor por vez.'),(2,1,'Se o algoritmo para o cálculo da média de determinado aluno utilizar a fórmula média = (P1 + 2*P2) / 3, em que P1 e P2 referem-se, respectivamente, às notas do aluno na primeira e na segunda prova, e se a média mínima necessária para o aluno ser aprovado na disciplina for 4,5, esse aluno será aprovado se obtiver nota 5,0 na primeira prova e 4,0 na segunda prova.'),(3,1,'A expressão a seguir especifica que: 1 será adicionado a x, se x for maior que 0; 1 será subtraído de x, se x for menor que 0; o valor de x será mantido, se x for igual a zero. Se (x > 0) então x++; senão if (x < 0) x-- ;'),(4,1,'As estruturas de controle de fluxo WHILE e DO...WHILE possuem a mesma finalidade e seus respectivos blocos de comandos são executados pelo menos uma vez em cada uma delas.'),(5,1,'Utilizando-se linguagens fracamente tipadas, é possível alterar o tipo de dado contido em uma variável durante a execução do programa.'),(6,1,'Em um laço de repetição, o controle do número de vezes que o laço será repetido ocorre por meio de operadores lógicos.'),(7,1,'A estrutura de decisão SE/ENTÃO/SENÃO, ou IF/THEN/ELSE, permite que seja sempre executado um comando. Isso porque, caso a condição seja verdadeira, o comando da condição SE/ENTÃO será executado; caso contrário, o comando da condição SENÃO (falsa) será executado.'),(8,1,'A estrutura a while é um tipo de loop em que o código nela contido será executado até que a condição especificada de parada seja satisfeita.'),(9,1,'O operador lógico de disjunção (ou) é útil em tipos de análise para verificar se todos os valores são verdadeiros, o que, consequentemente, acarretará em todos os resultados serem também verdadeiros.'),(10,1,'Em uma função, os parâmetros podem ser passados por meio de valor; isso, no entanto, implica que a mudança do valor do parâmetro dentro da função irá afetar o valor da variável original.');
/*!40000 ALTER TABLE `perguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `professores`
--

DROP TABLE IF EXISTS `professores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professores` (
  `id_Professor` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id_Professor`),
  UNIQUE KEY `id_Professor_UNIQUE` (`id_Professor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professores`
--

LOCK TABLES `professores` WRITE;
/*!40000 ALTER TABLE `professores` DISABLE KEYS */;
INSERT INTO `professores` VALUES (1,'Silvio Santos'),(2,'Ana Maria'),(3,'Fausto Silva');
/*!40000 ALTER TABLE `professores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionarios`
--

DROP TABLE IF EXISTS `questionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questionarios` (
  `id_Questionario` int NOT NULL AUTO_INCREMENT,
  `id_Professor` int NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Data` datetime NOT NULL,
  PRIMARY KEY (`id_Questionario`),
  UNIQUE KEY `id_Questionario_UNIQUE` (`id_Questionario`),
  KEY `fk_questionario_professor_idx` (`id_Professor`),
  CONSTRAINT `fk_questionario_professor` FOREIGN KEY (`id_Professor`) REFERENCES `professores` (`id_Professor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionarios`
--

LOCK TABLES `questionarios` WRITE;
/*!40000 ALTER TABLE `questionarios` DISABLE KEYS */;
INSERT INTO `questionarios` VALUES (1,1,'Algoritmos 1','2020-02-23 11:08:05');
/*!40000 ALTER TABLE `questionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostas`
--

DROP TABLE IF EXISTS `respostas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respostas` (
  `id_Alternativa` int NOT NULL,
  `id_Questionario` int NOT NULL COMMENT 'Guarda o id do Questionário que o alunon deve responder',
  `id_Tentativa` int NOT NULL,
  PRIMARY KEY (`id_Alternativa`,`id_Questionario`),
  KEY `fk_resposta_alternativa_idx` (`id_Alternativa`),
  KEY `fk_resposta_questionario_idx` (`id_Questionario`),
  KEY `fk_resposta_tentativa_idx` (`id_Tentativa`),
  CONSTRAINT `fk_resposta_alternativa` FOREIGN KEY (`id_Alternativa`) REFERENCES `alternativas` (`id_Alternativa`),
  CONSTRAINT `fk_resposta_questionario` FOREIGN KEY (`id_Questionario`) REFERENCES `questionarios` (`id_Questionario`),
  CONSTRAINT `fk_resposta_tentativa` FOREIGN KEY (`id_Tentativa`) REFERENCES `tentativas` (`id_Tentativa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas`
--

LOCK TABLES `respostas` WRITE;
/*!40000 ALTER TABLE `respostas` DISABLE KEYS */;
/*!40000 ALTER TABLE `respostas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tentativas`
--

DROP TABLE IF EXISTS `tentativas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tentativas` (
  `id_Tentativa` int NOT NULL AUTO_INCREMENT,
  `id_Aluno` int NOT NULL,
  PRIMARY KEY (`id_Tentativa`),
  KEY `fk_tentativa_resposta_idx` (`id_Aluno`),
  CONSTRAINT `fk_tentativa_aluno` FOREIGN KEY (`id_Aluno`) REFERENCES `alunos` (`id_Aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tentativas`
--

LOCK TABLES `tentativas` WRITE;
/*!40000 ALTER TABLE `tentativas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tentativas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-07 19:57:02
