"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[41930],{50789:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-626afb56",path:"/Algorithm/42%20%E6%8E%A5%E9%9B%A8%E6%B0%B4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"动态规划解决",slug:"动态规划解决",children:[]},{level:2,title:"利用单调队列进行",slug:"利用单调队列进行",children:[]}],filePathRelative:"Algorithm/42 接雨水.md"}},61995:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(20641);const t={class:"custom-container tip"},e=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/trapping-rain-water/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="动态规划解决" tabindex="-1"><a class="header-anchor" href="#动态规划解决" aria-hidden="true">#</a> 动态规划解决</h2><p>一个位置要想接到雨水, 那么两边必然要有比它更高的柱子, 并且下雨后水能到达的最大高度等于下标 i 两边的最大高度的最小值, 而下标 i 处能接的雨水量等于下标 i 处的水能到达的最大高度减去 <code>height[i]</code></p><p>明白了这个原理之后, 我们只需要分别向左和向右扫描并记录左边和右边的最大高度, 然后计算每个下标位置能接的雨水量</p><p>由上面的分析可见，要解决这个题目，DP 数组需要定义两个，每个位置 i两边的最大高度。现在设定两个 DP 数组，leftDP 和 rightDP，leftDP 用以记录 i左边的最大高度，rightDP 用来记录右边的最大高度。对于 leftDP 中的元素 <code>leftDP[i]</code>来说，它的值应该怎么由上一个状态变化而来？其实就是</p><p><code>leftDP[i] = max(leftDP[i-1],height[i])</code></p><p>相应的，对于 rightDP 中的元素 <code>rightDP[i]</code>来说，它的值由上一个状态变化而来：</p><p><code>rightDP[i] = max(rightDP[i+1],height[i])</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Solution</span> solution <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>solution<span class="token punctuation">.</span><span class="token function">trap</span><span class="token punctuation">(</span>\n                <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>\n                      <span class="token comment">//  0,1,0,2,1,0,1,3,2,1,2,1</span>\n                        <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span>\n                <span class="token punctuation">}</span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> leftDp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>height<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> rightDp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>height<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        leftDp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        rightDp<span class="token punctuation">[</span>rightDp<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span>height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">// 左边</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            leftDp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftDp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// 右边</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> height<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            rightDp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rightDp<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>height<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 计算</span>\n        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            result <span class="token operator">+=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftDp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>rightDp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">//System.out.println(Arrays.toString(leftDp));</span>\n        <span class="token comment">//System.out.println(Arrays.toString(rightDp));</span>\n        <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 9</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="利用单调队列进行" tabindex="-1"><a class="header-anchor" href="#利用单调队列进行" aria-hidden="true">#</a> 利用单调队列进行</h2><p>构建单调栈，栈底部为大的元素，栈顶部为小元素。遇到比栈顶元素大的值，那么就直接计算接的雨水：栈顶元素出栈，再比较要入栈的元素与现在栈顶元素的高度，取小的，计算出相差高度。然后再乘以宽度。</p><p>接着继续比较。直到栈为空或小于栈顶元素，。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">trap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> height<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayDeque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 单调递减栈，栈底部为大，栈顶为小,但是这里存储的是下标</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>height<span class="token punctuation">[</span>deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token class-name">Integer</span> currentIndex <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">int</span> rightHeight <span class="token operator">=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">int</span> leftHeight <span class="token operator">=</span> height<span class="token punctuation">[</span>deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">int</span> currentHeight <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>leftHeight<span class="token punctuation">,</span>rightHeight<span class="token punctuation">)</span> <span class="token operator">-</span> height<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">int</span> currentWidth <span class="token operator">=</span> i <span class="token operator">-</span> deque<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      ans <span class="token operator">+=</span> currentHeight <span class="token operator">*</span> currentWidth<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',12),l={},u=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("42. 接雨水"),(0,p.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);