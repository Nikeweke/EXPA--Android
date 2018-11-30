# Проблемы и решения

[[toc]]

---

### При переходе с одного фрагмента на другой лагает анимация?

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

### Как перелистывать экраны (свайпом, слайд)?
Для это нужно:
* ViewPager
* Fragment
* Adapter для ViewPager