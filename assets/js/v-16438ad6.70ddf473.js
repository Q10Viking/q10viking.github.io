"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[17589],{42172:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-16438ad6",path:"/Algorithm/%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"暴力求解",slug:"暴力求解",children:[]},{level:2,title:"单调栈来处理",slug:"单调栈来处理",children:[{level:3,title:"具体流程分析",slug:"具体流程分析",children:[]}]}],filePathRelative:"Algorithm/柱状图中最大的矩形.md"}},79923:(n,s,a)=>{a.r(s),a.d(s,{default:()=>v});var p=a(20641);const t={class:"custom-container tip"},e=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/largest-rectangle-in-histogram/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Lk)("blockquote",null,[(0,p.Lk)("p",null,"核心思路：分别计算以当前元素为高的最大矩阵，然后取最大值，最终获得柱状图的最大矩阵。关注点在每个元素。")],-1),l=(0,p.Lk)("p",null,[(0,p.Lk)("img",{src:"/images/algorithm/image-20220816185133294.png",alt:"image-20220816185133294"})],-1),u=(0,p.Lk)("p",null,"每个元素在寻找矩形的过程中，能够构成的矩形高度，和其他元素，特别是相邻的元素的大小是密切相关的。比如示例1中的 [2,1,5,6,2,3]，寻找元素5能构成的矩形，往左是元素1，那么构成的矩形宽度2，高度只有1，但是往右是元素6，那么构成的矩形宽度2，高度就有5，这一点在我们寻找快速解法的过程中可以很好的利用。",-1),i=(0,p.Lk)("h2",{id:"暴力求解",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#暴力求解","aria-hidden":"true"},"#"),(0,p.eW)(" 暴力求解")],-1),k={class:"custom-container tip"},r=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),m=(0,p.Lk)("p",null,"先用暴力求解的方式，处理题目",-1),b={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/stack/LargestRectangle_84V1.java",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LargestRectangle_84V1</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heights<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">calcElementArea</span><span class="token punctuation">(</span>heights<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> max<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">calcElementArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heights<span class="token punctuation">,</span><span class="token keyword">int</span> pos<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// find left</span>\n        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> pos<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">// find right</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> pos<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>\n            count<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">int</span> area <span class="token operator">=</span> count <span class="token operator">*</span> heights<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>heights<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&quot; --&gt; &quot;</span><span class="token operator">+</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> area<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LargestRectangle_84V1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 2 --&gt; 2\n * 1 --&gt; 6\n * 5 --&gt; 10\n * 6 --&gt; 6\n * 2 --&gt; 8\n * 3 --&gt; 3\n * 10\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="/images/algorithm/image-20220816213622483.png" alt="image-20220816213622483"></p><h2 id="单调栈来处理" tabindex="-1"><a class="header-anchor" href="#单调栈来处理" aria-hidden="true">#</a> 单调栈来处理</h2>',3),d={class:"custom-container tip"},h=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),w={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/stack/LargestRectangle_84V2.java",target:"_blank",rel:"noopener noreferrer"},y=(0,p.Fv)('<p>通过暴力求解的方式，时间复杂度是O(n^2),这里可以使用单调栈的方式来处理。栈底是最小元素</p><h3 id="具体流程分析" tabindex="-1"><a class="header-anchor" href="#具体流程分析" aria-hidden="true">#</a> 具体流程分析</h3><ol><li>首先是数组下标为0的元素2</li></ol><p><img src="/images/algorithm/image-20220816185307495.png" alt="image-20220816185307495"></p><p>这种情况下，会有一个2*1大小的矩形，但是现在无法确定高度为2的矩形是否为最大，还需要往右遍历。</p><ol start="2"><li>到达数组下标为1的元素1</li></ol><p><img src="/images/algorithm/image-20220816185343958.png" alt="image-20220816185343958"></p><p>现在，我们有了高度为2和高度为1的两个矩形需要计算，很明显高度为1的矩形的目前有1<em>1、1</em>2，但是无法确定是否最大的，因为右边还有元素，<strong>但是高度为2的矩形可以确定了，因为1把2拦住了</strong>，无法继续向右扩展。</p><ol start="3"><li>到达数组下标为2的元素5</li></ol><p><img src="/images/algorithm/image-20220816185441992.png" alt="image-20220816185441992"></p><p>我们有了高度为1和高度为5的两个矩形需要计算，这两个高度对应的最大矩形都无法确定。虽然高度5往左被1拦住了，但是往右还有空间。</p><ol start="4"><li>达到数组下标为3的元素6</li></ol><p><img src="/images/algorithm/image-20220816185516660.png" alt="image-20220816185516660"></p><p>有了高度1、高度5和高度6的三个矩形需要计算，这三个高度对应的最大矩形都无法确定。因为我们现在还不知道往右是否还有空间</p><ol start="5"><li>达到数组下标为4的元素2</li></ol><p><img src="/images/algorithm/image-20220816185620395.png" alt="image-20220816185620395"></p><p>有了高度1、高度5、高度6和高度2的四个矩形需要计算，高度1和高度2无法确定最大矩形。高度6是可以确定的。同理高度5也是能够确定的。</p><p>到了这里我们可以思考一下，对于每个元素对应高度所组成的矩形而言，我们其实是要❤️<strong>确定这个矩形的能够达到的最大左右边界</strong>❤️，比如上面的元素6和元素5。而且对于已经确定最大矩形的高度元素，在计算其他未确定元素最大矩形的时候其实已经用不上了。</p><p>我们在遍历数组的时候，是从左向右的，我们得到一个元素确定的最大矩形结果时是从大到小，并且计算完成以后我们就不再需要了，符合后进先出的特点。这就是为什么我们需要使用单调栈的原因，这个单调栈是栈顶最大，栈底最小。</p><p>当确定了一个元素的最大矩形的时候，我们就将它从栈顶移出，所有的元素在栈中进栈一次，出栈一次，一开始栈为空，当然最后也一定要让栈为空，表示这个高度数组里所有的元素都考虑完了。</p><p>用我们已经遍历过的2,1,5,6,2来举例：</p><p><img src="/images/algorithm/image-20220816201102600.png" alt="image-20220816201102600"></p><ol start="6"><li><strong>对于每个出栈的元素构成的最大矩形，很明显，这个矩形的高度是知道的，就是元素值本身，那么这个矩形的宽呢？能获得吗？当然可以，元素6最大矩形的宽就是元素2的下标 - 元素5的下标 – 1（因为元素6最大矩形的左边界就是元素5，右边界就是元素2），元素5最大矩形的宽就是元素2的下标 - 元素1的下标 - 1（因为元素5最大矩形的左边界就是元素1，右边界就是元素2）</strong></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>注意计算的是以当前元素为高的最大矩阵。</p></div><ol start="7"><li><p>达到数组下标为5的元素3</p><p>同理，现在需要计算高度1、高度2、高度3三个矩形。很明显，高度3很快可以确定，高度2和高度1也能够确定了。</p></li></ol><p>站在栈的角度，其实就是元素3也入了栈。在实际代码实现上其实就是数组遍历完后，需要将栈里的元素全部出栈并计算每个出栈元素的最大矩形。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> heights<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> maxArea <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>\n        <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">Integer</span> idx <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">int</span> height <span class="token operator">=</span> heights<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n                <span class="token comment">// find width</span>\n                <span class="token keyword">int</span> width <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    width <span class="token operator">=</span> i<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                    width <span class="token operator">=</span> i <span class="token operator">-</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                maxArea <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span>height <span class="token operator">*</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">int</span> idx <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">int</span> height <span class="token operator">=</span> heights<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token comment">// find width</span>\n            <span class="token keyword">int</span> width <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                width <span class="token operator">=</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n                width <span class="token operator">=</span> heights<span class="token punctuation">.</span>length <span class="token operator">-</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            maxArea <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span>height <span class="token operator">*</span> width<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LargestRectangle_84V2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LargestRectangle_84V2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">largestRectangleArea</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 10\n * 4\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>',27),f={},v=(0,a(66262).A)(f,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("84. 柱状图中最大的矩形 - 力扣（LeetCode）"),(0,p.bF)(a)])])]),c,l,u,i,(0,p.Lk)("div",k,[r,m,(0,p.Lk)("p",null,[(0,p.Lk)("a",b,[(0,p.eW)("Source Code LargestRectangle_84V1.java"),(0,p.bF)(a)])])]),g,(0,p.Lk)("div",d,[h,(0,p.Lk)("p",null,[(0,p.Lk)("a",w,[(0,p.eW)("Source Code LargestRectangle_84V2.java"),(0,p.bF)(a)])])]),y],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);