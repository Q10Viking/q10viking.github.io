"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[26365],{72399:(r,t,e)=>{e.r(t),e.d(t,{data:()=>n});const n={key:"v-546c2092",path:"/concurrency/02%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%BA%BF%E7%A8%8B%E7%AE%A1%E7%90%86.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/concurrency/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"执行空间保护",slug:"执行空间保护",children:[]},{level:2,title:"内核线程模型",slug:"内核线程模型",children:[]},{level:2,title:"用户线程模型",slug:"用户线程模型",children:[]},{level:2,title:"用户级线程和内核级线程的区别",slug:"用户级线程和内核级线程的区别",children:[]},{level:2,title:"一对一模型❤️",slug:"一对一模型❤️",children:[]}],filePathRelative:"concurrency/02 操作系统线程管理.md"}},74550:(r,t,e)=>{e.r(t),e.d(t,{default:()=>l});const n=(0,e(20641).Fv)('<p>JVM采用的是内核线程模型，因为在java程序开启200个线程时，操作线程的线程数会增加</p><h2 id="执行空间保护" tabindex="-1"><a class="header-anchor" href="#执行空间保护" aria-hidden="true">#</a> <strong>执行空间保护</strong></h2><p>操作系统有<strong>用户空间</strong>与<strong>内核空间</strong>两个概念，目的也是为了做到程序运行安全隔离与稳定，以32位操作系统4G大小的内存空间为例</p><p><img src="/images/concurrency/13972.png" alt="img"></p><ol><li>Linux为内核代码和数据结构预留了几个页框，这些页永远不会被转出到磁盘上</li><li>从 0x00000000 到 0xC0000000（PAGE_OFFSET） 的线性地址可由用户代码 和 内核代码进行引用（<strong>即用户空间</strong>）。</li><li>从0xC0000000（PAGE_OFFSET）到 0xFFFFFFFFF的线性地址只能由内核代码进行访问（<strong>即内核空间</strong>）。 <ol><li>内核代码及其数据结构都必须位于这 1 GB的地址空间中</li></ol></li></ol><p>这意味着在 4 GB 的内存空间中，只有 3 GB 可以用于用户应用程序。进程与线程只能运行在用户方式（usermode）或内核方式（kernelmode）下。用户程序运行在用户方式下，而系统调用运行在内核方式下。在这两种方式下所用的堆栈不一样：用户方式下用的是一般的堆栈(用户空间的堆栈)，而内核方式下用的是固定大小的堆栈（内核空间的堆栈，一般为一个内存页的大小），即<strong>每个进程与线程其实有两个堆栈，分别运行与用户态与内核态</strong>。</p><p>由空间划分我们再引深一下，CPU调度的基本单位线程，也划分为：</p><blockquote><p>1、内核线程模型(KLT)</p><p>2、用户线程模型(ULT)</p></blockquote><hr><h2 id="内核线程模型" tabindex="-1"><a class="header-anchor" href="#内核线程模型" aria-hidden="true">#</a> <strong>内核线程模型</strong></h2><p>内核线程(KLT)：系统内核管理线程(KLT),内核保存线程的状态和上下文信息，线程阻塞不会引起进程阻塞。在多处理器系统上，多线程在多处理器上并行运行。线程的创建、调度和管理由内核完成，效率比ULT要慢，比进程操作快。</p><p><img src="/images/concurrency/13989.png" alt="img"></p><h2 id="用户线程模型" tabindex="-1"><a class="header-anchor" href="#用户线程模型" aria-hidden="true">#</a> <strong>用户线程模型</strong></h2><p>用户线程(ULT)：用户程序实现,不依赖操作系统核心,应用提供创建、同步、调度和管理线程的函数来控制用户线程。<strong>不需要用户态/内核态切换，速度快</strong>。<strong>内核对ULT无感知</strong>，<strong>线程阻塞则进程（包括它的所有线程）阻塞</strong>。</p><p><img src="/images/concurrency/13986.png" alt="img"></p><ol><li>用户线程在用户空间中实现，<strong>内核并没有直接对用户线程进程调度，内核的调度对象和传统进程一样，还是进程（用户进程）本身，内核并不能看到用户线程</strong>，<strong>内核并不知道用户线程的存在</strong>。</li><li>不需要内核支持而在用户程序中实现的线程，其不依赖于操作系统核心，应用进程利用线程库提供创建、同步、调度和管理线程的函数来控制用户线程。</li><li>内核资源的分配仍然是按照进程（用户进程）进行分配的；<strong>各个用户线程只能在进程内进行资源竞争</strong>。</li><li>用户级线程内核的切换由用户态程序自己控制内核切换（通过系统调用来获得内核提供的服务）,不需要内核干涉，少了进出内核态的消耗，但不能很好的利用多核Cpu。</li><li>每个用户线程并不具有自身的线程上下文。因此，就线程的同时执行而言，任意给定时刻每个进程只能够有一个线程在运行，而且只有一个处理器内核会被分配给该进程。</li></ol><h2 id="用户级线程和内核级线程的区别" tabindex="-1"><a class="header-anchor" href="#用户级线程和内核级线程的区别" aria-hidden="true">#</a> 用户级线程和内核级线程的区别</h2><ol><li><p>内核支持：<strong>用户级线程可在一个不支持线程的OS中实现；内核支持线程则需要得到OS内核的支持</strong>。亦即内核支持线程是OS内核可感知的，而用户级线程是OS内核不可感知的。</p></li><li><p>处理器分配： 在多处理机环境下，对用户级线程而言主，内核一次只为一个进程分配一个处理器，进程无法享用多处理机带来的好处；<strong>在设置有内核支持线程时，内核可调度一个应用中的多个线程同时在多个处理器上并行运行，提高程序的执行速度和效率</strong>。</p></li><li><p><strong>调度和线程执行时间：设置有内核支持线程的系统，其调度方式和算法与进程的调度十分相似，只不过调度单位是线程；对只设置了用户级线程的系统，调度的单位仍为进程。</strong></p></li><li><p>用户级线程执行系统调用指令时将导致其所属进程被中断，而内核支持线程执行系统调用指令时，只导致该线程被中断。</p></li><li><p>在只有用户级线程的系统内，CPU调度还是以进程为单位，处于运行状态的进程中的多个线程，由用户程序控制线程的轮换运行；<strong>在有内核支持线程的系统内，CPU调度则以线程为单位，由OS的线程调度程序负责线程的调度</strong>。</p></li></ol><h2 id="一对一模型❤️" tabindex="-1"><a class="header-anchor" href="#一对一模型❤️" aria-hidden="true">#</a> 一对一模型❤️</h2><p>有了内核线程，<strong>每个用户线程被映射或绑定到一个内核线程</strong>。用户线程在其生命期内都会绑定到该内核线程。一旦用户线程终止，两个线程都将离开系统。这被称作&quot;一对一&quot;线程映射。（反过来，一个内核线程不一定就会对应一个用户线程）。一般一直使用API或者是系统调用创建的线程均为一对一线程。</p>',20),i={},l=(0,e(66262).A)(i,[["render",function(r,t){return n}]])},66262:(r,t)=>{t.A=(r,t)=>{const e=r.__vccOpts||r;for(const[r,n]of t)e[r]=n;return e}}}]);