"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[99784],{70662:(e,r,s)=>{s.r(r),s.d(r,{data:()=>t});const t={key:"v-6ceb62d8",path:"/ElasticStack/34%20es%E8%84%91%E8%A3%82%E9%97%AE%E9%A2%98.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/ElasticStack/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"集群脑裂问题",slug:"集群脑裂问题",children:[]},{level:2,title:"es针对集群脑裂问题制定的参数",slug:"es针对集群脑裂问题制定的参数",children:[{level:3,title:"集群至少设置3台的原因",slug:"集群至少设置3台的原因",children:[]}]},{level:2,title:"基于奇数脑裂问题场景分析",slug:"基于奇数脑裂问题场景分析",children:[]}],filePathRelative:"ElasticStack/34 es脑裂问题.md"}},23125:(e,r,s)=>{s.r(r),s.d(r,{default:()=>i});const t=(0,s(20641).Fv)('<h2 id="集群脑裂问题" tabindex="-1"><a class="header-anchor" href="#集群脑裂问题" aria-hidden="true">#</a> 集群脑裂问题</h2><p>所谓脑裂问题，就是<strong>同一个集群中的不同节点，对于集群的状态有了不一样的理解</strong>，比如集群中存在两个master</p><ol><li>如果因为网络的故障，导致一个集群被划分成了两片，每片都有多个node，以及一个master，那么集群中就出现了两个master了。</li><li>因为master是集群中非常重要的一个角色，主宰了集群状态的维护，以及shard的分配，因此如果有两个master，可能<strong>会导致数据异常</strong></li></ol><hr><p>正常情况下：节点1在启动时被选举为主节点并保存主分片标记为0P，而节点2保存复制分片标记为0R</p><p><img src="/images/elasticsearch/image-20210505093705928.png" alt=""></p><p>如果在两个节点之间的通讯中断了，两个节点都相信对方已经挂了</p><p><img src="/images/elasticsearch/image-20210505093848950.png" alt=""></p><p>在网络通讯中断，节点不能互通的情况下，节点1不需要做什么，因为它本来就被选举为主节点。但是<strong>节点2会自动选举它自己为主节点</strong>，因为它相信集群的一部分没有主节点了。</p><p>在elasticsearch集群，是有主节点来决定将分片平均的分布到节点上的。节点2保存的是复制分片，但它相信主节点不可用了。所以它会自动提升Node2节点为主节点。</p><p><img src="/images/elasticsearch/image-20210505094016290.png" alt=""></p><p><strong>现在我们的集群在一个不一致的状态了</strong>。打在节点1上的索引请求会将索引数据分配在主节点，同时打在节点2的请求会将索引数据放在分片上。在这种情况下，<strong>分片的两份数据分开了</strong>，如果不做一个全量的重索引很难对它们进行重排序。</p><p>在更坏的情况下，一个对集群无感知的索引客户端（例如，使用REST接口的）,这个问题非常透明难以发现，无论哪个节点被命中索引请求仍然在每次都会成功完成。问题只有在搜索数据时才会被隐约发现：取决于搜索请求命中了哪个节点，结果都会不同。</p><h2 id="es针对集群脑裂问题制定的参数" tabindex="-1"><a class="header-anchor" href="#es针对集群脑裂问题制定的参数" aria-hidden="true">#</a> es针对集群脑裂问题制定的参数</h2><p>那么那个参数的作用，就是告诉es直到有足够的master候选节点时，才可以选举出一个master，否则就不要选举出一个master。这个参数必须被设置为集群中master候选节点的quorum数量，也就是大多数。至于quorum的算法，就是：master候选节点数量 / 2 + 1。</p><p><code>discovery.zen.minimum_master_nodes</code>：告诉es直到有<strong>足够的master候选节点时</strong>，才可以选举出一个master，否则就不要选举出一个master</p><p>quorum的算法，就是：<strong>master候选节点数量 / 2 + 1</strong></p><h3 id="集群至少设置3台的原因" tabindex="-1"><a class="header-anchor" href="#集群至少设置3台的原因" aria-hidden="true">#</a> 集群至少设置3台的原因</h3><p>如果我们有2个节点，都可以是master候选节点，那么quorum是2 / 2 + 1 = 2。此时就有问题了，因为如果一个node挂掉了，那么剩下一个master候选节点，是无法满足quorum数量的，也就<strong>无法选举出新的master</strong>，<strong>集群就彻底挂掉了</strong>。</p><ol><li>此时就只能将这个参数设置为1，但是这就<strong>无法阻止脑裂的发生了</strong>。</li></ol><hr><h2 id="基于奇数脑裂问题场景分析" tabindex="-1"><a class="header-anchor" href="#基于奇数脑裂问题场景分析" aria-hidden="true">#</a> 基于奇数脑裂问题场景分析</h2><p>综上所述，一个生产环境的es集群，至少要有3个节点，同时将这个参数设置为quorum，也就是2.<code>discovery.zen.minimum_master_nodes</code>设置为2，如何避免脑裂呢？</p><p>那么这个是参数是如何避免脑裂问题的产生的呢？比如我们有3个节点，quorum是2.现在网络故障，1个节点在一个网络区域，另外2个节点在另外一个网络区域，不同的网络区域内无法通信。这个时候有两种情况情况：</p><ol><li>如果master是单独的那个节点，另外2个节点是master候选节点，那么此时那个单独的master节点因为没有指定数量的候选master node在自己当前所在的集群内，因此就会取消当前master的角色，尝试重新选举，但是无法选举成功。然后另外一个网络区域内的node因为无法连接到master，就会发起重新选举，因为有两个master候选节点，满足了quorum，因此可以成功选举出一个master。此时集群中就会还是只有一个master。</li><li>如果master和另外一个node在一个网络区域内，然后一个node单独在一个网络区域内。那么此时那个单独的node因为连接不上master，会尝试发起选举，但是因为master候选节点数量不到quorum，因此无法选举出master。而另外一个网络区域内，原先的那个master还会继续工作。这也可以保证集群内只有一个master节点。</li></ol><p>综上所述，集群中master节点的数量至少3台，三台主节点通过在elasticsearch.yml中配置discovery.zen.minimum_master_nodes: 2，就可以避免脑裂问题的产生。</p>',26),a={},i=(0,s(66262).A)(a,[["render",function(e,r){return t}]])},66262:(e,r)=>{r.A=(e,r)=>{const s=e.__vccOpts||e;for(const[e,t]of r)s[e]=t;return s}}}]);