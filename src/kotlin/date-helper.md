# Date Helper 
```Kotlin
package ...

import java.text.SimpleDateFormat
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.util.*

object DateHelper {

  val pattern1 = "dd.MM.yyyy"
  val pattern2 = "dd/MM/yyyy HH:mm:ss"
  val pattern3 = "dd.MM"

  /*
  |-------------------------------------------------------------------
  |  Получить отформатированную сегодняшную дату
  |-------------------------------------------------------------------
  */
  fun currentDateFormated (patternNumber: Int = 1) : String {
    val pattern: String

    when (patternNumber) {
      1 -> pattern = pattern1
      2 -> pattern = pattern2
      else -> pattern = pattern1
    }

    val dateFormat  = SimpleDateFormat(pattern)
    val currentDate = Calendar.getInstance()
    return dateFormat.format(currentDate.time)
  }


  /*
  |-------------------------------------------------------------------
  |  Отформатировать дату и выдать строчную дату
  |-------------------------------------------------------------------
  */
  fun formatDate (date: Date, pattern: String) : String {
    val dateFormat = SimpleDateFormat(pattern)
    return dateFormat.format(date)
  }


  /*
  |-------------------------------------------------------------------
  |  Запарсить строковую дату в обьект Date
  |-------------------------------------------------------------------
  */
  fun parseDate (dateString: String, pattern: String) : Date {
    val dateFormat = SimpleDateFormat(pattern)
    return dateFormat.parse(dateString)
  }


  /*
  |-------------------------------------------------------------------
  |  Добавить или отнять дни от даты
  |-------------------------------------------------------------------
  */
  fun modifyDays (days: Int, date: Date) : Date {
    val calendar  = Calendar.getInstance()
    calendar.time = date

    calendar.add(Calendar.DAY_OF_YEAR, days)

    return calendar.time
  }


  /*
  |-------------------------------------------------------------------
  |  Получить дату когда истекает срок приложения
  |-------------------------------------------------------------------
  */
  fun getExpiresAtAppDate () : String {
    val calendar = Calendar.getInstance()
    calendar.add(Calendar.DAY_OF_YEAR, 5)
    return this.formatDate(calendar.time, this.pattern1)
  }
}

```