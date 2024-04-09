"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[74888],{81368:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-9731fbd4",path:"/Algorithm/136%20%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"Algorithm/136 只出现一次的数字.md"}},70324:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(20641);const t={class:"custom-container tip"},p=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/single-number/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/bit/SingleNumber_136.java",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<p>题目为什么要强调有一个数字出现一次，其他的出现两次?</p><p>我们想到了异或运算的性质:任何一个数字异或它自己都等于0。</p><p><img src="/images/algorithm/image-20220814221126076.png" alt="image-20220814221126076"></p><p>也就是说，如果我们从头到尾依次异或数组中的每一个数字，那么最终的结果刚好是那个只出现依次的数字，因为那些出现两次的数字全部在异或中抵消掉了。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span>\n         nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        result <span class="token operator">^=</span> num<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',5),c={},u=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",t,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("136. 只出现一次的数字 - 力扣（LeetCode）"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",r,[(0,e.eW)("Source Code SingleNumber_136.java"),(0,e.bF)(a)])])]),l],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);