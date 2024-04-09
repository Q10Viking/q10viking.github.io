"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[8717],{38005:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-9230b890",path:"/zk/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"分布式锁",slug:"分布式锁",children:[]},{level:2,title:"数据库实现的分布式锁",slug:"数据库实现的分布式锁",children:[]},{level:2,title:"ZK用作分布式锁",slug:"zk用作分布式锁",children:[]}],filePathRelative:"zk/分布式锁.md"}},62370:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const r=(0,a(20641).Fv)('<h2 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h2><blockquote><p>加锁的本质： 保证多线程竞争共享资源时的序列化执行。</p></blockquote><p>用来解决跨机器进程之间的数据同步问题。</p><p>redis适用高并发大的场景</p><p>zk适合高可靠的，并发量不是很大的场景</p><h2 id="数据库实现的分布式锁" tabindex="-1"><a class="header-anchor" href="#数据库实现的分布式锁" aria-hidden="true">#</a> 数据库实现的分布式锁</h2><p>mysql如果宕机后，如果客户端单机，没有即使删除锁，会导致锁始终没有释放</p><h2 id="zk用作分布式锁" tabindex="-1"><a class="header-anchor" href="#zk用作分布式锁" aria-hidden="true">#</a> ZK用作分布式锁</h2><p>临时节点： 避免锁一直存在</p><p>通知：唤醒线程（能够有效的控制时间），不会出现锁续命的场景</p><p>为了避免羊群效应，创建临时顺序节点</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create -e -s /lock/prefixName\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>缺点： <strong>需要频繁创建和删除节点，性能上不如Redis</strong></p>',13),i={},n=(0,a(66262).A)(i,[["render",function(e,t){return r}]])},66262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}}}]);