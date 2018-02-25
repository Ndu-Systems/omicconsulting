-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2018 at 07:12 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `omicdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(10) NOT NULL,
  `name` varchar(150) NOT NULL,
  `surname` varchar(150) NOT NULL,
  `idnumber` varchar(30) NOT NULL,
  `email` varchar(150) NOT NULL,
  `cv` text NOT NULL,
  `jobId` int(10) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `name`, `surname`, `idnumber`, `email`, `cv`, `jobId`, `tel`, `status`) VALUES
(1, 'Ndu Systems', 'Thabiso', '9280485585084', 'freedom.khanyile1@gmail.com', 'http://localhost/git.makhawini/web/api/uploads/15182102581518134490Basic_Curriculum_Vitae_example.pdf\n', 0, '', 'Active'),
(2, 'Ndu Systems', 'Thabiso', '9280485585084', 'freedom.khanyile1@gmail.com', 'http://localhost/git.makhawini/web/api/uploads/15182102601518134490Basic_Curriculum_Vitae_example.pdf\n', 0, '', 'Active'),
(3, 'Ndu Systems', 'Thabiso', '9280485585084', 'thembu@mail.com', 'http://localhost/git.makhawini/web/api/uploads/15182115431518134490Basic_Curriculum_Vitae_example.pdf\n', 2, '', 'Active'),
(4, 'Ndu Systems', 'Thabiso', '9280485585084', 'thembu@mail.com', 'http://localhost/git.makhawini/web/api/uploads/15182115561518134490Basic_Curriculum_Vitae_example.pdf\n', 2, '', 'Active'),
(5, 'Ndu Systems', 'Thabiso', '9280485585084', 'thembu@mail.com', 'http://localhost/git.makhawini/web/api/uploads/15182116021518134490Basic_Curriculum_Vitae_example.pdf\n', 2, '', 'Active'),
(6, 'Thabiso', 'Mthembu', '9280485585084', 'thembu@mail.com', 'http://localhost/git.makhawini/web/api/uploads/15182117261518134490Basic_Curriculum_Vitae_example.pdf\n', 2, '27745806584', 'Active'),
(7, 'Ndu Systems', 'Thabiso', '9280485585084', 'freedom.khanyile1@gmail.com', 'http://localhost/git.makhawini/web/api/uploads/1518211921Basic_Curriculum_Vitae_example.pdf\n', 0, '27745806584', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `Id` int(11) NOT NULL,
  `Topic` varchar(40) NOT NULL,
  `Message` varchar(225) NOT NULL,
  `DatePosted` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `Id` int(11) NOT NULL,
  `Position` varchar(40) NOT NULL,
  `email` varchar(45) NOT NULL,
  `Location` varchar(40) NOT NULL,
  `Industry` varchar(40) NOT NULL,
  `Availability` varchar(40) NOT NULL,
  `VacancyId` int(11) NOT NULL,
  `Cv` varchar(100) NOT NULL,
  `IsActive` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`Id`, `Position`, `email`, `Location`, `Industry`, `Availability`, `VacancyId`, `Cv`, `IsActive`) VALUES
(1, 'Developer', 'freedom.khanyile@ndu-systems.net', 'Randburg', 'Automotive', '1 Month', 1, 'http://localhost/git.makhawini/portal/api/uploads/1518134490Basic_Curriculum_Vitae_example.pdf\n', 0),
(2, 'Tester', 'nduduzo1@live.com', 'Randburg', 'Telecommunication', 'Emmidietly', 0, 'http://localhost/git.makhawini/portal/api/uploads/1518205353Basic_Curriculum_Vitae_example.pdf\n', 1),
(3, 'Developer', 'Frank@mail.com', 'Durban', 'Tell', '1 Month', 2, 'http://localhost/git.makhawini/portal/api/uploads/1518350564Basic_Curriculum_Vitae_example.pdf\n', 0),
(4, 'Analyst', 'Rose@mail.com', 'Cape Town', 'Automotive', '1 Month', 0, 'http://localhost/git.makhawini/portal/api/uploads/1518350685Basic_Curriculum_Vitae_example.pdf\n', 1),
(5, 'Architect', 'Joseph@mail.com', 'Capetown', 'Insurance', '1 Month', 0, 'http://localhost/git.makhawini/portal/api/uploads/1518352488Basic_Curriculum_Vitae_example.pdf\n', 1),
(6, 'Scrum Master', 'Maria@mail.com', 'Rosebank', 'Tellecommunication', '2 Weeks', 0, 'http://localhost/git.makhawini/portal/api/uploads/1518352525Basic_Curriculum_Vitae_example.pdf\n', 0);

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `status` varchar(100) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `Id` int(11) NOT NULL,
  `Company` varchar(255) DEFAULT NULL,
  `ContactPerson` varchar(225) NOT NULL,
  `EmailAddress` varchar(225) NOT NULL,
  `ContactNumber` int(20) NOT NULL,
  `CandidateId` int(20) NOT NULL,
  `IsActive` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`Id`, `Company`, `ContactPerson`, `EmailAddress`, `ContactNumber`, `CandidateId`, `IsActive`) VALUES
(1, 'Ndu Systems', 'Freedom Khanyile', 'freedom.khanyile@ndu-systems.net', 2147483647, 1, 1),
(2, 'Ndu Systems', 'Mthembu', 'mthembu@mail.com', 2147483647, 2, 1),
(3, 'Ndu Systems', 'Ndu Systems', 'mthembu@mail.com', 225851475, 4, 1),
(4, 'Solutions', 'Ndumiso', 'mthembu@mail.com', 24458758, 4, 1),
(5, 'Mthembu Holdings', 'Mthembu', 'mthembu@mail.com', 2147483647, 1, 1),
(6, 'Mthembu Holdings', 'Mthembu', 'mthembu@mail.com', 2147483647, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Username` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Role` varchar(10) NOT NULL,
  `IsActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `Email`, `Role`, `IsActive`) VALUES
(1, 'admin', 'pass', 'admin@mail.com', 'admin', 1),
(8, 'Freeedom.Khanyile', '123456', 'Freedom.Khanyile1@gmail.com', 'admin', 1),
(9, 'Siyabonga.Nyawo', '123456', 'siyabonga@makhawini.com', 'admin', 1),
(10, 'Sphephelo.Nyathi', '123456', 'Nyathi@makhawini.com', 'admin', 1),
(11, 'Nkululeko.Magwaza', '123456', 'magwaza@makhawini.com', 'admin', 1),
(12, 'Freedom.Khanyile', '123456', 'Khanyile@makhawini.com', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vacancies`
--

CREATE TABLE `vacancies` (
  `Id` int(11) NOT NULL,
  `Employer` varchar(225) NOT NULL,
  `ContactPerson` varchar(225) NOT NULL,
  `Cell` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Position` varchar(40) NOT NULL,
  `Location` varchar(225) NOT NULL,
  `Industry` char(50) NOT NULL,
  `Experience` int(11) NOT NULL,
  `PostDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CloseDate` datetime NOT NULL,
  `Requirements` varchar(225) DEFAULT NULL,
  `IsActive` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vacancies`
--

INSERT INTO `vacancies` (`Id`, `Employer`, `ContactPerson`, `Cell`, `Email`, `Position`, `Location`, `Industry`, `Experience`, `PostDate`, `CloseDate`, `Requirements`, `IsActive`) VALUES
(1, 'Multichoice', 'Mark Hamberg', 2147483647, 'mark@mca.co.za', 'Graduate Intern', 'Randburg', 'Telecommunication', 0, '2018-02-09 21:47:43', '0000-00-00 00:00:00', 'None', '0'),
(2, 'Innovation House', 'Smith Big', 2147483647, 'bigsmith@innovation.com', 'Graduate Intern', 'Rosebank', 'Insurance', 0, '2018-02-09 21:49:03', '0000-00-00 00:00:00', 'Non', '0'),
(3, 'BBD', 'Nathen Josephs', 2147483647, 'nathen@bbd.com', 'Scrum Master', 'Randburg', 'Software', 0, '2018-02-11 14:38:58', '0000-00-00 00:00:00', 'Knowledge in Agile an advantage', '1'),
(4, 'Siemens', 'Mark Hamberg', 215484574, 'mark', 'Developer Architect', 'Midrand', 'Mining', 5, '2018-02-11 14:41:01', '0000-00-00 00:00:00', 'Experience in mining a must', '0'),
(5, 'Oracle', 'Mini Khumalo', 2147483647, 'mini@oracle.com', 'SQL Developer', 'Midrand', 'Tellecommunications', 3, '2018-02-11 14:43:06', '0000-00-00 00:00:00', 'Knowledge of T-SQL', '1'),
(6, 'Milky Lane', 'michelle gold', 2147483647, 'n/a', 'Waiter', 'Durban South Beach', 'Restaurants', 0, '2018-02-11 14:45:17', '0000-00-00 00:00:00', 'NONE', '1'),
(7, 'Myspace', 'David Moor', 2147483647, 'David@myspace.com', 'Developer', 'USA', 'Social Media', 5, '2018-02-11 15:16:32', '2018-02-27 22:00:00', 'Hardcore Developer', '1'),
(8, 'Microsoft', 'Mark Zargz', 2147483647, 'MarkZ@microsoft.com', 'Developer', 'Randburg', 'Tellecommunications', 5, '2018-02-11 15:24:59', '2018-02-27 22:00:00', 'New and Develop', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
