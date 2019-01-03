# Fragment Transactions

[[toc]]

--- 

### Intro
**Fragment Transactions** - нужны для смены фрагментов в `FrameLayout(FrameContainer)`. В основном делаеться одна активность и в неё вставляеться `FrameContainer` в которой меняються фрагменты.

### Основные действия
* `transaction.add(int containerViewId, Fragment fragment, String tag)` - добавление фрагмента в состояние Activity с идентификатором контейнера, в который должен быть помещен этот фрагмент, и добавляемого фрагмента.

* `transaction.attach(Fragment)` - повторно присоединить указанный фрагмент из пользовательского интерфейса после того, как он был ранее отсоединен (с вызовом detach).

* `transaction.detach(Fragment)` - отсоединить данный фрагмент от пользовательского интерфейса (фрагмент удален из пользовательского интерфейса, однако FragmentManager все еще активно управляет его состоянием).

* `transaction.hide(Fragment)` - скрывает существующий фрагмент. Относится только к фрагментам, чьи представления были добавлены в контейнер. Заставляет взгляды быть скрытыми.

* `transaction.remove(Fragment)` - удалить существующий фрагмент.
    
* `transaction.replace(int containerViewId, Fragment fragment, String tag)` - (равнозначно `remove().add()`)- заменить существующий фрагмент, который был добавлен в контейнер. По сути, это то же самое, что вызов метода remove (фрагмента) для всех добавленных в данный момент фрагментов, которые были добавлены с тем же containerViewId, а затем добавлены (containerViewId, Fragment).

* `transaction.show(Fragment)` - показывает ранее скрытый фрагмент.

* `transaction.setCustomAnimations(int enter, int exit, int popEnter, int popExit)` - поставить кастомную анимацию. (`enter` & `exit` - параметры для фрагментов которые сейчас будут отрабатывать, `pop-` это когда делаюь комманду `popBackStack`)

* `transaction.setTransition(...)` - поставить стандартную анимацию

* `transaction.commit()` - подтвердить транзакцию (асинхронно). По-этому не стоит удивляеться когда вы делаете эту команду, а состояние(isHidden) фрагмента не меняеться.

* `transaction.commitNow()` - подтвердить транзакцию (синхронно)

* `transaction.addToBackStack([String/null])` - передавать название не объязательно, можно и `null`, записывает состояние в стек, к которому можно потому вернуться с помощью комманды **popBackStack()**

* `fragmentManager.popBackStack()` - вернуться к предыдущему состояния стека, то есть вернуться к пред. фрагменту.

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

    <!--
      <set> - этот тег обозначеает что можно применить сразу несколько эффектов.

      Здесь 2 эффекта - сдвиг по горизнотали(x) и алфьа(прозрачность)  

      android:ordering="together" - эффекты могут применяться как сразу, так и последовательно - "sequntially"
    -->

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

### Работа с `addToBackStack()`

**BackStack** - нужен для сохранения транзакций с фрагментами, то есть, можно откатить всю предыдущую транзакцию. Тем самым написав меньше кода на возвращение. Это полезно использовать когда есть фрагменты которые мы не хотим удалять из контейнера, а просто прячем их. Но это не обеспечивает без тормозные переходы на фрагменты, так как они якобы прирендеренные.

Переход с Фрагмента(добавленный) на Фрагмент(добавленный). И обратно
```Kotlin 
// Начинаем транзакцию
val transaction = this.fragmentManager.beginTransaction()

// устанавливаем анимацию в начале, это важно!
// 2 анимации на переход туда, и 2 - на переход откат транзакции(popBackStack)
val animEnter    = R.anim.enter_from_right
val animExit     = R.anim.exit_to_left
val animEnterPop = R.anim.enter_from_left
val animExitPop  = R.anim.exit_to_right
transaction.setCustomAnimations(animEnter, animExit, animEnterPop, animExitPop)

// находим первый фрагмент и прячем
val currentFragment = this.fragmentManager.findFragmentByTag(currentFragmentTag)
transaction.hide(currentFragment)

// находим новый фрагмент и показываем
val newFragment = this.fragmentManager.findFragmentByTag(newFragmentTag)
transaction.show(newFragment)

// добавляем(запоминаем) транзакцию, чтобы спокойно откатиться с помощью "fm.popBackStack()"
transaction.addToBackStack(null)

transaction.commit()
```
<br>

Переход с Фрагмента(добавленный) на Фрагмент(не добавленный). И обратно
```Kotlin
val transaction = this.fragmentManager.beginTransaction()

// анимация - для обычного перехода и перехода когда делают "popBackStack"
val animEnter    = R.anim.enter_from_right
val animExit     = R.anim.exit_to_left
val animEnterPop = R.anim.enter_from_left
val animExitPop  = R.anim.exit_to_right
transaction.setCustomAnimations(animEnter, animExit, animEnterPop, animExitPop)

// находим первый фрагмент и прячем
val currentFragment = this.fragmentManager.findFragmentByTag(currentFragmentTag)
transaction.hide(currentFragment)

// новый фрагмент и показываем
transaction.add(R.id.frameContainer, newFragment)

// добавляем(запоминаем) транзакцию, чтобы спокойно откатиться с помощью "fm.popBackStack()"
transaction.addToBackStack(null)

transaction.commit()
```

И если нам захочеться вернуться на домашний экран, просто делаем откат
```Kotlin
this.fragmentManager.popBackStack()
```