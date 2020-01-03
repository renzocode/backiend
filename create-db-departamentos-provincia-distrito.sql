DROP SCHEMA IF EXISTS `depart-provin-dist-01`;

CREATE SCHEMA `depart-provin-dist-01`;

use `depart-provin-dist-01`;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `departamentos`;

CREATE TABLE `departamentos` (
  `departmentId` int(11) NOT NULL AUTO_INCREMENT,
  `departamento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`departmentId`),
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `provincia`;

CREATE TABLE `provincia` (
  `provinceId` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(128) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  
  PRIMARY KEY (`provinceId`),  
  KEY `FK_PROVINCE_idx` (`departmentId`),
  
  CONSTRAINT `FK_PROVINCE` 
  FOREIGN KEY (`departmentId`) 
  REFERENCES `departamentos` (`departmentId`)   
  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `distrito`;

CREATE TABLE `distrito` (
  `districtId` int(11) NOT NULL AUTO_INCREMENT,
  `district` varchar(256) DEFAULT NULL,
  `provinceId` int(11) DEFAULT NULL,

  PRIMARY KEY (`districtId`),

  KEY `FK_DISTRICT_idx` (`provinceId`),

  CONSTRAINT `FK_DISTRICT` 
  FOREIGN KEY (`provinceId`) 
  REFERENCES `provincia` (`provinceId`) 

  ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


SET FOREIGN_KEY_CHECKS = 1;