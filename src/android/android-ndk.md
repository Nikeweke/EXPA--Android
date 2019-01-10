# Android NDK (C/C++)

[[toc]]

---

### Intro
**Android NDK** - это `native dev kit` с помощью которого можно писать код на C/C++ который будет потом использоваться в приложении, можно вызывать код из Kotlin в C++, и наоборот.

### Зачем писать на C++, если есть Kotlin?
* **Защита информации при декомпиляции приложения**. Если вы пишете на С++, то информацию не могут достать так просто, если бы это был код на Java/Kotlin.
* Повысить производительность (сортировка больших данных, сложные алгоритмы, ресурсоемкие задачи)
* Использовать возможности существующих библиотек, написанных на C / C ++ или вашего собственного нативного кода, который вы хотите использовать повторно
* Создавать кросс-платформенные решения (Android и iOS)
* Использовать прямое низкоуровневое программирование (т. е. аппаратное обеспечение)

### Installation
Нужно зайти в `Android SDK Tools` и выбрать для установки там **NDK** и **CMake**(сборщик С-го кода), **LLDB**.

### Добавление поддержки к новому проекту 
Процесс создания нового проекта с поддержкой нативного кода аналогичен созданию стандартного проекта Android, за исключением нескольких дополнительных шагов:

1. В разделе Настройка нового проекта мастера установите флажок **Include C++ Support** checkbox. Нажмите кнопку "Далее.

2. Заполните все остальные поля и следующие несколько разделов мастера как обычно.
 
3. При появлении запроса выберите **Empty Activity**
    
4. В разделе «Customize C++ Support» вы можете настроить свой проект с помощью следующих параметров:

* **Standart C++**: используйте раскрывающийся список, чтобы выбрать, какую стандартизацию C ++ вы хотите использовать. При выборе Toolchain Default используется настройка CMake по умолчанию. Два других варианта - это C ++ 11 и C ++ 14.
    
* **Exceptions Support**. Если эта опция включена, Android Studio добавляет флаг -fexceptions в cppFlags в файле build.gradle уровня модуля, который Gradle передает CMake. Значением по умолчанию является -fno-exception. Это может использоваться для обеспечения совместимости с версиями NDK, более ранними, чем NDKr5, которые не имели поддержки обработки исключений. Чтобы узнать об этом более подробно, перейдите по ссылке: https://gcc.gnu.org/onlinedocs/libstdc++/manual/using_exceptions.html.
    
* **Runtime Type Information Support**: с помощью этой опции вы сможете использовать функции отражения кода в коде C ++ во время выполнения. Установите этот флажок, если вы хотите поддержку RTTI. Если эта функция включена, Android Studio добавляет флаг -frtti в cppFlags в файле build.gradle уровня модуля, который Gradle передает в CMake.

5. Нажмите Готово.

### Добавление поддержки к существуещему проекту 

I DONT KNOW HOW at this time. Можно создать новый проект и туда перетащить файлы.