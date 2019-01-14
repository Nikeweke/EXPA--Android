# Room ORM

[[toc]]

---

* [Tutorial](https://startandroid.ru/ru/courses/architecture-components/27-course/architecture-components/529-urok-5-room-osnovy.html)

### Intro 
**Room** - это постоянная библиотека, которая обеспечивает уровень абстракции поверх SQLite, чтобы обеспечить свободный доступ к базе данных, в то же время используя все возможности SQLite. Это ORM для SQLite. 

**Room** - являеться частью [Android Architecture Components](https://github.com/googlesamples/android-architecture-components) - это коллекция библиотек, которая помогает вам разрабатывать надежные, тестируемые и поддерживаемые приложения.

Почему **Room**:
* Предлагает проверку во время компиляции.
* Хорошо сочетается с LiveData, мониторинг в реальном времени с использованием LiveData.
* Тестирование различных компонентов в комнате легко.
* Простота в использовании и реализации.
* Меньше кода по работе с БД

### Dependencies
`app/build.gradle`
```groovy
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
apply plugin: 'kotlin-kapt' // <!-- dont forget this line

android {
  ...
}

dependencies {
     ... 

    // Room ORM
    def room_version = "1.1.1"
    implementation "android.arch.persistence.room:runtime:$room_version"
    kapt "android.arch.persistence.room:compiler:$room_version"
    annotationProcessor "android.arch.persistence.room:compiler:$room_version"
//    implementation "android.arch.persistence.room:rxjava2:$room_version"  // optional - RxJava support for Room
//    implementation "android.arch.persistence.room:guava:$room_version"  // optional - Guava support for Room, including Optional and ListenableFuture
//    testImplementation "android.arch.persistence.room:testing:$room_version"   // Test helpers

}

```

### Basics
Room имеет три основных компонента:
* **Entity** - это как тип данных
* **DAO** - (Data Access Object) - это как модель, содержит методы
* **Database** - класс по работе с БД

### Entity 
Аннотацией **Entity** нам необходимо пометить объект, который мы хотим хранить в базе данных. 
```Kotlin
@Entity (tableName = "employees")
class EmployeeEntity (
    @PrimaryKey(autoGenerate = true) var id: Long? = null,
    @ColumnInfo(name = "name")       var name: String,
    @ColumnInfo(name = "surname")    var surname: String,
    @ColumnInfo(name = "age")        var age: Int
) {

    // это позволяет создать пустой экземпляр
    constructor() : this(null,"","",0)
}
```

:::tip 
* Класс должен быть аннотирован с помощью `@Entity`, именно так Room определяет. Для каждого создаваемого объекта создается таблица с соответствующей базой данных. По умолчанию Room создает столбец для каждого поля, но вы можете избежать этого для нескольких полей с помощью игнорирования аннотации.

* Каждый объект должен определить как минимум 1 первичный ключ. Вам нужно аннотировать поле аннотацией PrimaryKey.

* По умолчанию Room использует имя класса в качестве имени таблицы. Вы можете дать собственное имя, используя свойство `tableName`.
:::
<br>

### DAO
В объекте **DAO** мы будем описывать методы для работы с базой данных. 

```Kotlin
@Dao
interface EmployeeDao {
  @Query("SELECT * FROM employees")
  fun getAll(): List<EmployeeEntity>

  @Query("SELECT * FROM employees WHERE id = :id")
  fun getById(id: Long): EmployeeEntity

  @Insert
  fun insert(employee: EmployeeEntity)

  @Update
  fun update(employee: EmployeeEntity)

  @Delete
  fun delete(employee: EmployeeEntity)
}
```
<br>

### Database 
Аннотацией `@Database` помечаем основной класс по работе с базой данных. Этот класс должен быть абстрактным и наследовать RoomDatabase.
```Kotlin
// Не забывайте добавлять сущности в список entities = arrayOf(...)
@Database(entities = arrayOf(EmployeeEntity::class, CarEntity::class), version = 1)
abstract class AppDatabase : RoomDatabase() {

	// обозначаем все DAO здесь
	abstract fun employeeDao(): EmployeeDao
	abstract fun carDao(): CarDao

	companion object {
		fun getInstance(context: Context): AppDatabase {
			return Room.databaseBuilder(
				context.getApplicationContext(),  
				AppDatabase::class.java, 
				"myapp.db"
			).build()
		}
	}
}
```
<br>

### Using
```Kotlin
class MainActivity : AppCompatActivity() {

	companion object {
		val TAG = "Mainer"
		lateinit var DB: AppDatabase
	}

	override fun onCreate(savedInstanceState: Bundle?) {
		super.onCreate(savedInstanceState)
		setContentView(R.layout.activity_scrolling)

		// Создаем БД
		DB =  AppDatabase.getInstance(this)

		// Работаем в потоке, иначе могут быть тормоза
		thread {
			// создаем DAO  
			val employeeDao = DB.employeeDao()

      // создаем экземпляр и заполняем
			val employee = EmployeeEntity()
			employee.name = "John Smith"
			employee.age  = 10000

      // вставляем запись
			employeeDao.insert(employee)

      // вывод всех записей
			val employees: List<EmployeeEntity> = employeeDao.getAll()
			for (emp in employees) {
				Log.i(TAG, emp.name)
			}

			// вывод одной записи
      val employee = employeeDao.getById(1)
			Log.i(TAG, employee.name)

			// обновление записи, которая была создана
			employee.name = "Silvestr Stalone"
			employee.age  = 23
			employeeDao.update(employee)

			// удаление записи
			employeeDao.delete(employee)
		}
	}

}
```
<br>
