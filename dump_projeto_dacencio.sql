-- MySQL dump 10.13  Distrib 5.5.31, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.5.31-0ubuntu0.13.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id_categorias` int(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(100) DEFAULT NULL,
  `categorias_id_categorias` int(11) NOT NULL,
  PRIMARY KEY (`id_categorias`),
  KEY `fk_categorias_categorias1` (`categorias_id_categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=625 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (4,'Padaria e Sobremesas',0),(5,'Mercearia',0),(6,'Carnes',0),(7,'Frios Leites e Derivados',0),(8,'Frutas Ovos e Verduras',0),(9,'Comidas Prontas e Congeladas',0),(10,'Bebidas',0),(11,'Higiene Pessoal',0),(12,'Saude e Beleza',0),(13,'Bazar e Limpeza',0),(14,'Bombom',4),(15,'Torrada',4),(16,'Chocolate em Barra',4),(17,'Bolo',4),(18,'Outros Chocolates',4),(19,'Lanches / Salgados',4),(20,'Bomboniere',4),(21,'Pascoa',4),(22,'Sobremesas / Confeitaria',4),(23,'Paes',4),(24,'Alfajor',4),(25,'Salgadinho',20),(26,'Goma de Mascar',20),(27,'Bala',20),(28,'Amendoim',20),(29,'Castanhas',20),(30,'Pirulito',20),(31,'Outros Artigos de Bomboniere',20),(32,'Ovo de Pascoa',21),(33,'Colomba Pascal',21),(34,'Forma para Ovos de Pascoa',21),(35,'Outros artigos para Pascoa',21),(36,'Suporte para Ovos de Pascoa',21),(37,'Coelho / Chocolate de Pascoa',21),(38,'Embalagens para Ovos de Pascoa',21),(39,'Arranjos / Cestas de Pascoa',21),(40,'Fermento',22),(41,'Outros Doces',22),(42,'Goiabada',22),(43,'Gelatina',22),(44,'Mistura para Bolo',22),(45,'Coco Ralado',22),(46,'Sorvete',22),(47,'Ingredientes para Doces',22),(48,'Pacoca',22),(49,'Chantili',22),(50,'Doce de Leite',22),(51,'Pao de Mel',22),(52,'Cobertura para Sorvetes',22),(53,'Acai',22),(54,'Frutas Secas',22),(55,'Pao de Forma',23),(56,'Outros Paes',23),(57,'Panetone',23),(58,'Chocotone',23),(59,'Pao Doce',23),(60,'Pao de Alho',23),(61,'Baguete',23),(62,'Adocante',5),(63,'Leite Condensado',5),(64,'Acucar',5),(65,'Oleo',5),(66,'Creme de Leite',5),(67,'Azeite',5),(68,'Sopas / Cremes',5),(69,'Leite de Coco',5),(70,'Cha',5),(71,'Mel',5),(72,'Erva para Chimarrao',5),(73,'Gelo',5),(74,'Matinais',5),(75,'Achocolatado em Po',74),(76,'Achocolatado Pronto',74),(77,'Cereal Matinal',74),(78,'Farinha Lactea',74),(79,'Complemento Alimentar',74),(80,'Mingau',74),(81,'Aveia',74),(82,'Geleia',74),(83,'Cereal / Proteina em Barra',74),(84,'Outros Matinais',74),(85,'Farinaceos',5),(86,'Amido de Milho',85),(87,'Farofa',85),(88,'Farinha de Trigo',85),(89,'Farinha de Rosca',85),(90,'Farinha de Milho',85),(91,'Trigo',85),(92,'Fuba',85),(93,'Farinha de Mandioca',85),(94,'Polvilho',85),(95,'Outros Farinaceos',85),(96,'Massas',5),(97,'Macarrao Instantaneo',96),(98,'Macarrao',96),(99,'Massas Frescas',96),(100,'Massa de Pizza',96),(101,'Massa de Pastel',96),(102,'Molhos',5),(103,'Catchup',102),(104,'Molho de Tomate',102),(105,'Mostarda',102),(106,'Molho de Pimenta',102),(107,'Molho Shoyo',102),(108,'Molho Ingles',102),(109,'Molho para Salada',102),(110,'Molho de Alho',102),(111,'Outros Molhos',102),(112,'Biscoito Salgado',5),(113,'Biscoito de Agua',112),(114,'Biscoito Cream Cracker',112),(115,'Biscoito Agua e Sal',112),(116,'Biscoito de Polvilho Salgado',112),(117,'Outros Biscoitos Salgados',112),(118,'Biscoito Doce',5),(119,'Biscoito Recheado',118),(120,'Biscoito Wafer',118),(121,'Biscoito Maizena',118),(122,'Biscoito Tortinha',118),(123,'Biscoito Champagne',118),(124,'Cookie',118),(125,'Rosquinha',118),(126,'Outros Biscoitos Doces',118),(127,'Graos',5),(128,'Arroz',127),(129,'Milho para Pipoca',127),(130,'Feijao',127),(131,'Cafe',127),(132,'Lentilha',127),(133,'Grao de Bico',127),(134,'Canjica',127),(135,'Soja',127),(136,'Outros Graos',127),(137,'Condimentos / Temperos / Especiarias',5),(138,'Maionese',137),(139,'Sal',137),(140,'Canela',137),(141,'Tempero Pronto',137),(142,'Vinagre',137),(143,'Oregano',137),(144,'Pimenta',137),(145,'Alho',137),(146,'Salsa',137),(147,'Bicarbonato de Sodio',137),(148,'Louro',137),(149,'Coloral',137),(150,'Noz Moscada',137),(151,'Cravo da India',137),(152,'Comilho',137),(153,'Curry',137),(154,'Paprica',137),(155,'Majericao',137),(156,'Coentro',137),(157,'Manjerona',137),(158,'Cebolinha',137),(159,'Cebola',137),(160,'Outros Temperos',137),(161,'Enlatados / Conserva',5),(162,'Milho em Conserva',161),(163,'Ervilha em Conserva',161),(164,'Atum em Conserva',161),(165,'Sardinha em Conserva',161),(166,'Palmito em Conserva',161),(167,'Cogumelos em Conserva',161),(168,'Seletas de Legumes',161),(169,'Pessego em calda',161),(170,'Abacaxi em Calda',161),(171,'Outros Alimentos em Conserva',161),(172,'Cereais',5),(173,'Granola',172),(174,'Racao Humanda',172),(175,'Semente de Linhaca',172),(176,'Outros Cereais',172),(177,'Salsicha',6),(178,'Linguica',6),(179,'Pescado',6),(180,'Outras Carnes',6),(181,'Carne Suina',6),(182,'Bacon',181),(183,'Costela de Porco',181),(184,'Lombo de Porco',181),(185,'Bisteca de Porco',181),(186,'Outras Carnes de Porco',181),(187,'Carne Bovina',6),(188,'Lagarto',187),(189,'Picanha',187),(190,'Carne Moida',187),(191,'Acem',187),(192,'Alcatra',187),(193,'Contrafile',187),(194,'Costela Bovina',187),(195,'Figado',187),(196,'File Mignon',187),(197,'Fraldinha',187),(198,'Maminha',187),(199,'Patinho',187),(200,'Outras Carnes Bovinas',187),(201,'Aves',6),(202,'Coracao de Frango',201),(203,'File de Frango',201),(204,'Peito de Frango',201),(205,'Asa de Frango',201),(206,'Coxa de Frango',201),(207,'Ave Inteira',201),(208,'Outras Aves',201),(209,'Frutos do Mar',6),(210,'Camarao',209),(211,'Lula',209),(212,'Kani',209),(213,'Siri',209),(214,'Polvo',209),(215,'Lagosta',209),(216,'Outros Frutos do Mar',209),(217,'Margarina',7),(218,'Leite em Po',7),(219,'Leite',7),(220,'Requeijao',7),(221,'Leite Fermentado',7),(222,'Queijo',7),(223,'Manteiga',7),(224,'Cream Cheese',7),(225,'Iogurte',7),(226,'Bebida Lactea',7),(227,'Gordura Vegetal',7),(228,'Coalhada',7),(229,'Fondue',7),(230,'Banha',7),(231,'Frios',7),(232,'Mortadela',231),(233,'Salame',231),(234,'Presunto',231),(235,'Peito de Peru',231),(236,'Apresuntado',231),(237,'Rosbife',231),(238,'Outros Frios',231),(239,'Polpa de Fruta',8),(240,'Saladas',8),(241,'Frutas',8),(242,'Maca',241),(243,'Melancia',241),(244,'Morango',241),(245,'Ameixa',241),(246,'Banana',241),(247,'Laranja',241),(248,'Mamao',241),(249,'Manga',241),(250,'Melao',241),(251,'Abacate',241),(252,'Abacaxi',241),(253,'Coco',241),(254,'Goiaba',241),(255,'Kiwi',241),(256,'Limao',241),(257,'Maracuja',241),(258,'Pera',241),(259,'Uva',241),(260,'Outras Frutas',241),(261,'Ovos',8),(262,'Ovo de Galinha',258),(263,'Ovo de Codorna',258),(264,'Verduras',8),(265,'Brocolis',264),(266,'Alface',264),(267,'Agriao',264),(268,'Couve',264),(269,'Couve-Flor',264),(270,'Escarola',264),(271,'Espinhafre',264),(272,'Repolho',264),(273,'Rucula',264),(274,'Outras Verduras',264),(275,'Legumes',8),(276,'Pepino',275),(277,'Tomate',275),(278,'Batata',275),(279,'Abobora',275),(280,'Cenoura',275),(281,'Jilo',275),(282,'Abobrinha',275),(283,'Berinjela',275),(284,'Beterraba',275),(285,'Chuchu',275),(286,'Nabo',275),(287,'Pimentao',275),(288,'Quiabo',275),(289,'Outros Legumes',275),(290,'Lasanha Congelada',9),(291,'Empanados Congelados',9),(292,'Salgadinhos Congelados',9),(293,'Hamburguer Congelado',9),(294,'Pizza Congela',9),(295,'Pratos Prontos e Congelados',9),(296,'Papinha para Bebe',9),(297,'Sobremesas Congeladas',9),(298,'Legumes Congelados',9),(299,'Outros Congelados',9),(300,'Bebida Nao Alcoolica',10),(301,'Refrigerante',300),(302,'Agua Mineral',300),(303,'Suco Pronto',300),(304,'Bebida de Soja',300),(305,'Agua de Coco',300),(306,'Suco em Po',300),(307,'Energetico',300),(308,'Suco Concentrado',300),(309,'Isotonico',300),(310,'Agua Tonica',300),(311,'Cha Pronto',300),(312,'Groselha',300),(313,'Outras Bebidas Nao Alcoolicas',300),(314,'Bebidas Alcoolicas',10),(315,'Cerveja',314),(316,'Whisky',314),(317,'Vodka',314),(318,'Aguardente / Cachaca',314),(319,'Rum',314),(320,'Licor',314),(321,'Vinho',314),(322,'Tequila',314),(323,'Saque',314),(324,'Conhaque',314),(325,'Gim',314),(326,'Miniatura de Bebidas',314),(327,'outras Bebidas Alcoolicas',314),(328,'Desodorante',11),(329,'Absorvente',11),(330,'Fralda para Bebe',11),(331,'Higiene',11),(332,'Produtos para Banho',11),(333,'Sabonete',332),(334,'Sabonete Liquido',332),(335,'Sabonete Intimo',332),(336,'Esponja para Banho',332),(337,'Touca de Banho',332),(338,'Bucha Vegetal',332),(339,'Oleo para Banho',332),(340,'Escova de Banho',332),(341,'Sais de Banho',332),(342,'Outros Produtos para Banho',332),(343,'Higiene Bucal',11),(344,'Creme Dental',343),(345,'Anti-Septico Bucal',343),(346,'Escova Dental',343),(347,'Fio Dental Bucal',343),(348,'Spray Bucal',343),(349,'Fixador de Dentadura',343),(350,'Limpador de Lingua',343),(351,'Higienizador de Escova Dental',343),(352,'Outros Produtos de Higiene Bucal',343),(353,'Higiene / Saude para Bebe',11),(354,'Lenco Umidecido para Bebes',353),(355,'Talco para Bebes',353),(356,'Shampoo para Bebe',353),(357,'Condicionador para Bebes',353),(358,'Oleo para Bebe',353),(359,'Agua de Colonia para Bebes',353),(360,'Pomada para Assaduras',353),(361,'Hidratante para Bebes',353),(362,'Aspirador Nasal',353),(363,'Creme para Pentear para Bebes',353),(364,'Escova de Cabelo para Bebes',353),(365,'Escova de Dentes para Bebes',353),(366,'Troninho para Bebes',353),(367,'Outros Peodutos para Higiene para Bebes',353),(368,'Protetor Solar',12),(369,'Agua de Colonia',12),(370,'Dermocosmeticos',12),(371,'Bronzeador',12),(372,'Preservativo',12),(373,'Perfume',12),(374,'Massageador',12),(375,'Contratipo',12),(376,'Barba',12),(377,'Carga para Aparelho de Barbear',376),(378,'Espuma para Barbear',376),(379,'Aparelho de Barbear',376),(380,'Creme de Barbear',376),(381,'Pos Barba',376),(382,'Gel de Barbear',376),(383,'Pincel para Barba',376),(384,'Outros Produtos para Barba',376),(385,'Produtos para Depilacao',12),(386,'Cera para Depilacao',385),(387,'Creme Depilatorio',385),(388,'Aquecedor de Cera',385),(389,'Outros Produtos para Depilacao',385),(390,'Produtos para os Olhos',12),(391,'Mascara para os Olhos',390),(392,'Anti-Olheiras',390),(393,'Outros Produtos para os Olhos',390),(394,'Maos e Pes',12),(395,'Removedor de Esmalte',394),(396,'Creme para Maos',394),(397,'Creme para os Pes',394),(398,'Palito de Unhas',394),(399,'Esmalte de Unhas',394),(400,'Alicate de Cuticula',394),(401,'lixa para Unhas',394),(402,'Secante de Esmalte',394),(403,'Adesivo de Unha',394),(404,'Amolecedor de Cuticulas',394),(405,'Unha Postica',394),(406,'Kit Manicure / Pedicure',394),(407,'Carimbo para Unhas',394),(408,'Lixa de Pe',394),(409,'Pedicuro',394),(410,'Espatula para Cuticula',394),(411,'Outros Produtos para Maos e Pes',394),(412,'Corpo',12),(413,'Hidratante para o Corpo',412),(414,'Repelente',412),(415,'Locao Pos-Sol',412),(416,'Oleo para o Corpo',412),(417,'Creme Redutor Anti-Celulite',412),(418,'Esfoliante para o Corpo',412),(419,'Firmador para o Corpo',412),(420,'Creme Anti-Estrias',412),(421,'Outros Produtos para o Corpo',412),(422,'Maquiagem',12),(423,'Pinca',422),(424,'Base',422),(425,'Batom',422),(426,'Delineador Labial',422),(427,'Lapis de Olho',422),(428,'Po Compacto',422),(429,'Corretivo Facial',422),(430,'Delineador para os Olhos',422),(431,'Pincel para Maquiagem',422),(432,'Cilios Posticos',422),(433,'Curvador de Cilios',422),(434,'mascara para Cilios',422),(435,'Sombra',422),(436,'Blush',422),(437,'Outros Acessorios para Maquiagem',422),(438,'Cabelo',12),(439,'Gel para Cabelo',438),(440,'Shampoo para Cabelo',438),(441,'Creme para Pentear',438),(442,'Condicionador para Cabelo',438),(443,'Kit Pos Escova Progressiva',438),(444,'Fixador para Cabelo',438),(445,'Acessorios para Cabelo',438),(446,'Reparador de Pontas para Cabelo',438),(447,'Tintura para Cabelo',438),(448,'Alisante para Cabelo',438),(449,'Oleo para Cabelo',438),(450,'Pente para Cabelo',438),(451,'Aplique para Cabelo',438),(452,'Cera para Cabelo',438),(453,'Pomada para Cabelo',438),(454,'Outros Produtos para Cabelo',438),(455,'Peruca',438),(456,'Rosto',12),(457,'Tonico Facial',456),(458,'Anti-Acne',456),(459,'Tratamento Facial',456),(460,'Demaquilante',456),(461,'Hidratante Facial',456),(462,'Esfoliante Facial',456),(463,'Creme Anti-Rugas',456),(464,'Mascara Facial',456),(465,'Outros Produtos para o Rosto',456),(466,'Utilidades Domesticas',13),(467,'Coador de Cafe',466),(468,'Aromatizador / Essencias',466),(469,'Caneca',466),(470,'Pote',466),(471,'Cacarola',466),(472,'Copo',466),(473,'Jarra',466),(474,'Garrafa Termica',466),(475,'Tigela',466),(476,'Panela de Pressao',466),(477,'Tabua de Passar Roupa',466),(478,'Vela Comum',466),(479,'Faqueiro',466),(480,'Formas',466),(481,'Peneira',466),(482,'Varal',466),(483,'Colher',466),(484,'faca',466),(485,'Frigideira',466),(486,'Jogos de Panela',466),(487,'Ralador',466),(488,'Prato',466),(489,'Tabua de Carnes',466),(490,'Acucareiro',466),(491,'Aparelho de Jantar',466),(492,'Abridor',466),(493,'Taca',466),(494,'Acadeira',466),(495,'Cesto de Roupa',466),(496,'Equipamentos / Limpeza de Piscinas',466),(497,'Porta-Copos',466),(498,'Fruteira',466),(499,'Album de Fotos',466),(500,'Relogio de Parede',466),(501,'Xicara',466),(502,'Porta-Pao',466),(503,'Baixela',466),(504,'Saladeira',466),(505,'Bandeja',466),(506,'Mantegueira',466),(507,'Escorredor de Louca',466),(508,'Porta Retrato',466),(509,'Centro de Mesa',466),(510,'Marmita Eletrica',466),(511,'Avental',466),(512,'Papa Bolinhas',466),(513,'Porta-Guardanapo',466),(514,'Escada',466),(515,'Moedor de Pimenta',466),(516,'Chopeira',466),(517,'Batedor',466),(518,'Saleiro',466),(519,'Cafeteira Manual',466),(520,'Galheteiro',466),(521,'Outras Panelas',466),(522,'Sousplat',466),(523,'Travessa',466),(524,'Afiador de Facas',466),(525,'Descancador',466),(526,'Garfo',466),(527,'Cooler para Bebidas',466),(528,'Concha',466),(529,'Relogio de Mesa / Despertador',466),(530,'Churrasqueira',466),(531,'Forma para Bombons',466),(532,'Caldeira',466),(533,'Chaleira',466),(534,'Espremedor Manual',466),(535,'Jogo de Cha',466),(536,'Carrinho de Feira',466),(537,'Luva Termica',466),(538,'Cortador de Massa',466),(539,'Martelo para Carde',466),(540,'Molheira',466),(541,'Paliteiro',466),(542,'Jogo de Sobremesa',466),(543,'Tabua de Frios',466),(544,'Leitera',466),(545,'Espatula',466),(546,'Espumadeira',466),(547,'Pegador',466),(548,'Bule',466),(549,'Espagueteira',466),(550,'Adega de Vinhos',466),(551,'Aparelho / Conjunto de Fondue',466),(552,'Outras Utilidades Domesticas',466),(553,'Utensilios para Churrasco',13),(554,'Espeto para Churrasco',553),(555,'Acendedor de Churrasqueira',553),(556,'Conjunto para Churrasco',553),(557,'Carvao',553),(558,'Grelha para Churrasco',553),(559,'Outros Utensilios para Churrasco',553),(560,'Utensilios para Limpeza',13),(561,'Esponja de Aco',560),(562,'Esponja de Limpeza',560),(563,'pano de Limpeza',560),(564,'Vassoura',560),(565,'Saco de Lixo',560),(566,'Rodo',560),(567,'Escova de Limpeza',560),(568,'Luvas de Limpeza',560),(569,'Pa de Lixo',560),(570,'Balde',560),(571,'Lixeira',560),(572,'Bacia',560),(573,'Outros Utensilios de Limpeza',560),(574,'Produtos para Limpeza',13),(575,'Detergente',574),(576,'Limpador Multi Uso',574),(577,'Sabao',574),(578,'Amaciante',574),(579,'Alcool de Limpeza',574),(580,'Inseticida',574),(581,'Agua Sanitaria',574),(582,'Tira Manchas',574),(583,'Limpa Vidros',574),(584,'Desinfetante',574),(585,'Lustra Moveis',574),(586,'Odorizador de Ar',574),(587,'Cloro',574),(588,'Cera',574),(589,'Bloco Sanitario',574),(590,'Antimofo',574),(591,'Tira Ferrugem',574),(592,'Produtos de Limpeza para Calçados',574),(593,'Raticida',574),(594,'Outros Produtos para Limpeza',574),(595,'Utensilios para Bar',13),(596,'Balde para Gelo',595),(597,'Decanter',595),(598,'Coqueteleira',595),(599,'Conjunto de Bar',595),(600,'Conjunto de Caipirinha',595),(601,'Petisqueira',595),(602,'Porta-Garrafas',595),(603,'Tampa para Garrafas',595),(604,'Outros Utensilios para Bar',595),(605,'Artigos Descartaveis',13),(606,'Palito de Dente',605),(607,'Papel Toalha',605),(608,'Caixa de Fosforo',605),(609,'Guardanapo de Papel',605),(610,'Lenco de Papel',605),(611,'Filtro de Papel',605),(612,'Filme PVC',605),(613,'Papel Aluminio',605),(614,'Protetor para Fogao',605),(615,'Copo Descartavel',605),(616,'Papel Manteiga',605),(617,'Prato Descartavel',605),(618,'Garfo Descartavel',605),(619,'Colher Descartavel',605),(620,'Ponte Descartavel',605),(621,'Bandeja Descartavel',605),(622,'Forma Descartavel',605),(623,'Canudo',605),(624,'Outros Artigos Descartaveis',605);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(45) DEFAULT NULL,
  `rg` varchar(45) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `usuarios_id_usuarios` int(11) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `fk_pessoa_fisica_usuarios1` (`usuarios_id_usuarios`),
  CONSTRAINT `fk_pessoa_fisica_usuarios1` FOREIGN KEY (`usuarios_id_usuarios`) REFERENCES `usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_cliente`
--

DROP TABLE IF EXISTS `lista_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_cliente` (
  `id_lista_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome_lista` varchar(100) DEFAULT NULL,
  `cliente_id_cliente` int(11) NOT NULL,
  PRIMARY KEY (`id_lista_cliente`),
  KEY `fk_listas_cliente1` (`cliente_id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_cliente`
--

LOCK TABLES `lista_cliente` WRITE;
/*!40000 ALTER TABLE `lista_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_cliente_has_lista_produtos_mercado`
--

DROP TABLE IF EXISTS `lista_cliente_has_lista_produtos_mercado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_cliente_has_lista_produtos_mercado` (
  `lista_cliente_id_lista_cliente` int(11) NOT NULL,
  `lista_produtos_mercado_produtos_id_produtos` int(11) NOT NULL,
  `lista_produtos_mercado_mercado_id_mercado` int(11) NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`lista_cliente_id_lista_cliente`,`lista_produtos_mercado_produtos_id_produtos`,`lista_produtos_mercado_mercado_id_mercado`),
  KEY `fk_lista_cliente_has_lista_produtos_mercado_lista_produtos_me1` (`lista_produtos_mercado_produtos_id_produtos`,`lista_produtos_mercado_mercado_id_mercado`),
  KEY `fk_lista_cliente_has_lista_produtos_mercado_lista_cliente1` (`lista_cliente_id_lista_cliente`),
  CONSTRAINT `fk_lista_cliente_has_lista_produtos_mercado_lista_cliente1` FOREIGN KEY (`lista_cliente_id_lista_cliente`) REFERENCES `lista_cliente` (`id_lista_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_lista_cliente_has_lista_produtos_mercado_lista_produtos_me1` FOREIGN KEY (`lista_produtos_mercado_produtos_id_produtos`, `lista_produtos_mercado_mercado_id_mercado`) REFERENCES `lista_produtos_mercado` (`produtos_id_produtos`, `mercado_id_mercado`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_cliente_has_lista_produtos_mercado`
--

LOCK TABLES `lista_cliente_has_lista_produtos_mercado` WRITE;
/*!40000 ALTER TABLE `lista_cliente_has_lista_produtos_mercado` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista_cliente_has_lista_produtos_mercado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista_produtos_mercado`
--

DROP TABLE IF EXISTS `lista_produtos_mercado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lista_produtos_mercado` (
  `produtos_id_produtos` int(11) NOT NULL,
  `mercado_id_mercado` int(11) NOT NULL,
  `valor` float NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`produtos_id_produtos`,`mercado_id_mercado`),
  KEY `fk_produtos_has_mercado_mercado1` (`mercado_id_mercado`),
  KEY `fk_produtos_has_mercado_produtos1` (`produtos_id_produtos`),
  CONSTRAINT `fk_produtos_has_mercado_mercado1` FOREIGN KEY (`mercado_id_mercado`) REFERENCES `mercado` (`id_mercado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_mercado_produtos1` FOREIGN KEY (`produtos_id_produtos`) REFERENCES `produtos` (`id_produtos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista_produtos_mercado`
--

LOCK TABLES `lista_produtos_mercado` WRITE;
/*!40000 ALTER TABLE `lista_produtos_mercado` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista_produtos_mercado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mercado`
--

DROP TABLE IF EXISTS `mercado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mercado` (
  `id_mercado` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(45) DEFAULT NULL,
  `razao_social` varchar(45) DEFAULT NULL,
  `nome_fantasia` varchar(45) DEFAULT NULL,
  `inscricao_social` varchar(45) DEFAULT NULL,
  `usuarios_id_usuarios` int(11) NOT NULL,
  PRIMARY KEY (`id_mercado`),
  KEY `fk_pessoa_juridica_usuarios` (`usuarios_id_usuarios`),
  CONSTRAINT `fk_pessoa_juridica_usuarios` FOREIGN KEY (`usuarios_id_usuarios`) REFERENCES `usuarios` (`id_usuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mercado`
--

LOCK TABLES `mercado` WRITE;
/*!40000 ALTER TABLE `mercado` DISABLE KEYS */;
/*!40000 ALTER TABLE `mercado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `id_produtos` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_produto` int(11) NOT NULL,
  `categorias_id_categorias` int(11) NOT NULL,
  `descricao` longtext,
  `nome_produto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_produtos`),
  KEY `fk_produtos_categorias1` (`categorias_id_categorias`),
  CONSTRAINT `fk_produtos_categorias1` FOREIGN KEY (`categorias_id_categorias`) REFERENCES `categorias` (`id_categorias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `numero` varchar(10) DEFAULT NULL,
  `cidade` varchar(100) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `bairro` varchar(100) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `celular` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-07-16 17:28:51
