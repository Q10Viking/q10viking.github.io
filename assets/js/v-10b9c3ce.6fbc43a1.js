"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[66518],{30523:(e,s,r)=>{r.r(s),r.d(s,{data:()=>t});const t={key:"v-10b9c3ce",path:"/Redis/21%20%E4%B8%BB%E4%BB%8E%E6%9E%B6%E6%9E%84%E5%8E%9F%E7%90%86.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Redis主从工作原理",slug:"redis主从工作原理",children:[]},{level:2,title:"主从复制(全量复制)",slug:"主从复制-全量复制",children:[]},{level:2,title:"数据部分复制",slug:"数据部分复制",children:[]}],filePathRelative:"Redis/21 主从架构原理.md"}},31642:(e,s,r)=>{r.r(s),r.d(s,{default:()=>i});const t=(0,r(20641).Fv)('<h2 id="redis主从工作原理" tabindex="-1"><a class="header-anchor" href="#redis主从工作原理" aria-hidden="true">#</a> <strong>Redis主从工作原理</strong></h2><p>如果你为master配置了一个slave，<strong>不管这个slave是否是第一次连接上Master</strong>，它都会发送一个<strong>PSYNC</strong>命令给master<strong>请求复制数据</strong>。</p><p>master收到PSYNC命令后，会在后台进行数据持久化通过bgsave生成最新的rdb快照文件，持久化期间，master会继续接收客户端的请求，它会把这些可能修改数据集的请求缓存在内存中。当持久化进行完毕以后，master会把这份rdb文件数据集发送给slave，slave会把接收到的数据进行持久化生成rdb，然后再加载到内存中。然后，master再将之前缓存在内存中的命令发送给slave。</p><p>当master与slave之间的连接由于某些原因而断开时，slave能够自动重连Master，如果master收到了多个slave并发连接请求，它只会进行一次持久化，而不是一个连接一次，然后再把这一份持久化的数据发送给多个并发连接的slave。</p><h2 id="主从复制-全量复制" tabindex="-1"><a class="header-anchor" href="#主从复制-全量复制" aria-hidden="true">#</a> <strong>主从复制(全量复制)</strong></h2><p><img src="/images/Redis/102424.png" alt=""></p><h2 id="数据部分复制" tabindex="-1"><a class="header-anchor" href="#数据部分复制" aria-hidden="true">#</a> <strong>数据部分复制</strong></h2><p>当master和slave断开重连后，一般都会对整份数据进行复制。但从redis2.8版本开始，redis改用可以支持部分数据复制的命令PSYNC去master同步数据，slave与master能够在网络连接断开重连后只进行部分数据复制(<strong>断点续传</strong>)。</p><p>master会在其内存中<strong>创建一个复制数据用的缓存队列</strong>，缓存最近一段时间的数据，<strong>master和它所有的slave都维护了复制的数据下标offset和master的进程id</strong>，因此，当网络连接断开后，slave会请求master继续进行未完成的复制，从所记录的数据下标开始。如果master进程id变化了，或者从节点数据下标offset太旧，<strong>已经不在master的缓存队列里了，那么将会进行一次全量数据的复制</strong>。</p><p><img src="/images/Redis/102426.png" alt=""></p>',10),a={},i=(0,r(66262).A)(a,[["render",function(e,s){return t}]])},66262:(e,s)=>{s.A=(e,s)=>{const r=e.__vccOpts||e;for(const[e,t]of s)r[e]=t;return r}}}]);