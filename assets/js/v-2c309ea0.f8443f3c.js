"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[82497],{29365:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-2c309ea0",path:"/java/18%20%E5%86%85%E9%83%A8%E7%B1%BB%E8%AE%BF%E9%97%AE%E5%A4%96%E9%83%A8%E7%B1%BB%E7%9A%84%E9%9D%99%E6%80%81TreadLocal.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"java/18 内部类访问外部类的静态TreadLocal.md"}},74721:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(20641).Fv)('<blockquote><p>内部类new一个对象，访问包装类的static 线程暴露对象ThreadLocal</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">TransactionAspectSupport</span><span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TransactionInfo</span><span class="token punctuation">&gt;</span></span> transactionInfoHolder <span class="token operator">=</span>\n\t\t\t<span class="token keyword">new</span> <span class="token class-name">NamedThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;Current aspect-driven transaction&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n\t<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">TransactionInfo</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">bindToThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// Expose current TransactionStatus, preserving any existing TransactionStatus</span>\n\t\t\t<span class="token comment">// for restoration after this transaction is complete.</span>\n\t\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>oldTransactionInfo <span class="token operator">=</span> transactionInfoHolder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\ttransactionInfoHolder<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TransactionStatus</span> <span class="token function">currentTransactionStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoTransactionException</span> <span class="token punctuation">{</span>\n\t\t<span class="token class-name">TransactionInfo</span> info <span class="token operator">=</span> <span class="token function">currentTransactionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> info<span class="token punctuation">.</span>transactionStatus<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n    \n    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token class-name">TransactionInfo</span> <span class="token function">currentTransactionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoTransactionException</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> transactionInfoHolder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',2),p={},e=(0,a(66262).A)(p,[["render",function(n,s){return t}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);