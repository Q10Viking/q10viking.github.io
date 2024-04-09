"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[57235],{58362:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-2f0a1da2",path:"/JVM/14%20%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/JVM/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"对垃圾回收器的理解",slug:"对垃圾回收器的理解",children:[]},{level:2,title:"垃圾收集器",slug:"垃圾收集器",children:[]},{level:2,title:"Serial收集器**(-XX:+UseSerialGC  -XX:+UseSerialOldGC)**",slug:"serial收集器-xx-useserialgc-xx-useserialoldgc",children:[]},{level:2,title:"Parallel Scavenge收集器(-XX:+UseParallelGC(年轻代),-XX:+UseParallelOldGC(老年代))",slug:"parallel-scavenge收集器-xx-useparallelgc-年轻代-xx-useparalleloldgc-老年代",children:[]},{level:2,title:"ParNew收集器(-XX:+UseParNewGC)",slug:"parnew收集器-xx-useparnewgc",children:[]},{level:2,title:"CMS收集器(-XX:+UseConcMarkSweepGC(old))",slug:"cms收集器-xx-useconcmarksweepgc-old",children:[{level:3,title:"CMS的相关核心参数",slug:"cms的相关核心参数",children:[]}]},{level:2,title:"亿级流量电商系统如何优化JVM参数设置(ParNew+CMS)",slug:"亿级流量电商系统如何优化jvm参数设置-parnew-cms",children:[]}],filePathRelative:"JVM/14 垃圾收集器.md"}},91157:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const e=(0,n(20641).Fv)('<h2 id="对垃圾回收器的理解" tabindex="-1"><a class="header-anchor" href="#对垃圾回收器的理解" aria-hidden="true">#</a> 对垃圾回收器的理解</h2><p>垃圾收集器是Java虚拟机的一部分，负责管理内存中的对象，以确保内存的有效使用和回收不再使用的对象。以下是对垃圾收集器的理解：</p><ol><li><strong>内存管理</strong>：垃圾收集器负责管理Java应用程序的堆内存。堆内存是用于存储Java对象的区域，而垃圾收集器负责分配、回收和释放这些内存。</li><li><strong>自动回收</strong>：垃圾收集器自动识别不再被引用的对象，并将其标记为垃圾，然后释放这些垃圾对象占用的内存。这个过程是自动的，程序员无需手动释放内存。</li><li><strong>内存泄漏防止</strong>：垃圾收集器可以防止内存泄漏，即程序中的对象无法被回收，导致内存消耗不断增加。通过垃圾收集器，不再使用的对象最终会被回收，释放内存。</li><li><strong>性能影响</strong>：不同的垃圾收集器实现具有不同的性能特性。一些收集器专注于最小化停顿时间（低延迟），而其他收集器则专注于最大化吞吐量。选择合适的垃圾收集器取决于应用程序的性能需求。</li><li><strong>分代垃圾收集</strong>：垃圾收集器通常使用分代策略，将堆内存分为不同的代（通常是年轻代和老年代），以便根据对象的生命周期采用不同的回收策略。年轻代通常使用快速的回收算法，而老年代则采用更复杂的算法。</li><li><strong>垃圾回收算法</strong>：不同的垃圾收集器实现使用不同的垃圾回收算法，如<strong>标记-清除</strong>、<strong>复制</strong>、<strong>标记-整理</strong>等。这些算法有不同的优缺点，适用于不同类型的应用程序。</li></ol><p>总之，垃圾收集器是Java内存管理的关键组成部分，它负责自动管理对象的内存，防止内存泄漏，并提供不同的实现和配置选项，以满足不同类型的应用程序的性能需求。</p><h2 id="垃圾收集器" tabindex="-1"><a class="header-anchor" href="#垃圾收集器" aria-hidden="true">#</a> 垃圾收集器</h2><p><strong>如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现</strong></p><p>虽然我们对各个收集器进行比较，但并非为了挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，<strong>我们能做的就是根据具体应用场景选择适合自己的垃圾收集器</strong></p><p><img src="/images/jvm/95765.png" alt="img"></p><hr><h2 id="serial收集器-xx-useserialgc-xx-useserialoldgc" tabindex="-1"><a class="header-anchor" href="#serial收集器-xx-useserialgc-xx-useserialoldgc" aria-hidden="true">#</a> Serial收集器**(-XX:+UseSerialGC -XX:+UseSerialOldGC)**</h2><blockquote><p><strong>新生代采用复制算法，老年代采用标记-整理算法。</strong></p></blockquote><p>Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。</p><p>它的 <strong>“单线程”</strong> 的意义<strong>不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程</strong>（ <strong>&quot;Stop The World&quot;</strong> ），<strong>直到它收集结束</strong></p><p><img src="/images/jvm/95646.png" alt="img"></p><hr><h2 id="parallel-scavenge收集器-xx-useparallelgc-年轻代-xx-useparalleloldgc-老年代" tabindex="-1"><a class="header-anchor" href="#parallel-scavenge收集器-xx-useparallelgc-年轻代-xx-useparalleloldgc-老年代" aria-hidden="true">#</a> Parallel Scavenge收集器(-XX:+UseParallelGC(年轻代),-XX:+UseParallelOldGC(老年代))</h2><blockquote><p><strong>新生代采用复制算法，老年代采用标记-整理算法</strong></p></blockquote><p><strong>Parallel</strong>收集器其实<strong>就是Serial收集器的多线程版本</strong>，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和Serial收集器类似。默认的收集线程数跟cpu核数相同，当然也可以用参数(<code>-XX:ParallelGCThreads</code>)指定收集线程数，但是一般不推荐修改。</p><p><strong>Parallel Scavenge收集器关注点是吞吐量（高效率的利用CPU）。CMS等垃圾收集器的关注点更多的是用户线程的停顿时间（提高用户体验）。所谓吞吐量就是CPU中用于运行用户代码的时间与CPU总消耗时间的比值。</strong></p><p><img src="/images/jvm/78078.png" alt="img"></p><p><strong>Parallel Old收集器是Parallel Scavenge收集器的老年代版本</strong>。使用多线程和“标记-整理”算法。在注重吞吐量以及CPU资源的场合，都可以优先考虑 Parallel Scavenge收集器和Parallel Old收集器(<strong>JDK8默认的新生代和老年代收集器</strong>)</p><hr><h2 id="parnew收集器-xx-useparnewgc" tabindex="-1"><a class="header-anchor" href="#parnew收集器-xx-useparnewgc" aria-hidden="true">#</a> ParNew收集器(-XX:+UseParNewGC)</h2><blockquote><p><strong>新生代采用复制算法，老年代采用标记-整理算法。</strong></p></blockquote><p>ParNew收集器其实<strong>跟Parallel收集器很类似</strong>，区别主要在于它可以和CMS收集器配合使用</p><p><img src="/images/jvm/92873.png" alt="img"></p><p>它是许多运行在Server模式下的虚拟机的首要选择，除了Serial收集器外，只有它能与CMS收集器（真正意义上的并发收集器，后面会介绍到）配合工作。</p><hr><h2 id="cms收集器-xx-useconcmarksweepgc-old" tabindex="-1"><a class="header-anchor" href="#cms收集器-xx-useconcmarksweepgc-old" aria-hidden="true">#</a> CMS收集器(-XX:+UseConcMarkSweepGC(old))</h2><blockquote><p>主要是用在老年代 CMS收集器是一种 <strong>“标记-清除”算法</strong>实现的</p></blockquote><p><strong>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用，它是HotSpot虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作</strong></p><ol><li><strong>初始标记：</strong> 暂停所有的其他线程(STW)，并<strong>记录</strong>下gc roots<strong>直接能引用的对象</strong>，<strong>速度很快</strong></li><li><strong>并发标记：</strong> 并发标记阶段就是<strong>从GC Roots的直接关联对象开始遍历整个对象图的过程</strong>， 这个<strong>过程耗时较长</strong>但是不需要停顿用户线程， 可以与垃圾收集线程一起并发运行。<strong>因为用户程序继续运行，可能会有导致已经标记过的对象状态发生改变</strong>。</li><li><strong>重新标记：</strong> 重新标记阶段就是为了<strong>修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录</strong>，<strong>这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短。主要用到三色标记里的</strong>增量更新算法(做重新标记。</li><li><strong>并发清理：</strong> 开启用户线程，同时GC线程开始对未标记的区域做清扫。这个阶段如果有新增对象会被标记为黑色不做任何处理。</li><li>**并发重置：**重置本次GC过程中的标记数据。</li></ol><p><img src="/images/jvm/78070.png" alt="img"></p><hr><p>主要优点：<strong>并发收集、低停顿</strong>，缺点：</p><ol><li>对CPU资源敏感（会和服务抢资源）</li><li>无法处理<strong>浮动垃圾</strong>(在并发标记和并发清理阶段又产生垃圾，这种浮动垃圾只能等到下一次gc再清理了)</li><li>它使用的回收算法-<strong>“标记-清除”算法</strong>会导致收集结束时会有<strong>大量空间碎片</strong>产生，当然通过参数<code>-XX:+UseCMSCompactAtFullCollection</code>可以让jvm在执行完标记清除后再做整理 <ol><li>执行过程中的不确定性，会存在上一次垃圾回收还没执行完，然后垃圾回收又被触发的情况，<strong>特别是在并发标记和并发清理阶段会出现</strong>，一边回收，系统一边运行，也许<strong>没回收完就再次触发full gc</strong>，也就是&quot;<strong>concurrent mode failure</strong>&quot;，<strong>此时会进入stop the world，用serial old垃圾收集器来回收</strong></li></ol></li></ol><h3 id="cms的相关核心参数" tabindex="-1"><a class="header-anchor" href="#cms的相关核心参数" aria-hidden="true">#</a> <strong>CMS的相关核心参数</strong></h3><ol><li><code>-XX:+UseConcMarkSweepGC</code>：启用cms</li><li><code>-XX:ConcGCThreads</code>：并发的GC线程数</li><li><code>-XX:+UseCMSCompactAtFullCollection</code>：FullGC之后做压缩整理（减少碎片）</li><li><code>-XX:CMSFullGCsBeforeCompaction</code>：多少次FullGC之后压缩一次，默认是0，代表每次FullGC后都会压缩一次</li><li><code>-XX:CMSInitiatingOccupancyFraction</code>: 当老年代使用达到该比例时会触发FullGC（默认是92，这是百分比）</li><li><code>-XX:+UseCMSInitiatingOccupancyOnly</code>：只使用设定的回收阈值(<code>-XX:CMSInitiatingOccupancyFraction</code>设定的值)，如果不指定，JVM仅在第一次使用设定值，后续则会自动调整</li><li><code>-XX:+CMSScavengeBeforeRemark</code>：在CMS GC前启动一次minor gc，降低CMS GC标记阶段**(<strong>也会对年轻代一起做标记，如果在minor gc就干掉了很多对垃圾对象，标记阶段就会减少一些标记时间</strong>)**时的开销，一般CMS的GC耗时 80%都在标记阶段</li><li><code>-XX:+CMSParallellnitialMarkEnabled</code>：表示在<strong>初始标记的时候多线程执行</strong>，缩短STW</li><li><code>-XX:+CMSParallelRemarkEnabled</code>：<strong>在重新标记的时候多线程执行</strong>，缩短STW;</li></ol><hr><h2 id="亿级流量电商系统如何优化jvm参数设置-parnew-cms" tabindex="-1"><a class="header-anchor" href="#亿级流量电商系统如何优化jvm参数设置-parnew-cms" aria-hidden="true">#</a> <strong>亿级流量电商系统如何优化JVM参数设置(ParNew+CMS)</strong></h2><p><img src="/images/jvm/78582.png" alt="img"></p><p><strong>对于8G内存，我们一般是分配4G内存给JVM，正常的JVM参数配置如下</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms3072M</span> <span class="token operator">-</span><span class="token class-name">Xmx3072M</span> <span class="token operator">-</span><span class="token class-name">Xss1M</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">SurvivorRatio</span><span class="token operator">=</span><span class="token number">8</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这样设置可能会由于<strong>动态对象年龄判断原则</strong>导致频繁full gc（增大新生代的内存空间）</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms3072M</span> <span class="token operator">-</span><span class="token class-name">Xmx3072M</span> <span class="token operator">-</span><span class="token class-name">Xmn2048M</span> <span class="token operator">-</span><span class="token class-name">Xss1M</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">SurvivorRatio</span><span class="token operator">=</span><span class="token number">8</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/jvm/78583.png" alt="img"></p><p>这样就降低了因为对象动态年龄判断原则导致的对象频繁进入老年代的问题，其实<strong>很多优化无非就是让短期存活的对象尽量都留在survivor里，不要进入老年代，这样在minor gc的时候这些对象都会被回收，不会进到老年代从而导致full gc</strong>。</p><hr><p>对于对象年龄应该为多少才移动到老年代比较合适，本例中一次minor gc要间隔二三十秒，<strong>大多数对象一般在几秒内就会变为垃圾，完全可以将默认的15岁改小一点，比如改为5，那么意味着对象要经过5次minor gc才会进入老年代</strong>，整个时间也有一两分钟了，如果对象这么长时间都没被回收，完全可以认为这些对象是会存活的比较长的对象，可以移动到老年代，<strong>而不是继续一直占用survivor区空间</strong>。</p><p>对于多大的对象直接进入老年代(参数<code>-XX:PretenureSizeThreshold</code>)，这个一般可以结合你自己系统看下有没有什么大对象生成，预估下大对象的大小，一般来说设置为1M就差不多了，很少有超过1M的大对象，这些对象一般就是你系统初始化分配的缓存对象，比如大的缓存List，Map之类的对象。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms3072M</span> <span class="token operator">-</span><span class="token class-name">Xmx3072M</span> <span class="token operator">-</span><span class="token class-name">Xmn2048M</span> <span class="token operator">-</span><span class="token class-name">Xss1M</span>  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">SurvivorRatio</span><span class="token operator">=</span><span class="token number">8</span> \n<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxTenuringThreshold</span><span class="token operator">=</span><span class="token number">5</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">PretenureSizeThreshold</span><span class="token operator">=</span><span class="token number">1</span>M \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p>对于JDK8默认的垃圾回收器是<code>-XX:+UseParallelGC</code>(年轻代)和<code>-XX:+UseParallelOldGC(</code>老年代)，如果内存较大(超过4个G，只是经验值)，系统对停顿时间比较敏感，我们可以使用<strong>ParNew+CMS(</strong><code>-XX:+UseParNewGC -XX:+UseConcMarkSweepGC</code><strong>)</strong></p><p>对于老年代CMS的参数如何设置我们可以思考下，首先我们想下当前这个<strong>系统有哪些对象可能会长期存活躲过5次以上minor gc最终进入老年代。</strong></p><p>无非就是那些Spring容器里的Bean，线程池对象，一些初始化缓存数据对象等，这些加起来充其量也就几十MB。</p><p>还有就是某次minor gc完了之后还有超过一两百M的对象存活，那么就会直接进入老年代，比如突然某一秒瞬间要处理五六百单，那么每秒生成的对象可能有一百多M，再加上整个系统可能压力剧增，一个订单要好几秒才能处理完，下一秒可能又有很多订单过来。</p><p>我们可以估算下大概每隔五六分钟出现一次这样的情况，那么大概半小时到一小时之间就可能因为老年代满了触发一次Full GC，Full GC的触发条件还有我们之前说过的<strong>老年代空间分配担保机制</strong>，历次的minor gc挪动到老年代的对象大小肯定是非常小的，所以几乎不会在minor gc触发之前由于老年代空间分配担保失败而产生full gc，其实在半小时后发生full gc，这时候已经过了抢购的最高峰期，后续可能几小时才做一次FullGC。</p><p>对于<strong>碎片整理</strong>，因为都是1小时或几小时才做一次FullGC，是<strong>可以每做完一次就开始碎片整理，或者两到三次之后再做一次也行</strong>。</p><blockquote><p>只要年轻代参数设置合理，老年代CMS的参数设置基本都可以用默认值</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms3072M</span> <span class="token operator">-</span><span class="token class-name">Xmx3072M</span> <span class="token operator">-</span><span class="token class-name">Xmn2048M</span> <span class="token operator">-</span><span class="token class-name">Xss1M</span>  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token number">256</span>M  <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">SurvivorRatio</span><span class="token operator">=</span><span class="token number">8</span> \n<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxTenuringThreshold</span><span class="token operator">=</span><span class="token number">5</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">PretenureSizeThreshold</span><span class="token operator">=</span><span class="token number">1</span>M <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseParNewGC</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseConcMarkSweepGC</span> \n<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">CMSInitiatingOccupancyFraction</span><span class="token operator">=</span><span class="token number">92</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseCMSCompactAtFullCollection</span> <span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">CMSFullGCsBeforeCompaction</span><span class="token operator">=</span><span class="token number">3</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',60),o={},p=(0,n(66262).A)(o,[["render",function(s,a){return e}]])},66262:(s,a)=>{a.A=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}}}]);