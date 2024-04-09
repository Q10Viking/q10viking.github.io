"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[22925],{85524:(e,l,i)=>{i.r(l),i.d(l,{data:()=>r});const r={key:"v-c9fb1cde",path:"/zk/18%20Leader%E9%80%89%E4%B8%BE%E5%8E%9F%E7%90%86.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/zk/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"zk/18 Leader选举原理.md"}},83966:(e,l,i)=>{i.r(l),i.d(l,{default:()=>p});const r=(0,i(20641).Fv)('<blockquote><p>zookeeper 的 leader 选举存在两个阶段，一个是服务器启动时 leader 选举，另一个是运行过程中 leader 服务器宕机。</p></blockquote><p>在分析选举原理前，先介绍几个重要的参数：</p><ul><li>服务器 ID(myid)：编号越大在选举算法中权重越大</li><li>事务 ID(zxid)：值越大说明数据越新，权重越大</li><li>逻辑时钟(epoch-logicalclock)：同一轮投票过程中的逻辑时钟值是相同的，每投完一次值会增加</li></ul><p>选举状态：</p><ul><li>LOOKING: 竞选状态</li><li>FOLLOWING: 随从状态，同步 leader 状态，参与投票</li><li>OBSERVING: 观察状态，同步 leader 状态，不参与投票</li><li>LEADING: 领导者状态</li></ul><p>每个节点启动的时候都 LOOKING 观望状态，接下来就开始进行选举主流程。这里选取三台机器组成的集群为例。第一台服务器 server1启动时，无法进行 leader 选举，当第二台服务器 server2 启动时，两台机器可以相互通信，进入 leader 选举过程。</p><ul><li><p>（1）每台 server 发出一个投票，由于是初始情况，server1 和 server2 都将自己作为 leader 服务器进行投票，每次投票包含所推举的服务器myid、zxid、epoch，使用（myid，zxid）表示，此时 server1 投票为（1,0），server2 投票为（2,0），然后将各自投票发送给集群中其他机器。</p></li><li><p>（2）接收来自各个服务器的投票。集群中的每个服务器收到投票后，首先判断该投票的有效性，如检查是否是本轮投票（epoch）、是否来自 LOOKING 状态的服务器。</p></li><li><p>（3）分别处理投票。针对每一次投票，服务器都需要将其他服务器的投票和自己的投票进行对比，对比规则如下：</p></li><li><ul><li>a. 优先比较 epoch</li><li>b. 检查 zxid，zxid 比较大的服务器优先作为 leader</li><li>c. 如果 zxid 相同，那么就比较 myid，myid 较大的服务器作为 leader 服务器</li></ul></li><li><p>（4）统计投票。每次投票后，服务器统计投票信息，判断是都有过半机器接收到相同的投票信息。server1、server2 都统计出集群中有两台机器接受了（2,0）的投票信息，此时已经选出了 server2 为 leader 节点。</p></li><li><p>（5）改变服务器状态。一旦确定了 leader，每个服务器响应更新自己的状态，如果是 follower，那么就变更为 FOLLOWING，如果是 Leader，变更为 LEADING。此时 server3继续启动，直接加入变更自己为 FOLLOWING。</p></li></ul><p><img src="/images/zk/45570.png" alt="https://note.youdao.com/yws/public/resource/f0549278905bb988c831d6910c54143a/xmlnote/C1C52BC4F168430AA227C3AEF05CC842/45570"></p><p><strong>运行过程中的 leader 选举</strong></p><p>当集群中 leader 服务器出现宕机或者不可用情况时，整个集群无法对外提供服务，进入新一轮的 leader 选举。</p><ul><li>（1）变更状态。leader 挂后，其他非 Oberver服务器将自身服务器状态变更为 LOOKING。</li><li>（2）每个 server 发出一个投票。在运行期间，每个服务器上 zxid 可能不同。</li><li>（3）处理投票。规则同启动过程。</li><li>（4）统计投票。与启动过程相同。</li><li>（5）改变服务器状态。与启动过程相同。</li></ul>',11),d={},p=(0,i(66262).A)(d,[["render",function(e,l){return r}]])},66262:(e,l)=>{l.A=(e,l)=>{const i=e.__vccOpts||e;for(const[e,r]of l)i[e]=r;return i}}}]);