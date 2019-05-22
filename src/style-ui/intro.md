# Intro

Содержание
[[toc]]

---

### Вид компонента 

Вид компонента меняеться в основм через установку нового значения в свойстве **background**, с использованием ресурса `drawable`.

```xml
<!-- /res/drawable/edittext-bckg.xml -->
<!-- рисуем фугуру с гладкимим углами и белым фоном -->
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">

    <solid android:color="@android:color/holo_green_dark" />
    <corners android:radius="25dp" />

</shape>
```

```xml
<!-- /layout/activity_main.xml -->
<!-- применяем к полю -->
<?xml version="1.0" encoding="utf-8"?>
...
<EditText
  ...
  android:background="@drawable/edittext-bckg"
/>
```
<br>

### Стили
Стили помогаю делать классы как CSS, набор свойств, которые применяються к объекту
`/res/values/styles.xml`
```xml
<resources>
    ...

  <!-- Описываем наш стиль и внутри свойства -->
  <!-- Login and Register edittexts -->
  <style name="EdittextForm">
      <item name="android:layout_height">50dp</item>
      <item name="android:layout_width">0dp</item>
      <item name="android:background">@drawable/rounded_edittext_register_login</item>
      <item name="android:paddingLeft">16dp</item>
  </style>
</resources>
```

`/res/layout/activity_main.xml`
```xml
<!-- Применяем стиль -->
<EditText
  style="@style/EdittextForm" 
  android:inputType="textEmailAddress"
  android:ems="10"
  android:id="@+id/email_edittext_register"
  android:layout_marginTop="16dp"
  app:layout_constraintTop_toBottomOf="@+id/username_edittext_register" android:hint="E-mail"
  app:layout_constraintEnd_toEndOf="@+id/username_edittext_register"
  app:layout_constraintStart_toStartOf="@+id/username_edittext_register"/>
```

### Применение в коде ресурсов
* integers
* strings
* colors
* arrays