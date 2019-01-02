# Http requests

[[toc]]

--- 

* [Klaxon - parse data to types](https://github.com/cbeust/klaxon)
* [Fuel - http library](https://github.com/kittinunf/Fuel)

### Add permission to make HTTP `AndroidManifest.xml`
```xml
<!-- Permission for making Http requests -->
<uses-permission android:name="android.permission.INTERNET"/>

<application>
  ...
</application>
```


### Simple Http request
```groovy
implementation 'com.beust:klaxon:5.0.1'
```

```Kotlin
// без выполнения в потоке будет ошибка "android.os.NetworkOnMainThreadException",
// потому что операция выполняеться не мгновенно, а блокирует основной поток
thread {
  val result = URL("https://jsonplaceholder.typicode.com/todos/1").readText()
  Log.i(MainActivity.logTag, result)

  // определяем класс по которому распарсим ответку
  class Task (
    val userId: Int, 
    val id: Int, 
    val title: String, 
    val completed: Boolean
  )

  val parsedResult = Klaxon().parse<Task>(result)!!
  Log.i(MainActivity.logTag, "${parsedResult.userId}")
}
```

### Fuel http request
```groovy
implementation 'com.github.kittinunf.fuel:fuel-android:1.16.0'

// для переобрзавание ответов в обьекты классов
// implementation 'com.github.kittinunf.fuel:fuel-gson:1.16.0'  
```

```Kotlin
import com.github.kittinunf.fuel.httpGet
import com.github.kittinunf.result.Result

...

"https://jsonplaceholder.typicode.com/todos/1"
  .httpGet()
  .responseString { request, response, result ->

    // request  - info about Request
    // response - info about Response
    // result - is object of class Result
    
    when (result) {
      is Result.Failure -> {
        val ex = result.getException()
        Log.i(MainActivity.logTag, "${ex}")
      }

      is Result.Success -> {
        val data = result.get()
        Log.i(MainActivity.logTag, "${data}")
      }
    }
  }

```