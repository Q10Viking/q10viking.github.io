"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[4623],{24073:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-57e0f26f",path:"/Redis/03%20String%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"字符串常用操作",slug:"字符串常用操作",children:[]},{level:2,title:"原子加减",slug:"原子加减",children:[]}],filePathRelative:"Redis/03 String常用命令.md"}},93879:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(20641).Fv)('<h2 id="字符串常用操作" tabindex="-1"><a class="header-anchor" href="#字符串常用操作" aria-hidden="true">#</a> 字符串常用操作</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token constant">SET</span>  key  value \t\t\t\t\t    <span class="token comment">//存入字符串键值对</span>\n<span class="token constant">MSET</span>  key  value <span class="token punctuation">[</span>key value <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> \t\t <span class="token comment">//批量存储字符串键值对</span>\n<span class="token constant">SETNX</span>  key  value \t\t\t\t\t    <span class="token comment">//存入一个不存在的字符串键值对</span>\n<span class="token constant">GET</span>  key \t\t\t\t\t\t\t   <span class="token comment">//获取一个字符串键值</span>\n<span class="token constant">MGET</span>  key  <span class="token punctuation">[</span>key <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>\t \t\t\t    <span class="token comment">//批量获取字符串键值</span>\n<span class="token constant">DEL</span>  key  <span class="token punctuation">[</span>key <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> \t\t\t\t    <span class="token comment">//删除一个键</span>\n<span class="token constant">EXPIRE</span>  key  seconds \t\t\t\t    <span class="token comment">//设置一个键的过期时间(秒)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="原子加减" tabindex="-1"><a class="header-anchor" href="#原子加减" aria-hidden="true">#</a> 原子加减</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token constant">INCR</span>  key\t\t\t\t\t   <span class="token comment">//将key中储存的数字值加1</span>\n<span class="token constant">DECR</span>  key \t\t\t\t\t   <span class="token comment">//将key中储存的数字值减1</span>\n<span class="token constant">INCRBY</span>  key  increment\t\t\t<span class="token comment">//将key所储存的值加上increment</span>\n<span class="token constant">DECRBY</span>  key  decrement \t\t    <span class="token comment">//将key所储存的值减去decrement</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',4),e={},p=(0,a(66262).A)(e,[["render",function(n,s){return t}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);