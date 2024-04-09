"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[71879],{60623:(t,e,p)=>{p.r(e),p.d(e,{data:()=>a});const a={key:"v-4710d5d6",path:"/JVM/19%20%E8%AE%B0%E5%BF%86%E9%9B%86%E4%B8%8E%E5%8D%A1%E8%A1%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/JVM/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"卡表维护",slug:"卡表维护",children:[]}],filePathRelative:"JVM/19 记忆集与卡表.md"}},75116:(t,e,p)=>{p.r(e),p.d(e,{default:()=>o});const a=(0,p(20641).Fv)('<p>在新生代做GCRoots可达性扫描过程中可能会碰到跨代引用的对象，这种如果又去对老年代再去扫描效率太低了。</p><p>为此，在新生代可以引入记录集（<strong>Remember Set</strong>）的数据结构（记录从非收集区到收集区的指针集合），避免把整个老年代加入GCRoots扫描范围。事实上并不只是新生代、 老年代之间才有跨代引用的问题， 所有涉及部分区域收集（Partial GC） 行为的垃圾收集器， 典型的如G1、 ZGC和Shenandoah收集器， 都会面临相同的问题。</p><p>垃圾收集场景中，收集器只需通过记忆集判断出某一块非收集区域是否存在指向收集区域的指针即可，无需了解跨代引用指针的全部细节。</p><p>hotspot使用一种叫做“卡表”(<strong>Cardtable</strong>)的方式实现记忆集，也是目前最常用的一种方式。关于卡表与记忆集的关系， 可以类比为Java语言中HashMap与Map的关系。</p><p>卡表是使用一个字节数组实现：CARD_TABLE[ ]，每个元素对应着其标识的内存区域一块特定大小的内存块，称为“卡页”。</p><p>hotSpot使用的卡页是2^9大小，即512字节</p><p><img src="/images/jvm/95719" alt="img"></p><p>一个卡页中可包含多个对象，只要有一个对象的字段存在跨代指针，其对应的卡表的元素标识就变成1，表示该元素变脏，否则为0.</p><p>GC时，只要筛选本收集区的卡表中变脏的元素加入GCRoots里。</p><h2 id="卡表维护" tabindex="-1"><a class="header-anchor" href="#卡表维护" aria-hidden="true">#</a> 卡表维护</h2><p>卡表变脏上面已经说了，但是需要知道如何让卡表变脏，即发生引用字段赋值时，如何更新卡表对应的标识为1。</p><p>Hotspot使用<strong>写屏障</strong>维护卡表状态</p>',12),r={},o=(0,p(66262).A)(r,[["render",function(t,e){return a}]])},66262:(t,e)=>{e.A=(t,e)=>{const p=t.__vccOpts||t;for(const[t,a]of e)p[t]=a;return p}}}]);