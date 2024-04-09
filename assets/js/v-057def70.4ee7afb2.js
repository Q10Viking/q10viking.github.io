"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[21260],{4155:(n,t,o)=>{o.r(t),o.d(t,{data:()=>e});const e={key:"v-057def70",path:"/MySQL/35%20%E4%B8%BA%E4%BB%80%E4%B9%88MySQL%E9%BB%98%E8%AE%A4%E5%BC%95%E6%93%8E%E6%98%AFInnoDB.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/MySQL/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"MySQL/35 为什么MySQL默认引擎是InnoDB.md"}},35568:(n,t,o)=>{o.r(t),o.d(t,{default:()=>r});const e=(0,o(20641).Fv)("<p>MySQL 默认的存储引擎是 InnoDB，这是因为 InnoDB 在性能、事务支持和容错能力等方面具有较好的特性，适合大多数应用场景。下面是一些原因：</p><ol><li>**支持事务：**InnoDB 是一个支持事务的存储引擎。事务是一组数据库操作的原子性执行，可以保证操作的一致性和完整性。</li><li><strong>并发控制</strong>：<strong>InnoDB 支持行级锁定</strong>，在高并发环境下可以最大程度地减少锁冲突，提高并发性能。相比之下，MySQL 的另一个存储引擎 MyISAM 只支持表级锁定，并发性能较低。</li><li>**外键约束：**InnoDB 支持外键约束，可以保证数据的完整性。外键用于建立表与表之间的连接，通过外键约束可以实现数据之间的关联和参照完整性。</li><li>**崩溃恢复：**InnoDB 具有自动崩溃恢复的能力。即使在发生意外故障或系统崩溃时，InnoDB 引擎也能够自动进行崩溃恢复，保障数据的一致性。</li><li>**持热备份：**InnoDB 支持在线热备份，可以在不停止数据库服务的情况下进行备份操作。这对于需要实时运行且对数据可用性要求高的应用程序非常重要</li></ol><p>需要注意的是，虽然 InnoDB 是 MySQL 默认的存储引擎，但在某些场景下，可以根据实际需求选择其他存储引擎，如 MyISAM、Memory 等。不同的存储引擎适用于不同的应用场景和需求。</p>",3),i={},r=(0,o(66262).A)(i,[["render",function(n,t){return e}]])},66262:(n,t)=>{t.A=(n,t)=>{const o=n.__vccOpts||n;for(const[n,e]of t)o[n]=e;return o}}}]);