# Проблемы и решения

[[toc]]

---

### Сделать задний фон градиентом?
* Нужно создать новый `drawable`, в разделе **res/drawable** через правую кнопку.
* Написать градиент разметку
```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
  <item>
      <shape>
        <gradient
            android:angle="45"                  
            android:startColor="#F83600"
            android:endColor="#FFD923"
            android:type="linear"
            />
      </shape>
  </item>
</selector>
```
* Применить разметку какому элементу, в аттрибут **background**


### Как поменять иконку приложения?
* Создать иконку можно [здесь](https://romannurik.github.io/AndroidAssetStudio/index.html). 
* После создания иконки, скачиваем и добавляем в проект (File -> New -> Image asset). 
* В манифесте (`AndroidManifest.xml`) можно прописать путь к иконке, если папка иконки была названа по-другому. 


### Как использовать другой ресурс кроме `res/values/strings.xml`? Сообственный ресурс
Все ресурсы объдиняютсья в один файл после компиляции и по-этому аттрибут name - это id каждого ресурса, который не должен повторяться.
* Нужно создать свой файл в **res/values/my_resource_file.xml**
* Там можно написать строки или массив:
```xml
<resources>
    <!-- обычная строка -->
    <string name="app_name">My app</string>

     <!-- масив строк -->
     <string-array name="countries">
       <item>USA</item>
       <item>Ukraine</item>
       <item>Germany</item>
     </string-array>

</resources>
```
* Использование в коде:

java
```java
String appName     = getResources().getString(R.string.app_name);
String[] countries = getResources().getStringArray(R.array.countries);
```
xml
```xml
<TextView
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:text="@string/app_name" />
```


### При переходе с одного фрагмента на другой лагает анимация?

### Как спрятать ActionBar?
Есть 2 варианта:
* через AndroidManifest.xml
```xml
<manifest 
    ... >

    <application
        ...
        android:theme="@style/Theme.AppCompat.Light.NoActionBar">
```

* через java
```java
getSupportActionBar().hide();
```


### Как перелистывать экраны (свайпом, слайд)?
Для это нужно:
* ViewPager
* Fragment
* Adapter для ViewPager