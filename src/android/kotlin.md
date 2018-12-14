# Kotlin 

Язык программирование от JetBrains. Удобен, компактен и он функциональный, это значит отход от концептов ООП от которых всех тошнит.
                   
Kotlin можно подключить в любой свой проект и также **конвертировать любой файл на Java в Kotlin файл**.

###### build.gradle
```gradle
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
```gradle
apply plugin: 'com.android.application'

// Kotling plugins
apply plugin: 'kotlin-android'   
apply plugin: 'kotlin-android-extensions' // needs for using view.nameTv = ...,  instead of findViewByid(...)

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
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion"
}
```

### Сравнение Java и Kotlin

Перегрузка поля в дочернем классе
```Java 
```
```Kotlin
```
<br>


Сеттеры и геттеры
```Java 
```
```Kotlin
```
<br>


Сбор элементов с разметки
```Java 
```

```Kotlin
```