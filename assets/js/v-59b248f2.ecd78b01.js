"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[25794],{57005:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-59b248f2",path:"/seata/03%20%E4%B8%A4%E9%98%B6%E6%AE%B5%E6%8F%90%E4%BA%A4%E5%8D%8F%E8%AE%AE2pc.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/seata/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"两阶段提交协议(2PC)",slug:"两阶段提交协议-2pc",children:[{level:3,title:"阶段1",slug:"阶段1",children:[]},{level:3,title:"阶段2",slug:"阶段2",children:[]}]},{level:2,title:"两阶段提交TCC&XA",slug:"两阶段提交tcc-xa",children:[]},{level:2,title:"两阶段提交协议(2PC)存在的问题",slug:"两阶段提交协议-2pc-存在的问题",children:[{level:3,title:"同步阻塞问题。",slug:"同步阻塞问题。",children:[]},{level:3,title:"单点故障",slug:"单点故障",children:[]},{level:3,title:"数据不一致",slug:"数据不一致",children:[]}]}],filePathRelative:"seata/03 两阶段提交协议2pc.md"}},1465:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});const r=(0,a(20641).Fv)('<h2 id="两阶段提交协议-2pc" tabindex="-1"><a class="header-anchor" href="#两阶段提交协议-2pc" aria-hidden="true">#</a> <strong>两阶段提交协议(2PC)</strong></h2><p>两阶段提交协议（Two Phase Commit）不是在XA规范中提出，但是XA规范对其进行了优化。而从字面意思来理解，Two Phase Commit，就是将提交(commit)过程划分为2个阶段(Phase)：</p><h3 id="阶段1" tabindex="-1"><a class="header-anchor" href="#阶段1" aria-hidden="true">#</a> 阶段1</h3><p><strong>TM通知各个RM准备提交它们的事务分支</strong>。如果RM判断自己进行的工作可以被提交，那就对工作内容进行持久化，再给TM肯定答复；要是发生了其他情况，那给TM的都是否定答复。在发送了否定答复并回滚了已经的工作后，RM就可以丢弃这个事务分支信息。</p><p>以mysql数据库为例，在第一阶段，事务管理器向所有涉及到的数据库服务器发出prepare&quot;准备提交&quot;请求，数据库收到请求后执行数据修改和日志记录等处理，处理完成后只是把事务的状态改成&quot;可以提交&quot;,然后把结果返回给事务管理器。</p><h3 id="阶段2" tabindex="-1"><a class="header-anchor" href="#阶段2" aria-hidden="true">#</a> 阶段2</h3><p>TM根据阶段1各个RM prepare的结果，决定是提交还是回滚事务。如果所有的RM都prepare成功，那么TM通知所有的RM进行提交；如果有RM prepare失败的话，则TM通知所有RM回滚自己的事务分支。</p><p>以mysql数据库为例，如果第一阶段中所有数据库都prepare成功，那么事务管理器向数据库服务器发出&quot;确认提交&quot;请求，数据库服务器把事务的&quot;可以提交&quot;状态改为&quot;提交完成&quot;状态，然后返回应答。如果在第一阶段内有任何一个数据库的操作发生了错误，或者事务管理器收不到某个数据库的回应，则认为事务失败，回撤所有数据库的事务。数据库服务器收不到第二阶段的确认提交请求，也会把&quot;可以提交&quot;的事务回撤。</p><p><img src="/images/seata/17993.png" alt="img"></p><h2 id="两阶段提交tcc-xa" tabindex="-1"><a class="header-anchor" href="#两阶段提交tcc-xa" aria-hidden="true">#</a> 两阶段提交TCC&amp;XA</h2><p><strong>XA是资源层面的分布式事务，强一致性，在两阶段提交的整个过程中，一直会持有资源的锁。</strong></p><p><strong>TCC是业务层面的分布式事务，最终一致性，不会一直持有资源的锁。</strong></p><p><img src="/images/seata/17990.png" alt="img"></p><h2 id="两阶段提交协议-2pc-存在的问题" tabindex="-1"><a class="header-anchor" href="#两阶段提交协议-2pc-存在的问题" aria-hidden="true">#</a> <strong>两阶段提交协议(2PC)存在的问题</strong></h2><h3 id="同步阻塞问题。" tabindex="-1"><a class="header-anchor" href="#同步阻塞问题。" aria-hidden="true">#</a> <strong>同步阻塞问题。</strong></h3><p>两阶段提交方案下全局事务的ACID特性，是依赖于RM的。一个全局事务内部包含了多个独立的事务分支，这一组事务分支要不都成功，要不都失败。各个事务分支的ACID特性共同构成了全局事务的ACID特性。也就是将单个事务分支的支持的ACID特性提升一个层次到分布式事务的范畴。 即使在本地事务中，如果对操作读很敏感，我们也需要将事务隔离级别设置为SERIALIZABLE。而对于分布式事务来说，更是如此，可重复读隔离级别不足以保证分布式事务一致性。如果我们使用mysql来支持XA分布式事务的话，那么最好将事务隔离级别设置为SERIALIZABLE，然而SERIALIZABLE(串行化)是四个事务隔离级别中最高的一个级别，也是执行效率最低的一个级别。</p><h3 id="单点故障" tabindex="-1"><a class="header-anchor" href="#单点故障" aria-hidden="true">#</a> <strong>单点故障</strong></h3><p>由于协调者的重要性，一旦协调者TM发生故障，参与者RM会一直阻塞下去。尤其在第二阶段，协调者发生故障，那么所有的参与者还都处于锁定事务资源的状态中，而无法继续完成事务操作。（如果是协调者挂掉，可以重新选举一个协调者，但是无法解决因为协调者宕机导致的参与者处于阻塞状态的问题）</p><h3 id="数据不一致" tabindex="-1"><a class="header-anchor" href="#数据不一致" aria-hidden="true">#</a> <strong>数据不一致</strong></h3><p>在二阶段提交的阶段二中，当协调者向参与者发送commit请求之后，发生了局部网络异常或者在发送commit请求过程中协调者发生了故障，这会导致只有一部分参与者接受到了commit请求，而在这部分参与者接到commit请求之后就会执行commit操作，但是其他部分未接到commit请求的机器则无法执行事务提交。于是整个分布式系统便出现了数据不一致性的现象。</p><p>由于二阶段提交存在着诸如同步阻塞、单点问题等缺陷，所以，研究者们在二阶段提交的基础上做了改进，提出了三阶段提交。</p>',21),i={},h=(0,a(66262).A)(i,[["render",function(e,t){return r}]])},66262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,r]of t)a[e]=r;return a}}}]);