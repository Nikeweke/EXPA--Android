# Datatypes

[[toc]]

--- 

### Primitives and Arrays 
* byte 
* short 
* int (or Integer)
* String
* long
* float 
* double
* boolean
* char


```java
// examples of primitives
String name = "vasya";
int age     = 12;

// examples of arrays
String[] names = {"asd", "aasda"};
int[] numbers = ...
// and so on
```

### Map (HashMap)

Структура типов
```
Map (Interface)
  |
  ---> HashMap 
  |
  ---> HashTable
  |
  ---> SortedMap (Interface)
        |
        ---> NavigableMap(Interface)
              |
              ---> TreeMap
```

Пример 
```java
Map <String, String> data = new HashMap<String, String>();
// OR 
HashMap <String, String> data = new HashMap<String, String>();
// OR less
HashMap <String, String> data = new HashMap<>(); 
```

Основные операции
1. `map.put(K key, V value)` - добавляет элемент в карту;
2. `map.get(Object key)` - ищет значение по его ключу;
3. `map.remove(Object key)` - удаляет значение по его ключу;
4. `containsKey(Object key)` - спрашивает, есть ли в карте заданный ключ;
5. `map.containsValue(Object value)` - спрашивает есть ли в карте заданное значение;
6. `map.size()` - возвращает размер карты (количество пар "ключ-значение").

Проход по массиву 
```java
```


### List (ArrayList)

https://vertex-academy.com/tutorials/ru/list-java-primer/
> в отличии от Array, ArrayList может динамически расширяться 

Структура типов
```
List (Interface)
  |
  ---> ArrayList 
  |
  ---> LinkedList
  |
  ---> Vector
        |
        ---> Stack
```


Пример
```java
ArrayList<String> list = new ArrayList<>();
```

Основные операции
1. `list.add(value)` - добавление нового значение  
2. `list.remove(index), list.remove(value)` - удалить по индексу или значению 

Проход по списку 
```java
```