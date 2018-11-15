# Generics
[Tutorial](https://www.tutorialspoint.com/java/java_generics.htm)

Было бы неплохо, если бы мы могли написать один метод сортировки, который мог бы сортировать элементы в массива Integer, массива String или массива любого типа, поддерживающего упорядочение.

Java **Generic** позволяет сделать прием любых параметров, без жесткой привязки к возвращаемому и входящему параметрам.

```java
// метод подойдет для всех типов String, Int, ...
public static < E > void printArray( E[] inputArray ) {
  // Display array elements
  for(E element : inputArray) {
      System.out.printf("%s ", element);
  }
  System.out.println();
}

public static void main(String args[]) {
  // Create arrays of Integer, Double and Character
  Integer[] intArray = { 1, 2, 3, 4, 5 };
  Double[] doubleArray = { 1.1, 2.2, 3.3, 4.4 };
  Character[] charArray = { 'H', 'E', 'L', 'L', 'O' };

  System.out.println("Array integerArray contains:");
  printArray(intArray);   // pass an Integer array

  System.out.println("\nArray doubleArray contains:");
  printArray(doubleArray);   // pass a Double array

  System.out.println("\nArray characterArray contains:");
  printArray(charArray);   // pass a Character array
}
```