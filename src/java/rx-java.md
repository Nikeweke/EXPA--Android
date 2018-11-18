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
    
    static String result = "";

    public static void main(String[] args) {
        
//        let observable = rx.Observable.create((obs) => {
//            obs.onNext('asdasd')
//            obs.onCompleted()
//          })
//
//          observable.subscribe(
//            (x)   => console.log(x),
//            (err) => console.log(err),
//            ()    => console.log('completed')
//          )

        // Creating observable
        Observable observable = Observable.create(obs -> {
          obs.onNext("Hello its next");
          obs.onComplete();
        });
        
        
        // 1# Listen for events
//        observable.subscribe(new Observer<Integer>() {
//          public void onNext (Integer t) {
//              System.out.println(t);
//          }
//          
//          public void onSubscribe(Disposable t) {
//              
//          }
//          
//          public void onError (Throwable e) {
//          }
//          
//          public void onComplete () {
//          }
//        });

          // 2# Listen for events
          observable.subscribe(
            System.out::println,
            Throwable::printStackTrace,
            System.out::println
          );
               
    }
}
```