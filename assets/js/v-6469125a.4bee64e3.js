"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[10362],{29876:(t,a,e)=>{e.r(a),e.d(a,{data:()=>o});const o={key:"v-6469125a",path:"/concurrency/07%20volatile%E7%A6%81%E6%AD%A2%E9%87%8D%E6%8E%92%E4%BC%98%E5%8C%96%E5%8E%9F%E7%90%86.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"硬件层的内存屏障",slug:"硬件层的内存屏障",children:[]},{level:2,title:"JVM四类内存屏障指令",slug:"jvm四类内存屏障指令",children:[]},{level:2,title:"基于内存屏障volatile的实现",slug:"基于内存屏障volatile的实现",children:[]}],filePathRelative:"concurrency/07 volatile禁止重排优化原理.md"}},29182:(t,a,e)=>{e.r(a),e.d(a,{default:()=>r});const o=(0,e(20641).Fv)('<p>volatile是如何实现禁止指令重排优化的。先了解一个概念，内存屏障(Memory Barrier）</p><h2 id="硬件层的内存屏障" tabindex="-1"><a class="header-anchor" href="#硬件层的内存屏障" aria-hidden="true">#</a> 硬件层的内存屏障</h2><p>Intel硬件提供了一系列的内存屏障，主要有：</p><ol><li><p>lfence，是一种Load Barrier 读屏障</p></li><li><p>sfence, 是一种Store Barrier 写屏障</p></li><li><p>mfence, 是一种全能型的屏障，具备ifence和sfence的能力</p></li><li><p>Lock前缀，Lock不是一种内存屏障，但是它能完成类似内存屏障的功能。Lock会对CPU总线和高速缓存加锁，可以理解为CPU指令级的一种锁。它后面可以跟ADD, ADC, AND, BTC, BTR, BTS, CMPXCHG, CMPXCH8B, DEC, INC, NEG, NOT, OR, SBB, SUB, XOR, XADD, and XCHG等指令。</p></li></ol><h2 id="jvm四类内存屏障指令" tabindex="-1"><a class="header-anchor" href="#jvm四类内存屏障指令" aria-hidden="true">#</a> JVM四类内存屏障指令</h2><p>不同硬件实现内存屏障的方式不同，Java内存模型屏蔽了这种底层硬件平台的差异，由JVM来为不同的平台生成相应的机器码。 JVM中提供了四类内存屏障指令：</p><table><thead><tr><th>屏障类型</th><th>指令示例</th><th>说明</th></tr></thead><tbody><tr><td>LoadLoad</td><td>Load1; LoadLoad; Load2</td><td>保证load1的读取操作在load2及后续读取操作之前执行</td></tr><tr><td>StoreStore</td><td>Store1; StoreStore; Store2</td><td>在store2及其后的写操作执行前，保证store1的写操作已刷新到主内存</td></tr><tr><td>LoadStore</td><td>Load1; LoadStore; Store2</td><td>在store2及其后的写操作执行前，保证load1的读操作已读取结束</td></tr><tr><td>StoreLoad</td><td>Store1; StoreLoad; Load2</td><td>保证store1的写操作已刷新到主内存之后，load2及其后的读操作才能执行</td></tr></tbody></table><h2 id="基于内存屏障volatile的实现" tabindex="-1"><a class="header-anchor" href="#基于内存屏障volatile的实现" aria-hidden="true">#</a> 基于内存屏障volatile的实现</h2><blockquote><p>javap -v -p name.class</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span> initFlag<span class="token punctuation">;</span>\n    descriptor<span class="token operator">:</span> <span class="token class-name">Z</span>\n    flags<span class="token operator">:</span> <span class="token constant">ACC_PRIVATE</span><span class="token punctuation">,</span> <span class="token constant">ACC_STATIC</span><span class="token punctuation">,</span> <span class="token constant">ACC_VOLATILE</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在字节码层面会添加ACC_VOLATILE</p><p>volatile能够保证可见性（及时看到），能够禁止指令重排序，但是不能确保原子性</p><p><strong>内存屏障</strong>，又称<strong>内存栅栏</strong>，是一个CPU指令，它的作用有两个，<strong>一是保证特定操作的执行顺序</strong>，<strong>二是保证某些变量的内存可见性</strong>（利用该特性实现volatile的内存可见性）</p><ol><li>由于<strong>编译器和处理器</strong>都能执行<strong>指令重排优化</strong>。如果在指令间插入一条Memory Barrier则会告诉编译器和CPU <ol><li>不管什么指令都不能和这条Memory Barrier指令重排序，也就是说通过插入内存屏障禁止在内存屏障前后的指令执行重排序优化。</li><li>Memory Barrier的另外一个作用是<strong>强制刷出各种CPU的缓存数据</strong>，因此任何CPU上的线程都能读取到这些数据的最新版本。</li><li>总之，<strong>volatile变量正是通过内存屏障实现其在内存中的语义，即可见性和禁止重排优化</strong></li></ol></li></ol>',14),n={},r=(0,e(66262).A)(n,[["render",function(t,a){return o}]])},66262:(t,a)=>{a.A=(t,a)=>{const e=t.__vccOpts||t;for(const[t,o]of a)e[t]=o;return e}}}]);