-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 26, 2023 lúc 09:25 PM
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
-- Cơ sở dữ liệu: `laptop`
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `quantityPro`, `price`, `name`, `file_path`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 1, 18000000, 'AORUS 7', 'products/KG7frYoqLeVh4Ogd1J0hOD4BVp7BOndDbEu18dRO.webp', 4, '2023-09-26 11:43:37', '2023-09-26 11:43:37');

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
(3, '2023_09_26_181138_taobang', 3);

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
(1, 'G7 (Intel 12th Gen)', 'Windows 11 Home\r\nNVIDIA® GeForce RTX™ 30 Series Laptop GPUs\r\n12th Gen Intel® Core™ i5 H-Series Processor\r\nWINDFORCE Cooling System\r\n17.3” FHD 144Hz Display', 'products/BOcAxvmAJBoioS1QobE6ecAk8y4NR9WLb5v2KcxI.webp', 30000001, 148, 'NVIDIA® GeForce RTX™ 30 Series Laptop GPUs', 'GIGABYTE', 'Đen', '17.3” FHD 144Hz Display', '2023-09-26 11:14:01', '2023-09-26 11:14:22'),
(2, 'A7 (AMD Ryzen 5000 Series)', 'Windows 11 Home\r\nWindows 11 Pro\r\nNVIDIA® GeForce RTX™ 30 Series Laptop GPUs\r\nAMD Ryzen™ 9 5000 HX-Series Mobile Processors\r\n17.3\" Thin Bezel FHD IPS-Level 144Hz display\r\n1+3 Multi Display for Multi-Tasking', 'products/AfOY30Lsh05akb80GEimZEPo4JW3UxzvK0zYZUJX.webp', 27999988, 14, 'NVIDIA® GeForce RTX™ 30 Series Laptop GPUs', 'GIGABYTE', 'Đen', '17.3\" Thin Bezel FHD IPS-Level 144Hz display', '2023-09-26 11:19:44', '2023-09-26 11:19:44'),
(3, 'AORUS 17X', 'Windows 11 Home / Pro\r\nNVIDIA® GeForce RTX™ 40 Series Laptop GPUs\r\n13th Gen Intel® Core™ i9 / i7 Processor HX-Series\r\nUp to 17.3\" 16:9 QHD(2560 x 1440) 240Hz Panel\r\nWINDFORCE Infinity Cooling System', 'products/sDsjsfsPV6M5BDnmR4jPHzfSfY1Jj3JNwFWMeNzR.webp', 31500000, 45, 'NVIDIA® GeForce RTX™ 40 Series Laptop GPUs', 'AORUS', 'Bạc', '17.3”', '2023-09-26 11:22:24', '2023-09-26 11:22:24'),
(4, 'AORUS 7', 'Windows 11 Home / Pro\r\nNVIDIA® GeForce RTX™ 40 Series Laptop GPUs, powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.\r\n12th Gen Intel® Core™ i5 H-Series Processor\r\nUp to 17.3\" 16:9 FHD(1920 x 1080) 360Hz Panel\r\nWINDFORCE Infinity Cooling System', 'products/KG7frYoqLeVh4Ogd1J0hOD4BVp7BOndDbEu18dRO.webp', 18000000, 72, 'NVIDIA® GeForce RTX™ 40 Series Laptop', 'AORUS', 'Đen', '17.3”', '2023-09-26 11:24:24', '2023-09-26 11:24:24'),
(5, 'Z790 AORUS PRO X', 'Supports Intel® Core™ 13th and next-gen processors\r\nDigital twin 18+1+2 phases VRM solution\r\nDual Channel DDR5：4*DIMMs with XMP 3.0 memory module support\r\nPCIe UD Slot X： PCIe 5.0 x16 slot with 10X strength for graphics card\r\nEZ-Latch Click：M.2 heatsinks with screwless design\r\nEZ-Latch Plus：M.2 slots with quick release design\r\nSensor Panel Link：Onboard video port for hassle-free in-chassis panel setup\r\nUC BIOS：User-Centred intuitive UX with Quick Access function\r\nUltra-Fast Storage：5*M.2 slots, including 1* PCIe 5.0 x4', 'products/B2BiHXWgt7kzIE7JC36SuKWTguplCBv67e0A9UkD.png', 2304000, 270, 'Key Features', 'AORUS', 'Bạc', '2\"', '2023-09-26 11:30:25', '2023-09-26 11:30:25'),
(6, 'AORUS GeForce RTX™ 4080 16GB XTREME WATERFORCE', 'NVIDIA Ada Lovelace Streaming Multiprocessors:\r\nUp to 2x performance and power efficiency\r\n4th Generation Tensor Cores: Up to 4x performance with DLSS 3 vs. brute-force rendering\r\n3rd Generation RT Cores: Up to 2X ray tracing performance\r\nPowered by GeForce RTX™ 4080 16GB\r\nIntegrated with 16GB GDDR6X 256-bit memory interface\r\nWATERFORCE all-in-one cooling system\r\n360mm radiator with 3x 120mm ARGB fans\r\nProtection metal back plate\r\n4 Years Warranty (Online registration required)', 'products/PgbNU4UxGH6OUDVmDf6zWJYB7Ye01ZS3F0aQKeA6.webp', 3000000, 200, 'Key Features', 'NVIDIA', 'Đen', 'none', '2023-09-26 11:35:41', '2023-09-26 11:35:41'),
(7, 'GeForce RTX™ 4060 Ti AERO OC 16G', 'Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and full ray tracing\r\n4th Generation Tensor Cores: Up to 4x performance with DLSS 3 vs. brute-force rendering\r\n3rd Generation RT Cores: Up to 2X ray tracing performance\r\nPowered by GeForce RTX™ 4060 Ti (16GB)\r\nIntegrated with 16GB GDDR6 128bit memory interface\r\nWINDFORCE cooling system\r\nRGB Fusion\r\nDual BIOS\r\nProtection metal back plate', 'products/cpqzqbrzhloapKoK71l2uYc9L5EO1f2uvmezhl4T.webp', 2300000, 2000, 'Key Features', 'NVIDIA', 'Trắng', 'none', '2023-09-26 11:37:22', '2023-09-26 11:37:22'),
(8, 'B650M AORUS PRO AX (rev. 1.2)', '70A Smart Power Stage*\r\n8-Layer 2X Copper PCB\r\nPCIe 5.0 Ready Low Loss PCB\r\nFully Covered MOSFET Heatsinks\r\n6mm Heatpipe\r\n7 W/mk Thermal Conductivity Pad\r\nIntegrated I/O Shield', 'products/mXxXOOYA9395LpvDSWQ8jLzCdOMqLannUDj4S5iz.webp', 1450000, 3000, 'Motherboard', 'AORUS', 'Đen', 'none', '2023-09-26 11:40:42', '2023-09-26 11:40:42');

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
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `phone`, `address`, `balance`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Admin@gmail.com', NULL, '12345678', 'admin', 935688218, 'abc', 5000000, 'avatars/S2qvhgXVolOIBzQTJxwD6OIlOETxUTMOmCPjccIU.png', NULL, '2023-09-26 08:44:26', '2023-09-26 11:43:00'),
(2, 'john', 'john@gmail.com', NULL, '$2y$10$oKjnHclLMKNlYesbZGc41uAhJvJkqCszaVGNTdHNXUowJYU.31FQO', 'admin', NULL, 'address', 5000, NULL, NULL, '2023-09-26 12:21:50', '2023-09-26 12:21:50'),
(3, 'john', 'kkk@gmail.com', NULL, '$2y$10$.MtlqiEzlA/8WkvLdU1Ee.gGIDXl16fACChYj6N1T2VtK/PvpaYyC', 'client', NULL, 'address', 5000, NULL, NULL, '2023-09-26 12:23:21', '2023-09-26 12:23:21');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_product_id_foreign` (`product_id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
