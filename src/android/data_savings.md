# Data saving

[[toc]]

--- 

### Intro 
Android предоставляет несколько вариантов для сохранения ваших данных приложения. Решение, которое вы выбираете, зависит от ваших конкретных потребностей, таких как объем ваших данных, какие данные вам нужно хранить, и должны ли данные быть приватными для вашего приложения или доступны другим приложениям и пользователю.

### Места хранения данных
* **Shared preferences** - Храните частные примитивные данные в парах ключ-значение.
* **Databases** - Храните структурированные данные в частной базе данных. Используеться SQLite. Можно использовать чистый SQLite, а можно через обертку, типа ORM, [`Room database`](https://developer.android.com/training/data-storage/room/).
* **Internal file storage** - Храните файлы приложения в частном файле в файловой системе устройства.
* **External file storage** - Храните файлы в общей внешней файловой системе. Обычно это относится к файлам общего доступа, например к фотографиям.


### Shared preferences
https://developer.android.com/training/data-storage/shared-preferences

### SQLite (SQLiteOpenHelper)
* https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper
* https://developer.android.com/training/data-storage/sqlite
* https://github.com/codepath/android_guides/wiki/Local-Databases-with-SQLiteOpenHelper
#### Create db and lifecycle hooks
Когда вызываеться `getWritableDatabase()` или `getReadableDatabase()` затрагиваеться жизненные циклы *SQLiteDatabaseHelper*.
```java
DBHelper db = new DBHelper(getContext());
db = getWritableDatabase();
```
```java
// Class DBHelper
public class DBHelper extends SQLiteOpenHelper {
  
  final public String DB_NAME    = "mydb.db";
  final public String DB_VERSION = "1";

  // __constructor
  public void DBHelper(Context context) {
    super(context, DB_NAME, null, DB_VERSION);
  }

  /*
  *  Вызывается, когда база данных создается в ПЕРВОЕ время.
  *  Если база данных уже существует на диске с тем же
  *  именем DB_NAME, этот метод НЕ будет вызываться.
  */ 
  @Override
  public void onCreated (SQLiteDatabase db) {
  }

  /*
  *  Запускаеться каждый раз при вызове БД
  * (getWritableDatabase OR getReadableDatabase)
  */ 
  @Override
  public void onOpen (SQLiteDatabase db) {
  }

  /*
  *  Вызывается, когда версия базы данных должна быть
  *  повышена.
  */
  @Override
  public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
  }

  /*
  *  Вызывается, когда версия базы данных должна быть
  *  понижена.
  */
  @Override
  public void onDowngrade(SQLiteDatabase db, int oldVersion, int newVersion) {
  }

  /*
  *  Вызывается при настройке соединения с базой данных для
  *  включения таких функций, как write-ahead logging или
  *  foreign key support. 
  */
  @Override
  public void onConfigure(SQLiteDatabase db) {
    super.onConfigure(db);
  }
}
```


:::tip Какая разница между `getWritableDatabase()` и `getReadableDatabase()`

:::

#### Insert 
#### Read
#### Update
#### Delete  

### Room ORM
https://developer.android.com/training/data-storage/room/

#### Create db and lifecycle hooks
#### Insert 
#### Read
#### Update
#### Delete
