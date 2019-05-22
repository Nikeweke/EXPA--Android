# Intro 

[[toc]]

---

### Что такое Kotlin?
Язык программирование от JetBrains, идущий на смену `Java`. Удобен, компактен и он функциональный, это значит отход от концептов ООП от которых всех тошнит.
                   
Kotlin можно подключить в любой свой проект и также **конвертировать любой файл на Java в Kotlin файл**. Но обратно нельзя. Язык довольно новый, и если нет решения ответа в интернете придеться писать сначала на Java, а потом конвертировать в Kotlin.

Также код Kotlin можно использовать для:
* Javascript
* JVM
* Multiplatform
* Native (executable for Unix, Win or MacOs)


### Подключение в проект
###### build.gradle
```groovy
buildscript {

    ext.kotlinVersion = '1.3.11'  // <!-- this one 

    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion" // <!-- this one 
        ...                
    }
}
...
```

###### app/build.gradle
```groovy
apply plugin: 'com.android.application'

// Kotling plugins
apply plugin: 'kotlin-android'   // <!-- this one
apply plugin: 'kotlin-android-extensions' // <!-- this one - needs for using view.nameTv = ...,  instead of findViewByid(...)

android {
    compileSdkVersion 27
    defaultConfig {
        applicationId "com.app.atletiko"
        minSdkVersion 19
        targetSdkVersion 27
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.slide_in_left.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])

    // Kotlin 
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion" // <!-- this one
}
```

### Сравнение Java и Kotlin

Сеттеры и геттеры
###### Java
```java
class Person {
  public String firstName;
  public Integer age;

  // Setters
  private void setFirstName (String firstName) {
      return this.firstName = firstName;
  }
  private void setAge (int age) {
      return this.age = age;
  }

  // Getters
  private String getFirstName () {
    return this.firstName;
  }
  private Integer getAge () {
    return this.age;
  }

} 

class Index {
    public void main(String[] args) {
       Person person = new Person();
       person.setFirstName("Alex");
       person.setAge(22);

       System.out.println(person.getFirstName() + " - " + person.getAge() )
    }
}
```
###### Kotlin
```Kotlin
// Its means like setters and getters already inside  - EZ PZ right!
class Person(val firstName: String, var age: Int) 

fun main(args: Array<String>) {
    var person       = Person()
    person.firstName = "Alex"
    person.age       = 22

    println("${person.firstName} - ${person.age}")
}
```
<br>


Сбор элементов с разметки (Android)
###### Java
```java 
// in Activity
@Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    TextView headerTv = (TextView) findViewById(R.id.headerTv);
    Button   agreeBtn = (Button) findViewById(R.id.agreeBtn);

    headerTv.setText("Hello there");
    agreeBtn.setOnClickListener(new OnClickListener() {
        public void onClick(View v) {
            // do some actions
        } 
    });
}

// in Fragment 
@Override
public View onCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
   View rootView = inflater.inflate(R.layout.home_fragment, container, false);

   TextView headerTv = (TextView) rootView.findViewById(R.id.headerTv);
   Button   agreeBtn = (Button) rootView.findViewById(R.id.agreeBtn);

   headerTv.setText("Hello there");
   agreeBtn.setOnClickListener(new OnClickListener() {
    public void onClick(View v) {
        // do some actions
    } 
   });
}
```
###### Kotlin
```Kotlin
// in Activity
override fun onCreate(savedInstanceState: Bundle?): View? {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    headerTv.text = "Hello there"
    agreeBtn.setOnClickListener {
      // do some action
    }
}

// in Fragment 
override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
    val rootView = inflater.inflate(R.layout.settings_fragment, container, false)

    rootView.headerTv.text = "Hello there"
    rootView.agreeBtn.setOnClickListener {
      // do some action
    }

    return rootView
}
```
<br>

Перегрузка родительского поля из дочернего класса
###### Java
```Java 
public class Base {
    public String TABLE = "Base";

    public void think () {
      System.out.println(this.TABLE);  
    }
}

// Extending Base 
public class SomeModel extends Base {
  private String TABLE = "Some";

  // Only like this you can override field in Base class and start method like we wanted 
  // it wont work like in Kotlin !!!
  @Override
  public void think () {
    Base base = new Base();
    base.TABLE = this.TABLE;
    base.dropTable();
  }
}

public class Index {
  public static void main(String[] args) {
    SomeModel someModel = new SomeModel();
    someModel.think(); // output: 'Some'
    someModel.think(); // without overriding method will be: 'Base'
  }
}
```
###### Kotlin
```Kotlin
open class Base {
  // open - means that you can override this in childs-class
  open val tableName = "Base"

  open fun think () {
    println(this.tableName)
  }
}

// Extending Base class
class SomeModel: Base() { 
  override val tableName = "Some"
}

fun main(args: Array<String>) {
    var  a = SomeModel()

    // We simply override field in Base class and can use funcitonality of parent class with preferences of child class, 
    // EZ PZ - lemon sqzy!
    a.think()  // output: 'Some'
}
```
<br>