"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[22440],{4742:(t,e,r)=>{r.r(e),r.d(e,{data:()=>i});const i={key:"v-698a7ee9",path:"/JVM/27%20%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%A8%E5%85%83%E7%A9%BA%E9%97%B4%E6%9B%BF%E6%8D%A2%E6%8E%89%E6%B0%B8%E4%B9%85%E4%BB%A3.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/JVM/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"JVM/27 为什么用元空间替换掉永久代.md"}},12594:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const i=(0,r(20641).Fv)("<p>虚拟机使用元空间替代了永久代是因为永久代在过去的实现中存在一些问题和限制，而元空间提供了更好的性能和灵活性。以下是一些详细的原因：</p><ol><li>内存管理：永久代的内存管理是由虚拟机自身控制的，无法根据应用程序的需求进行<strong>动态调整</strong>。而元空间使用本地内存进行管理，可以根据应用程序的需求<strong>动态分配</strong>和释放内存，提高内存的利用率。</li><li>永久代内存溢出：在永久代中，存储类的元数据、常量池、静态变量等，当应用程序加载大量类或者使用大量字符串常量时，可能导致<strong>永久代内存溢出</strong>。而元空间不再有固定的大小限制，可以根据应用程序的需要<strong>自动扩展</strong>。</li><li>类的卸载：在永久代中，由于类的卸载机制比较复杂，很难实现完全的类卸载。而元空间使用本地内存，可以更容易地实现类的卸载，减少内存的占用。</li><li>性能优化：元空间的实现采用了更高效的数据结构和算法，例如使用指针碰撞（Bump the Pointer）的方式分配内存，减少内存碎片化，提高内存分配的效率。此外，元空间还支持并发的类加载和卸载操作，提高了性能</li></ol>",2),o={},n=(0,r(66262).A)(o,[["render",function(t,e){return i}]])},66262:(t,e)=>{e.A=(t,e)=>{const r=t.__vccOpts||t;for(const[t,i]of e)r[t]=i;return r}}}]);