"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[82083],{29168:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-e421774a",path:"/java/16%20%E6%B3%A8%E8%A7%A3%E4%B8%8A%E7%9A%84%E6%B3%A8%E8%A7%A3.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"创建@MyImport",slug:"创建-myimport",children:[]},{level:2,title:"创建@EnableMobile",slug:"创建-enablemobile",children:[]},{level:2,title:"辅助类",slug:"辅助类",children:[]},{level:2,title:"获取配置类上所有MyImport",slug:"获取配置类上所有myimport",children:[]},{level:2,title:"注意获取注解的class方法",slug:"注意获取注解的class方法",children:[]}],filePathRelative:"java/16 注解上的注解.md"}},43664:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<blockquote><p>模拟Spring AOP功能开启的获取@EnableAspectJAutoProxy中@Import(AspectJAutoProxyRegistrar.class)原理</p></blockquote><h2 id="创建-myimport" tabindex="-1"><a class="header-anchor" href="#创建-myimport" aria-hidden="true">#</a> 创建@MyImport</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyImport</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="创建-enablemobile" tabindex="-1"><a class="header-anchor" href="#创建-enablemobile" aria-hidden="true">#</a> 创建@EnableMobile</h2><p>并在注解上使用@MyImport</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@MyImport</span><span class="token punctuation">(</span><span class="token class-name">OppoMobile</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableMobile</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="辅助类" tabindex="-1"><a class="header-anchor" href="#辅助类" aria-hidden="true">#</a> 辅助类</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Samsung</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Samsung:放飞梦幻 时尚精彩&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OppoMobile</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;OPPO:这一刻,更清晰&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="获取配置类上所有myimport" tabindex="-1"><a class="header-anchor" href="#获取配置类上所有myimport" aria-hidden="true">#</a> 获取配置类上所有MyImport</h2><p>模拟Spring解析配置类时的流程</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableMobile</span>\n<span class="token annotation punctuation">@MyImport</span><span class="token punctuation">(</span><span class="token class-name">Samsung</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">collectImports</span><span class="token punctuation">(</span><span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>e <span class="token operator">-&gt;</span> results<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        results<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">Main</span><span class="token operator">::</span><span class="token function">loadClass</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 模拟Spring解析配置类时的流程</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">collectImports</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span><span class="token class-name">MyFunc</span> func<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Annotation</span> anno<span class="token operator">:</span> <span class="token function">getAnnotationsNotIncludeJava</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 注意获取注解的class,需要通过annotationType(),而不是getClass(),因为</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>anno<span class="token punctuation">.</span><span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">MyImport</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token function">collectImports</span><span class="token punctuation">(</span>anno<span class="token punctuation">.</span><span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">MyImport</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>anno<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                func<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">MyImport</span><span class="token punctuation">)</span> anno<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 排除@Target,@Document,@Retention 这三个类</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAnnotationsNotIncludeJava</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> notIncludeJava <span class="token operator">=</span> e <span class="token operator">-&gt;</span> <span class="token operator">!</span>e<span class="token punctuation">.</span><span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>notIncludeJava<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n OPPO:这一刻,更清晰\n Samsung:放飞梦幻 时尚精彩\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="注意获取注解的class方法" tabindex="-1"><a class="header-anchor" href="#注意获取注解的class方法" aria-hidden="true">#</a> 注意获取注解的class方法</h2><ol><li>应该通过annotationType()方法</li><li>而不是getClass(),<strong>因为此时返回的是一个代理对象</strong></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',14),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);