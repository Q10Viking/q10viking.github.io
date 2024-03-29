---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /concurrency/
typora-root-url: ..\.vuepress\public
---



## CyclicBarrier简介

1. **栅栏(zhà lan)屏障**，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续运行。
2. CyclicBarrier默认的构造方法是CyclicBarrier（int parties），其参数表示屏障拦截的线程数量，每个线程调用await方法告CyclicBarrier我已经到达了屏障，然后当前线程被阻塞.

```java
cyclicBarrier.await();
```

CyclicBarrier是Java中的一个多线程协作工具，它可以让多个线程在一个屏障点等待，并在所有线程都到达后一起继续执行。与CountDownLatch不同，CyclicBarrier可以重复使用，并且可以指定屏障点后执行的额外动作。

CyclicBarrier的主要特点有三个。

- **首先，**它**可以重复使用，这意味着当所有线程都到达屏障点后，屏障会自动重置**，可以用来处理多次需要等待的任务。
- **其次，**CyclicBarrier可以协调多个线程同时开始执行，这在分阶段任务和并发游戏等场景中非常有用。
- **最后，**CyclicBarrier还提供了可选的动作，在所有线程到达屏障点时执行，可以实现额外的逻辑。

需要注意的是，在创建CyclicBarrier时需要指定参与线程的数量。一旦所有参与线程都到达屏障点后，CyclicBarrier解除阻塞，所有线程可以继续执行后续操作。

## 应用场景

可以用于多线程计算数据，最后合并计算结果的场景。例如，用一个Excel保存了用户所有银行流水，每个Sheet保存一个账户近一年的每笔银行流水，现在需要统计用户的日均银行流水，先用多线程处理每个sheet里的银行流水，都执行完之后，得到每个sheet的日均银行流水，最后，再用barrierAction用这些线程的计算结果，计算出整个Excel的日均银行流水

## 使用

```java
public class CyclicBarrierRunner implements Runnable {
    private CyclicBarrier cyclicBarrier;
    private int index ;

    public CyclicBarrierRunner(CyclicBarrier cyclicBarrier, int index) {
        this.cyclicBarrier = cyclicBarrier;
        this.index = index;
    }

    public void run() {
        try {
            System.out.println("index: " + index);
            cyclicBarrier.await();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        CyclicBarrier cyclicBarrier = new CyclicBarrier(11, ()-> System.out.println("所有特工到达屏障，准备开始执行秘密任务"));
        for (int i = 0; i < 10; i++) {
            new Thread(new CyclicBarrierRunner(cyclicBarrier, i)).start();
        }
        cyclicBarrier.await();
        System.out.println("全部到达屏障....1");
    }
}
/**
 index: 0
 index: 3
 index: 1
 index: 5
 index: 4
 index: 2
 index: 7
 index: 6
 index: 9
 index: 8
 所有特工到达屏障，准备开始执行秘密任务
 全部到达屏障....1
 */
```



## CountDownLatch与CyclicBarrier

CountDownLatch和CyclicBarrier都能够实现线程之间的等待，只不过它们侧重点不同：

CountDownLatch一般用于一个或多个线程，等待其他线程执行完任务后，再才执行
CyclicBarrier一般用于一组线程互相等待至某个状态，然后这一组线程再同时执行另外，CountDownLatch是减计数，计数减为0后不能重用,而CyclicBarrier是加计数，可置0后复用。
