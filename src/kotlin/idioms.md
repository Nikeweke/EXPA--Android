# Идиомы (Особенности) 

[Kotlin idioms](https://kotlinlang.ru/docs/reference/idioms.html)

[[toc]]

--- 

### var OR val ?
* `var` - для изменяемых переменных. 
* `val` - это final переменные, иницилизуруються один раз.

### А где же статика? вместо неё - `companion object {...}`. 
Зачем статика вообще? чтобы не создавая экзмепляра класса вызывать поля(свойства) или методы класса. А также присваивать в поля какие то данные. Допустим подключение к БД и т.д. В Kotlin нет `static`, но есть `companion object` - все работает также.       
```Kotlin
class Main {
 
  // static
  companion object {
    // lateinit - почему через lateinit, описано в другом пункте ниже
    val lateinit DBConn: SQLDatabase
  }

  fun main (args: Array<String>) {
    Main.DBConn = DB.openConnection()     
  }

}

class DB {

  // static 
  companion object {
    fun openConnection (): SQLDatabase {
      // returning some connection
    }
  }
  
}
```

### Параметры функции Any and Unit
```Kotlin
// Any - любой тип
// Unit - это как void, также он необязательный
fun tester (some: Any) : Unit {
  println(some)
}

```

### Null-Safety - операторы `?`,  `!!`,  `?:`, `let`  
```Kotlin
val files = File("Test").listFiles()

// Сокращение для "Если не null"
println(files?.size)

// Сокращение для "Если не null, иначе"
println(files?.size ?: "empty")

// Вызов оператора при равенстве null (оператор elvis - ?:)
val data = ...
val email = data["email"] ?: throw IllegalStateException("Email is missing!")

// Выполнение при неравенстве null (?.let)
val data = ...
data?.let {
    ... // execute this block if not null
}

/*
Третий вариант предназначен для любителей NPE: оператор утверждения not-null (!!) преобразует любое значение в ненулевой тип и выдает исключение, если значение равно null. Мы можем написать b !!, и это вернет ненулевое значение b (например, строку в нашем примере) или бросит NPE, если b равно нулю:
*/
val l = b!!.length
```

### Lateinit
Что бы не париться с Null-Safety операторами когда иницилизируете поля в классе, можно использовать `lateinit`
```Kotlin
class Main {
  // Null-Safety
  private val DBConn: SQLDatabase? = null

  // Lateinit
  private lateinit val DBConn: SQLDatabase
}
```

###  Интервалы
https://kotlinlang.ru/docs/reference/ranges.html


### Однострочные функции
```Kotlin
fun theAnswer() = 42

// Что равносильно этому:
fun theAnswer(): Int {
    return 42
}
```


### Строчные шаблоны
```Kotlin
fun main(args: Array<String>) {
  val name = "Alex"
  val age  = 12
 
  println("$name - $age")
  // with objects ${object.name}
}
```

### Class - init block & primary, secondary constructors
Класс в Kotlin может иметь первичный конструктор `(primary constructor)` и один или более вторичных конструкторов `(secondary constructors)`. Первичный конструктор является частью заголовка класса, его объявление идёт сразу после имени класса (и необязательных параметров). 

Первичный конструктор не может содержать в себе исполняемого кода. Инициализирующий код может быть помещён в соответствующий блок **(initializers blocks)**, который помечается словом init:
```Kotlin
class Customer(name: String) {
    init {
      logger.info("Customer initialized with value ${name}")
    }
}
```
Обратите внимание, что параметры первичного конструктора могут быть использованы в инициализирующем блоке. Они также могут быть использованы при инициализации свойств в теле класса:

В классах также могут быть объявлены дополнительные конструкторы `(secondary constructors)`, перед которыми используется ключевое слово constructor:
```Kotlin
class Person {
    constructor(parent: Person) {
        parent.children.add(this)
    }
}
```

Если у класса есть главный (первичный) конструктор, каждый последующий конструктор должен прямо или косвенно ссылаться (через другой(ие) конструктор(ы)) на первичный:

```Kotlin
class Person(val name: String) {
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}
```


### Функция-расширения 
Прямо как в Javascript - мы пишем для определенных типов функции

```Kotlin
fun String.spaceToCamelCase() { ... }

"Convert this to camelcase".spaceToCamelCase()
```

### Аргументы по умолчанию в функция 
```Kotlin
fun read(b: Array<Byte>, off: Int = 0, len: Int = b.size()) {
...
}
```

### Деструктуризация  
```Kotlin
val (name, age) = person 
```

