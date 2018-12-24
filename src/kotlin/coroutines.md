# Coroutines

Библиотека для работы с потоками в Kotlin

### Dependencies and Import 
```groovy
// app/build.gradle
dependencies {
    ...
    implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.0.1"
```

```Kotlin
import kotlinx.coroutines.*
```

### Examples

Блокирующий поток 
```Kotlin
runBlocking {
 delay(1000)    // блокирует главный UI поток
 someHardWork()
}
```
<br>

Запустить в UI thread
```Kotlin
// Запустить в главном потоке UI
GlobalScope.launch (Dispatchers.Main) {
  delay(1000) // не блокирует главный поток, а просто простаивает, и идет дальше
  someHardWork()
}
```

Всего диспетчеров 4:
* **Dispatchers.Main** - Диспетчер, ограниченный главным потоком, работающим с объектами пользовательского интерфейса. Этот диспетчер может быть использован либо напрямую, либо через фабрику MainScope. Обычно такой диспетчер является однопоточным.
* **Dispatchers.Unconfined** - Диспетчер, который не ограничен каким-либо конкретным потоком. Он выполняет начальное продолжение сопрограммы непосредственно в текущем кадре вызова и позволяет сопрограмме возобновить работу в любом потоке, который используется соответствующей функцией приостановки, без указания какой-либо конкретной политики потоков. Примечание: используйте с особой осторожностью, не для общего кода.
* **Dispatchers.IO** - `CoroutineDispatcher`, предназначенный для разгрузки блокирующих задач ввода-вывода в общий пул потоков.
* **Dispatchers.Default** - `CoroutineDispatcher` по умолчанию, который используется всеми стандартными сборщиками, такими как `launch`, `async` и т.д. Если в их контексте не указан ни диспетчер, ни какой-либо другой `ContinuationInterceptor`.


`Async`
```Kotlin
GlobalScope.launch (Dispatchers.Main) {
  delay(200)
  async { initAbonsSpinner(view) }.await()
}
```