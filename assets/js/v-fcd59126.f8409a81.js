"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[91046],{18681:(e,i,l)=>{l.r(i),l.d(i,{data:()=>t});const t={key:"v-fcd59126",path:"/concurrency/03%20%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%8C%87%E4%BB%A4%E6%9E%B6%E6%9E%84.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"栈指令集架构",slug:"栈指令集架构",children:[]},{level:2,title:"寄存器指令集架构",slug:"寄存器指令集架构",children:[]}],filePathRelative:"concurrency/03 虚拟机指令架构.md"}},15065:(e,i,l)=>{l.r(i),l.d(i,{default:()=>a});const t=(0,l(20641).Fv)('<blockquote><p>Java符合典型的栈指令集架构特征，像Python、Go都属于这种架构。</p></blockquote><h2 id="栈指令集架构" tabindex="-1"><a class="header-anchor" href="#栈指令集架构" aria-hidden="true">#</a> 栈指令集架构</h2><ol><li>设计和实现更简单,适用于资源受限的系统;</li><li>避开了寄存器的分配难题:使用零地址指令方式分配;</li><li>指令流中的指令大部分是零地址指令,其执行过程依赖与操作栈,指令集更小,编译器容易实现;</li><li>不需要硬件支持,可移植性更好,更好实现跨平台。</li></ol><h2 id="寄存器指令集架构" tabindex="-1"><a class="header-anchor" href="#寄存器指令集架构" aria-hidden="true">#</a> 寄存器指令集架构</h2><ol><li>典型的应用是x86的二进制指令集:比如传统的PC以及Android的Davlik虚拟机。</li><li>指令集架构则完全依赖硬件,可移植性差。</li><li>性能优秀和执行更高效。</li><li>花费更少的指令去完成一项操作</li><li>在大部分情况下,基于寄存器架构的指令集往往都以一地址指令、二地址指令和三地址指令为主,而基于栈式架构的指令集却是以零地址指令为主。</li></ol>',5),r={},a=(0,l(66262).A)(r,[["render",function(e,i){return t}]])},66262:(e,i)=>{i.A=(e,i)=>{const l=e.__vccOpts||e;for(const[e,t]of i)l[e]=t;return l}}}]);