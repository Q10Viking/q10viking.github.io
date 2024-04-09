"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[55423],{843:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-2cb243fc",path:"/java/40%20String%20StringBuffer%20StringBuilder.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[]},{level:2,title:"StringBuilder线程不安全演示",slug:"stringbuilder线程不安全演示",children:[{level:3,title:"线程不安全的原因",slug:"线程不安全的原因",children:[]},{level:3,title:"抛异常的原因",slug:"抛异常的原因",children:[]}]}],filePathRelative:"java/40 String StringBuffer StringBuilder.md"}},4655:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(20641);const t=(0,p.Fv)('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>String是final修饰的，不可变每次操作都会产生新的String对象</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>\n    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>StringBuffer和StringBuilder都是在原对象上操作</p><p>StringBuffer是线程安全的，StringBuilder线程不安全的StringBuffer方法都是synchronized修饰的</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">int</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>性能：StringBuilder &gt; StringBuffer &gt; String</p><p>场景：经常需要改变字符串内容时使用后面两个</p><p>优先使用StringBuilder，多线程使用共享变量时使用StringBuffer</p><h2 id="stringbuilder线程不安全演示" tabindex="-1"><a class="header-anchor" href="#stringbuilder线程不安全演示" aria-hidden="true">#</a> StringBuilder线程不安全演示</h2><ul><li>扩容时会数组越界</li><li>添加字符时会出现覆盖</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilderNotSafeDemo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 睡眠确保所有线程都执行完</span>\n        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 5503\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>上述业务逻辑比较简单，就是构建一个StringBuilder，然后创建10个线程，每个线程中拼接字符串“a”1000次，理论上当线程执行完成之后，打印的结果应该是10000才对。</p><p>但多次执行上面的代码打印的结果是10000的概率反而非常小，大多数情况都要少于10000。同时，还有一定的概率出现下面的异常信息</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>Exception <span class="token operator">in</span> thread <span class="token string">&quot;Thread-0&quot;</span> java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>ArrayIndexOutOfBoundsException\n\tat java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>System<span class="token punctuation">.</span>arraycopy<span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>String<span class="token punctuation">.</span>getChars<span class="token punctuation">(</span>String<span class="token punctuation">.</span>java:<span class="token number">826</span><span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>AbstractStringBuilder<span class="token punctuation">.</span>append<span class="token punctuation">(</span>AbstractStringBuilder<span class="token punctuation">.</span>java:<span class="token number">449</span><span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>StringBuilder<span class="token punctuation">.</span>append<span class="token punctuation">(</span>StringBuilder<span class="token punctuation">.</span>java:<span class="token number">136</span><span class="token punctuation">)</span>\n\tat com<span class="token punctuation">.</span>secbro2<span class="token punctuation">.</span>strings<span class="token punctuation">.</span>StringBuilderTest<span class="token punctuation">.</span>lambda$test$<span class="token number">0</span><span class="token punctuation">(</span>StringBuilderTest<span class="token punctuation">.</span>java:<span class="token number">18</span><span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>run<span class="token punctuation">(</span>Thread<span class="token punctuation">.</span>java:<span class="token number">748</span><span class="token punctuation">)</span>\n<span class="token number">9007</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="线程不安全的原因" tabindex="-1"><a class="header-anchor" href="#线程不安全的原因" aria-hidden="true">#</a> 线程不安全的原因</h3><p>StringBuilder中针对字符串的处理主要依赖两个成员变量char数组value和count。StringBuilder通过对value的不断扩容和count对应的增加来完成字符串的append操作。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 存储的字符串（通常情况一部分为字符串内容，一部分为默认值）</span>\n<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>\n\n<span class="token comment">// 数组已经使用数量</span>\n<span class="token keyword">int</span> count<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>上面的这两个属性均位于它的抽象父类AbstractStringBuilder中。</p><p>如果查看构造方法我们会发现，在创建StringBuilder时会设置数组value的初始化长度。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>当调用append方法时会对count进行增加，增加值便是append的字符串的长度，具体实现也在抽象父类中</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> <span class="token function">appendNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>count <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 线程不安全，多个线程都读取到同一个count值</span>\n    <span class="token comment">// 将str添加到value中</span>\n    str<span class="token punctuation">.</span><span class="token function">getChars</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> value<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    count <span class="token operator">+=</span> len<span class="token punctuation">;</span>  <span class="token comment">// 不是原子性的</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>我们所说的线程不安全的发生点便是在append方法中count的“+=”操作。我们知道该操作是线程不安全的，那么便会发生两个线程同时读取到count值为5，执行加1操作之后，都变成6，而不是预期的7。这种情况一旦发生便不会出现预期的结果。</p></blockquote><h3 id="抛异常的原因" tabindex="-1"><a class="header-anchor" href="#抛异常的原因" aria-hidden="true">#</a> 抛异常的原因</h3><p>回头看异常的堆栈信息，回发现有这么一行内容：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>at java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>String<span class="token punctuation">.</span><span class="token function">getChars</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">826</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>对应的代码就是上面AbstractStringBuilder中append方法中的代码。对应方法的源代码如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getChars</span><span class="token punctuation">(</span><span class="token parameter">int srcBegin<span class="token punctuation">,</span> int srcEnd<span class="token punctuation">,</span> char dst<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> int dstBegin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>srcBegin <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>srcBegin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>srcEnd <span class="token operator">&gt;</span> value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>srcEnd<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>srcBegin <span class="token operator">&gt;</span> srcEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>srcEnd <span class="token operator">-</span> srcBegin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    System<span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> srcBegin<span class="token punctuation">,</span> dst<span class="token punctuation">,</span> dstBegin<span class="token punctuation">,</span> srcEnd <span class="token operator">-</span> srcBegin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>其实异常是最后一行arraycopy时JVM底层发生的。arraycopy的核心操作就是将传入的String对象copy到value当中</p><p>导致这里出现异常的原因是，因为之前扩容由于并发问题没有做好</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>count <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 线程不安全，多个线程都读取到同一个count值</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',32),e={href:"https://www.processon.com/view/link/645cc06be18d2f06805c8d20",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Lk)("p",null,[(0,p.Lk)("img",{src:"/images/java/StringBuilder线程不安全的原因.png",alt:"StringBuilder线程不安全的原因"})],-1),o={},l=(0,a(66262).A)(o,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("ProgressOn"),(0,p.bF)(a)])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);