"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[68184],{96115:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-d4345f5c",path:"/css/02%20css%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/css/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Inheritance继承性",slug:"inheritance继承性",children:[]},{level:2,title:"层叠性",slug:"层叠性",children:[]},{level:2,title:"优先级",slug:"优先级",children:[{level:3,title:"!important提升权重",slug:"important提升权重",children:[]},{level:3,title:"通过继承获得的样式属性",slug:"通过继承获得的样式属性",children:[]}]}],filePathRelative:"css/02 css三大特性.md"}},63333:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});const e=(0,a(20641).Fv)('<h2 id="inheritance继承性" tabindex="-1"><a class="header-anchor" href="#inheritance继承性" aria-hidden="true">#</a> Inheritance继承性</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>css中有<strong>一部分属性</strong>可以被继承,盒子属性，如宽和高<strong>不能被继承</strong></p></div><p>如：文字和文本相关的属性，<strong>可以被继承</strong></p><blockquote><p>玩法：可以直接在body中设置字体，来控制整个页面的字体显示</p></blockquote><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以作为属性填入</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.section-title</span> <span class="token punctuation">{</span>\n\t<span class="token property">font-family</span><span class="token punctuation">:</span> inherid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性" aria-hidden="true">#</a> 层叠性</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>样式直接作用在标签上</strong></p></div><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p><img src="/images/css/202112081225792.jpg" alt="202112081225792"></p><p><strong>权重比较</strong></p><ol><li>比较id选择器，类选择，标签选择器的个数</li><li>权重相同，则选择后编写的代码样式</li></ol><h3 id="important提升权重" tabindex="-1"><a class="header-anchor" href="#important提升权重" aria-hidden="true">#</a> !important提升权重</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><strong>Overwrites</strong> specifity and all other selectors</p><p><strong>在直接作用在标签上的属性，通过<code>!important</code>可以提高权重</strong></p></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n\t<span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="通过继承获得的样式属性" tabindex="-1"><a class="header-anchor" href="#通过继承获得的样式属性" aria-hidden="true">#</a> 通过继承获得的样式属性</h3><ol><li>谁描述的近，则使用谁</li><li>一样近，按权重比较方式处理</li></ol>',18),t={},i=(0,a(66262).A)(t,[["render",function(s,n){return e}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);