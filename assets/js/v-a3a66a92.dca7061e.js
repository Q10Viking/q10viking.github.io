"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[77363],{6822:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-a3a66a92",path:"/concurrency/61%20ThreadGroup.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"ThreadGroup",slug:"threadgroup",children:[]},{level:2,title:"父子ThreadGroup",slug:"父子threadgroup",children:[]}],filePathRelative:"concurrency/61 ThreadGroup.md"}},82829:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<h2 id="threadgroup" tabindex="-1"><a class="header-anchor" href="#threadgroup" aria-hidden="true">#</a> ThreadGroup</h2><p>用于表示一组线程。线程组是一种组织和集中管理线程的方式。它提供了一种控制、监视和操作多个线程作为单一单位的方法。</p><p>ThreadGroup 类提供了各种方法来管理线程，包括在组内创建线程、设置组级别的属性、枚举组内的线程、中断组内的所有线程以及处理组内线程的未捕获异常。</p><p>以下是 ThreadGroup 类的一些关键特点：</p><ol><li>线程层次结构：ThreadGroup 类表示一种层次结构，允许线程以父子关系组织起来。线程组可以包含子组，形成类似树形结构的形式。</li><li>属性继承：在 ThreadGroup 中创建的线程会继承该组的属性，例如最大优先级、守护线程状态和未捕获异常处理器。这样可以方便地管理具有相似行为的线程。</li><li>线程监视：ThreadGroup 类提供了枚举组内线程的方法，使您可以集中监视和管理线程，例如挂起、恢复或停止组内的所有线程。</li><li>异常处理：ThreadGroup 类允许您为组内的线程设置未捕获异常处理器。如果组内的线程由于未捕获异常而终止，处理器可以执行自定义操作，例如日志记录或清理</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadGroupDemo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 创建线程组</span>\n        <span class="token class-name">ThreadGroup</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadGroup</span><span class="token punctuation">(</span><span class="token string">&quot;MyThreadGroup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 创建线程</span>\n        <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>group<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 设置线程组属性</span>\n        group<span class="token punctuation">.</span><span class="token function">setMaxPriority</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        group<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 启动线程</span>\n        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 枚举组内的线程</span>\n        <span class="token class-name">Thread</span><span class="token punctuation">[</span><span class="token punctuation">]</span> threads <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">[</span>group<span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        group<span class="token punctuation">.</span><span class="token function">enumerate</span><span class="token punctuation">(</span>threads<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n\n        <span class="token comment">// 挂起组内的所有线程</span>\n        group<span class="token punctuation">.</span><span class="token function">suspend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 恢复组内的所有线程</span>\n        group<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 中断组内的所有线程</span>\n        group<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Override</span>\n        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 线程执行的逻辑</span>\n            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInterrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n            <span class="token punctuation">}</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;线程执行完毕&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="父子threadgroup" tabindex="-1"><a class="header-anchor" href="#父子threadgroup" aria-hidden="true">#</a> 父子ThreadGroup</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 创建父线程组</span>\n<span class="token class-name">ThreadGroup</span> parentGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadGroup</span><span class="token punctuation">(</span><span class="token string">&quot;ParentGroup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建子线程组</span>\n<span class="token class-name">ThreadGroup</span> childGroup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadGroup</span><span class="token punctuation">(</span>parentGroup<span class="token punctuation">,</span> <span class="token string">&quot;ChildGroup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建线程并加入子线程组</span>\n<span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>childGroup<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>childGroup<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Thread 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 设置线程组的未捕获异常处理器</span>\nchildGroup<span class="token punctuation">.</span><span class="token function">setUncaughtExceptionHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyUncaughtExceptionHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 启动线程</span>\nthread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nthread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 中断父线程组中的所有线程</span>\nparentGroup<span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 摧毁父线程组，同时摧毁子线程组和线程</span>\nparentGroup<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 自定义未捕获异常处理器</span>\n<span class="token keyword">class</span> <span class="token class-name">MyUncaughtExceptionHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Thread<span class="token punctuation">.</span>UncaughtExceptionHandler</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">uncaughtException</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 处理未捕获的异常</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 自定义线程操作</span>\n<span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 线程执行的逻辑</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>',8),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);