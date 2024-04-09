"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[10046],{15506:(e,a,n)=>{n.r(a),n.d(a,{data:()=>r});const r={key:"v-b0167130",path:"/vuepress/18%20%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/vuepress/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"书写",slug:"书写",children:[]},{level:2,title:"内存不足",slug:"内存不足",children:[{level:3,title:"参考",slug:"参考",children:[]},{level:3,title:"解决",slug:"解决",children:[]}]}],filePathRelative:"vuepress/18 常见问题.md"}},72173:(e,a,n)=>{n.r(a),n.d(a,{default:()=>u});var r=n(20641);const t=(0,r.Fv)('<h2 id="书写" tabindex="-1"><a class="header-anchor" href="#书写" aria-hidden="true">#</a> 书写</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>default，表示默认值，我们一直演示的某个bean的autowire，而也可以直接在&lt;beans&gt;标签中设置autowire，如果设置了，那么&lt;bean&gt;标签中设置的autowire如果为default，那么则会用&lt;beans&gt;标签中设置的autowire。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>比如说上面的<code>&lt;beans&gt;</code>这个标签如何直接原生写，会编译错误。</p><h2 id="内存不足" tabindex="-1"><a class="header-anchor" href="#内存不足" aria-hidden="true">#</a> 内存不足</h2><blockquote><p>vuepress FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory</p></blockquote><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>',6),s={href:"https://itsmycode.com/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javascript-heap-out-of-memory/",target:"_blank",rel:"noopener noreferrer"},l={href:"https://stackoverflow.com/questions/73272019/github-actions-reached-heap-limit-allocation-failed",target:"_blank",rel:"noopener noreferrer"},i={href:"https://github.com/actions/runner-images/issues/70#issuecomment-1191708172",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Fv)('<h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 运行构建脚本</span>\n      - name: Build VuePress site\n        env:\n          NODE_OPTIONS: <span class="token string">&quot;--max_old_space_size=8192&quot;</span>\n        run: <span class="token function">npm</span> run docs:build \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),c={},u=(0,n(66262).A)(c,[["render",function(e,a){const n=(0,r.g2)("OutboundLink");return(0,r.uX)(),(0,r.CE)(r.FK,null,[t,(0,r.Lk)("p",null,[(0,r.Lk)("a",s,[(0,r.eW)("fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javascript-heap-out-of-memory"),(0,r.bF)(n)])]),(0,r.Lk)("p",null,[(0,r.Lk)("a",l,[(0,r.eW)("stackoverflow"),(0,r.bF)(n)])]),(0,r.Lk)("p",null,[(0,r.Lk)("a",i,[(0,r.eW)("actions(runner-images)"),(0,r.bF)(n)])]),o],64)}]])},66262:(e,a)=>{a.A=(e,a)=>{const n=e.__vccOpts||e;for(const[e,r]of a)n[e]=r;return n}}}]);