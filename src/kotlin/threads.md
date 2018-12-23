# Threads 

### Simple thread
```Kotlin
thread {
  // your code here
}
```

### UI Thread
```Kotlin
// Fragment 
MainActivity().runOnUiThread {
  // your code here 
}

// Activity 
runOnUiThread {
  // your code here 
}
```

### Handlers
Запускает код в потоке UI thread
```Kotlin
// postAtFrontOfQueue() - Ставит исполнение кода в начало главного потока 
Handler().postAtFrontOfQueue {
  // code here...
}

// postDelayed() - запускает что-то через X миллисекунд от текущего времени
Handler().postDelayed({
  // code here...
}, 300L)


// postAtTime() - запускает что-то в указанное время XX: YY: ZZ.mmm
Handler().postAtTime({
  this.initVisitsRecyclerView()
}, 300L)


// post() - запускает сразу в главном потоке код. Вы должны использовать Handler.post () всякий раз, когда хотите выполнить операцию в потоке пользовательского интерфейса (UI Thread).
Handler().post {
  this.initVisitsRecyclerView()
}
```