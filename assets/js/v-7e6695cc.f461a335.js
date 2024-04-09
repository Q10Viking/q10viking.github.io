"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[33568],{8597:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7e6695cc",path:"/Algorithm/3%20%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"滑动窗口解决",slug:"滑动窗口解决",children:[]}],filePathRelative:"Algorithm/3 无重复字符的最长子串.md"}},60175:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var p=a(20641);const t={class:"custom-container tip"},e=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="滑动窗口解决" tabindex="-1"><a class="header-anchor" href="#滑动窗口解决" aria-hidden="true">#</a> 滑动窗口解决</h2><p>这个题目考察对滑动窗口算法的了解，什么是滑动窗口呢？从字面理解：</p><p>滑动：说明这个窗口是移动的，也就是移动是按照一定方向来的。</p><p>窗口：窗口大小并不是固定的，可以不断扩容直到满足一定的条件；也可以不断缩小，直到找到一个满足条件的最小窗口；当然也可以是固定大小。</p><p>滑动窗口算法的基本思路是这样：</p><p>我们在字符串（或者数组也可以）S中定义两个指针称为left和right，初始化 left = right = 0，把区间 [left, right] 称为一个「窗口」。</p><p>我们先不断地增加 right 指针扩大窗口 [left, right]，直到窗口中的字符串符合要求。</p><p>此时，我们停止增加 right，转而不断增加 left 指针缩小窗口 [left, right]，直到窗口中的字符串不再符合要求。同时，每次增加 left，我们都要更新一轮结果。</p><p>重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。</p><hr><p>两个指针表示窗口。左指针表示起始位置，不断地向右移动右指针，但需要保证这两个指针对应的子串中没有重复的字符，在移动结束后，这个子串就对应着 以左指针开始的，不包含重复字符的最长子串。我们记录下这个子串的长度，然后不断移动左指针和右指针，在枚举结束后，我们找到的最长的子串的长度即为答案。</p><p>还需要使用一种数据结构来判断是否有重复的字符，这样的话我们可以使用哈希集合，在左指针向右移动的时候，我们从哈希集合中移除一个字符，在右指针向右移动的时候，我们往哈希集合中添加一个字符。</p><p><img src="/images/algorithm/image-20230418223732414.png" alt="image-20230418223732414"></p><p>当rk指向字符c时，发现rk的后一个字符a在hash集合中已经存在，于是计算rk和i之间的长度为3，并将i右移，i右移后，a字符将从hash集合中移除。</p><p><img src="/images/algorithm/image-20230418223756610.png" alt="image-20230418223756610"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstringWithHash</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">/*哈希集合，记录每个字符是否出现过*/</span>\n    <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span> occ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">/*右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动*/</span>\n    <span class="token keyword">int</span> rk <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token comment">/*遍历字符串，i代表左指针*/</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">/*i = 0,hash集合中还没有字符，自然就不需要移除*/</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">/*左指针向右移动一格，移除一个字符*/</span>\n            occ<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*i = 0时，rk + 1=0，从字符串第0个字符开始*/</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>occ<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">/*不断地移动右指针*/</span>\n            occ<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>rk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token operator">++</span>rk<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">/*第 i 到 rk 个字符是一个极长的无重复字符子串*/</span>\n        ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> rk <span class="token operator">-</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',16),l={},r=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("3. 无重复字符的最长子串"),(0,p.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);