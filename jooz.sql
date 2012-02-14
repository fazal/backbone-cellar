-- MySQL dump 10.13  Distrib 5.5.15, for osx10.6 (i386)
--
-- Host: localhost    Database: jooz
-- ------------------------------------------------------
-- Server version	5.5.15

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
-- Table structure for table `juice`
--

DROP TABLE IF EXISTS `juice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT 0.00,
  `ingredients` varchar(45) DEFAULT NULL,
  `description` blob,
  `picture` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juice`
--

LOCK TABLES `juice` WRITE;
/*!40000 ALTER TABLE `juice` DISABLE KEYS */;
INSERT INTO `juice` VALUES (1,'SunQuick',250.50,'Orange squash','The aromas of fruit and spice give one a hint of the light drinkability of this lovely juice, which makes an excellent complement to fish dishes.','saint_cosme.jpg'),(2,'Jaljeera',55,'Pepper water with a dash of lemon','A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert juice market. Light and bouncy, with a hint of black truffle, this juice will not fail to tickle the taste buds.','lan_rioja.jpg'),(3,'Vimto',200.00,'Fruits mix','The cache of a fine Cabernet in ones juice cellar can now be replaced with a childishly playful juice bubbling over with tempting tastes of\nblack cherry and licorice. This is a taste sure to transport you back in time.','margerum.jpg'),(4,'Tutti Fruiti \"HAWAII\"',300,'Mix of fruits with the Hawaiian coconut taste','A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don\'t miss\nthis award-winning taste sensation.','ex_umbris.jpg'),(5,'Watermelon juice',50.00,'Watermelon seedless','One cannot doubt that this will be the juice served at the Hollywood award shows, because it has undeniable star power. Be the first to catch\nthe debut that everyone will be talking about tomorrow.','rex_hill.jpg'),(6,'SHARJAH',150,'Banana and milk smoothie','Though soft and rounded in texture, the body of this juice is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.','viticcio.jpg'),(7,'MARHABA',210,'Dates and milk smoothie','Though dense and chewy, this juice does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the\nsenses.','le_doyenne.jpg');
/*!40000 ALTER TABLE `juice` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-12-01  9:22:24
