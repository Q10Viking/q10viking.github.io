"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[34178],{54048:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-31287e84",path:"/netty/22%20%E7%BC%96%E7%A0%81%E5%99%A8%E4%B8%8E%E8%A7%A3%E7%A0%81%E5%99%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/netty/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"什么是编解码器",slug:"什么是编解码器",children:[]},{level:2,title:"解码器",slug:"解码器",children:[{level:3,title:"将字节解码为消息",slug:"将字节解码为消息",children:[]},{level:3,title:"将一种消息类型解码为另一种",slug:"将一种消息类型解码为另一种",children:[]},{level:3,title:"TooLongFrameException",slug:"toolongframeexception",children:[]}]},{level:2,title:"编码器",slug:"编码器",children:[{level:3,title:"将消息编码为字节",slug:"将消息编码为字节",children:[]},{level:3,title:"将消息编码为消息",slug:"将消息编码为消息",children:[]}]},{level:2,title:"netty带有的",slug:"netty带有的",children:[]}],filePathRelative:"netty/22 编码器与解码器.md"}},68299:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(20641);const p=(0,e.Fv)('<h2 id="什么是编解码器" tabindex="-1"><a class="header-anchor" href="#什么是编解码器" aria-hidden="true">#</a> <strong>什么是编解码器</strong></h2><p>每个网络应用程序都必须定义如何解析在两个节点之间来回传输的原始字节，以及如何将其和目标应用程序的数据格式做相互转换。这种转换逻辑由编解码器处理，编解码器由编码器和解码器组成，它们每种都可以将字节流从一种格式转换为另一种格式。那么它们的区别是什么呢？</p><p>如果将消息看作是对于特定的应用程序具有具体含义的结构化的字节序列—它的数据。那么编码器是将消息转换为适合于传输的格式（最有可能的就是字节流）；而对应的解码器则是将网络字节流转换回应用程序的消息格式</p><blockquote><p>编码器操作出站数据，而解码器处理入站数据</p></blockquote><h2 id="解码器" tabindex="-1"><a class="header-anchor" href="#解码器" aria-hidden="true">#</a> 解码器</h2><ul><li>将字节解码为消息——ByteToMessageDecoder</li><li>将一种消息类型解码为另一种——MessageToMessageDecoder。</li></ul><p>因为解码器是负责将入站数据从一种格式转换到另一种格式的，所以Netty 的解码器实现了ChannelInboundHandler。</p><p>什么时候会用到解码器呢？很简单：每当需要为ChannelPipeline 中的下一个ChannelInboundHandler 转换入站数据时会用到。此外，得益于ChannelPipeline 的设计，可以将多个解码器链接在一起，以实现任意复杂的转换逻辑。</p><blockquote><p>比如一个实际的业务场景，两端通信，通过JSON交换信息，而且JSON文本需要加密，接收端就可以：</p></blockquote><ul><li>网络加密报文 -&gt; 经过ByteToMessageDecoder -&gt; String类型的JSON明文；</li><li>String类型的JSON文本-&gt; 经过MessageToMessageDecoder -&gt; Java里的对象</li></ul><p>所以我们可以把ByteToMessageDecoder 看成一次解码器，MessageToMessageDecoder 看成二次或者多次解码器</p><h3 id="将字节解码为消息" tabindex="-1"><a class="header-anchor" href="#将字节解码为消息" aria-hidden="true">#</a> <strong>将字节解码为消息</strong></h3><blockquote><p><strong>抽象类ByteToMessageDecoder</strong></p></blockquote><p>将字节解码为消息（或者另一个字节序列）是一项如此常见的任务，Netty 为它提供了一个抽象的基类：ByteToMessageDecoder。由于你不可能知道远程节点是否会一次性地发送一个完整的消息，所以这个类会对入站数据进行缓冲，直到它准备好处理。</p><p>它最重要方法</p><p>decode(ChannelHandlerContext ctx,ByteBuf in,List out)是必须实现的唯一抽象方法。decode()方法被调用时将会传入一个包含了传入数据的ByteBuf，以及一个用来添加解码消息的List。对这个方法的调用将会重复进行，直到确定没有新的元素被添加到该List，或者该ByteBuf 中没有更多可读取的字节时为止。然后，如果该List 不为空，那么它的内容将会被传递给ChannelPipeline 中的下一个ChannelInboundHandler。</p><h3 id="将一种消息类型解码为另一种" tabindex="-1"><a class="header-anchor" href="#将一种消息类型解码为另一种" aria-hidden="true">#</a> <strong>将一种消息类型解码为另一种</strong></h3><p>在两个消息格式之间进行转换（例如，从String-&gt;Integer）</p><p>decode(ChannelHandlerContext ctx,I msg,List out)对于每个需要被解码为另一种格式的入站消息来说，该方法都将会被调用。解码消息随后会被传递给ChannelPipeline中的下一个ChannelInboundHandlerMessageToMessageDecoder，T代表源数据的类型</p>',19),t={href:"https://github.com/Q10Viking/learncode/tree/main/Netty/HelloWorld/src/main/java/org/hzz/msgpack",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>入站的pipeline：LengthFieldBasedFrameDecoder-&gt;MsgPackDecoder-&gt;BusiServerHandler\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgPackDecoder</span> <span class="token keyword">extends</span> <span class="token class-name">MessageToMessageDecoder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ByteBuf</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> in<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token keyword">final</span> <span class="token keyword">int</span> length <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        in<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">readerIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>array<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">MessagePack</span> messagePack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessagePack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>messagePack<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>BusiServerHandler拿到的msg就是User了</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BusiServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token comment">//将上一个handler生成的数据强制转型</span>\n        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span>msg<span class="token punctuation">;</span>\n        ctx<span class="token punctuation">.</span><span class="token function">fireChannelRead</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="toolongframeexception" tabindex="-1"><a class="header-anchor" href="#toolongframeexception" aria-hidden="true">#</a> <strong>TooLongFrameException</strong></h3><p>由于Netty 是一个异步框架，所以需要在字节可以解码之前在内存中缓冲它们。因此，不能让解码器缓冲大量的数据以至于耗尽可用的内存。为了解除这个常见的顾虑，Netty 提供了TooLongFrameException 类，其将由解码器在帧超出指定的大小限制时抛出。</p><p>为了避免这种情况，你可以设置一个最大字节数的阈值，如果超出该阈值，则会导致抛出一个TooLongFrameException（随后会被ChannelHandler.exceptionCaught()方法捕获）。然后，如何处理该异常则完全取决于该解码器的用户。某些协议（如HTTP）可能允许你返回一个特殊的响应。而在其他的情况下，唯一的选择可能就是关闭对应的连接。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TooLongExSample</span>  <span class="token keyword">extends</span> <span class="token class-name">ByteToMessageDecoder</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">MAX_SIZE</span> <span class="token operator">=</span> <span class="token number">1024</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> in<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span>\n            <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> readable <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readableBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>readable<span class="token operator">&gt;</span><span class="token constant">MAX_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TooLongFrameException</span><span class="token punctuation">(</span><span class="token string">&quot;传入的数据太多&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            out<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr><h2 id="编码器" tabindex="-1"><a class="header-anchor" href="#编码器" aria-hidden="true">#</a> <strong>编码器</strong></h2><p>解码器的功能正好相反。Netty 提供了一组类，用于帮助你编写具有以下功能的编码器：</p><ul><li>将消息编码为字节；MessageToByteEncoder &lt; I &gt;</li><li>将消息编码为消息：MessageToMessageEncoder&lt; T &gt;，T代表源数据的类型</li></ul><p><em>还是用我们上面的业务场景，两端通信，通过JSON交换信息，而且JSON文本需要加密，发送端就可以：</em></p><p><em>Java里的对象-&gt; 经过MessageToMessageEncoder -&gt; String类型的JSON文本</em></p><p><em>String类型的JSON明文 -&gt; 经过MessageToByteEncoder-&gt; 网络加密报文；</em></p><p><em>所以我们可以把MessageToByteEncoder看成网络报文编码器，MessageToMessageEncoder看成业务编码器。</em></p><h3 id="将消息编码为字节" tabindex="-1"><a class="header-anchor" href="#将消息编码为字节" aria-hidden="true">#</a> <strong>将消息编码为字节</strong></h3><p>encode(ChannelHandlerContext ctx,I msg,ByteBuf out)</p><p>encode()方法是你需要实现的唯一抽象方法。它被调用时将会传入要被该类编码为ByteBuf 的出站消息（类型为I 的）。该ByteBuf 随后将会被转发给ChannelPipeline中的下一个ChannelOutboundHandler</p><h3 id="将消息编码为消息" tabindex="-1"><a class="header-anchor" href="#将消息编码为消息" aria-hidden="true">#</a> <strong>将消息编码为消息</strong></h3><p>encode(ChannelHandlerContext ctx,I msg,List out)这是需要实现的唯一方法。每个通过write()方法写入的消息都将会被传递给encode()方法，以编码为一个或者多个出站消息。随后，这些出站消息将会被转发给ChannelPipeline中的下一个ChannelOutboundHandler</p>',21),c={href:"https://github.com/Q10Viking/learncode/tree/main/Netty/HelloWorld/src/main/java/org/hzz/msgpack",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<blockquote><p>出站pipeline: LengthFieldPrepender&lt;-MsgPackEncode&lt;-ClientBusiHandler</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgPackEncode</span> <span class="token keyword">extends</span> <span class="token class-name">MessageToByteEncoder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">encode</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">User</span> msg<span class="token punctuation">,</span> <span class="token class-name">ByteBuf</span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">MessagePack</span> messagePack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessagePack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> raw <span class="token operator">=</span> messagePack<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        out<span class="token punctuation">.</span><span class="token function">writeBytes</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>MsgPackEncode接收到上一层ClientBusiHandler传递过来的User对象</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClientBusiHandler</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleChannelInboundHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ByteBuf</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> sendNumber<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token class-name">ClientBusiHandler</span><span class="token punctuation">(</span><span class="token keyword">int</span> sendNumber<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>sendNumber <span class="token operator">=</span> sendNumber<span class="token punctuation">;</span><span class="token punctuation">}</span>\n\n\n    <span class="token doc-comment comment">/*** 客户端被通知channel活跃后，做事*/</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">User</span><span class="token punctuation">[</span><span class="token punctuation">]</span> users <span class="token operator">=</span> <span class="token function">makeUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//发送数据</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token operator">:</span>users<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Send user:&quot;</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            ctx<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        ctx<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/*生成用户实体类的数组，以供发送*/</span>\n    <span class="token keyword">private</span> <span class="token class-name">User</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">makeUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">User</span><span class="token punctuation">[</span><span class="token punctuation">]</span> users<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">[</span>sendNumber<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token class-name">User</span> user <span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>sendNumber<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            user<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">String</span> userName <span class="token operator">=</span> <span class="token string">&quot;ABCDEFG ---&gt;&quot;</span><span class="token operator">+</span>i<span class="token punctuation">;</span>\n            user<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;No:&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>sendNumber<span class="token operator">-</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            user<span class="token punctuation">.</span><span class="token function">setUserContact</span><span class="token punctuation">(</span>\n                    <span class="token keyword">new</span> <span class="token class-name">UserContact</span><span class="token punctuation">(</span>userName<span class="token operator">+</span><span class="token string">&quot;@xiangxue.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;133&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            users<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>user<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> users<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="netty带有的" tabindex="-1"><a class="header-anchor" href="#netty带有的" aria-hidden="true">#</a> netty带有的</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">StringDecoder</span>\n<span class="token class-name">StringEncoder</span>\n<span class="token class-name">LengthFieldPrepender</span>\n<span class="token class-name">LengthFieldBasedFrameDecoder</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',6),u={},r=(0,a(66262).A)(u,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("Source Code"),(0,e.bF)(a)])]),o,(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("Source Code"),(0,e.bF)(a)])]),l],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);