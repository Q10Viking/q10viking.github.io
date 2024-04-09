"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[54022],{56204:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-b03ff012",path:"/Algorithm/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%AC%ACK%E4%B8%AA%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"快排特性",slug:"快排特性",children:[]},{level:2,title:"堆实现",slug:"堆实现",children:[]}],filePathRelative:"Algorithm/数组中第K个最大元素.md"}},72804:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var p=a(20641);const t={class:"custom-container tip"},e=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://q10viking.github.io/Algorithm/%E5%8D%81%E5%A4%A7%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Lk)("p",null,"不完全排序完数组，即可拿到结果值。",-1),u=(0,p.Lk)("h2",{id:"快排特性",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#快排特性","aria-hidden":"true"},"#"),(0,p.eW)(" 快排特性")],-1),r={class:"custom-container tip"},k=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),i={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/array/KthInArray_215_QuickSelect.java",target:"_blank",rel:"noopener noreferrer"},b=(0,p.Fv)('<p><img src="/images/algorithm/image-20220815215106531.png" alt="image-20220815215106531"></p><p>在快排的分区操作中，每次分区操作结束都会返回一个点，也就是我们代码中数据分割成独立的两部分时，从哪儿分区的指示器，<strong>这个指示器的下标和最终排序之后有序数组中这个元素所在的下标是一致的</strong>。</p><p>利用这个特性，我们可以不断的划分数组区间，最终找到第K大的元素。比如将数组执行升序排列，执行一次分区操作以后，如果这个元素的下标比K小，那么接着就在后边的区间继续执行分区操作;如果这个元素的下标比K大，那么就在左边的区间继续执行分区操作;如果相等就直接输出这个下标对应的数组元素即可。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KthInArray_215_QuickSelect</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> target <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">;</span>\n        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span> zoneIndex <span class="token operator">=</span> <span class="token function">partion</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>zoneIndex <span class="token operator">==</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> nums<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>zoneIndex <span class="token operator">&lt;</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                start <span class="token operator">=</span> zoneIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>\n                end <span class="token operator">=</span> zoneIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">partion</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span><span class="token keyword">int</span> start<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> start<span class="token punctuation">;</span>\n        <span class="token comment">// 基准数的选择，会提升优化的效率</span>\n        <span class="token keyword">int</span> pivot <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> zoneIndex <span class="token operator">=</span> start <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>pivot<span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 注意等于</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                zoneIndex<span class="token operator">++</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&gt;</span> zoneIndex<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>i<span class="token punctuation">,</span>zoneIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> zoneIndex<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrays<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> temp <span class="token operator">=</span> arrays<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        arrays<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arrays<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        arrays<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="堆实现" tabindex="-1"><a class="header-anchor" href="#堆实现" aria-hidden="true">#</a> 堆实现</h2>',5),m={class:"custom-container tip"},d=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),y={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/array/KthInArray_215_HeapSort.java",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Lk)("p",null,"在学习堆排序的时候，我们知道，许多应用程序都需要处理有序的元素，但不一定要求他们全部有序，或者不一定要一次就将他们排序，很多时候，我们每次只需要操作数据中的最大元素（最小元素）。这里刚好就是堆排序的运用场景，所以这个题目还可以使用堆排序来实现。",-1),g=(0,p.Fv)('<p>建立一个最大堆，做 k−1 次删除操作后堆顶元素就是我们要找的答案。</p><p><strong>虽然基于堆排序的实现比基于快速排序分区的实现性能上要慢，但是基于快速排序分区的实现必须把所有的数据读入内存中，基于堆排序的实现在数据量很大的时候，不用一下子把所有数据读入内存，这就有很大的用武之地了</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KthInArray_215_HeapSort</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> len<span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findKthLargest</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token function">buildMaxHeap</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>k<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">swap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            len<span class="token operator">--</span><span class="token punctuation">;</span>\n            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> nums<span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">buildMaxHeap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrays<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span> len<span class="token operator">/</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>arrays<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrays<span class="token punctuation">,</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> maxIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>\n        <span class="token keyword">int</span> left <span class="token operator">=</span> index<span class="token operator">*</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span><span class="token punctuation">(</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> arrays<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arrays<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            maxIndex <span class="token operator">=</span> left<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>right<span class="token operator">&lt;</span>len <span class="token operator">&amp;&amp;</span> arrays<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arrays<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            maxIndex <span class="token operator">=</span> right<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>maxIndex <span class="token operator">!=</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">swap</span><span class="token punctuation">(</span>arrays<span class="token punctuation">,</span>maxIndex<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">adjustHeap</span><span class="token punctuation">(</span>arrays<span class="token punctuation">,</span>maxIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrays<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">int</span> temp <span class="token operator">=</span> arrays<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        arrays<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arrays<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        arrays<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">KthInArray_215_HeapSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findKthLargest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * [6, 5, 4, 3, 2, 1]\n * [5, 3, 4, 1, 2, 6]\n * [4, 3, 2, 1, 5, 6]\n * 5\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>',3),h={},f=(0,a(66262).A)(h,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("215. 数组中的第K个最大元素 - 力扣（LeetCode）"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",c,[(0,p.eW)("快速排序 & 堆排序"),(0,p.bF)(a)])])]),l,u,(0,p.Lk)("div",r,[k,(0,p.Lk)("p",null,[(0,p.Lk)("a",i,[(0,p.eW)("Source Code KthInArray_215_QuickSelect.java"),(0,p.bF)(a)])])]),b,(0,p.Lk)("div",m,[d,(0,p.Lk)("p",null,[(0,p.Lk)("a",y,[(0,p.eW)("Source Code KthInArray_215_HeapSort.java"),(0,p.bF)(a)])]),w]),g],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);