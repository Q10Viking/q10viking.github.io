"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[21583],{25155:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-006c0e07",path:"/JVM/04%20JVM%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/JVM/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"1. JVM整体结构及内存模型",slug:"_1-jvm整体结构及内存模型",children:[]},{level:2,title:"2. 完整Java虚拟机结构",slug:"_2-完整java虚拟机结构",children:[]},{level:2,title:"3. 栈（线程）",slug:"_3-栈-线程",children:[{level:3,title:"3.1 栈帧",slug:"_3-1-栈帧",children:[]}]},{level:2,title:"3. 程序计数器",slug:"_3-程序计数器",children:[]},{level:2,title:"4 本地方法栈native",slug:"_4-本地方法栈native",children:[]},{level:2,title:"5 堆",slug:"_5-堆",children:[{level:3,title:"5.1 STW（Stop-The-World）",slug:"_5-1-stw-stop-the-world",children:[]},{level:3,title:"5.2 jvisualvm命令观察GC整体过程",slug:"_5-2-jvisualvm命令观察gc整体过程",children:[]}]},{level:2,title:"6. 方法区（元空间）",slug:"_6-方法区-元空间",children:[]},{level:2,title:"7. 栈与堆之间的关系",slug:"_7-栈与堆之间的关系",children:[]},{level:2,title:"8. 方法区（元空间）& 堆关系❤️",slug:"_8-方法区-元空间-堆关系❤️",children:[]}],filePathRelative:"JVM/04 JVM内存区域.md"}},59731:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(20641);const p=(0,e.Fv)('<h2 id="_1-jvm整体结构及内存模型" tabindex="-1"><a class="header-anchor" href="#_1-jvm整体结构及内存模型" aria-hidden="true">#</a> 1. JVM整体结构及内存模型</h2><p>JVM内存模型主要是指Java虚拟机在运行时所使用的<strong>内存结构</strong>。它主要包括<strong>堆、栈、方法区和程序计数器</strong>等部分。</p><ul><li><p><strong>堆</strong>是JVM中最大的一块内存区域，用于存储<strong>对象实例</strong>。一般通过<strong>new关键字</strong>创建的对象都存放在堆中，堆的大小可以通过启动参数进行调整。堆被所有<strong>线程共享</strong>，但是它的访问是<strong>线程不安全</strong>的，需要通过<strong>锁机制</strong>来保证线程安全。</p></li><li><p>栈用于存储方法调用和局部变量。每个线程在运行时都会有一个独立的栈，栈中的每个方法调用都会创建一个<strong>栈帧</strong>，栈帧包含了方法的参数、局部变量和返回值等信息。栈的大小是固定的，并且栈中的数据是<strong>线程私有</strong>的，不会被其他线程访问。</p></li><li><p>方法区用于存储<strong>类的信息</strong>和<strong>静态变量</strong>。它是所有线程共享的内存区域，存储了类的结构信息、常量池、静态变量和方法字节码等。方法区的大小也可以通过启动参数进行调整。</p></li><li><p>程序计数器是每个<strong>线程私有</strong>的，用于记录当前线程执行的<strong>字节码指令的地址</strong>。每个线程都有一个独立的程序计数器，用于控制线程的执行流程。</p></li></ul><p>JVM内存模型的设计可以提供内存管理和线程安全的机制，同时也保证了Java程序的跨平台性。不同的内存区域有不同的作用和访问规则，合理地管理和利用这些内存区域可以提高Java程序的性能和稳定性。</p><p><img src="/images/jvm/image-20210325224010190.png" alt="image-20210325224010190"></p><h2 id="_2-完整java虚拟机结构" tabindex="-1"><a class="header-anchor" href="#_2-完整java虚拟机结构" aria-hidden="true">#</a> 2. 完整Java虚拟机结构</h2><ol><li>类装载子系统</li><li>运行时数据区</li><li>字节码执行引擎</li></ol><p><img src="/images/jvm/image-20210610215419675.png" alt="image-20210610215419675"></p><h2 id="_3-栈-线程" tabindex="-1"><a class="header-anchor" href="#_3-栈-线程" aria-hidden="true">#</a> 3. 栈（线程）</h2><ol><li>一个线程开始执行，就在虚拟机的<strong>栈内存中为该线程分配一个块独立的内存空间</strong></li><li>在<strong>分配的独立内存空间</strong>中又细化分为<strong>栈帧</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> initData <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> c<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Math</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        math<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><img src="/images/jvm/image-20210325205845843.png" alt="image-20210325205845843"><h3 id="_3-1-栈帧" tabindex="-1"><a class="header-anchor" href="#_3-1-栈帧" aria-hidden="true">#</a> 3.1 栈帧</h3><p>java为每一个方法分配一块独立的栈帧,在栈帧中存储了</p><ol><li><code>局部变量表</code></li><li><code>操作数栈</code></li><li><code>动态链接</code></li><li><code>方法出口</code></li></ol><p><img src="/images/jvm/image-20210325213525732.png" alt="image-20210325213525732"></p><h4 id="_1-局部变量表-操作数栈" tabindex="-1"><a class="header-anchor" href="#_1-局部变量表-操作数栈" aria-hidden="true">#</a> 1. 局部变量表 &amp; 操作数栈</h4><blockquote><p>变量到操作数栈load指令，操作数栈到变量store指令，常数到操作数栈bipush</p><p><strong>操作数栈</strong>是：程序<strong>做操作的临时中转存放的内存空间</strong></p></blockquote><ol><li><p>iconst_2 将int类型常量2压入栈</p></li><li><p>istore_2 将int类型值存入局部变量2</p></li><li><p>iload_1 从局部变量1中装载int类型值</p></li><li><p>iadd</p></li><li><p>bipush 10</p></li><li><p>ireturn</p></li></ol><p><img src="/images/jvm/image-20210325214928489.png" alt="image-20210325214928489"></p><hr><p><strong>main方法中局部表的分析</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token class-name">Math</span> math <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Math</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     math<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在该main的<strong>局部变量表中存放的是new 出来的math对象分配在堆上的内存地址</strong></p><p><img src="/images/jvm/image-20210610224550696.png" alt="image-20210610224550696"></p><h4 id="_2-动态链接-方法出口" tabindex="-1"><a class="header-anchor" href="#_2-动态链接-方法出口" aria-hidden="true">#</a> 2. 动态链接 &amp; 方法出口</h4><p><strong>动态链接</strong>：math.compute()程序运行时，把<strong>符号引用转化为对应代码的内存地址</strong><strong>方法出口</strong>：返回调用方法的某个位置</p><p><img src="/images/jvm/image-20210325215416698.png" alt="image-20210325215416698"></p><h2 id="_3-程序计数器" tabindex="-1"><a class="header-anchor" href="#_3-程序计数器" aria-hidden="true">#</a> 3. 程序计数器</h2><ol><li>字节码执行引擎，会动态修改程序计数器，对应<strong>代码执行的位置</strong></li><li>❤️<strong>cpu分配时间片结束时，线程进行了切换，记录线程执行到的位置</strong>❤️</li></ol><p><img src="/images/jvm/image-20210610222626995.png" alt="image-20210610222626995"></p><hr><h2 id="_4-本地方法栈native" tabindex="-1"><a class="header-anchor" href="#_4-本地方法栈native" aria-hidden="true">#</a> 4 本地方法栈native</h2><p>字节码执行引擎执行到native方法时会去找对应的c语言</p><p>执行那些native方法时需要分配一块内存空间用于执行本地方法栈</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">start0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/jvm/image-20210325221224958.png" alt="image-20210325221224958"></p><hr><h2 id="_5-堆" tabindex="-1"><a class="header-anchor" href="#_5-堆" aria-hidden="true">#</a> 5 堆</h2><p>new出来的对象会放在堆，一般在Eden区</p><p><img src="/images/jvm/image-20210325222836659.png" alt="image-20210325222836659"></p><p>GC大概过程</p><p>GC Root可达性分析: （GC Root根引用）局部变量中引用的对象</p><blockquote><p>在web系统中由于用户不断地请求会不断产生对象，就会进行垃圾回收，在垃圾回收过程中对于非垃圾对象会放到Survivor区S0,S1（在S0和S1中不断转移），其对象的分代年龄会+1，在Eden区的垃圾对象就会被清除,如果对象经过多次GC后还没有被清理，并且分代年龄达到了一定值（最大是15），（或Suvivor区中存储不下了）则会放到老年代</p><p>如果老年代内存不足，就会出现OOM,内存溢出。</p></blockquote><p><strong>jvisualvm命令观察GC整体过程</strong></p><p><img src="/images/jvm/image-20210326001329445.png" alt="image-20210326001329445"></p><h3 id="_5-1-stw-stop-the-world" tabindex="-1"><a class="header-anchor" href="#_5-1-stw-stop-the-world" aria-hidden="true">#</a> 5.1 STW（Stop-The-World）</h3><p>在GC的过程中会触发STW,<strong>会停止所有用户线程（用户发起的线程，如用户下单，用户体验感知会觉得网站卡顿了）</strong></p><p>JVM调优就是为了减少GC次数</p><ol><li><strong>垃圾收集会触发STW机制</strong></li><li><strong>JVM设置STW机制的目的</strong>：<strong>确保GC找的非垃圾对象是有效的</strong>。比如不存在STW，GC在寻找过程中找到的非垃圾对象是用户线程所使用的，在漫长的寻找非垃圾对象过程中，用户线程结束，那么之前的非垃圾对象就会变成垃圾对象了，那么就白找了。在高并发的场景中，GC就变得没有意义了。GC就会频繁的触发</li></ol><h3 id="_5-2-jvisualvm命令观察gc整体过程" tabindex="-1"><a class="header-anchor" href="#_5-2-jvisualvm命令观察gc整体过程" aria-hidden="true">#</a> 5.2 jvisualvm命令观察GC整体过程</h3>',51),t={href:"https://blog.csdn.net/qq_28509737/article/details/106541693",target:"_blank",rel:"noopener noreferrer"},l={href:"https://visualvm.github.io/index.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.cnblogs.com/avivaye/p/10515259.html",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Fv)('<p>jvisualvm工具安装插件VisualGC</p><img src="/images/jvm/image-20210325235915193.png" alt="image-20210325235915193"><p><strong>不断生成对象代码测试观察</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HeadTest</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HeadTest</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HeadTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="/images/jvm/image-202103260013294451" alt="image-20210326001329445"></p><hr><h2 id="_6-方法区-元空间" tabindex="-1"><a class="header-anchor" href="#_6-方法区-元空间" aria-hidden="true">#</a> 6. 方法区（元空间）</h2><p>存储的是class对象，如Math.class,1.8之前又叫<strong>永久区</strong></p><hr><h2 id="_7-栈与堆之间的关系" tabindex="-1"><a class="header-anchor" href="#_7-栈与堆之间的关系" aria-hidden="true">#</a> 7. 栈与堆之间的关系</h2><p><img src="/images/jvm/image-20210325215936583.png" alt="image-20210325215936583"></p><h2 id="_8-方法区-元空间-堆关系❤️" tabindex="-1"><a class="header-anchor" href="#_8-方法区-元空间-堆关系❤️" aria-hidden="true">#</a> 8. 方法区（元空间）&amp; 堆关系❤️</h2><p>方法区主要存储的数据</p><ol><li><strong>常量</strong> static final int</li><li><strong>静态变量</strong> static int</li><li><strong>类元信息</strong> Math.class (const pool)</li></ol><p>堆：主要存放new 出来的对象</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 在方法区中Test类元信息中的user存储的是指向在堆上的User实例所在的内存地址\t</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="/images/jvm/image-20210325220510041.png" alt="image-20210325220510041"></p><hr>',18),i={},r=(0,a(66262).A)(i,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("JDK高版本中不带有jvisualvm"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",l,[(0,e.eW)("jvisualvm官网"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("IDEA集成VisualVM"),(0,e.bF)(a)])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);