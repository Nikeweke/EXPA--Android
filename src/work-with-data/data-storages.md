# Хранение данных
[[toc]]

--- 

### Intro 
Android предоставляет несколько вариантов для сохранения ваших данных приложения. Решение, которое вы выбираете, зависит от ваших конкретных потребностей, таких как объем ваших данных, какие данные вам нужно хранить, и должны ли данные быть приватными для вашего приложения или доступны другим приложениям и пользователю.

### Места хранения данных
* **Shared preferences** - Храните частные примитивные данные в парах ключ-значение.
* **SQLite** - Храните структурированные данные в частной базе данных. Используеться SQLite. Можно использовать чистый SQLite, а можно через обертку, типа ORM, [`Room database`](https://developer.android.com/training/data-storage/room/).
* **Internal file storage** - Храните файлы приложения в частном файле в файловой системе устройства.
* **External file storage** - Храните файлы в общей внешней файловой системе. Обычно это относится к файлам общего доступа, например к фотографиям.


### Shared preferences
* [android](https://developer.android.com/training/data-storage/shared-preferences)
* [startandroid](http://developer.alexanderklimov.ru/android/theory/sharedpreferences.php)

Чтобы получить экземпляр класса SharedPreferences для получения доступа к настройкам в коде приложения используются три метода:
* `getPreferences()` — внутри активности, чтобы обратиться к определенному для активности предпочтению;
* `getSharedPreferences()` — внутри активности, чтобы обратиться к предпочтению на уровне приложения;
* `getDefaultSharedPreferences()` — из объекта PreferencesManager, чтобы получить общедоступную настройку, предоставляемую Android.

##### Insert
```java
public static SharedPreferences sPref;

@OnClick(R.id.abonsBtn)
public void saveIt () {

    // MODE_PRIVATE - указывает на то что сохранненые данные
    // будут доступны только этому приложению
  sPref = this.getActivity().getPreferences(MODE_PRIVATE); // in fragment
  // sPref = this.getPreferences(MODE_PRIVATE);             // in activity

  // чтобы редактировать данные, необходим объект Editor
  SharedPreferences.Editor ed = sPref.edit();

  // Вставляем значение - "пара - ключ"
  ed.putString("Greeting", "Hello there i am info");
  ed.putString("Name", "Alex");
  ed.putString("Surname", "Kraken");

  // вставить можно такие типы
  /*
    .putString()
    .putFloat()
    .putBoolean()
    .putLong()
    .putInt
    .putStringSet()
  */

  // чтобы сохранить данные надо выполнить эту комманду
  ed.commit();
  /*
    Метод apply() появился в API 9 и работает в асинхронном режиме, 
    что является более предпочтительным вариантом.
    Метод commit() приходится использовать для старых версий и кроме того,
    он возвращает значение true в успешном случае и false в случае ошибки.
    Если вам надо отслеживать ошибки, то используйте его.
  */

  Toast.makeText(this.getContext(), "Text saved", Toast.LENGTH_SHORT).show();
}
```


##### Select
```java
public static SharedPreferences sPref;

@OnClick(R.id.settingsBtn)
public void loadIt () {
  // получаем экзмемпляр предочтений
  sPref = this.getActivity().getPreferences(MODE_PRIVATE);

  String greeting = sPref.getString("Greeting", "");
  String name     = sPref.getString("Name", "");
  String surname  = sPref.getString("Surname", "");

  Toast.makeText(this.getContext(), "Text loaded = " + greeting + " " + name + " " + surname, Toast.LENGTH_SHORT).show();
}
```


##### Update 
```java
public static SharedPreferences sPref;

@OnClick(R.id.servicesBtn)
public void updateIt () {
  SharedPreferences.Editor editor = this.getActivity()
                                        .getPreferences(MODE_PRIVATE)
                                        .edit();
  editor.putString("Name", "Vasya");
  editor.apply();
}
```

##### Delete
```java
public static SharedPreferences sPref;

@OnClick(R.id.delBtn)
public void deleteIt ()  {
  SharedPreferences.Editor editor = this.getActivity()
                                        .getPreferences(MODE_PRIVATE)
                                        .edit();

  // editor.clear();         // удаляет все значения
  editor.remove("Name");  // удалит по ключу 

  editor.apply();
}
```    


##### Удалить файл с настройками (preferences)
```java
File file= new File("/data/data/.../shared_prefs/вашфайл.xml")
file.delete();
```


### SQLite (SQLiteOpenHelper)
* [android - SqliteOpenHelper](https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper)
* [android - sqlite](https://developer.android.com/training/data-storage/sqlite)
* [github wiki](https://github.com/codepath/android_guides/wiki/Local-Databases-with-SQLiteOpenHelper)
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
При вызове `getWritableDatabase` может вернуться *writable database* если нет прав на чтение или диск уже полон. 
При вызове `getReadableDatabase` возвращает базу для чтения , а если для записи база есть, то и её возвращает.
:::


