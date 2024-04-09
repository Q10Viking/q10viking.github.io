"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[23703],{32862:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0965c60b",path:"/tomcat/17%20tomcat%E4%B8%AD%E5%A4%9AReactor%E6%A8%A1%E5%9E%8B.html",title:"",lang:"zh-CN",frontmatter:{"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"tomcat7中nio处理请求体响应的阻塞",slug:"tomcat7中nio处理请求体响应的阻塞",children:[]},{level:2,title:"对象池",slug:"对象池",children:[]},{level:2,title:"nio中接收到连接后多线程与多Reactor模式建立（nio线程模型）",slug:"nio中接收到连接后多线程与多reactor模式建立-nio线程模型",children:[]},{level:2,title:"NIO新连接绑定到Poller的过程以及在Selector中注册和处理事件",slug:"nio新连接绑定到poller的过程以及在selector中注册和处理事件",children:[{level:3,title:"处理读事件",slug:"处理读事件",children:[]}]}],filePathRelative:"tomcat/17 tomcat中多Reactor模型.md"}},38838:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(20641).Fv)('<h2 id="tomcat7中nio处理请求体响应的阻塞" tabindex="-1"><a class="header-anchor" href="#tomcat7中nio处理请求体响应的阻塞" aria-hidden="true">#</a> tomcat7中nio处理请求体响应的阻塞</h2><p>tomcat7 nio中的处理：</p><ol><li>接收socket阻塞</li><li>读数据（请求行，请求头）非阻塞</li><li>请求体---阻塞，响应阻塞。</li></ol><p>tomcat7为什么要在处理请求体，响应时设置为阻塞呢？是为了满足servlet3.0的规范。如果是非阻塞的话，nio socketchannel.read会返回零，表示读取不到数据，那么业务层的循环会跳出，但是我们的业务却并没有读取到完整的请求体。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 非阻塞</span>\nsocketChannel<span class="token punctuation">.</span><span class="token function">setBlock</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n    \n<span class="token comment">// 之前主Selector，在接收到连接后sockchannel,绑定到线程池中的一个Poller,在Poller中有一个Selector,会注册socketchannel的读事件。为了方便处理请求行和请求头时非阻塞</span>\n    \n   <span class="token comment">// 在处理请求体的时候，需要从主Selector中注销socketchannel的读事件</span>\n \n<span class="token comment">// 那么如何处理获取请求体时的阻塞呢</span>\n辅助的<span class="token class-name">Selector</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span>线程<span class="token class-name">BlockPoller</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token keyword">while</span> 看看这个select有没有就绪事件过来，解阻塞（调用传进来的<span class="token class-name">CountDownLatch</span>进行<span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>。\nservlet层的read\n  <span class="token number">1.</span> socketchannel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 没有读到数据才会走下面的,读取到则返回</span>\n  <span class="token number">2.</span> 向辅助的selector注册一个读事件<span class="token punctuation">(</span>selector就像是另外一个小本本<span class="token punctuation">)</span>\n  <span class="token number">3.</span> 加锁阻塞 使用的是<span class="token class-name">CountDownLatch</span>  这个对象会交给辅助的<span class="token class-name">BlockPoller</span>线程。\n  <span class="token number">4.</span> socketchannel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  重复第一步\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="对象池" tabindex="-1"><a class="header-anchor" href="#对象池" aria-hidden="true">#</a> 对象池</h2><blockquote><p>tomcat中广泛使用了对象池，便于复用</p></blockquote><p>每一个SocketChannel对应一个NioChannel,这里设计到NioChannel复用的问题。因为socketchannel关闭之后，那么NioChannel对象为了不被GC处理掉，可以放入到<strong>对象池</strong>中。避免每次有新连接时，都new 一个NioChannel</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">NioChannel</span> channel <span class="token operator">=</span> nioChannels<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//先从线程安全的一个无界队列（对象池）中获取一个channel</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>channel <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 对象池中有NioChannel</span>\n    channel<span class="token punctuation">.</span><span class="token function">setIOChannel</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    channel<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//重置一下</span>\n<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n    <span class="token comment">// 没有获取到</span>\n    channel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioChannel</span><span class="token punctuation">(</span>socket<span class="token punctuation">,</span>channel<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><h2 id="nio中接收到连接后多线程与多reactor模式建立-nio线程模型" tabindex="-1"><a class="header-anchor" href="#nio中接收到连接后多线程与多reactor模式建立-nio线程模型" aria-hidden="true">#</a> nio中接收到连接后多线程与多Reactor模式建立（nio线程模型）</h2><blockquote><p>我的理解<strong>Reactor模式，就相当于是Java中的Selector注册socketchannel感兴趣的事件</strong>。</p><p>每个线程，Poller对一个Reactor模式，多线就建立起来了多Reactor模式。</p></blockquote><p>accept接收连接绑定到poller中，Poller也是Runnable</p><p>socketChannel与Poller是一对多的关系,因为每个Poller上都有一个Selector.</p><p>socketChannel1------绑定到------&gt;Poller1线程</p><p>socketChannel2------绑定到------&gt;Poller1线程</p><p>socketChannel3------绑定到------&gt;Poller2线程</p><p>socketChannel4------绑定到------&gt;Poller2线程</p><p>.... ...</p><p>众多的Poll组成一个Polls。这样能够加快事件的处理方式，提高了性能。因为如果只有一个Poller(Selector)那么就会处理众多socketchannel事件的时候，遍历的次数就会非常长。</p><p><img src="/images/tomcat/image-20220507221800202.png" alt="image-20220507221800202"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 当socketchannel来的时候，轮询选择一个poller进行绑定  NioEndpoint.java</span>\n<span class="token keyword">public</span> <span class="token class-name">Poller</span> <span class="token function">getPoller0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">int</span> idx <span class="token operator">=</span> <span class="token class-name">Max</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>pollerRotater<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> pollers<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> pollers<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h2 id="nio新连接绑定到poller的过程以及在selector中注册和处理事件" tabindex="-1"><a class="header-anchor" href="#nio新连接绑定到poller的过程以及在selector中注册和处理事件" aria-hidden="true">#</a> <strong>NIO新连接绑定到Poller的过程以及在Selector中注册和处理事件</strong></h2><blockquote><p>socketChannel绑定或者注册到Poller中</p></blockquote><p>accept接收（阻塞的）到连接后，绑定到Poller中，构建了一个PollerEvent（也是一个Runnable）（此时含有了KeyAttachment,而KeyAttachment中有socketChannel）加入到Poller中的events队列。就结束了，然后接着去监听下一个请求。</p><p>PollerEvent是一个Runnable,在run方法中注册了OP_RAED事件。</p><p>Poller在的run方法中</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. 直接调用PollerEvent的run方法，注册事件\n2. 然后selector.selector查询就绪事件\n3. 处理就绪事件\n\t3.1 如果就绪的是读事件，那么就会在selector中注销掉读事件，为的就是在后面处理请求体的时候，给辅助的selector注册读事件。\n\t3.2 读取数据，封装为SocketProcessor任务，交给线程池去处理\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>KeyAttachment</strong></p><p>里面有个access方法，每次去读数据的时候，就记录一下时间戳。这样有依据来判断相应的socket是否长时间没有收到数据。</p><h3 id="处理读事件" tabindex="-1"><a class="header-anchor" href="#处理读事件" aria-hidden="true">#</a> 处理读事件</h3><p>new SocketProcessor（也是一个runnable），封装了NioSocketchannel，以及相应的就绪事件,就会去处理解析http协议，请求体和响应体的处理</p><p><img src="/images/tomcat/image-20220507232142617.png" alt="image-20220507232142617"></p><p><img src="/images/tomcat/image-20220507233148035.png" alt="image-20220507233148035"></p>',35),t={},p=(0,a(66262).A)(t,[["render",function(n,s){return e}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);