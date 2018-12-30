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

### При помещение `FrameLayout` в `ScrollView` контент сжимаеться, как будто применяется *wrap_content*?                                     
> на `<ScrollView>` цепляем атрибут `android:fillViewport="true"` и на всех лейаутах ставим *match_parent*, чтобы раскрыть пошире контент 


### Как использовать Toast?
```java
Toast toast = Toast.makeText(getApplicationContext(), "Пора покормить кота!", Toast.LENGTH_SHORT);
toast.show();
```


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

### В чем разница между px, dp, dip и sp на Андроиде?
[stackoverflow answer](https://ru.stackoverflow.com/questions/536702/%D0%92-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-px-dp-dip-%D0%B8-sp-%D0%BD%D0%B0-%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4%D0%B5)

> **px** - Пиксель — соответствует одному пикселю на экране. Не рекомендуется использовать, так как на разных устройствах элементы будут выглядеть по-разному (физический размер одного пикселя на каждом устройстве разный).

> **in** - Дюйм (Inch) — соответствует реальному физическому размеру элементов на экране (1 дюйм ≈ 2,54 см)

> **mm** - Миллиметр — также соответствует реальному размеру (1 мм = 0,01 см)

> **pt** - Точка — 1/72 дюйма, реальный размер (1 точка ≈ 3,5 мм)

> **dp или dip** - Пиксель, не зависящий от плотности (Density-independent Pixel) — относительная единица измерения, которая берет за основу плотность экрана устройства. Примерно cоответствует одному пискелю на устройстве с плотностью экрана 160 точек на дюйм (dots per inch, dpi). Отношение dp/px меняется в соответствии с плотности экрана, но не в строгой пропорции: dp/dx зависит от категории экрана, а не точного значения плотности. Рекомендуется применять вместо обычных px для корректного отображения элементов на устройствах с различной плотностью экрана. В разметке можно писать как dip, так и dp, компилятор одинаково воспринимает оба варианта, однако dp предпочтительнее.

> **sp** - Scale-independent Pixel — пиксель, не зависящий от масштабирования — как и dp, зависит от плотности экрана, но результат будет масштабироваться в соответствии с настройками размера шрифта пользователя. Рекомендуется для задания размеров шрифтов, чтобы текст подстраивался как под плотность экрана, так и под настройки, заданные пользователем

```
+---------+--------------+---------------+------------+-------------+
| Единица | Название     | В 1 дюйме     | Зависит от | Одинаковый  |
|         |              |               | плотности? | физ. размер |
+---------+--------------+---------------+------------+-------------+
|  px     | Пиксель      |  —            |  Да        |  Нет        |
+---------+--------------+---------------+------------+-------------+
|  in     | Дюйм         |  1            |  Нет       |  Да         |
+---------+--------------+---------------+------------+-------------+
|  mm     | Миллиметр    |  25.4         |  Нет       |  Да         |
+---------+--------------+---------------+------------+-------------+
|  pt     | Точка        |  72           |  Нет       |  Да         |
+---------+--------------+---------------+------------+-------------+
|  dp     | Пиксель,     | ~160          |  Нет       |  Нет        |
|         | не зависящий |               |            |             |
|         | от плотности |               |            |             |
+---------+--------------+---------------+------------+-------------+
|  sp     | Пиксель,     | ~160          |  Нет       |  Нет        |
|         | не зависящий |               |            |             |
|         | от масштаби- |               |            |             |
|         | рования      |               |            |             |
+---------+--------------+---------------+------------+-------------+
```

#### Как сделать таймер? или интервальный запуск какой-то операции?
```java
 Timer timer = new Timer();
      TimerTask timerTask = new TimerTask() {

        @Override
        public void run() {
          runOnUiThread(new Runnable() {

            @Override
            public void run() {
              HomeFragment homeFragment = new HomeFragment();
              FragmentHelper.changeFragmentStandart(getSupportFragmentManager(), homeFragment,  homeFragment.FRAGMENT_TAG);
            }
          });
        }
      };

//      timer.scheduleAtFixedRate(timerTask, 0, 1000);  // starts every second
      timer.schedule(timerTask, 3000); // start after 3 seconds
```

### Какие принципы проектирование приложений?
https://developer.android.com/design/get-started/principles?hl=ru

### Как анимировать обьекты (ObjectAnimator)?
```java
// Для этого используеться objectAnimator
// Анимация - Перемещение Лого
// Тут мы создаем анимацию которая движет обьект от начальной точки до границы
// высоты родительского элемента

// находим обьект на макете
ImageView logoView = (ImageView) findViewById(R.id.logoView); 

// Вычисляем координаты для сдвигов (Обьект у нас стоит сверху, и должен проползти к центру)
float logoViewYStart = this.logoView.getTop();
float logoViewYEnd   = this.scene.getPivotY() - 200;

// получаем анимацию 
ObjectAnimator heightAnimator = ObjectAnimator.ofFloat(    // ofFloat - указывает на значение которые будут в "стартовой точке" и "финишной точке"
  this.logoView,   // обьект, свойство которого меняем
  "y",             // свойство которое мы меняем  
  logoViewYStart,  // стартовая точка
  logoViewYEnd     // финишная точка
).setDuration(heightDuration);  // устанавливаем длительность

// запускаем
heightAnimatorю.start();

```
Так же можно использовать набор анимации и связывать их
```java
AnimatorSet animatorSet = new AnimatorSet();
animatorSet.play(heightAnimator)
           .with(backgroundAnimator)
           .before(changerAnimator);

animatorSet.start();
```

### Как отследить выполнение анимации?
```java
// На анимацию вешаеться прослушка с методами жизненного цикла
backgroundAnimator.addListener(new Animator.AnimatorListener() {
    @Override
    public void onAnimationStart(Animator animation) {
    }

    @Override
    public void onAnimationEnd(Animator animation) {
      HomeFragment homeFragment = new HomeFragment();
      FragmentHelper.changeFragmentSlide(getFragmentManager(), homeFragment, "out", homeFragment.FRAGMENT_TAG);
    }

    @Override
    public void onAnimationCancel(Animator animation) {

    }

    @Override
    public void onAnimationRepeat(Animator animation) {

    }
  });
```

### Как сделать чтобы при перевороте экрана не перегружалась активность?
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.app.atletiko">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_logo"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_logo_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"
        tools:ignore="GoogleAppIndexingWarning">
        <activity android:name=".UI.MainActivity" android:configChanges="orientation|screenSize"> <!-- ADD THIS: android:configChanges="orientation|screenSize" -->
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
``` 

### Как сделать часть текста жирной ?
```Kotlin
Html.fromHtml("I am regulat <b>but i am the Boss</b>")
```


### При переходе с одного фрагмента на другой лагает анимация?

1. У вас есть фрагменты которые имеет много сложных операций при создании и тупят при открытии? И вы делаете постоянно replace операцию? Каждый раз создаеться новый экзмепляр из-за этого и тупняки. Надо делать пре-создание фрагментов и сохранять их. 
```Kotlin

// В Activity добавляем свойства(поля) класса, для хранения экзмепляров
// которые потом можно будет использовать для действий с FragmentTransaction - show, hide, attach, detach - только эти операции не разрушают Fragment
companion object {
  private lateinit var HomeFragmentInstance   : Fragment
  private lateinit var AddTaskFragmentInstance: Fragment
}

override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_main)

  val transaction = supportFragmentManager.beginTransaction()

  // Делаем эземепляры, и добавляем в контейнер
  MainActivity.HomeFragmentInstance    = HomeFragment()
  MainActivity.AddTaskFragmentInstance = AddTaskFragment()
 
  transaction.add(R.id.frameContainer, MainActivity.HomeFragmentInstance)
  transaction.add(R.id.frameContainer, MainActivity.AddTaskFragmentInstance)

  transaction.commit()
}


... 

// И потом на фрагменте мы пишем.
// Тут нет проверки, показан ли фрагмент сейчас и т.д. 
fun backToHome () {
  val transaction = supportFragmentManager.beginTransaction()
  
  transaction.hide(MainActivity.AddTaskFragmentInstance)
  transaction.show(MainActivity.HomeFragmentInstance)

  transaction.commit()
}
```
<br>

2. `Handler.postDelayed()` - возможное решение. Мы ждем пока пройдет анимация, допустим это 300 мл. секунд и делаем тормознутый код
```Kotlin
// Пишем задержку анимации в ресурсах, и потом оттуда берем 
val animationDuration = getResources().getInteger(R.integer.animation_duration).toLong()

Handler().postDelayed({
  // code here...
}, durationSlideDown.toLong())
```
<br>

3. `runOnUiThread {} + Handler.postDelayed() внутри`
```Kotlin
// For fragments
MainActivity().runOnUiThread {
  // some light code

  // and when hard 
  Handler.postDelayed({
    // some HARD, really hard... like St.Anger
  }, someDuration)
}
```

### Посмотреть тип переменной ?
```Kotlin
// output: kotlin.String
someVar::class.qualifiedName

// output: String
someVar::class.simpleName
```

