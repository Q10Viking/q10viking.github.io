"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[2526],{29645:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-492b48e8",path:"/minifrontendproject/49%20kinetic-loader.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/minifrontendproject/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Kinetic loader",slug:"kinetic-loader",children:[]},{level:2,title:"动画控制",slug:"动画控制",children:[]}],filePathRelative:"minifrontendproject/49 kinetic-loader.md"}},40413:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var p=a(20641);const e=(0,p.Lk)("h2",{id:"kinetic-loader",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#kinetic-loader","aria-hidden":"true"},"#"),(0,p.eW)(" Kinetic loader")],-1),t={href:"https://q10viking.github.io/Mini-FrontEnd-project/52%20kinetic-loader/dist/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/52%20kinetic-loader",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="动画控制" tabindex="-1"><a class="header-anchor" href="#动画控制" aria-hidden="true">#</a> 动画控制</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector"><span class="token parent important">&amp;</span>::before</span><span class="token punctuation">{</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> rotateBefore 2s infinite<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector"><span class="token parent important">&amp;</span>::after</span><span class="token punctuation">{</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> rotateAfter 2s 0.5s infinite<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token atrule"><span class="token rule">@keyframes</span> rotateAfter</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%,\n    25% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">50%,\n    75% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">100% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n\n\n  <span class="token atrule"><span class="token rule">@keyframes</span> rotateBefore</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%,\n    25% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">50%,\n    75% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>270deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">100% </span><span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>450deg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>',2),r={},l=(0,a(66262).A)(r,[["render",function(n,s){const a=(0,p.g2)("OutboundLink"),r=(0,p.g2)("common-progresson-snippet");return(0,p.uX)(),(0,p.CE)(p.FK,null,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",t,[(0,p.eW)("项目预览（Project view）"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),(0,p.bF)(r,{src:"https://q10viking.github.io/Mini-FrontEnd-project/52%20kinetic-loader/dist/"}),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);