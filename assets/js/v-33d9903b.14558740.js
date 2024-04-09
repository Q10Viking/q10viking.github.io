"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[291],{16688:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-33d9903b",path:"/java/08%20%E5%8F%8D%E5%B0%84-%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E9%80%9A%E4%BF%A1.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"实现",slug:"实现",children:[]},{level:2,title:"测试",slug:"测试",children:[]}],filePathRelative:"java/08 反射-设置共享通信.md"}},97946:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(20641);const e={href:"https://github.com/Q10Viking/learncode/tree/main/javabasic/src/org/hzz/reflect/netty",target:"_blank",rel:"noopener noreferrer"},t=(0,p.Fv)('<blockquote><p>Netty源码： NioEventLoop共享WindowsSelectorImpl的selectedKeys: NioEventLoop调用了selector.select()之后，没有显示调用selector.selectedKeys()，就获取到了selector.selectedKeys。</p><p>通过反射修改一个类的属性，设置一个我们自己new出来的容器。从而实现共享通信。</p></blockquote><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NioEventLoop</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>\n    <span class="token comment">// 让这个set和WindowsSelectorImpl这个类的属性中的selectedKeys共享</span>\n    <span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> selectedKeys<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">SelectorImpl</span> selector<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">NioEventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n        selector <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WindowsSelectorImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">doOpenSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * 进行修改\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doOpenSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n            <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> selectedKeys <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> selectorImplClass <span class="token operator">=</span> <span class="token function">getSelectorImplClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">Field</span> selectedKeysField <span class="token operator">=</span> selectorImplClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;selectedKeys&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">trySetAccessible</span><span class="token punctuation">(</span>selectedKeysField<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            selectedKeysField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>selector<span class="token punctuation">,</span>selectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置共享通信</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>selectedKeys <span class="token operator">=</span> selectedKeys<span class="token punctuation">;</span>       <span class="token comment">// 设置共享通信</span>\n        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> xxx<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSelectorImplClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> selectorImplClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;org.hzz.reflect.netty.SelectorImpl&quot;</span><span class="token punctuation">,</span>\n                    <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> selectorImplClass<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> xxx<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">trySetAccessible</span><span class="token punctuation">(</span><span class="token class-name">AccessibleObject</span> object<span class="token punctuation">,</span> <span class="token keyword">boolean</span> checkAccessible<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        object<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span>checkAccessible<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> select <span class="token operator">=</span> selector<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>select <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>selectedKeys<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><hr><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SelectorImpl</span> <span class="token punctuation">{</span>\n<span class="token comment">//    protected Set&lt;Integer&gt; selectedKeys = new HashSet();</span>\n    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> selectedKeys <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">static</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;run?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsSelectorImpl</span> <span class="token keyword">extends</span> <span class="token class-name">SelectorImpl</span><span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        selectedKeys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        selectedKeys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        selectedKeys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        selectedKeys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectedKeys<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMain</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">NioEventLoop</span> nioEventLoop <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NioEventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n16\n1\n4\n8\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',7),c={},o=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("learncode/javabasic/src/org/hzz/reflect/netty at main · Q10Viking/learncode (github.com)"),(0,p.bF)(a)])]),t],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);