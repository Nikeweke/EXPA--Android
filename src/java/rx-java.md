# RxJava

[[toc]]

--- 

### Intro
RxJava - это реализация Java VM ReactiveX (Reactive Extensions): библиотека для составления асинхронных и основанных на событиях программ с использованием наблюдаемых последовательностей.

Для того чтобы попробовать RxJava нужно создать проект (если в Netbeans, то нужен плагин `Gradle Support`) и указать зависимость в **Maven** или **Gradle**:
#### Gradle
```gradle
// build.gradle
dependecies {
  ...
  compile group: 'io.reactivex.rxjava2', name: 'rxjava', version: '2.1.1'
}
```

#### Maven
```maven
<dependency>
    <groupId>io.reactivex.rxjava2</groupId>
    <artifactId>rxjava</artifactId>
    <version>2.2.0</version>
</dependency>
```

### Example: range()
```java
import io.reactivex.Observable;

public class Index {
    public static void main(String[] args) {
        System.out.println("Hello World JCG in Gradle NetBeans");
        
        Observable <Integer> o = Observable.range(1, 3);
        
        o.subscribe(System.out::println);
        o.subscribe(System.out::println);

        // output: 1 2 3 1 2 3
    }
}
```

### Example: just()
```java
Observable<String> observer = Observable.just("Hello"); // provides data
observer.subscribe(s -> result = s);
      
System.out.println(result);
// output: Hello
```

### Example: create()
```java
public class Index {
    
  // @description: https://github.com/ReactiveX/RxJava/wiki/Creating-Observables#from
  public static void main(String[] args) {
    // create arraylist   
    List<String> list = new ArrayList<>(Arrays.asList("one", "two", "three"));   
      
    // create observable 
    Observable<String> observable = Observable.fromIterable(list);
      
    // create observer   
    Observer<String> observer = new Observer<String>() {
      @Override 
      public void onComplete () {
        System.out.println("onComplete");
      }
      
      @Override 
      public void onError (Throwable e) {
        System.out.println("error occured");
      }
      
      @Override 
      public void onNext (String s) {
        System.out.println("onNext" + s);
      }
      
      @Override
      public void onSubscribe(Disposable d) {
        System.out.println("onSubscribe" + d); 
      }
    };

    observable.subscribe(observer);
  }
}
```

### Example: Subject
```java
// @description: https://medium.com/@poudanen/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-rxjava-subject-publish-replay-behavior-%D0%B8-async-subject-35ad50cd1064
public static void main(String[] args) {
    
  // create subject    
  PublishSubject<String> source = PublishSubject.create();

  // create observer   
  Observer<String> observer = new Observer<String>() {
    @Override 
    public void onComplete () {
      System.out.println("onComplete");
    }

    @Override 
    public void onError (Throwable e) {
      System.out.println("error occured");
    }

    @Override 
    public void onNext (String s) {
      System.out.println("onNext" + s);
    }

    @Override
    public void onSubscribe(Disposable d) {
      System.out.println("onSubscribe" + d); 
    }
  };

  // Получит 1, 2, 3, 4 и onComplete
  source.subscribe(observer); 

  source.onNext("1");
  source.onNext("2");
  source.onNext("3");

  // Получит 4 и onComplete для следующего наблюдателя тоже.source.subscribe(getSecondObserver());
  source.onNext("4");
  source.onComplete();
}
```