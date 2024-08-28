-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2024 at 07:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bloodbankingsystem2`
--

-- --------------------------------------------------------

--
-- Table structure for table `bloodbank`
--

CREATE TABLE `bloodbank` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bloodbankcontent`
--

CREATE TABLE `bloodbankcontent` (
  `id` int(11) NOT NULL,
  `bloodgroupid` int(11) NOT NULL,
  `bloodbankid` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `isavailable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bloodgroup`
--

CREATE TABLE `bloodgroup` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bloodrequest`
--

CREATE TABLE `bloodrequest` (
  `id` int(11) NOT NULL,
  `patientid` int(11) NOT NULL,
  `bloodbankid` int(11) NOT NULL,
  `requestdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hospitalpatient`
--

CREATE TABLE `hospitalpatient` (
  `id` int(11) NOT NULL,
  `patientid` int(11) NOT NULL,
  `hospitalid` int(11) NOT NULL,
  `registerdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `place` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'DOCTOR'),
(2, 'DONOR'),
(3, 'PATIENT');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `idcardnumber` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `roleid` int(11) NOT NULL,
  `locationid` int(11) NOT NULL,
  `bloodgroupid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloodbank`
--
ALTER TABLE `bloodbank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloodbankcontent`
--
ALTER TABLE `bloodbankcontent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bloodgroupid` (`bloodgroupid`),
  ADD KEY `bloodbankid` (`bloodbankid`);

--
-- Indexes for table `bloodgroup`
--
ALTER TABLE `bloodgroup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloodrequest`
--
ALTER TABLE `bloodrequest`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bloodbankid` (`bloodbankid`),
  ADD KEY `patientid` (`patientid`);

--
-- Indexes for table `hospital`
--
ALTER TABLE `hospital`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hospitalpatient`
--
ALTER TABLE `hospitalpatient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hospitalid` (`hospitalid`),
  ADD KEY `patientid` (`patientid`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleid` (`roleid`),
  ADD KEY `locationid` (`locationid`),
  ADD KEY `bloodgroupid` (`bloodgroupid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloodbank`
--
ALTER TABLE `bloodbank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloodbankcontent`
--
ALTER TABLE `bloodbankcontent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloodgroup`
--
ALTER TABLE `bloodgroup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloodrequest`
--
ALTER TABLE `bloodrequest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hospital`
--
ALTER TABLE `hospital`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hospitalpatient`
--
ALTER TABLE `hospitalpatient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bloodbankcontent`
--
ALTER TABLE `bloodbankcontent`
  ADD CONSTRAINT `bloodbankcontent_ibfk_1` FOREIGN KEY (`bloodgroupid`) REFERENCES `bloodgroup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bloodbankcontent_ibfk_2` FOREIGN KEY (`bloodbankid`) REFERENCES `bloodbank` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bloodrequest`
--
ALTER TABLE `bloodrequest`
  ADD CONSTRAINT `bloodrequest_ibfk_1` FOREIGN KEY (`bloodbankid`) REFERENCES `bloodbank` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bloodrequest_ibfk_2` FOREIGN KEY (`patientid`) REFERENCES `hospitalpatient` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hospitalpatient`
--
ALTER TABLE `hospitalpatient`
  ADD CONSTRAINT `hospitalpatient_ibfk_1` FOREIGN KEY (`hospitalid`) REFERENCES `hospital` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hospitalpatient_ibfk_2` FOREIGN KEY (`patientid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`roleid`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`locationid`) REFERENCES `location` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_3` FOREIGN KEY (`bloodgroupid`) REFERENCES `bloodgroup` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
