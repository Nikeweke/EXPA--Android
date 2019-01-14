# Room ORM

[[toc]]

---

### Intro 
**Room** - это постоянная библиотека, которая обеспечивает уровень абстракции поверх SQLite, чтобы обеспечить свободный доступ к базе данных, в то же время используя все возможности SQLite. Это ORM для SQLite. 

**Room** - являеться частью [Android Architecture Components](https://github.com/googlesamples/android-architecture-components) - это коллекция библиотек, которая помогает вам разрабатывать надежные, тестируемые и поддерживаемые приложения.

Почему **Room**:
* Предлагает проверку во время компиляции.
* Хорошо сочетается с LiveData, мониторинг в реальном времени с использованием LiveData.
* Тестирование различных компонентов в комнате легко.
* Простота в использовании и реализации.
* Уменьшение код по работе с БД

### Installation
`app/build.gradle`
```groovy
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
apply plugin: 'kotlin-kapt' // <!-- this one we need

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
* **Entity** 
* **Dao**
* **Database**