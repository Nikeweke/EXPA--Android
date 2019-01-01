# Preferences helper

Dependencies
```groovy
dependencies {
  ...
  implementation "org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion"
}
```

Using 
```Kotlin
PreferencesHelper(...).applyPrefs()
```

Class
```Kotlin
package com.app.myapp.Helpers

import com.app.myapp.UI.MainActivity
import kotlin.reflect.KProperty
import kotlin.reflect.full.declaredMemberProperties

/**
 * Этот класс написан чтобы удобней записывать в preferences свойства,
 * просто определив свойства этого класса это и будут ключи в preferences
 */
class PreferencesHelper (
  var name      : String = "",
  var surname   : String = "",
  var middlename: String = "",
  var phone     : String = "",
  var appVersion: String = "",
  var isFirstTimeLaunch: Boolean = false,
) {

  /*
  |--------------------------------------------------------------------------
  | Проходиться по полям класса и записывает значения в preferences
  |--------------------------------------------------------------------------
  */
  fun applyPrefs () {
    val editor                           = MainActivity.sPref.edit()
    val fields: Collection<KProperty<*>> = PreferencesHelper::class.declaredMemberProperties

    for (field in fields) {
      val fieldType: String = field.returnType.toString().split(".")[1]
      val fieldName: String = field.name

      // почему тут сразу приводим к String?
      // Потому что с стрингу можно потом перегнать в любой другой тип
      val value    : String = this.readPropery(this, fieldName).toString()  // забираем значение с текущего экземпляра

      when (fieldType) {
        "String" -> {
          editor.putString(fieldName, value)
        }

        "Int" -> {
          editor.putInt(fieldName, value.toInt())
        }

        "Boolean" -> {
          editor.putBoolean(fieldName, value.toBoolean())
        }
      }
    }

    editor.apply()
  }


  /*
  |--------------------------------------------------------------------------
  | Читает свойство данного обьекта
  |--------------------------------------------------------------------------
  */
  private fun readPropery(instance: Any, propertyName: String): Any? {
    val clazz = instance.javaClass.kotlin
    @Suppress("UNCHECKED_CAST")
    return clazz.declaredMemberProperties.first { it.name == propertyName }.get(instance)
  }
}
```