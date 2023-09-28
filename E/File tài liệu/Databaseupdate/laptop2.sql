-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 28, 2023 lúc 08:55 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `laptop2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantityPro` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(255) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `quantityPro`, `price`, `name`, `file_path`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(10, 1, 1599, 'PREDATOR TRITON 17 X\r\n', 'products/store3.webp', 2, 2, '2023-09-27 08:08:39', '2023-09-27 08:08:39'),
(11, 1, 1599, 'PREDATOR HELIOS NEO 16\r\n', 'products/store4.webp', 3, 2, '2023-09-27 08:08:42', '2023-09-27 08:08:42'),
(12, 1, 1599, 'Swift 14', 'products/store5.webp', 5, 2, '2023-09-27 08:08:45', '2023-09-27 08:08:45'),
(13, 3, 1800, 'PREDATOR TRITON 16', 'products/store2.webp', 1, 2, '2023-09-27 08:37:34', '2023-09-27 08:37:34'),
(14, 10, 1800, 'PREDATOR TRITON 16', 'products/store2.webp', 1, 2, '2023-09-27 08:40:52', '2023-09-27 08:40:52'),
(15, 1, 1800, 'PREDATOR TRITON 16', 'products/store2.webp', 1, 2, '2023-09-27 09:26:21', '2023-09-27 09:26:21'),
(16, 1, 1599, 'PREDATOR HELIOS NEO 16\r\n', 'products/store4.webp', 3, 2, '2023-09-27 09:26:41', '2023-09-27 09:26:41'),
(17, 1, 1599, 'PREDATOR TRITON 14', 'products/store1.webp', 4, 2, '2023-09-27 09:26:54', '2023-09-27 09:26:54'),
(18, 1, 1599, 'Swift 14', 'products/store5.webp', 5, 2, '2023-09-27 09:27:03', '2023-09-27 09:27:03'),
(19, 1, 1599, 'Swift 14', 'products/store5.webp', 5, 2, '2023-09-27 10:07:47', '2023-09-27 10:07:47'),
(20, 5, 1599, 'Nitro 7', 'products/store11.webp', 10, 5, '2023-09-27 17:36:00', '2023-09-27 17:36:00'),
(21, 1, 1599, 'PREDATOR TRITON 17 X\r\n', 'products/store3.webp', 2, 2, '2023-09-27 21:39:12', '2023-09-27 21:39:12'),
(22, 1, 1800, 'PREDATOR TRITON 16', 'products/store2.webp', 1, 2, '2023-09-27 23:34:18', '2023-09-27 23:34:18'),
(23, 1, 1599, 'PREDATOR TRITON 17 X\r\n', 'products/store3.webp', 2, 5, '2023-09-27 23:38:00', '2023-09-27 23:38:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `comment` text NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `comment`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 'hello', 1, 3, '2023-09-27 10:55:30', '2023-09-27 10:55:30'),
(3, 'dadcascasgg', 1, 5, '2023-09-27 11:06:36', '2023-09-27 11:06:36'),
(4, 'Laptop này xịn quá', 1, 5, '2023-09-27 11:30:40', '2023-09-27 11:30:40'),
(5, 'abc', 1, 2, '2023-09-27 22:31:25', '2023-09-27 22:31:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_09_26_153343_table', 2),
(3, '2023_09_26_181138_taobang', 3),
(4, '2023_09_27_045237_alterforusers', 4),
(5, '2023_09_27_100548_foreinkey', 5),
(6, '2023_09_27_130053_create_c_m_t', 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `price` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `category` varchar(255) NOT NULL DEFAULT 'gaming',
  `brand` varchar(255) NOT NULL DEFAULT 'Gigabyte',
  `color` varchar(255) NOT NULL DEFAULT 'Đen',
  `size` varchar(255) NOT NULL DEFAULT '15.6',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `file_path`, `price`, `quantity`, `category`, `brand`, `color`, `size`, `created_at`, `updated_at`) VALUES
(1, 'PREDATOR TRITON 16', 'NVIDIA® GEFORCE RTX™ 40 SERIES LAPTOPS\r\nIntel® Core™ i9 Processor1\r\nWINDOWS 11 HOME', 'products/store2.webp', 1800, 72, 'PREDATOR', 'PREDATOR', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(2, 'PREDATOR TRITON 17 X\r\n', 'GEFORCE RTX™ 4090\r\nIntel® Core™ i9-13900HX\r\nWINDOWS 11 HOME\r\n32GB DDR5 / 4TB', 'products/store3.webp', 1599, 72, 'PREDATOR', 'PREDATOR', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(3, 'PREDATOR HELIOS NEO 16\r\n', 'GEFORCE RTX™ 4070\r\nIntel® Core™ i7-13700HX\r\nWINDOWS 11 HOME\r\n32GB DDR5 / 2TB', 'products/store4.webp', 1599, 72, 'PREDATOR', 'PREDATOR', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(4, 'PREDATOR TRITON 14', 'NVIDIA® GEFORCE RTX™ 40 SERIES LAPTOPS\r\nIntel® Core™ i7 Processor1\r\nWINDOWS 11 HOME\r\n32GB LPDDR5', 'products/store1.webp', 1599, 72, 'PREDATOR', 'PREDATOR', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(5, 'Swift 14', '13th Gen Intel® Core™ H-Series\r\nTwinAir cooling\r\nAntimicrobial Corning® Gorilla® Glass\r\nWINDOWS 11 HOME\r\n', 'products/store5.webp', 1599, 72, 'Swift', 'Swift', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(6, 'Swift 5', '12th Gen Intel® Core™ processors\r\nTwinAir cooling\r\nAntimicrobial Corning® Gorilla® Glass\r\nWINDOWS 11 HOME\r\n', 'products/store6.webp', 1599, 72, 'Swift', 'Swift', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(7, 'Swift Edge 16', 'AMD Ryzen™ 7040 Series\r\n16-inch, 16:10, 3.2K OLED\r\nAntimicrobial Corning® Gorilla® Glass\r\nWINDOWS 11 HOME\r\n', 'products/store6.webp', 1599, 72, 'Swift', 'Swift', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(8, 'Swift X AMD', 'AMD Ryzen™ 5000 Series1\r\nGeForce RTX™ 3050 Ti1\r\n16GB RAM \r\nWINDOWS 11 HOME\r\n', 'products/store8.webp', 1599, 72, 'Swift', 'Swift', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(9, 'Nitro 5 Intel', 'Intel® Core™ i7 Processors1\r\nGeForce RTX™ 30 Series\r\n32GB, 3200MHZ\r\nWINDOWS 11 HOME\r\n', 'products/store9.webp', 1599, 72, 'Nitro', 'Nitro', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24'),
(10, 'Nitro 7', 'Intel® Core™ i7 Processors1\r\nGeForce RTX™\r\n32GB, 3200MHZ\r\nWINDOWS 11 HOME\r\n', 'products/store11.webp', 1599, 72, 'Nitro', 'Nitro', 'Đen', '17.3”', '2023-09-26 04:24:24', '2023-09-26 04:24:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'client',
  `phone` int(15) DEFAULT NULL,
  `address` varchar(255) NOT NULL DEFAULT 'address',
  `balance` int(11) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `api_token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `phone`, `address`, `balance`, `avatar`, `remember_token`, `created_at`, `updated_at`, `api_token`) VALUES
(1, 'admin', 'Admin@gmail.com', NULL, '12345678', 'admin', 935688218, 'abc', 5000000, 'avatars/S2qvhgXVolOIBzQTJxwD6OIlOETxUTMOmCPjccIU.png', NULL, '2023-09-26 08:44:26', '2023-09-26 11:43:00', NULL),
(2, 'john', 'john@gmail.com', NULL, '$2y$10$oKjnHclLMKNlYesbZGc41uAhJvJkqCszaVGNTdHNXUowJYU.31FQO', 'admin', NULL, 'address', 5000, NULL, NULL, '2023-09-26 12:21:50', '2023-09-27 23:44:09', 'b86715bb1f85b02f3f75a4e442f0d261ff904255'),
(3, 'john', 'kkk@gmail.com', NULL, '$2y$10$.MtlqiEzlA/8WkvLdU1Ee.gGIDXl16fACChYj6N1T2VtK/PvpaYyC', 'client', NULL, 'address', 5000, NULL, NULL, '2023-09-26 12:23:21', '2023-09-26 12:23:21', NULL),
(4, 'Danie', 'Daniel@gmail.com', NULL, '$2y$10$QpkA0Ohjb1Uu4OIJonV4V.HCs1om100IN.uN/gq9Cun3ysbP3Nmye', 'client', NULL, 'address', 5000, NULL, NULL, '2023-09-26 14:57:37', '2023-09-26 14:57:37', NULL),
(5, 'Takagi', 'takagi@gmail.com', NULL, '$2y$10$OcJ6fdY5NmC78.BofMZ88.rkCDCsRzFiqrqj88i8UvxS4cTC76K5i', 'client', 1314791837, '123 Main', 50000000, 'avatars/user.png', NULL, '2023-09-27 02:08:50', '2023-09-27 23:37:34', '235225c166c5475d6bce9e0cfbdafb8ea1068dbd');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_product_id_foreign` (`product_id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_product_id_foreign` (`product_id`),
  ADD KEY `comments_user_id_foreign` (`user_id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
