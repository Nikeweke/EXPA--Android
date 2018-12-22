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

### Handler 
```Kotlin
Handler().postDelayed({
    /* Create an Intent that will start the Menu-Activity. */
    val mainIntent = Intent(this, Menu::class.java)
    startActivity(mainIntent)
    finish()
}, 3000)
```