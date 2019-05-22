# Android NDK (C/C++)

[[toc]]

---

### Intro
**Android NDK** - это `native dev kit` с помощью которого можно писать код на C/C++ который будет потом использоваться в приложении, можно вызывать код из Kotlin в C++, и наоборот.

### Зачем писать на C++, если есть Kotlin?
* **Защита информации при декомпиляции приложения**. Если вы пишете на С++, то информацию не могут достать так просто, если бы это был код на Java/Kotlin.
* Повысить производительность (сортировка больших данных, сложные алгоритмы, ресурсоемкие задачи)
* Использовать возможности существующих библиотек, написанных на C / C ++ или вашего собственного нативного кода, который вы хотите использовать повторно
* Создавать кросс-платформенные решения (Android и iOS)
* Использовать прямое низкоуровневое программирование (т. е. аппаратное обеспечение)

### Installation
Нужно зайти в `Android SDK Tools` и выбрать для установки там **NDK** и **CMake**(сборщик С/C++ кода).

### Добавление C++ поддержки к новому проекту 
Процесс создания нового проекта с поддержкой нативного кода аналогичен созданию стандартного проекта Android, за исключением нескольких дополнительных шагов:

1. В разделе Настройка нового проекта мастера установите флажок **Include C++ Support** checkbox. Нажмите кнопку "Далее.

2. Заполните все остальные поля и следующие несколько разделов мастера как обычно.
 
3. При появлении запроса выберите **Empty Activity**
    
4. В разделе «Customize C++ Support» вы можете настроить свой проект с помощью следующих параметров:

* **Standart C++**: используйте раскрывающийся список, чтобы выбрать, какую стандартизацию C ++ вы хотите использовать. При выборе Toolchain Default используется настройка CMake по умолчанию. Два других варианта - это C ++ 11 и C ++ 14.
    
* **Exceptions Support**. Если эта опция включена, Android Studio добавляет флаг -fexceptions в cppFlags в файле build.gradle уровня модуля, который Gradle передает CMake. Значением по умолчанию является -fno-exception. Это может использоваться для обеспечения совместимости с версиями NDK, более ранними, чем NDKr5, которые не имели поддержки обработки исключений. Чтобы узнать об этом более подробно, перейдите по ссылке: https://gcc.gnu.org/onlinedocs/libstdc++/manual/using_exceptions.html.
    
* **Runtime Type Information Support**: с помощью этой опции вы сможете использовать функции отражения кода в коде C ++ во время выполнения. Установите этот флажок, если вы хотите поддержку RTTI. Если эта функция включена, Android Studio добавляет флаг -frtti в cppFlags в файле build.gradle уровня модуля, который Gradle передает в CMake.

5. Нажмите Готово.

### Добавление C++ поддержки к существуещему проекту 

Можно создать новый проект с таким же именем, а потом смержить проекты. Вариант рискованный, но рабочий.

### Пример вызова С-шных функций
Весь код C/C++ храниться в папке **src/main/cpp**

```C
// src/main/cpp/native-lib.cpp

#include <jni.h>
#include <string>

using namespace std;

/*
   Метод начинаеться с слова Java - все остальное это путь к пакету где будет вызвана эта функция, пример названия ф-ции:

   пакет в kotlin - com.myapp
   название функции в с++ - Java_com_myapp_[название класса]_[название функции](){...}

   Объязательные параметры функции:
     + JNIEnv* env – указатель на интерфейс;
     + jobject     – ссылка на объект в котором описан нативный метод (this)

   Подробней здесь:
   https://proandroiddev.com/android-ndk-interaction-of-kotlin-and-c-c-5e19e35bac74
*/

extern "C" {
  /* ========================================>
    Описание функции:
      + JNIEXPORT - обозначает видимость этой функции (нужно юзать если cppFlags "-fvisibility=hidden") [default/hidden]
      + JNICALL - для корректной работы сборки
      + Возвращает String (jstring)
      + Будет вызвана в пакете: com.gymupadmin.UI.MainActivity
      + Название функции: stringFromJNI
    ======================================== */
    JNIEXPORT jstring JNICALL
    Java_com_myapp_MainActivity_getSomeString(JNIEnv* env, jobject) {
        string hello = "Hello from C++";
        return env->NewStringUTF(hello.c_str());
    }

    JNIEXPORT jint JNICALL
    Java_com_myapp_MainActivity_addNumbers(JNIEnv* env, jobject, jint a, jint b) {
        return a + b;
    }
}
```

```Kotlin
package com.myapp

class MainActivity : AppCompatActivity() {
    // Подключаем нашу библиотеку "native-lib.cpp"
    // их можно создать еще
    init {
      System.loadLibrary("native-lib")
    }

    /**
     *  Обозначаем внешние функции из C/C++ 
     */
    external fun getSomeString(): String
    external fun addNumbers(a: Int, b: Int): Int

    /**
    *  onCreate()
    */
    override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(savedInstanceState)
      setContentView(R.layout.activity_main)

      val someString = getSomeString()  
      val result     = addNumbers(4, 2)

      Toast.makeText(
          this, 
          "$result - $someString", 
          Toast.LENGTH_LONG
       ).show()
    }
}
```

### Keep function more secure
```groovy
// app/build.gradle
android {
    externalNativeBuild {
        cmake {
            // keep your code secure
            // https://stackoverflow.com/questions/19422660/when-to-use-jniexport-and-jnicall-in-android-ndk
            cppFlags "-fvisibility=hidden" // add this flag
        }
    }
}
```
