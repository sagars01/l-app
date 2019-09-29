CREATE DATABASE  IF NOT EXISTS `LimeMaster` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `LimeMaster`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: LimeMaster 
-- ------------------------------------------------------
-- Server version	5.7.20

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
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `id_bookings` int(11) NOT NULL AUTO_INCREMENT,
  `property_id` varchar(45) NOT NULL,
  `booking_userid` varchar(45) NOT NULL,
  `booking_date` varchar(45) NOT NULL,
  `booking_uid` varchar(45) NOT NULL,
  PRIMARY KEY (`id_bookings`),
  UNIQUE KEY `booking_uid_UNIQUE` (`booking_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1,'8','1','1/20/2019','xkkGeA'),(2,'20','5','12/24/2018','xfjJoH'),(3,'11','5','10/30/2018','emrHjS'),(4,'19','20','10/23/2018','wtqXgG'),(5,'18','11','2/10/2019','fjq7lF'),(6,'14','15','4/15/2019','bisBrT'),(7,'1','12','4/19/2019','afcUzS'),(8,'4','9','4/23/2019','tcdTrC'),(9,'3','6','7/20/2019','cvw9zL'),(10,'5','4','3/24/2019','uzh5cK'),(11,'6','7','2/25/2019','ihbZqE'),(12,'20','21','12/15/2018','nqe7nH'),(13,'19','19','10/8/2018','thxHjN'),(14,'13','17','3/27/2019','chvWwS'),(15,'12','15','5/25/2019','jgaNaS'),(16,'10','4','5/13/2019','xeiGgQ'),(17,'17','3','11/27/2018','mll5zD'),(18,'15','8','9/10/2019','jppNqF'),(19,'11','14','9/19/2019','pyzBkR'),(20,'20','15','8/9/2019','vmnEvV'),(24,'8','8','27/09/2019','xfdgth'),(25,'12','8','1569594058','8121569594058'),(26,'12','8','1569594106','8121569594106'),(27,'12','8','1569594113','8121569594113'),(28,'12','8','1569594382','8121569594382'),(29,'12','8','1569594577','8121569594577');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `property` (
  `idproperty` int(11) NOT NULL AUTO_INCREMENT,
  `property_name` varchar(245) DEFAULT NULL,
  `property_location` varchar(245) DEFAULT NULL,
  `property_lat` varchar(245) DEFAULT NULL,
  `property_long` varchar(245) DEFAULT NULL,
  `property_category` varchar(245) DEFAULT NULL,
  PRIMARY KEY (`idproperty`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,'Adlon Kempinski Berlin','Berlin','52.51577','13.38022','Hotel'),(2,'Arte Luise Kunsthotel','Munich','52.52172','13.3796','Hotel'),(3,'The Westin Grand Berlin','Munich','52.51657','13.3887','Hotel'),(4,'Maritim proArte Hotel Berlin','Munich','52.51836','13.38816','Hotel'),(5,'Cityhostel Berlin','Munich','52.51133','13.38626','Hotel'),(6,'The Mandala Hotel','Munich','52.50917','13.37367','Hotel'),(7,'ALLEGRA Hotel Berlin Mitte','Berlin','52.52212','13.38472','Hotel'),(8,'Clipper City Home','Munich','52.51586','13.39021','Hotel'),(9,'ApartHotel Residenz Am Deutschen Theater','Munich','52.52301','13.38305','Hotel'),(10,'Sofitel Berlin Gendarmenmarkt','Munich','52.51448','13.39095','Hotel'),(11,'Eurostars Berlin Hotel','Munich','52.52034','13.38909','Hotel'),(12,'Hotel Amelie Berlin','Berlin','52.52318','13.38414','Hotel'),(13,'The Mandala Suites','Munich','52.51186','13.38964','Hotel'),(14,'Melia Berlin','Munich','52.52138','13.38833','Hotel'),(15,'Grand Hyatt Berlin','Berlin','52.50792','13.37253','Hotel'),(16,'Leonardo Hotel Berlin Mitte','Munich','52.52257','13.38666','Hotel'),(17,'NH Collection Berlin Mitte am Checkpoint Charlie','Munich','52.5103','13.38876','Hotel'),(18,'Hotel Gendarm Nouveau','Berlin','52.51183','13.39139','Hotel'),(19,'Hotel Gat Point Charlie','Munich','52.509','13.38838','Hotel'),(20,'Riverside Hotel','Berlin','52.522991','13.388084','Hotel');
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `added` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Lucius','Langosh','cletus.howell@example.org','1987-03-03','1987-06-25 20:27:45'),(2,'Jadyn','Nader','eliane18@example.net','1975-02-10','1973-05-19 23:13:26'),(3,'Kathryn','Gleichner','jupton@example.org','2004-10-13','1986-12-27 17:42:12'),(4,'Jayne','Abshire','schumm.santina@example.com','2016-08-27','1995-06-09 09:53:16'),(5,'Jazmyne','Hessel','marquise.schultz@example.com','2014-11-27','1983-06-22 08:12:48'),(6,'Darryl','Dietrich','flossie.lesch@example.com','1984-07-13','1996-07-02 09:21:58'),(7,'Alfonzo','Baumbach','cpfannerstill@example.com','2014-05-30','1988-10-04 15:09:34'),(8,'Kenna','Donnelly','obarrows@example.org','1996-11-12','1976-07-20 15:24:34'),(9,'Alyce','Leffler','xryan@example.org','1975-05-26','1999-11-19 08:08:25'),(10,'Ricky','Rolfson','bernhard.dandre@example.org','1981-05-26','2006-07-13 08:11:28'),(11,'Mabelle','Kirlin','kelton.zieme@example.com','1970-04-21','1986-01-30 03:52:06'),(12,'Dayna','Windler','kyla.goldner@example.com','1980-01-13','1999-05-16 00:12:54'),(13,'Emmanuelle','Kerluke','francisca16@example.com','1976-05-23','1997-06-22 16:27:01'),(14,'Gisselle','Walsh','francis79@example.net','1986-07-16','2009-10-08 18:20:04'),(15,'Vilma','Feil','gerardo60@example.org','2004-02-01','2009-08-07 20:11:22'),(16,'Annamarie','Schulist','mhaley@example.org','2003-12-08','2018-12-27 19:41:38'),(17,'Helga','Green','kzemlak@example.net','1979-01-29','1986-02-06 06:25:33'),(18,'Angelica','Crona','thiel.tressa@example.com','1983-11-15','1986-05-24 20:02:34'),(19,'Rhett','Ritchie','wbreitenberg@example.net','2000-04-01','1989-12-30 22:57:12'),(20,'Candace','Macejkovic','ymaggio@example.com','2003-04-02','2012-10-24 20:30:39'),(21,'Opal','Hagenes','jtoy@example.org','1978-10-26','1987-12-28 10:02:20'),(22,'Tyrel','Schoen','jaycee.o\'kon@example.com','2006-03-01','1987-02-19 07:09:35'),(23,'Corine','Nitzsche','drake.mohr@example.net','1999-05-25','1995-10-11 12:24:02'),(24,'Electa','Kohler','blaze.ondricka@example.org','1988-01-21','1981-02-16 12:28:14'),(25,'Juvenal','Keeling','guido.kshlerin@example.org','1985-11-14','1977-02-25 15:38:40'),(26,'Izaiah','Walker','ucrist@example.net','2007-01-16','1974-09-15 01:27:34'),(27,'Whitney','Harris','kyler26@example.net','1980-04-04','2017-02-15 00:24:20'),(28,'Nathanial','Lesch','fbreitenberg@example.org','2018-04-15','2000-03-17 20:15:15'),(29,'Khalil','Blick','fredy13@example.net','1989-08-22','1980-03-06 22:35:56'),(30,'Kaya','Stokes','ocrooks@example.com','1999-02-23','1997-07-06 23:15:42'),(31,'Corrine','Oberbrunner','zbeahan@example.com','1973-05-25','1985-12-30 21:05:53'),(32,'Roberta','Marquardt','rpfannerstill@example.net','1984-10-01','2000-01-31 06:59:12'),(33,'Jolie','Nolan','rahsaan.kuphal@example.com','1985-04-19','2014-08-12 00:04:57'),(34,'William','Dickens','santina.douglas@example.net','1972-09-27','1984-10-12 06:40:58'),(35,'Donna','Tillman','audra15@example.com','1995-05-08','2000-11-28 07:26:58'),(36,'Ollie','Von','tnolan@example.com','1998-05-30','1999-11-12 08:19:57'),(37,'Lulu','Wiegand','eldon62@example.org','2017-11-29','2012-03-19 22:02:04'),(38,'Samantha','Hermiston','ejohnson@example.com','1971-03-29','1999-10-16 08:52:42'),(39,'Birdie','Schulist','piper60@example.com','2015-06-27','2009-12-08 12:54:20'),(40,'Verner','Bechtelar','odibbert@example.net','1985-11-27','1981-10-07 22:41:49'),(41,'Zella','King','brant29@example.net','1970-12-13','2008-12-04 12:18:53'),(42,'Brigitte','Daniel','kuhn.miller@example.com','2018-07-06','2008-09-06 04:38:49'),(43,'Adelia','Hansen','ubrekke@example.com','1993-10-23','1979-01-31 22:04:59'),(44,'Jermaine','Hane','caden94@example.org','1992-01-08','2017-09-08 17:34:13'),(45,'Rebecca','Schumm','elvis.volkman@example.com','1990-01-05','2011-01-02 19:57:38'),(46,'Freddie','Veum','beaulah61@example.net','2005-05-01','2017-06-11 19:03:52'),(47,'Maurice','Mueller','ifisher@example.net','2008-08-11','2018-11-28 23:42:43'),(48,'Sydney','Kerluke','jacobson.annamarie@example.net','2003-04-12','1998-03-11 23:58:50'),(49,'Tyler','Schmidt','thiel.abner@example.org','1975-01-28','2012-05-23 20:49:46'),(50,'Dell','Doyle','alana13@example.com','1996-05-08','1970-09-07 19:49:01'),(51,'Tamia','Wilderman','adriel19@example.net','1986-08-13','1991-04-26 22:33:11'),(52,'Daniella','Kessler','elissa.bogan@example.org','1983-06-19','2016-04-12 05:07:48'),(53,'Gretchen','Turner','mazie.tremblay@example.org','1999-08-31','1985-12-06 11:21:24'),(54,'Aron','Schiller','gquigley@example.net','2002-01-31','1973-11-06 18:12:40'),(55,'Brenda','Schamberger','stokes.wayne@example.com','1974-05-16','1988-01-31 14:19:37'),(56,'Arlo','Mertz','pdaniel@example.org','1974-04-19','1992-06-06 13:00:51'),(57,'Dylan','Sporer','ptremblay@example.net','2018-09-09','2010-01-19 19:12:58'),(58,'Freeman','Strosin','marjory.ernser@example.org','1986-07-24','1983-12-05 02:40:41'),(59,'Jamaal','Glover','reymundo31@example.org','2013-04-20','1980-07-14 21:02:36'),(60,'Christina','Walker','laurie57@example.net','1979-06-02','1986-07-29 03:49:43'),(61,'Kaci','Gleichner','tlangworth@example.net','1995-08-18','1987-12-11 17:44:59'),(62,'Sammy','Heller','hackett.bethany@example.org','1986-09-24','1998-10-04 12:06:46'),(63,'Jackeline','Smith','katharina18@example.net','1990-04-08','1997-02-27 23:51:01'),(64,'Barbara','Jacobs','melody.tremblay@example.com','2006-02-24','1985-11-12 07:36:54'),(65,'Lorine','King','srunte@example.org','2002-07-07','2012-03-06 23:48:26'),(66,'Alan','Prosacco','baumbach.daphnee@example.com','2001-03-13','2010-12-07 02:29:54'),(67,'Kyler','Reichert','neva73@example.com','2010-06-15','1971-12-13 07:41:48'),(68,'Mertie','Nader','madelyn23@example.net','1979-03-27','2010-11-04 22:29:16'),(69,'Cathryn','Abshire','elmira.keeling@example.com','1985-11-27','2004-01-31 15:26:42'),(70,'Reggie','Padberg','stanford99@example.com','1994-04-12','2016-03-23 07:53:34'),(71,'Rosa','Bruen','issac.gutmann@example.com','2009-09-03','2001-05-30 17:59:24'),(72,'Hazle','Cole','adolf47@example.org','1975-01-09','1999-02-08 12:36:02'),(73,'Mikayla','Harber','cristal.dooley@example.org','2019-02-01','1994-04-27 06:36:58'),(74,'Meaghan','Durgan','justina.mcclure@example.net','1984-01-25','1984-05-02 02:00:47'),(75,'Ceasar','Windler','bashirian.eldon@example.org','2010-07-15','2018-11-12 05:16:24'),(76,'Mathew','McDermott','rkunze@example.com','2016-09-16','1971-02-13 10:37:01'),(77,'Eric','Balistreri','jed.ryan@example.net','1975-11-14','1991-01-28 10:42:25'),(78,'Adolf','Hettinger','grant69@example.com','1987-01-28','2000-02-13 15:00:32'),(79,'Rollin','Stokes','russel.anibal@example.net','2001-06-09','1983-11-15 04:07:44'),(80,'Kiley','Langosh','wharvey@example.net','1999-09-14','1989-08-30 06:49:49'),(81,'Bernardo','Gutkowski','rodolfo23@example.com','2001-10-31','2002-11-05 05:52:37'),(82,'Abbigail','Jacobson','lenny.veum@example.org','2000-05-26','2017-02-10 05:36:48'),(83,'Antonietta','Lynch','emelie51@example.org','1984-06-25','1994-04-04 14:21:37'),(84,'Sonya','Dietrich','crist.paula@example.org','2018-01-07','1982-06-21 17:18:23'),(85,'Nola','Bechtelar','altenwerth.river@example.com','2017-12-30','1996-01-31 04:48:42'),(86,'Edmund','Donnelly','alexanne.brakus@example.com','1984-07-21','1991-04-16 10:17:19'),(87,'Trey','Rodriguez','qhahn@example.net','2004-12-10','2017-11-01 02:37:14'),(88,'Brando','Osinski','lavinia.spencer@example.org','2008-01-05','2000-08-30 21:16:04'),(89,'Jerel','Willms','alexandra80@example.org','1994-08-24','1975-02-17 20:28:13'),(90,'Kory','Stracke','ylebsack@example.net','2001-04-04','2010-06-24 16:12:25'),(91,'Durward','Torphy','conn.winona@example.org','1999-08-26','2009-07-26 19:11:51'),(92,'Helene','Emmerich','egrady@example.net','2014-05-10','2011-05-16 17:25:04'),(93,'Anne','O\'Hara','murl.carter@example.com','1988-07-18','1995-11-30 21:21:13'),(94,'Rhett','Greenfelder','eichmann.izaiah@example.com','1992-08-24','1998-07-19 01:49:17'),(95,'Stephanie','White','jameson50@example.org','1984-04-26','2003-04-22 19:27:59'),(96,'Rhett','Bosco','bgerlach@example.com','1975-07-20','2006-06-22 09:06:08'),(97,'Dasia','Kassulke','tkshlerin@example.com','1988-03-19','2019-05-28 08:43:44'),(98,'Vicente','Witting','hartmann.jeanne@example.org','2000-12-25','2015-05-01 20:33:08'),(99,'Margarett','Miller','sthompson@example.org','2019-04-04','1978-05-29 09:08:40'),(100,'Vicente','Miller','kaylee.hoppe@example.org','1976-10-16','1999-10-25 17:06:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-27 22:43:57
