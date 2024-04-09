"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[4936],{28335:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-1d088cd4",path:"/win11/15%20excalidraw.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/win11/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"环境配置",slug:"环境配置",children:[{level:3,title:"nvm",slug:"nvm",children:[]},{level:3,title:"运行起来",slug:"运行起来",children:[]}]},{level:2,title:"编写bat启动文件",slug:"编写bat启动文件",children:[]},{level:2,title:"设置字体",slug:"设置字体",children:[]},{level:2,title:"素材库",slug:"素材库",children:[]},{level:2,title:"背景颜色",slug:"背景颜色",children:[]}],filePathRelative:"win11/15 excalidraw.md"}},86850:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var s=a(20641);const l={href:"https://excalidraw.com/",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Lk)("p",null,"很好用的白板工具",-1),t={href:"https://github.com/excalidraw/excalidraw/releases",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Fv)('<p>使用发布的版本，不要使用master版本</p><p><img src="/images/win11/image-20240409205628040.png" alt="image-20240409205628040"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span> \n<span class="token function">yarn</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><h3 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h3>',5),c={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/qq_22182989/article/details/125387145",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>nvm ls                      <span class="token comment">// 看安装的所有node.js的版本</span>\nnvm list available          <span class="token comment">// 查显示可以安装的所有node.js的版本</span>\nnvm install <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span>       <span class="token comment">// 安装node.js的命名 version是版本号 nvm install 18.20.0</span>\nnvm use <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span>           <span class="token comment">// 切换到使用指定的nodejs版本 nvm use 18.20.0</span>\n    \nnpm install <span class="token operator">-</span>g yarn\nyarn <span class="token operator">-</span>v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="运行起来" tabindex="-1"><a class="header-anchor" href="#运行起来" aria-hidden="true">#</a> 运行起来</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="编写bat启动文件" tabindex="-1"><a class="header-anchor" href="#编写bat启动文件" aria-hidden="true">#</a> 编写bat启动文件</h2><blockquote><p>命名为<code>start_excalidraw.bat</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@echo off  \ncd /d E:\\excalidraw-0.17.3\nyarn start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="设置字体" tabindex="-1"><a class="header-anchor" href="#设置字体" aria-hidden="true">#</a> 设置字体</h2>',7),p={href:"https://blog.csdn.net/xhmico/article/details/135655680",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Lk)("p",null,"我在自己的excalidraw中添加了三种字体",-1),b=(0,s.Lk)("h2",{id:"素材库",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#素材库","aria-hidden":"true"},"#"),(0,s.eW)(" 素材库")],-1),h={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Fv)('<p>官网提供的素材库</p><h2 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>faf9de\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),v={},g=(0,a(66262).A)(v,[["render",function(e,n){const a=(0,s.g2)("OutboundLink");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("p",null,[(0,s.Lk)("a",l,[(0,s.eW)("Excalidraw"),(0,s.bF)(a)])]),r,(0,s.Lk)("p",null,[(0,s.Lk)("a",t,[(0,s.eW)("Releases · excalidraw/excalidraw (github.com)"),(0,s.bF)(a)])]),i,(0,s.Lk)("p",null,[(0,s.eW)("卸载windows上的node,安装"),(0,s.Lk)("a",c,[(0,s.eW)("Releases · coreybutler/nvm-windows (github.com)"),(0,s.bF)(a)])]),(0,s.Lk)("p",null,[(0,s.Lk)("a",o,[(0,s.eW)("nvm 介绍，安装，以及使用"),(0,s.bF)(a)])]),d,(0,s.Lk)("p",null,[(0,s.Lk)("a",p,[(0,s.eW)("添加沐瑶字体"),(0,s.bF)(a)])]),u,b,(0,s.Lk)("p",null,[(0,s.eW)("阿里icon "),(0,s.Lk)("a",h,[(0,s.eW)("iconfont-阿里巴巴矢量图标库"),(0,s.bF)(a)])]),m],64)}]])},66262:(e,n)=>{n.A=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}}}]);