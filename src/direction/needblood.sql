-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 01:49 PM
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
-- Database: `needblood`
--

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE `donors` (
  `userId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `bloodGroup` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `upazilla` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `readyToDonate` varchar(255) NOT NULL,
  `lastDonate` date NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `status` varchar(255) NOT NULL,
  `donateTimes` int(11) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donors`
--

INSERT INTO `donors` (`userId`, `id`, `name`, `email`, `address`, `age`, `bloodGroup`, `district`, `upazilla`, `gender`, `phone`, `readyToDonate`, `lastDonate`, `isActive`, `status`, `donateTimes`, `facebook`, `instagram`, `twitter`, `linkedin`, `date`) VALUES
(5, 1, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '1', '0000-00-00', 1, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 2, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '1', '0000-00-00', 1, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 3, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '1', '0000-00-00', 1, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 4, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '', '0000-00-00', 0, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 5, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '', '0000-00-00', 0, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 6, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '', '0000-00-00', 0, '', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 7, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '', '0000-00-00', 0, 'approved', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14'),
(5, 8, 'John Doe', 'john.doe@example.com', '123 Main St', 30, 'A+', 'DistrictName', 'UpazillaName', 'male', '1234567890', '', '0000-00-00', 0, 'approved', 0, 'facebookHandle', 'instagramHandle', 'twitterHandle', '', '2024-07-14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `isDeleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `image`, `email`, `password`, `role`, `date`, `isDeleted`) VALUES
(2, 'John Doe', 'https://example.com/images/john.jpg', 'john.doe@example.com', '$2b$12$bpCybgtZsnXdni2pug9TY.uui7JJCeGeGtk.8fbPP0ALdg/lhCf66', 'user', '2024-07-14', 0),
(3, 'John Doe', 'https://example.com/images/john.jpg', 'john.doe@example2.com', '$2b$12$u5EqFJBHoLntprpfTlN0OeQp5ysLzbmRmEap4yKvbMV/ecutY7oF.', 'user', '2024-07-14', 0),
(4, 'John Doe', 'https://example.com/images/john.jpg', 'john.doe@example3.com', '$2b$12$iisci5UOwFo4BVQeaFiaCujRKQ87qZjAweAnhM5a.iUiUd5/Kq0im', 'user', '2024-07-14', 0),
(5, 'John Doe', 'https://example.com/images/john.jpg', 'john.doe@example5.com', '$2b$12$RO9j8e59KFmHh5JrUHymD.M3mOWi9SAKhmngUtzTOzGoUmPsYd27u', 'donor', '2024-07-14', 1),
(6, 'John Doe', 'https://example.com/images/john.jpg', 'john.doe@example44.com', '$2b$12$rbKV2vqRS8f5jG.j8URTbuu5YpCsD5elF8FKhJTT5qMFMC.PdnrL6', 'user', '2024-07-14', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donors`
--
ALTER TABLE `donors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donors`
--
ALTER TABLE `donors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
