"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[2355],{25163:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-0fbed71f",path:"/vuepress/01%20%E6%90%AD%E5%BB%BAvuepress2.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/vuepress/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"环境搭建",slug:"环境搭建",children:[]},{level:2,title:"基本配置",slug:"基本配置",children:[]},{level:2,title:"版本依赖",slug:"版本依赖",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"vuepress/01 搭建vuepress2.md"}},81242:(s,n,a)=>{a.r(n),a.d(n,{default:()=>r});var e=a(20641);const p=(0,e.Fv)('<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><ol><li><p>在github创建仓库vlog 用于存放我们的项目，并克隆到电脑上</p><img src="/images/vuepress/image-20211126054031455.png" alt="image-20211126054031455" style="zoom:50%;"></li><li><p>进入vlog目录，安装vuepress</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 构建前端的包管理</span>\n<span class="token function">npm</span> init\n<span class="token comment"># 安装vuepress 当前的最新版本是2.0.0-beta.27</span>\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next\n\n<span class="token comment"># 在 package.json 中添加一些 scripts</span>\n<span class="token punctuation">{</span>\n  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;docs:dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>,\n    <span class="token string">&quot;docs:build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment"># 将默认的临时目录和缓存目录添加到 .gitignore 文件中</span>\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n\n<span class="token comment"># 创建你的第一篇文档</span>\n<span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li><li><p>在本地启动服务器来开发你的文档网站</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><ol><li>在<code>.vuepress</code>文件夹下，创建config.js,以后的相关导航栏，侧边栏，搜索等都在这里配置。</li><li>在<code>.vuepress</code> 文件夹下，创建public文件夹，在创建images，用于存放图片</li><li>为了使得页面更加简洁，禁用掉一些信息</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * vuepress 配置文件\n */</span>\n\n module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;静默的Vlog&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;静默的Vuepress Blog&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/images/favicon-32x32.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// icon设置</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token comment">// 禁用显示更新时间</span>\n      <span class="token literal-property property">contributors</span><span class="token operator">:</span> <span class="token boolean">false</span>   <span class="token comment">// 禁用显示贡献者 </span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="版本依赖" tabindex="-1"><a class="header-anchor" href="#版本依赖" aria-hidden="true">#</a> 版本依赖</h2><p>由于vuepress2还在开发中，我目前使用的版本是</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  \t<span class="token property">&quot;@vuepress/plugin-docsearch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;@vuepress/plugin-register-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.27&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>为了不使得它更新，我将箭头去掉,就使用2.0.0-beta.27</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;@vuepress/plugin-docsearch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@vuepress/plugin-google-analytics&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;@vuepress/plugin-register-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.27&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0-beta.27&quot;</span>\n  <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>主要原因是依赖更新了，还存在一些bug，会导致我自己写的组件失效。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',12),t={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},l={},r=(0,a(66262).A)(l,[["render",function(s,n){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("快速上手 | VuePress (vuejs.org)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",o,[(0,e.eW)("配置 | VuePress (vuejs.org)"),(0,e.bF)(a)])])],64)}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);