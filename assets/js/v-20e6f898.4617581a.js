"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[1014],{98065:(r,o,t)=>{t.r(o),t.d(o,{data:()=>l});const l={key:"v-20e6f898",path:"/concurrency/05%20JMM%E6%A8%A1%E5%9E%8B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"JMM模型",slug:"jmm模型",children:[{level:3,title:"JMM不同于JVM内存区域模型",slug:"jmm不同于jvm内存区域模型",children:[]},{level:3,title:"主内存",slug:"主内存",children:[]},{level:3,title:"工作内存",slug:"工作内存",children:[]}]},{level:2,title:"Java内存模型与硬件内存架构的关系",slug:"java内存模型与硬件内存架构的关系",children:[]},{level:2,title:"JMM存在的必要性",slug:"jmm存在的必要性",children:[]},{level:2,title:"数据同步八大原子操作",slug:"数据同步八大原子操作",children:[{level:3,title:"同步规则分析",slug:"同步规则分析",children:[]}]}],filePathRelative:"concurrency/05 JMM模型.md"}},97136:(r,o,t)=>{t.r(o),t.d(o,{default:()=>s});const l=(0,t(20641).Fv)('<h2 id="jmm模型" tabindex="-1"><a class="header-anchor" href="#jmm模型" aria-hidden="true">#</a> JMM模型</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>核心概念：线程的工作内存</p></div><p><strong>JMM的作用主要是屏蔽底层硬件和操作系统的内存访问差异</strong>，实现平台一致性，使得Java程序在不同平台下能达到一致的内存访问结果。同时，JMM也规范了JVM如何与计算机内存进行交互，从而保证并发程序的正确性和可靠性。</p><ol><li><p>Java内存模型(Java Memory Model简称JMM)是一种<strong>抽象的概念</strong>，并不真实存在，它<strong>描述的是一组规则或规范</strong>，通过这组规范<strong>定义了程序中各个变量</strong>（包括实例字段，静态字段和构成数组对象的元素）的<strong>访问方式</strong>。</p></li><li><p>JVM运行程序的实体是线程，而<strong>每个线程创建时JVM都会为其创建一个工作内存</strong>(有些地方称为栈空间)，用于存储线程私有的数据，而Java内存模型中规定所有变量都存储在主内存，主内存是共享内存区域，所有线程都可以访问，<strong>但线程对变量的操作(读取赋值等)必须在工作内存中进行</strong></p><ol><li>❤️首先要将变量从主内存拷贝的自己的工作内存空间❤️</li><li>然后对变量进行操作</li><li>操作完成后再将变量写回主内存，不能直接操作主内存中的变量，<strong>工作内存中存储着主内存中的变量副本拷贝</strong></li></ol></li><li><p><strong>工作内存是每个线程的私有数据区域</strong>，因此不同的线程间无法访问对方的工作内存，<strong>线程间的通信(传值)必须通过主内存来完成</strong>。</p></li></ol><h3 id="jmm不同于jvm内存区域模型" tabindex="-1"><a class="header-anchor" href="#jmm不同于jvm内存区域模型" aria-hidden="true">#</a> JMM不同于JVM内存区域模型</h3><ol><li>JMM与JVM内存区域的划分是不同的概念层次，更恰当说JMM描述的是一组规则，<strong>通过这组规则控制程序中各个变量在共享数据区域和私有数据区域的访问方式</strong></li><li><strong>JMM是围绕原子性，有序性、可见性展开</strong>。</li><li>JMM与Java内存区域唯一相似点，都存在共享数据区域和私有数据区域，<strong>在JMM中主内存属于共享数据区域</strong>，从某个程度上讲应该包括了堆和方法区，而<strong>工作内存数据线程私有数据区域</strong>，从某个程度上讲则应该包括程序计数器、虚拟机栈以及本地方法栈。</li></ol><p><img src="/images/concurrency/14414.png" alt="img"></p><hr><h3 id="主内存" tabindex="-1"><a class="header-anchor" href="#主内存" aria-hidden="true">#</a> 主内存</h3><p>主要存储的是Java实例对象，所有线程创建的实例对象都存放在主内存中，不管该<strong>实例对象是成员变量还是方法中的本地变量(也称局部变量)</strong>，当然也包括了<strong>共享的类信息、常量、静态变量</strong>。由于是共享数据区域，多条线程对同一个变量进行访问可能会发生线程安全问题。</p><h3 id="工作内存" tabindex="-1"><a class="header-anchor" href="#工作内存" aria-hidden="true">#</a> 工作内存</h3><ol><li>主要存储当前方法的所有本地变量信息(工作内存中<strong>存储着主内存中的变量副本拷贝</strong>)</li><li>每个线程只能访问自己的工作内存，即线程中的本地变量<strong>对其它线程是不可见的</strong>，就算是两个线程执行的是同一段代码，它们也会各自在自己的工作内存中创建属于当前线程的本地变量，当然也包括了字节码行号指示器、相关Native方法的信息。</li><li>注意由于工作内存是每个线程的私有数据，线程间无法相互访问工作内存，因此<strong>存储在工作内存的数据不存在线程安全问题</strong>。</li></ol><hr><p>根据JVM虚拟机规范主内存与工作内存的数据存储类型以及操作方式</p><ol><li><strong>对于一个实例对象中的成员方法而言，如果方法中包含本地变量是基本数据类型（boolean,byte,short,char,int,long,float,double），将直接存储在工作内存的帧栈结构中</strong></li><li>但倘若本地变量是<strong>引用类型</strong>，那么<strong>该变量的引用会存储在工作内存的帧栈中</strong>，而<strong>对象实例将存储在主内存(共享数据区域，堆)中</strong>。 <ol><li>但对于<strong>实例对象的成员变量</strong>，不管它是基本数据类型或者包装类型(Integer、Double等)还是引用类型，都会被<strong>存储到堆区</strong>。</li><li><strong>至于static变量以及类本身相关信息将会存储在主内存中</strong>。</li><li>需要注意的是，在主内存中的实例对象可以被多线程共享，<strong>倘若两个线程同时调用了同一个对象的同一个方法，那么两条线程会将要操作的数据拷贝一份到自己的工作内存中，执行完成操作后才刷新到主内存</strong></li></ol></li></ol><p><img src="/images/concurrency/14401.png" alt="img"></p><h2 id="java内存模型与硬件内存架构的关系" tabindex="-1"><a class="header-anchor" href="#java内存模型与硬件内存架构的关系" aria-hidden="true">#</a> Java内存模型与硬件内存架构的关系</h2><p>通过<strong>硬件内存架构</strong>、<strong>Java内存模型</strong>以及<strong>Java多线程的实现原理</strong>的了解，我们应该已经意识到，多线程的执行最终都会映射到硬件处理器上进行执行，但Java内存模型和硬件内存架构并不完全一致。</p><ol><li>对于硬件内存来说只有寄存器、缓存内存、主内存的概念，并没有工作内存(线程私有数据区域)和主内存(堆内存)之分，也就是说Java内存模型对内存的划分对硬件内存并没有任何影响，因为J<strong>MM只是一种抽象的概念，是一组规则，并不实际存在</strong></li><li>不管是工作内存的数据还是主内存的数据，对于计算机硬件来说都会存储在计算机主内存中，当然也有可能存储到CPU缓存或者寄存器中，因此总体上来说，Java内存模型和计算机硬件内存架构是一个<strong>相互交叉的关系</strong>，是一种<strong>抽象概念划分与真实物理硬件的交叉</strong></li></ol><p><img src="/images/concurrency/14403.png" alt="img"></p><h2 id="jmm存在的必要性" tabindex="-1"><a class="header-anchor" href="#jmm存在的必要性" aria-hidden="true">#</a> JMM存在的必要性</h2><blockquote><p>确保线程工作内存与主内存数据一致性</p></blockquote><ol><li><p>由于JVM运行程序的实体是线程，而每个线程创建时JVM都会为其创建一个工作内存(有些地方称为栈空间)，用于存储线程私有的数据，线程与主内存中的变量操作必须通过工作内存间接完成，主要过程是将变量从主内存拷贝的每个线程各自的工作内存空间，然后对变量进行操作，操作完成后再将变量写回主内存，<strong>如果存在两个线程同时对一个主内存中的实例对象的变量进行操作就有可能诱发线程安全问题</strong>。</p></li><li><p>假设主内存中存在一个共享变量x，现在有A和B两条线程分别对该变量x=1进行操作，A/B线程各自的工作内存中存在共享变量副本x。假设现在A线程想要修改x的值为2，而B线程却想要读取x的值，那么B线程读取到的值是A线程更新后的值2还是更新前的值1呢？答案是，不确定，即B线程有可能读取到A线程更新前的值1，也有可能读取到A线程更新后的值2。</p><ol><li>这是因为工作内存是每个线程私有的数据区域，而线程A变量x时，首先是将变量从主内存拷贝到A线程的工作内存中，然后对变量进行操作，操作完成后再将变量x写回主内，而对于B线程的也是类似的，这样就有可能<strong>造成主内存与工作内存间数据存在一致性问题</strong></li><li>假如A线程修改完后正在将数据写回主内存，而B线程此时正在读取主内存，即将x=1拷贝到自己的工作内存中，这样B线程读取到的值就是x=1，但如果A线程已将x=2写回主内存后，B线程才开始读取的话，那么此时B线程读取到的就是x=2，但到底是哪种情况先发生呢？</li></ol><p><img src="/images/concurrency/14416.png" alt="img"></p></li></ol><p>以上关于主内存与工作内存之间的具体交互协议，即<strong>一个变量如何从主内存拷贝到工作内存、如何从工作内存同步到主内存之间的实现细节</strong>，Java内存模型定义了以下八种操作来完成。</p><h2 id="数据同步八大原子操作" tabindex="-1"><a class="header-anchor" href="#数据同步八大原子操作" aria-hidden="true">#</a> 数据同步八大原子操作</h2><ol><li><strong>read(读取)</strong>：作用于主内存的变量，把一个变量值从主内存传输到线程的工作内存中，以便随后的load动作使用</li><li><strong>load(载入)</strong>：作用于工作内存的变量，它把read操作从主内存中得到的变量值<strong>放入工作内存的变量副本中</strong></li><li><strong>use(使用)</strong>：作用于工作内存的变量，把<strong>工作内存中的一个变量值传递给执行引擎</strong></li><li><strong>assign(赋值)</strong>：作用于工作内存的变量，它<strong>把一个从执行引擎接收到的值赋给工作内存的变量</strong></li><li><strong>store(存储)</strong>：作用于工作内存的变量，<strong>把工作内存中的一个变量的值传送到主内存中</strong>，以便随后的write的操作</li><li><strong>write(写入)</strong>：作用于工作内存的变量，它把store操作<strong>从工作内存中的一个变量的值传送到主内存的变量中</strong></li><li><strong>lock(锁定)</strong>：作用于主内存的变量，把一个变量标记为一条线程独占状态</li><li><strong>unlock(解锁)</strong>：作用于主内存的变量，把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定</li></ol><p><img src="/images/concurrency/14410.png" alt="img"></p><h3 id="同步规则分析" tabindex="-1"><a class="header-anchor" href="#同步规则分析" aria-hidden="true">#</a> 同步规则分析</h3><ol><li>不允许一个线程无原因地（没有发生过任何assign操作）把数据从工作内存同步回主内存中</li><li>一个新的变量只能在主内存中诞生，不允许在工作内存中直接使用一个未被初始化（load或者assign）的变量。即就是对一个变量实施use和store操作之前，必须先自行load和assign操作。</li><li>一个变量在同一时刻只允许一条线程对其进行lock操作，但lock操作可以被同一线程重复执行多次，多次执行lock后，只有执行相同次数的unlock操作，变量才会被解锁。lock和unlock必须成对出现。</li><li>如果对一个变量执行lock操作，<strong>将会清空工作内存中此变量的值</strong>，在执行引擎使用这个变量之前需要重新执行load或assign操作初始化变量的值。</li><li>如果一个变量事先没有被lock操作锁定，则不允许对它执行unlock操作；也不允许去unlock一个被其他线程锁定的变量。</li><li>对一个变量执行unlock操作之前，必须先把此变量同步到主内存中（执行store和write操作）</li></ol>',29),n={},s=(0,t(66262).A)(n,[["render",function(r,o){return l}]])},66262:(r,o)=>{o.A=(r,o)=>{const t=r.__vccOpts||r;for(const[r,l]of o)t[r]=l;return t}}}]);