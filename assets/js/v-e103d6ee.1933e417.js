"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[93169],{77736:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-e103d6ee",path:"/Redis/12%20Zset%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"排行榜⭐",slug:"排行榜⭐",children:[]}],filePathRelative:"Redis/12 Zset应用场景.md"}},12977:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(20641).Fv)('<h2 id="排行榜⭐" tabindex="-1"><a class="header-anchor" href="#排行榜⭐" aria-hidden="true">#</a> 排行榜⭐</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1）点击新闻</span>\n<span class="token constant">ZINCRBY</span>  hotNews<span class="token operator">:</span><span class="token number">20190819</span>  <span class="token number">1</span>  守护香港\n<span class="token comment">// 2）展示当日排行前十</span>\n<span class="token constant">ZREVRANGE</span>  hotNews<span class="token operator">:</span><span class="token number">20190819</span>  <span class="token number">0</span>  <span class="token number">9</span>  <span class="token constant">WITHSCORES</span> \n<span class="token comment">// 3）七日搜索榜单计算</span>\n<span class="token constant">ZUNIONSTORE</span>  hotNews<span class="token operator">:</span><span class="token number">20190813</span><span class="token operator">-</span><span class="token number">20190819</span>  <span class="token number">7</span> \nhotNews<span class="token operator">:</span><span class="token number">20190813</span>  hotNews<span class="token operator">:</span><span class="token number">20190814.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> hotNews<span class="token operator">:</span><span class="token number">20190819</span>\n<span class="token comment">// 4）展示七日排行前十</span>\n<span class="token constant">ZREVRANGE</span> hotNews<span class="token operator">:</span><span class="token number">20190813</span><span class="token operator">-</span><span class="token number">20190819</span>  <span class="token number">0</span>  <span class="token number">9</span>  <span class="token constant">WITHSCORES</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="/images/Redis/image-20211114064629643.png" alt=""></p>',3),p={},t=(0,a(66262).A)(p,[["render",function(s,n){return e}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);