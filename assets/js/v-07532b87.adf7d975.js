"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[73024],{69012:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-07532b87",path:"/java/03%20%E9%9D%99%E6%80%81%E5%86%85%E9%83%A8%E7%B1%BB.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"静态内部类",slug:"静态内部类",children:[]}],filePathRelative:"java/03 静态内部类.md"}},64475:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(20641);const e=(0,p.Fv)('<h2 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// tomcat中的看到的代码</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mapper</span><span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Context</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),t={href:"https://blog.csdn.net/quanaianzj/article/details/82348982",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">/* 下面程序演示如何在java中创建静态内部类和非静态内部类 */</span>\n<span class="token keyword">class</span> <span class="token class-name">OuterClass</span><span class="token punctuation">{</span>\n   <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;GeeksForGeeks&quot;</span><span class="token punctuation">;</span>\n\n   <span class="token comment">// 静态内部类</span>\n   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">NestedStaticClass</span><span class="token punctuation">{</span>\n\n       <span class="token comment">// 静态内部类只能访问外部类的静态成员</span>\n       <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n         <span class="token comment">// 试着将msg改成非静态的，这将导致编译错误 </span>\n         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Message from nested static class: &quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> \n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 非静态内部类</span>\n    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerClass</span><span class="token punctuation">{</span>\n\n       <span class="token comment">// 不管是静态方法还是非静态方法都可以在非静态内部类中访问</span>\n       <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Message from non-static nested class: &quot;</span><span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> \n\n<span class="token keyword">class</span> <span class="token class-name">Main</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 怎么创建静态内部类和非静态内部类的实例</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n       <span class="token comment">// 创建静态内部类的实例</span>\n       <span class="token class-name">OuterClass<span class="token punctuation">.</span>NestedStaticClass</span> printer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OuterClass<span class="token punctuation">.</span>NestedStaticClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n       <span class="token comment">// 调用静态内部类的非静态方法</span>\n       printer<span class="token punctuation">.</span><span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   \n\n       <span class="token comment">// 为了创建非静态内部类，我们需要外部类的实例</span>\n       <span class="token class-name">OuterClass</span> outer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OuterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        \n       <span class="token class-name">OuterClass<span class="token punctuation">.</span>InnerClass</span> inner  <span class="token operator">=</span> outer<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">InnerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n       <span class="token comment">// 调用非静态内部类的非静态方法</span>\n       inner<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n       <span class="token comment">// 我们也可以结合以上步骤，一步创建的内部类实例</span>\n       <span class="token class-name">OuterClass<span class="token punctuation">.</span>InnerClass</span> innerObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OuterClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">InnerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n       <span class="token comment">// 同样我们现在可以调用内部类方法</span>\n       innerObject<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>',1),l={},o=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",t,[(0,p.eW)("Java中static class使用方式_淡淡的C的博客-CSDN博客_class static"),(0,p.bF)(a)])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);