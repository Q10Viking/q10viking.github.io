"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[72893],{98913:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-f535f822",path:"/concurrency/21%20%E9%98%BB%E5%A1%9E%E9%98%9F%E5%88%97BlockingQueue.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"什么是阻塞队列，举几个应用场景",slug:"什么是阻塞队列-举几个应用场景",children:[]},{level:2,title:"阻塞队列BlockingQueue",slug:"阻塞队列blockingqueue",children:[]},{level:2,title:"队列类型",slug:"队列类型",children:[{level:3,title:"常见的4种阻塞队列",slug:"常见的4种阻塞队列",children:[]}]},{level:2,title:"原理",slug:"原理",children:[{level:3,title:"条件等待队列与同步等待队列的配合",slug:"条件等待队列与同步等待队列的配合",children:[]}]}],filePathRelative:"concurrency/21 阻塞队列BlockingQueue.md"}},53029:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(20641).Fv)('<h2 id="什么是阻塞队列-举几个应用场景" tabindex="-1"><a class="header-anchor" href="#什么是阻塞队列-举几个应用场景" aria-hidden="true">#</a> 什么是阻塞队列，举几个应用场景</h2><p>阻塞队列（BlockingQueue）是一种特殊类型的队列，它用于在多线程环境中实现线程之间的通信。常见的Java阻塞队列实现包括：ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue等。</p><p>阻塞队列具有以下特点：</p><ol><li>当队列为空时，从队列中获取元素的操作会被阻塞，直到队列中有新的元素可用。</li><li>当队列已满时，向队列中添加元素的操作会被阻塞，直到队列中有空位可用。</li></ol><p>以下是几个常见的应用场景：</p><ol><li>生产者-消费者模型：这是阻塞队列最常见的应用场景。生产者将元素添加到队列中，消费者从队列中获取元素。阻塞队列在这里起到了缓冲的作用，避免了生产者和消费者之间的直接竞争。</li><li>线程池的任务队列：阻塞队列可以被用作线程池的任务队列。当有新的任务到达时，它们会被添加到阻塞队列中。当线程池中有空闲线程时，它们会从队列中获取任务并执行。</li><li>线程同步：阻塞队列可以用于实现线程之间的同步。例如，多个线程可以共享一个阻塞队列，当一个线程需要获取某个元素时，如果队列为空，该线程会被阻塞，直到其他线程将元素添加到队列中。</li><li>数据的分发和收集：在某些应用中，可能需要将数据从一个线程分发到其他线程，或者从多个线程收集数据。阻塞队列可以用于实现这种数据传递。</li></ol><p>总之，阻塞队列是一种非常有用的工具，它可以帮助程序员在多线程环境中实现线程之间的通信和同步。</p><h2 id="阻塞队列blockingqueue" tabindex="-1"><a class="header-anchor" href="#阻塞队列blockingqueue" aria-hidden="true">#</a> 阻塞队列BlockingQueue</h2><ol><li>线程通信的一个工具</li><li>它的特性是<strong>在任意时刻只有一个线程可以进行take或者put操作</strong>，并且BlockingQueue提供了超时return null的机制，在许多生产场景里都可以看到这个工具的身影。 <ol><li>线程池，Eureka的三级缓存，Nacos，Netty,MQ(RocketMQ)</li></ol></li></ol><h2 id="队列类型" tabindex="-1"><a class="header-anchor" href="#队列类型" aria-hidden="true">#</a> 队列类型</h2><ol><li>无限队列</li><li>有界队列</li></ol><h3 id="常见的4种阻塞队列" tabindex="-1"><a class="header-anchor" href="#常见的4种阻塞队列" aria-hidden="true">#</a> 常见的4种阻塞队列</h3><ul><li>ArrayBlockingQueue 由数组支持的有界队列</li><li>LinkedBlockingQueue 由链接节点支持的可选有界队列</li><li>PriorityBlockingQueue 由优先级堆支持的无界优先级队列</li><li>DelayQueue 由优先级堆支持的、基于时间的调度队列</li></ul><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">,</span> <span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span>fair<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    notEmpty <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    notFull <span class="token operator">=</span>  lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="条件等待队列与同步等待队列的配合" tabindex="-1"><a class="header-anchor" href="#条件等待队列与同步等待队列的配合" aria-hidden="true">#</a> 条件等待队列与同步等待队列的配合</h3><ol><li>只有CLH队列，才能获取锁</li><li>当条件满足等待时，相应的条件等待队列中的全部Node全部转移到CLH队列</li></ol><p><img src="/images/concurrency/ArrayBlockingQueue.png" alt="ArrayBlockingQueue"></p>',18),l={},t=(0,s(66262).A)(l,[["render",function(n,a){return e}]])},66262:(n,a)=>{a.A=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);