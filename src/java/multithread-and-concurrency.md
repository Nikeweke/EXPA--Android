# Multithread and concurrency
[Tutorial](https://www.tutorialspoint.com/java/java_multithreading.htm)

Java - многопоточный язык программирования, что означает, что мы можем разрабатывать многопоточную программу с использованием Java. Многопоточная программа содержит две или более части, которые могут выполняться одновременно, и каждая часть может обрабатывать другую задачу, одновременно обеспечивая оптимальное использование доступных ресурсов, особенно когда ваш компьютер имеет несколько процессоров.

Ниже приведены этапы жизненного цикла:

![](https://www.tutorialspoint.com/java/images/Thread_Life_Cycle.jpg)

* **Новый** - новый поток начинает свой жизненный цикл в новом состоянии. Он остается в этом состоянии, пока программа не запустит нить. Он также упоминается как рожденная нить.

* **Runnable** - После запуска новорожденного потока поток становится управляемым. Поток в этом состоянии считается выполняющим его задачу.

* **Ожидание**. Иногда поток переходит в состояние ожидания, пока поток ожидает другого потока для выполнения задачи. Поток переходит в состояние запуска только тогда, когда другой поток сигнализирует, что поток ожидания продолжит выполнение.

* **Timed Waiting (Ожидание в ожидании)** - текущая нить может входить в состояние ожидания по времени в течение заданного интервала времени. Поток в этом состоянии переходит в состояние запуска при истечении этого интервала времени или когда происходит событие, которое оно ожидает.

* **Завершение (мертвое)**. Выполняемая нить входит в законченное состояние, когда она завершает свою задачу или иным образом завершается.

### Приоритеты потоков (threads) 
Каждый поток Java имеет приоритет, который помогает операционной системе определить порядок, в котором запланированы потоки.

Приоритеты потоков Java находятся в диапазоне между **`MIN_PRIORITY` (константа 1)** и **`MAX_PRIORITY` (константа 10)**. По умолчанию каждому потоку присваивается приоритет **`NORM_PRIORITY` (постоянная 5)**.

Потоки с более высоким приоритетом важны для программы и должны выделяться процессорным временем перед потоками с более низким приоритетом. Однако приоритеты потоков не могут гарантировать порядок, в котором потоки выполняются и зависят от платформы.

### Example #1
```java
/*
*  Create a Thread by Implementing a Runnable Interface
*/ 
public class Tester {
    
    public static void main(String args[]) {
       RunnableDemo R1 = new RunnableDemo( "Thread-1");
       R1.start();

       RunnableDemo R2 = new RunnableDemo( "Thread-2");
       R2.start();
    }   
    
}

 class RunnableDemo implements Runnable {
   private Thread t;
   private String threadName;
   
   // __construct
   RunnableDemo( String name) {
      threadName = name;
      System.out.println("Creating " +  threadName );
   }
   
   // 
   public void run() {
      System.out.println("Running " +  threadName );
      try {
         for(int i = 4; i > 0; i--) {
            System.out.println("Thread: " + threadName + ", " + i);
            // Let the thread sleep for a while.
            Thread.sleep(50);
         }
      } catch (InterruptedException e) {
         System.out.println("Thread " +  threadName + " interrupted.");
      }
      System.out.println("Thread " +  threadName + " exiting.");
   }
   
   // 
   public void start () {
      System.out.println("Starting " +  threadName );
      if (t == null) {
         t = new Thread (this, threadName);
         t.start ();
      }
   }
}
```

### Example #2
```java
/*
*  Create a Thread by Extending a Thread Class
*/ 
public class Tester {
  public static void main(String args[]) {
    ThreadDemo T1 = new ThreadDemo( "Thread-1");
    T1.start();
    
    ThreadDemo T2 = new ThreadDemo( "Thread-2");
    T2.start();
  }   
}

class ThreadDemo extends Thread {
  private Thread t;
  private String threadName;
  
  ThreadDemo(String name) {
    threadName = name;
    System.out.println("Creating " +  threadName );
  }
  
  public void run() {
    System.out.println("Running " +  threadName );
    try {
        for(int i = 4; i > 0; i--) {
          System.out.println("Thread: " + threadName + ", " + i);
          // Let the thread sleep for a while.
          Thread.sleep(50);
        }
    } catch (InterruptedException e) {
        System.out.println("Thread " +  threadName + " interrupted.");
    }
    System.out.println("Thread " +  threadName + " exiting.");
  }
  
  public void start () {
    System.out.println("Starting " +  threadName );
    if (t == null) {
        t = new Thread (this, threadName);
        t.start ();
    }
  }
}

```