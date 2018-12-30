# Fragment Transactions

[[toc]]

--- 

### Intro
**Fragment Transactions** - нужны для смены фрагментов в `FrameLayout(FrameContainer)`. В основном делаеться одна активность и в неё вставляеться `FrameContainer` в которой меняються фрагменты.

### Основные действия
* `add(int containerViewId, Fragment fragment, String tag)` - добавление фрагмента в состояние Activity с идентификатором контейнера, в который должен быть помещен этот фрагмент, и добавляемого фрагмента.

* `attach(Fragment)` - повторно присоединить указанный фрагмент из пользовательского интерфейса после того, как он был ранее отсоединен (с вызовом detach).

* `detach(Fragment)` - отсоединить данный фрагмент от пользовательского интерфейса (фрагмент удален из пользовательского интерфейса, однако FragmentManager все еще активно управляет его состоянием).

* `hide(Fragment)` - скрывает существующий фрагмент. Относится только к фрагментам, чьи представления были добавлены в контейнер. Заставляет взгляды быть скрытыми.

* `remove(Fragment)` - удалить существующий фрагмент.
    
* `replace(int containerViewId, Fragment fragment, String tag)` - (равнозначно `remove().add()`)- заменить существующий фрагмент, который был добавлен в контейнер. По сути, это то же самое, что вызов метода remove (фрагмента) для всех добавленных в данный момент фрагментов, которые были добавлены с тем же containerViewId, а затем добавлены (containerViewId, Fragment).

* `show(Fragment)` - показывает ранее скрытый фрагмент.

* `commit()` - подтвердить транзакцию

### Simple transaction
```Kotlin
val transaction = supportFragmentManager.beginTransaction()
// [OLD OPTION]: val transaction = fragmentManager.beginTransaction()

this.UpdateFragmentInstance = UpdateFragment()
this.HomeFragmentInstance   = HomeFragment()
this.StartFragmentInstance  = StartFragment()

// Добавляем в контейнер фрагменты. 
// Вы увидите только последний фрагмент, так как он накрыл все остальные
// R.id.frameContainer - это элемент FrameLayout, в него и вставляються фрагменты
transaction.add(R.id.frameContainer, this.UpdateFragmentInstance)
transaction.add(R.id.frameContainer, this.HomeFragmentInstance)
transaction.add(R.id.frameContainer, this.StartFragmentInstance)

// Подтверждаем изменения 
transaction.commit()
```

### Transaction with standart Animation
```Kotlin
val transaction = supportFragmentManager.beginTransaction()

// Option 1
transaction.setTransition(TRANSIT_FRAGMENT_CLOSE)

// Option 2
transaction.setTransition(TRANSIT_FRAGMENT_OPEN)

// Option 3
transaction.setTransition(TRANSIT_FRAGMENT_FADE)
// если что, примениться только последняя

// some actions here...

transaction.commit()
```

### Transaction with custom Animation
Кастомная анимации делаеться с помощью `.xml` разметки, можно и программно, но так удобней. Храниться анимация в **res/anim**. НЕ используйте теги в анимации типа: `<Alpha></Alpha>`, `<Translate></Translate>` и т.д. это все тормозная штука, лучше использовать **ObjectAnimator** везде - как в `xml`, так и в коде. 
```Kotlin
// Забираем менеджера по фрагментам
val transaction = this.fragmentManager.beginTransaction()

// Забираем id анимации
val animEnter = R.anim.fade_out_reverse
val animExit  = R.anim.fade_in_reverse

// Ставим анимацию для захода нового
// и ухода текущего фрагмента 
transaction.setCustomAnimations(animEnter, animExit)

// Даем новый фрагмент которым хотим заменить, и его тег, чтобы можно было его найти в контейнере
transaction.replace(R.id.frameContainer, newFragment, fragmentTag)

// Подтверждаем
transaction.commit()
```

:::tip Длительность анимации нового и старого фрагмента
Должна быть одинакова, а то одна отработает быстрее другой, и будет ерунда! 
:::

```xml
<!-- res/anim/fade_out_reverse.xml -->
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">

    <!--
      * interpolator - это временное поведение анимации, подробнее в разделе "Анимация"
      * propertyName - указывает на свойство которое мы меняем
      * valueType - типы который будет использоваться (если floatType - float, и т.д.)
      * valueFrom & valueTo - от какого значение к какому
      * duration - длительность анимации. Здесь число вынесен отдельно, чтобы из одного место было удобно менять длительность анимации
    -->

    <objectAnimator xmlns:android="http://schemas.android.com/apk/res/android"
        android:interpolator="@android:anim/accelerate_decelerate_interpolator"
        android:propertyName="alpha"
        android:valueType="floatType"
        android:valueFrom="0.1"
        android:valueTo="1.0"
        android:duration="@integer/animation_duration"/>
</set>

```
```xml
<!-- res/anim/fade_in_reverse.xml -->
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android"
    android:ordering="together">

    <objectAnimator xmlns:android="http://schemas.android.com/apk/res/android"
        android:interpolator="@android:anim/accelerate_decelerate_interpolator"
        android:propertyName="alpha"
        android:valueType="floatType"
        android:valueFrom="1.0"
        android:valueTo="0.0"
        android:duration="@integer/animation_duration"/>

    <objectAnimator xmlns:android="http://schemas.android.com/apk/res/android"
        android:interpolator="@android:anim/accelerate_decelerate_interpolator"
        android:propertyName="x"
        android:valueType="floatType"
        android:valueFrom="0"
        android:valueTo="200"
        android:duration="@integer/animation_duration"/>
</set>
```

