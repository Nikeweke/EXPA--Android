# Loop array

### Array
```java
// Array of strings
String[] arrData = {"Alpha", "Beta", "Gamma", "Delta", "Sigma"};

// Loop #1
for(int i = 0; i< arrData.length; i++){
  System.out.println(arrData[i]);
}

// Loop #2
for (String strTemp : arrData){
  System.out.println(strTemp);
}
```

### ArrayList
```java
// Init arrayList of Integers
ArrayList<Integer> arrlist = new ArrayList<Integer>();

// Fill in arraylist with integers
arrlist.add(14);
arrlist.add(7);
arrlist.add(39);
arrlist.add(40);

/* Loop #1. Simple For */
for (int counter = 0; counter < arrlist.size(); counter++) { 		      
    System.out.println(arrlist.get(counter)); 		
}   		

/*  Loop #2. Advanced For Loop */ 		
for (Integer num : arrlist) { 		      
      System.out.println(num); 		
}

/*  Loop #3. While  */ 		
int count = 0; 		
while (arrlist.size() > count) {
System.out.println(arrlist.get(count));
    count++;
}

/* Loop #4. Iterator */
Iterator iter = arrlist.iterator();
while (iter.hasNext()) {
    System.out.println(iter.next());
}
```