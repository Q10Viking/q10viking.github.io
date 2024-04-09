"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[96801],{76558:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-397e1198",path:"/Algorithm/%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%AC%20N%20%E4%B8%AA%E7%BB%93%E7%82%B9.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"Algorithm/删除链表的倒数第 N 个结点.md"}},69058:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(20641);const e={class:"custom-container tip"},p=(0,t.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/linkedlist/RemoveNthNode_19.java",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Fv)('<p><img src="/images/algorithm/image-20220816014130445.png" alt="image-20220816014130445"></p><blockquote><p>使用快慢指针一次遍历,<strong>添加了一个头节点</strong></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RemoveNthNode_19</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 注意[1] 1的情况</span>\n    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ListNode</span> startNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span>  startNode<span class="token punctuation">,</span> fast <span class="token operator">=</span> startNode<span class="token punctuation">;</span>\n        startNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>\n        <span class="token comment">// 先移动fast</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n        <span class="token comment">// 不能返回return head 因为[1] 1的情况，head还是指向这1</span>\n        <span class="token keyword">return</span> startNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',3),r={},u=(0,a(66262).A)(r,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",e,[p,(0,t.Lk)("p",null,[(0,t.Lk)("a",o,[(0,t.eW)("19. 删除链表的倒数第 N 个结点 - 力扣（LeetCode）"),(0,t.bF)(a)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",c,[(0,t.eW)("Source Code RemoveNthNode_19.java"),(0,t.bF)(a)])])]),l],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);