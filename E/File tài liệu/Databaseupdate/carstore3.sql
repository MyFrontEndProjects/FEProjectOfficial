-- phpMyAdmin SQL Dump

-- version 5.2.1

-- https://www.phpmyadmin.net/

--

-- Máy chủ: 127.0.0.1

-- Thời gian đã tạo: Th9 25, 2023 lúc 03:47 PM

-- Phiên bản máy phục vụ: 10.4.28-MariaDB

-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8mb4 */

;

--

-- Cơ sở dữ liệu: `carstore3`

--

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `carts`

--

CREATE TABLE
    `carts` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `quantityPro` int(11) NOT NULL,
        `price` bigint(20) NOT NULL,
        `product_id` bigint(20) UNSIGNED NOT NULL,
        `name` varchar(255) NOT NULL,
        `file_path` varchar(255) NOT NULL,
        `created_at` timestamp NULL DEFAULT NULL,
        `updated_at` timestamp NULL DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `carts`

--

INSERT INTO
    `carts` (
        `id`,
        `quantityPro`,
        `price`,
        `product_id`,
        `name`,
        `file_path`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        11,
        16598000,
        1,
        'Tablet Sony Xperia',
        'products/iA23YU2ekXSpwSlekkQIAv3RVx7jpKspkzXnFzkT.png',
        '2023-09-25 05:17:51',
        '2023-09-25 06:37:28'
    ), (
        5,
        5,
        213000,
        4,
        '',
        '',
        '2023-09-25 05:00:59',
        '2023-09-25 05:00:59'
    ), (
        6,
        5,
        213000,
        4,
        '',
        '',
        '2023-09-25 05:01:02',
        '2023-09-25 05:01:02'
    ), (
        7,
        3,
        16598000,
        1,
        '',
        '',
        '2023-09-25 05:08:27',
        '2023-09-25 05:08:27'
    ), (
        9,
        1,
        105000,
        2,
        'Mercedes AMG GT Black Series',
        'products/VXolSuSRY8b5oPMTsuAlbwynwqHUVfMcH9XmKfZR.png',
        '2023-09-25 05:34:05',
        '2023-09-25 05:34:05'
    ), (
        10,
        1,
        105000,
        2,
        'Mercedes AMG GT Black Series',
        'products/VXolSuSRY8b5oPMTsuAlbwynwqHUVfMcH9XmKfZR.png',
        '2023-09-25 05:46:57',
        '2023-09-25 05:46:57'
    ), (
        11,
        1,
        105000,
        2,
        'Mercedes AMG GT Black Series',
        'products/VXolSuSRY8b5oPMTsuAlbwynwqHUVfMcH9XmKfZR.png',
        '2023-09-25 05:47:46',
        '2023-09-25 05:47:46'
    );

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `failed_jobs`

--

CREATE TABLE
    `failed_jobs` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `uuid` varchar(255) NOT NULL,
        `connection` text NOT NULL,
        `queue` text NOT NULL,
        `payload` longtext NOT NULL,
        `exception` longtext NOT NULL,
        `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `items`

--

CREATE TABLE
    `items` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `quantity` int(11) NOT NULL,
        `price` bigint(20) NOT NULL,
        `order_id` bigint(20) UNSIGNED NOT NULL,
        `product_id` bigint(20) UNSIGNED NOT NULL,
        `created_at` timestamp NULL DEFAULT NULL,
        `updated_at` timestamp NULL DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `migrations`

--

CREATE TABLE
    `migrations` (
        `id` int(10) UNSIGNED NOT NULL,
        `migration` varchar(255) NOT NULL,
        `batch` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `migrations`

--

INSERT INTO
    `migrations` (`id`, `migration`, `batch`)
VALUES (
        1,
        '2014_10_12_000000_create_users_table',
        1
    ), (
        2,
        '2014_10_12_100000_create_password_resets_table',
        1
    ), (
        3,
        '2019_08_19_000000_create_failed_jobs_table',
        1
    ), (
        4,
        '2019_12_14_000001_create_personal_access_tokens_table',
        1
    ), (
        5,
        '2023_08_26_080516_create_stores_table',
        1
    ), (
        6,
        '2023_09_02_133544_create_sanpham_table',
        2
    ), (
        7,
        '2023_09_03_065249_alter_users_table',
        3
    ), (
        8,
        '2023_09_04_182555_alter_store',
        4
    ), (
        9,
        '2023_09_05_005843_create_orders_table',
        5
    ), (
        10,
        '2023_09_05_013336_create_orders_table',
        6
    ), (
        11,
        '2023_09_05_013547_create_items_table',
        7
    ), (
        12,
        '2023_09_05_021817_alter_users_table',
        8
    ), (
        13,
        '2023_09_06_121936_alter_stores_quantity',
        9
    ), (
        14,
        '2023_09_06_163335_add_avatar_column_to_users',
        10
    ), (
        15,
        '2023_09_08_040232_sua_bang_sp',
        11
    ), (
        16,
        '2023_09_08_041528_suatencottronsp',
        12
    ), (
        17,
        '2023_09_11_011812_themloaisp',
        13
    ), (
        18,
        '2023_09_20_045635_tai_cau_truc_d_a_t_a_b_a_s_e',
        14
    ), (
        19,
        '2023_09_24_210308_carts_table',
        15
    ),

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `orders`

--

CREATE TABLE
    `orders` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `total` bigint(20) NOT NULL,
        `user_id` bigint(20) UNSIGNED NOT NULL,
        `created_at` timestamp NULL DEFAULT NULL,
        `updated_at` timestamp NULL DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `password_resets`

--

CREATE TABLE
    `password_resets` (
        `email` varchar(255) NOT NULL,
        `token` varchar(255) NOT NULL,
        `created_at` timestamp NULL DEFAULT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `password_resets`

--

INSERT INTO
    `password_resets` (`email`, `token`, `created_at`)
VALUES (
        'napt@h.com',
        '$2y$10$Z.EyljarC.lroWl8vmneYOBD0LhVLKVAIufRF2tq4jFaLnPnI4loy',
        '2023-09-19 22:53:56'
    ), (
        'thinhnguyenphuc51@gmail.com',
        '$2y$10$OlpkZpkwI3ujZg.XmaU7dOVupBOiTo/b7hyrrkF09gvoKHaxJ2CP2',
        '2023-09-19 22:49:40'
    );

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `personal_access_tokens`

--

CREATE TABLE
    `personal_access_tokens` (
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
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `personal_access_tokens`

--

INSERT INTO
    `personal_access_tokens` (
        `id`,
        `tokenable_type`,
        `tokenable_id`,
        `name`,
        `token`,
        `abilities`,
        `last_used_at`,
        `expires_at`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'App\\Models\\User',
        19,
        'Johnmirt@gmail.com_Token',
        'abb096ea4e6c0f555633676919d59195eb745af0ed9323ca45f7712393e8b5d1',
        '[\"*\"]',
        NULL,
        NULL,
        '2023-09-24 22:00:07',
        '2023-09-24 22:00:07'
    );

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `products`

--

CREATE TABLE
    `products` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `name` varchar(255) NOT NULL,
        `description` text NOT NULL,
        `file_path` varchar(255) NOT NULL,
        `price` bigint(20) NOT NULL,
        `quantity` int(11) NOT NULL DEFAULT 0,
        `category` varchar(255) NOT NULL DEFAULT 'car',
        `brand` varchar(255) NOT NULL DEFAULT 'Hot',
        `created_at` timestamp NULL DEFAULT NULL,
        `updated_at` timestamp NULL DEFAULT NULL,
        `size` varchar(100) DEFAULT NULL,
        `color` varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `products`

--

INSERT INTO
    `products` (
        `id`,
        `name`,
        `description`,
        `file_path`,
        `price`,
        `quantity`,
        `category`,
        `brand`,
        `created_at`,
        `updated_at`,
        `size`,
        `color`
    )
VALUES (
        1,
        'Tablet Sony Xperia',
        'Xperia được thiết kế mới dành cho bạn\r\nĐược thiết kế phù hợp với phong cách sống của bạn, Xperia 5 V có hình dáng phẳng và đơn giản, cùng bộ camera khớp với màu thân máy để tạo ra một diện mạo đậm dấu ấn.',
        'products/iA23YU2ekXSpwSlekkQIAv3RVx7jpKspkzXnFzkT.png',
        16598000,
        60,
        'Tablet',
        'Sony',
        '2023-09-19 22:40:50',
        '2023-09-24 05:56:48',
        '14',
        'Xám'
    ), (
        2,
        'Mercedes AMG GT Black Series',
        'ggg',
        'products/VXolSuSRY8b5oPMTsuAlbwynwqHUVfMcH9XmKfZR.png',
        105000,
        10,
        'Mercedes',
        'HOT',
        '2023-09-19 23:21:47',
        '2023-09-25 00:03:18',
        '125000.00',
        'Đen'
    ), (
        3,
        'Aston Martin V12',
        'bkkhbklm',
        'products/ZLfSuuoiy91iwcASVhzYpZxcJWuKxdMyxlE1t9MV.png',
        144000,
        1456,
        'Aston Martin',
        'NEW 2023',
        '2023-09-19 23:26:24',
        '2023-09-25 00:03:33',
        '164000.00',
        'Đen'
    ), (
        4,
        'Aston Martin Superleggera',
        'xcvb',
        'products/Ajp9ZAZAcknNg8mggxcngVqECh4kZ4sk5UiElJZf.png',
        213000,
        15,
        'Aston Martin',
        'LIÊN HỆ',
        '2023-09-19 23:24:47',
        '2023-09-25 00:03:59',
        '255000.00',
        'Xám'
    ), (
        5,
        'Ferrari 430 Scuderia',
        'fchgvjbjlkm',
        'products/omROPkc7eg1ZLUmHS6jQjXcQOkgvyfwCdGqaobTt.png',
        226000,
        14,
        'Ferrari',
        'LIÊN HỆ',
        '2023-09-19 23:46:14',
        '2023-09-25 00:04:24',
        '240000.00',
        'Xám'
    ), (
        9,
        'Lt',
        'sav',
        'products/gq9vaRTEC99beeGVlVmj0mfno2o7Du50hdNwtFrk.png',
        14526,
        14,
        'lt',
        'gigabyte',
        '2023-09-24 02:38:07',
        '2023-09-25 00:04:42',
        '14',
        'Đen'
    ), (
        10,
        'Dell',
        'dell',
        'products/Y3LkwPo3YCI7GmVN2c484e85JDdSGbRk8BCNXZTO.png',
        20000000,
        1456,
        'gaming',
        'Dell',
        '2023-09-24 02:40:59',
        '2023-09-25 00:05:50',
        '17.3',
        'xám'
    ), (
        11,
        'rain',
        '13fa',
        'products/uNKkm5Rhw8uaCoJ1WxONC7m5jPXpWAcmxMpJmRQz.png',
        1526,
        1,
        'linhkien',
        'gigabyte',
        '2023-09-24 02:50:11',
        '2023-09-25 00:06:02',
        '17.3',
        'Đen'
    ), (
        13,
        'msi',
        'mmmmm',
        'products/Oa7lf7RDHe16vzsuyRHqwjcBJAJgWIvYgzosU241.png',
        15798000,
        14,
        'gaming',
        'msi',
        '2023-09-24 04:06:23',
        '2023-09-24 04:06:23',
        '14',
        'Đen'
    );

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `sanphams`

--

CREATE TABLE
    `sanphams` (
        `id` int(11) NOT NULL,
        `name` varchar(255) NOT NULL,
        `image` varchar(255) NOT NULL,
        `price` decimal(10, 2) NOT NULL,
        `description` varchar(20) NOT NULL,
        `quantity` int(11) DEFAULT NULL,
        `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
        `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
    ) ENGINE = InnoDB DEFAULT CHARSET = utf16 COLLATE = utf16_bin;

--

-- Đang đổ dữ liệu cho bảng `sanphams`

--

INSERT INTO
    `sanphams` (
        `id`,
        `name`,
        `image`,
        `price`,
        `description`,
        `quantity`,
        `created_at`,
        `updated_at`
    )
VALUES (
        1,
        'Bánh Xe',
        '1.jpg',
        500.00,
        'Linh kiện',
        0,
        '2023-09-02 13:49:22',
        '2023-09-02 16:47:32'
    ), (
        2,
        'Dầu Nhớt 1',
        '2.jpg',
        20.00,
        'Dầu Nhớt',
        0,
        '2023-09-02 13:49:22',
        '2023-09-02 16:45:30'
    ), (
        3,
        'Dầu Nhớt 2',
        '3.jpg',
        22.00,
        'Dầu Nhớt',
        0,
        '2023-09-02 13:49:22',
        '2023-09-02 16:47:55'
    ), (
        4,
        'Linh kiện 1',
        '4.jpg',
        15.00,
        'Linh kiện',
        0,
        '2023-09-02 13:49:22',
        '2023-09-02 16:48:09'
    ), (
        5,
        'Linh kiện 2',
        '5.jpg',
        18.00,
        'Linh kiện',
        0,
        '2023-09-02 13:49:22',
        '2023-09-02 16:45:53'
    );

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `users`

--

CREATE TABLE
    `users` (
        `id` bigint(20) UNSIGNED NOT NULL,
        `name` varchar(255) NOT NULL,
        `email` varchar(255) NOT NULL,
        `email_verified_at` timestamp NULL DEFAULT NULL,
        `password` varchar(255) NOT NULL,
        `remember_token` varchar(100) DEFAULT NULL,
        `created_at` timestamp NULL DEFAULT NULL,
        `updated_at` timestamp NULL DEFAULT NULL,
        `role` varchar(255) DEFAULT 'client',
        `balance` bigint(20) NOT NULL,
        `avatar` varchar(255) NOT NULL DEFAULT 'avatars/user.png',
        `phone` bigint(20) NOT NULL DEFAULT 3921432924,
        `address` varchar(255) NOT NULL DEFAULT 'address'
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Đang đổ dữ liệu cho bảng `users`

--

INSERT INTO
    `users` (
        `id`,
        `name`,
        `email`,
        `email_verified_at`,
        `password`,
        `remember_token`,
        `created_at`,
        `updated_at`,
        `role`,
        `balance`,
        `avatar`,
        `phone`,
        `address`
    )
VALUES (
        1,
        'thinh',
        'admin@demo.com',
        NULL,
        '$2y$10$C/wReFypegkHDIBM3GeJO.6a8Y97WhqG1JH4NWzl/wsHUf/jld9xG',
        NULL,
        '2023-09-02 11:25:55',
        '2023-09-02 11:25:55',
        '0',
        10000,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        2,
        'thinh',
        'thinhnguyenphuc51@gmail.com',
        NULL,
        '$2y$10$dntXylK0MyE4bqof3bMPduwLqm/95OAz8q/BVAzWMmDeKbS3.gX2e',
        NULL,
        '2023-09-02 12:09:33',
        '2023-09-02 12:09:33',
        '0',
        0,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        3,
        'thinh',
        'beta@beta.com',
        NULL,
        '$2y$10$5Ufdao65J20VJozYsClKkeT43QNNeO5XeOCv0vcC0LyocUKEcmM8e',
        NULL,
        '2023-09-02 12:20:33',
        '2023-09-02 12:20:33',
        '0',
        0,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        4,
        'Oranty',
        'abc@beta.com',
        NULL,
        '$2y$10$9dfZE9cpipktV6K296.wFuVM5u41tLNlp4XmAPLYySGCDascwsDFq',
        NULL,
        '2023-09-03 00:05:25',
        '2023-09-06 09:25:35',
        '0',
        -60537471274298,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        5,
        'Oranty',
        'qw@hfsmlk.cpm',
        NULL,
        '$2y$10$YOos6bwX8TvPVcQkB/QdS.CyjweAgXKLc8i2e1yRTExicHliPtJMG',
        NULL,
        '2023-09-10 21:17:01',
        '2023-09-10 21:17:01',
        '0',
        5000,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        6,
        'beslinh',
        'asbc@thas.asc',
        NULL,
        '$2y$10$Hdcynrc8NK0Zm66SqMO3PeE5/Vc9mxSVH51zFosbKpzpgY1qaZawO',
        NULL,
        '2023-09-11 00:54:09',
        '2023-09-11 00:54:09',
        '0',
        5000,
        'avatars/asbc@thas.asc.jpg',
        3921432924,
        'address'
    ), (
        7,
        'hao',
        'hao@ha.m',
        NULL,
        '$2y$10$BXXJdihSO7sfA370pmaYcOE9orIopshYp53cjsHAKP1JNC2rZ0l2S',
        NULL,
        '2023-09-11 01:17:08',
        '2023-09-19 11:41:55',
        '0',
        -144826,
        'avatars/hao.jpg',
        3921432924,
        'address'
    ), (
        10,
        'napt',
        'napt@h.com',
        NULL,
        '$2y$10$6AV4StguCvnLDX1/dzgoXe/3MhCXCfRvCjiHgGiE2ewGsB4fwJyR.',
        NULL,
        '2023-09-11 17:15:51',
        '2023-09-11 17:15:51',
        'admin',
        5000,
        'avatars/napt@h.com.jpg',
        3921432924,
        'address'
    ), (
        17,
        'John',
        'Anna@gmail.com',
        NULL,
        '$2y$10$V1G9xlPCFez7ZJ0dkmBV8ebzm9UU1lCKoK5Rbj5Iw9HUYkYpstDwW',
        NULL,
        '2023-09-24 12:44:53',
        '2023-09-24 12:44:53',
        'client',
        500000000,
        'avatars/mwhLqyQKibVIQm4MnbtImuyDXocP09BUZzUbfrLP.png',
        3921432924,
        'address'
    ), (
        18,
        'Johnny',
        'Annak@gmail.com',
        NULL,
        '$2y$10$63VuDYakHQ7VoLNL9AgesOmpO0hLRfr.ogz3Qj8qrBZi3yo3Cqf0K',
        NULL,
        '2023-09-24 13:26:36',
        '2023-09-24 13:26:36',
        'client',
        500000000,
        'avatars/q5JO7fnOiPyFtkTa9qKwnvbd1otdeVfhPMXoRiD4.png',
        3921432924,
        'address'
    ), (
        20,
        'new',
        'Johnbd@gmail.com',
        NULL,
        '$2y$10$ZX83m099fhhUIgR5gpodl.Sfbm0s5pbryWFcuXwbCgcw0OlfyWx2q',
        NULL,
        '2023-09-24 23:28:08',
        '2023-09-24 23:28:08',
        'client',
        50000000000,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        21,
        'Oranty',
        'ansnas@gmail.cmd',
        NULL,
        '$2y$10$vueQU.KgwCY4U6ZMaMT2tuZlBHvjySUTLSdrY2/xlrlOomUzSMITy',
        NULL,
        '2023-09-24 23:28:40',
        '2023-09-24 23:28:40',
        'client',
        50000000000,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        22,
        'Oranty',
        'ass@gmail.cmd',
        NULL,
        '$2y$10$P1U5ctOZ8bIvOW34RRBeLeeUy67Vkz8CG8rFt1phW1uxvQKyz5JLG',
        NULL,
        '2023-09-24 23:45:30',
        '2023-09-24 23:45:30',
        'client',
        50000000000,
        'avatars/user.png',
        3921432924,
        'address'
    ), (
        24,
        'Truong Thuy Linh',
        'cdss@gmail.cmd',
        NULL,
        '$2y$10$S/RroGd2pmLPX4vZzNf49.mSMlP2yzgEm97lQQ9qxA/Zpnh2H0FJ2',
        NULL,
        '2023-09-24 23:57:10',
        '2023-09-24 23:57:10',
        'client',
        50000000000,
        'avatars/user.png',
        3921432924,
        'address'
    );

--

-- Chỉ mục cho các bảng đã đổ

--

--

-- Chỉ mục cho bảng `carts`

--

ALTER TABLE `carts`
ADD PRIMARY KEY (`id`),
ADD
    KEY `carts_product_id_foreign` (`product_id`);

--

-- Chỉ mục cho bảng `failed_jobs`

--

ALTER TABLE `failed_jobs`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--

-- Chỉ mục cho bảng `items`

--

ALTER TABLE `items`
ADD PRIMARY KEY (`id`),
ADD
    KEY `items_order_id_foreign` (`order_id`),
ADD
    KEY `items_product_id_foreign` (`product_id`);

--

-- Chỉ mục cho bảng `migrations`

--

ALTER TABLE `migrations` ADD PRIMARY KEY (`id`);

--

-- Chỉ mục cho bảng `orders`

--

ALTER TABLE `orders`
ADD PRIMARY KEY (`id`),
ADD
    KEY `orders_user_id_foreign` (`user_id`);

--

-- Chỉ mục cho bảng `password_resets`

--

ALTER TABLE `password_resets` ADD PRIMARY KEY (`email`);

--

-- Chỉ mục cho bảng `personal_access_tokens`

--

ALTER TABLE
    `personal_access_tokens`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
ADD
    KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (
        `tokenable_type`,
        `tokenable_id`
    );

--

-- Chỉ mục cho bảng `products`

--

ALTER TABLE `products` ADD PRIMARY KEY (`id`);

--

-- Chỉ mục cho bảng `sanphams`

--

ALTER TABLE `sanphams` ADD PRIMARY KEY (`id`);

--

-- Chỉ mục cho bảng `users`

--

ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `users_email_unique` (`email`);

--

-- AUTO_INCREMENT cho các bảng đã đổ

--

--

-- AUTO_INCREMENT cho bảng `carts`

--

ALTER TABLE
    `carts` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 12;

--

-- AUTO_INCREMENT cho bảng `failed_jobs`

--

ALTER TABLE
    `failed_jobs` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT cho bảng `items`

--

ALTER TABLE
    `items` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 8;

--

-- AUTO_INCREMENT cho bảng `migrations`

--

ALTER TABLE
    `migrations` MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 22;

--

-- AUTO_INCREMENT cho bảng `orders`

--

ALTER TABLE
    `orders` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT cho bảng `personal_access_tokens`

--

ALTER TABLE
    `personal_access_tokens` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 2;

--

-- AUTO_INCREMENT cho bảng `products`

--

ALTER TABLE
    `products` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 14;

--

-- AUTO_INCREMENT cho bảng `sanphams`

--

ALTER TABLE
    `sanphams` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 6;

--

-- AUTO_INCREMENT cho bảng `users`

--

ALTER TABLE
    `users` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 25;

--

-- Các ràng buộc cho các bảng đã đổ

--

--

-- Các ràng buộc cho bảng `carts`

--

ALTER TABLE `carts`
ADD
    CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--

-- Các ràng buộc cho bảng `items`

--

ALTER TABLE `items`
ADD
    CONSTRAINT `items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
ADD
    CONSTRAINT `items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--

-- Các ràng buộc cho bảng `orders`

--

ALTER TABLE `orders`
ADD
    CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;