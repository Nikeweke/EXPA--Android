# Http requests

[[toc]]

--- 

* [Gson](https://github.com/google/gson)
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
implementation 'com.google.code.gson:gson:2.8.5'
```

```Kotlin
// определяем класс за классом в котором будем делать распарс. Important!!!
data class Task (
  @SerializedName("userId")    var userId: Int, 
  @SerializedName("id")        var id    : Int, 
  @SerializedName("title")     var title : String,
  @SerializedName("completed") var completed: Boolean
)
```

```Kotlin
// без выполнения в потоке будет ошибка "android.os.NetworkOnMainThreadException",
// потому что операция выполняеться не мгновенно, а блокирует основной поток
thread {
  val result = URL("https://jsonplaceholder.typicode.com/todos/1").readText()
  Log.i(TAG, result)

  // from JSON to Object 
  val parsedResult = Gson().fromJson(result, Task::class.java)
  Log.i(TAG, "${parsedResult.userId}")

  // from Object to JSON
  val task = Task(1, 1, "Take a nap", true)
  val json = Gson().toJson(task)
  Log.i(TAG, "${json}")
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