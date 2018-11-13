# Data saving

[[toc]]

--- 

### Intro 
Android предоставляет несколько вариантов для сохранения ваших данных приложения. Решение, которое вы выбираете, зависит от ваших конкретных потребностей, таких как объем ваших данных, какие данные вам нужно хранить, и должны ли данные быть приватными для вашего приложения или доступны другим приложениям и пользователю.

### Места хранения данных
* **Internal file storage** - Храните файлы приложения в частном файле в файловой системе устройства.
* **External file storage** - Храните файлы в общей внешней файловой системе. Обычно это относится к файлам общего доступа, например к фотографиям.
* **Shared preferences** - Храните частные примитивные данные в парах ключ-значение.
* **Databases** - Храните структурированные данные в частной базе данных. Используеться SQLite. Можно использовать чистый SQLite, а можно через обертку, типа ORM, [`Room database`](https://developer.android.com/training/data-storage/room/).

### Shared preferences
https://developer.android.com/training/data-storage/shared-preferences

### Databases (SQLite)
https://developer.android.com/training/data-storage/sqlite

### Databases (Room database)
https://developer.android.com/training/data-storage/room/
