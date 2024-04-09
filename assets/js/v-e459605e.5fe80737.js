"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[34469],{27794:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-e459605e",path:"/Redis/28%20%E6%90%AD%E5%BB%BA%E9%AB%98%E5%8F%AF%E7%94%A8%E7%9A%84%E9%9B%86%E7%BE%A4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"配置集群文件",slug:"配置集群文件",children:[]},{level:2,title:"创建集群",slug:"创建集群",children:[{level:3,title:"启动redis实例",slug:"启动redis实例",children:[]},{level:3,title:"创建整个redis集群",slug:"创建整个redis集群",children:[]},{level:3,title:"验证集群⭐",slug:"验证集群⭐",children:[]},{level:3,title:"数据验证",slug:"数据验证",children:[]}]},{level:2,title:"重新启动集群❤️",slug:"重新启动集群❤️",children:[]},{level:2,title:"关闭集群",slug:"关闭集群",children:[]}],filePathRelative:"Redis/28 搭建高可用的集群.md"}},34056:(s,n,a)=>{a.r(n),a.d(n,{default:()=>r});const e=(0,a(20641).Fv)('<h2 id="配置集群文件" tabindex="-1"><a class="header-anchor" href="#配置集群文件" aria-hidden="true">#</a> 配置集群文件</h2><p>redis集群需要<strong>至少三个master节点</strong>，我们这里搭建三个master节点，并且给每个master再搭建一个slave节点，总共6个redis节点，这里用三台机器部署6个redis实例，每台机器一主一从</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 机器集群分配规划实验</span>\n<span class="token number">192.168</span>.187.135:8001\n<span class="token number">192.168</span>.187.135:8004\n<span class="token number">192.168</span>.187.130:8002\n<span class="token number">192.168</span>.187.130:8005\n<span class="token number">192.168</span>.187.132:8003\n<span class="token number">192.168</span>.187.132:8006\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>，搭建集群的步骤如下：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>第一步：在第一台机器的/usr下创建文件夹redis-cluster，然后在其下面分别创建2个文件夾如下\n（1）mkdir <span class="token parameter variable">-p</span> /usr/redis-cluster\n <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token builtin class-name">cd</span> /usr/redis-cluster/\n（3）mkdir <span class="token number">8001</span> <span class="token number">8004</span>\n\n<span class="token comment">#============================================================================================</span>\n\n第二步：把之前的redis.conf配置文件copy到8001下，修改如下内容：\n<span class="token function">cp</span> /usr/redis/redis-6.2.6/redis.conf  ./8001/redis.conf\n<span class="token function">cp</span> /usr/redis/redis-6.2.6/redis.conf  ./8004/redis.conf\n\n（1）daemonize <span class="token function">yes</span>\n（2）port <span class="token number">8001</span>（分别对每个机器的端口号进行设置）\n（3）pidfile /var/run/redis_8001.pid  <span class="token comment"># 把pid进程号写入pidfile配置的文件</span>\n（4）dir /usr/redis-cluster/8001  <span class="token comment">#（指定数据文件存放位置，必须要指定不同的目录位置，不然会丢失数据）</span>\n（5）cluster-enabled yes（启动集群模式）\n（6）cluster-config-file nodes-8001.conf（集群节点信息文件，这里800x最好和port对应上）\n（7）cluster-node-timeout <span class="token number">10000</span>\n <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment"># bind 127.0.0.1（bind绑定的是自己机器网卡的ip，如果有多块网卡可以配多个ip，代表允许客户端通过机器的哪些网卡ip去访问，内网一般可以不配置bind，注释掉即可）</span>\n <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> protected-mode  no   （关闭保护模式）\n <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> appendonly <span class="token function">yes</span>\n 如果要设置密码需要增加如下配置：\n <span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> requirepass Root.123456     <span class="token punctuation">(</span>设置redis访问密码<span class="token punctuation">)</span>\n <span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> masterauth Root.123456      <span class="token punctuation">(</span>设置集群节点间访问密码，跟上面一致<span class="token punctuation">)</span>\n \n <span class="token comment">#============================================================================================</span>\n \n 第三步：把修改后的配置文件，copy到8004，修改第2、3、4、6项里的端口号\n\n <span class="token comment">#============================================================================================</span>\n\n 第四步：另外两台机器也需要做上面几步操作，第二台机器用8002和8005，第三台机器用8003和8006\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="创建集群" tabindex="-1"><a class="header-anchor" href="#创建集群" aria-hidden="true">#</a> 创建集群</h2><h3 id="启动redis实例" tabindex="-1"><a class="header-anchor" href="#启动redis实例" aria-hidden="true">#</a> 启动redis实例</h3><blockquote><p>第五步：<strong>分别启动6个redis实例，然后检查是否启动成功</strong>,如：</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#====================================192.168.187.135==========================================</span>\n<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8001/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8004/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>\nroot       <span class="token number">8089</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">14</span>:51 ?        00:00:00 /usr/redis/redis-6.2.6/src/redis-server *:8001 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\nroot       <span class="token number">8095</span>      <span class="token number">1</span> <span class="token number">25</span> <span class="token number">14</span>:52 ?        00:00:03 /usr/redis/redis-6.2.6/src/redis-server *:8004 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\n\n\n<span class="token comment">#====================================192.168.187.130==========================================</span>\n<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8002/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8005/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost redis-cluster<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>\nroot       <span class="token number">6002</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">14</span>:54 ?        00:00:00 /usr/redis/redis-6.2.6/src/redis-server *:8002 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\nroot       <span class="token number">6008</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">14</span>:54 ?        00:00:00 /usr/redis/redis-6.2.6/src/redis-server *:8005 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\n\n<span class="token comment">#====================================192.168.187.132==========================================</span>\n<span class="token punctuation">[</span>root@localhost redis-cluster<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8003/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost redis-cluster<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8006/redis.conf</span>\n<span class="token punctuation">[</span>root@localhost redis-cluster<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep redis</span>\nroot       <span class="token number">5996</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">14</span>:56 ?        00:00:00 /usr/redis/redis-6.2.6/src/redis-server *:8003 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\nroot       <span class="token number">6002</span>      <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">14</span>:56 ?        00:00:00 /usr/redis/redis-6.2.6/src/redis-server *:8006 <span class="token punctuation">[</span>cluster<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="创建整个redis集群" tabindex="-1"><a class="header-anchor" href="#创建整个redis集群" aria-hidden="true">#</a> 创建整个redis集群</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>第六步：用redis-cli创建整个redis集群<span class="token punctuation">(</span>redis5以前的版本集群是依靠ruby脚本redis-trib.rb实现<span class="token punctuation">)</span>\n<span class="token comment"># 下面命令里的1代表为每个创建的主服务器节点创建一个从服务器节点</span>\n<span class="token comment"># 执行这条命令需要确认三台机器之间的redis实例要能相互访问，可以先简单把所有机器防火墙关掉，如果不关闭防火墙则需要打开redis服务端口和集群节点gossip通信端口16379(默认是在redis端口号上加1W),</span>\n\n<span class="token comment">#===============================集群模式下redis 会开启gossip 端口默认加1W===========================</span>\n\n<span class="token punctuation">[</span>root@localhost redis-cluster<span class="token punctuation">]</span><span class="token comment"># netstat -nltp</span>\nActive Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8003            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">5996</span>/redis-server *\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8006            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">6002</span>/redis-server *\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:18003           <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">5996</span>/redis-server *\ntcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:18006           <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">6002</span>/redis-server *\n\n<span class="token comment">#================================================================================================</span>\n\n<span class="token comment"># 关闭防火墙</span>\n<span class="token comment"># systemctl stop firewalld # 临时关闭防火墙</span>\n<span class="token comment"># systemctl disable firewalld # 禁止开机启动</span>\n<span class="token comment"># 注意：下面这条创建集群的命令大家不要直接复制，里面的空格编码可能有问题导致创建集群不成功</span>\n\n/usr/redis/redis-6.2.6/src/redis-cli <span class="token parameter variable">-a</span> Root.123456 <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token number">192.168</span>.187.135:8001 <span class="token number">192.168</span>.187.130:8002 <span class="token number">192.168</span>.187.132:8003 <span class="token number">192.168</span>.187.135:8004 <span class="token number">192.168</span>.187.130:8005 <span class="token number">192.168</span>.187.132:8006\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p>输出信息</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost /<span class="token punctuation">]</span><span class="token comment"># /usr/redis/redis-6.2.6/src/redis-cli -a Root.123456 --cluster create --cluster-replicas 1 192.168.187.135:8001 192.168.187.130:8002 192.168.187.132:8003 192.168.187.135:8004 192.168.187.130:8005 192.168.187.132:8006</span>\nWarning: Using a password with <span class="token string">&#39;-a&#39;</span> or <span class="token string">&#39;-u&#39;</span> option on the <span class="token builtin class-name">command</span> line interface may not be safe.\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing <span class="token builtin class-name">hash</span> slots allocation on <span class="token number">6</span> nodes<span class="token punctuation">..</span>.\nMaster<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">0</span> - <span class="token number">5460</span>\nMaster<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">5461</span> - <span class="token number">10922</span>\nMaster<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> -<span class="token operator">&gt;</span> Slots <span class="token number">10923</span> - <span class="token number">16383</span>\nAdding replica <span class="token number">192.168</span>.187.130:8005 to <span class="token number">192.168</span>.187.135:8001\nAdding replica <span class="token number">192.168</span>.187.132:8006 to <span class="token number">192.168</span>.187.130:8002\nAdding replica <span class="token number">192.168</span>.187.135:8004 to <span class="token number">192.168</span>.187.132:8003\nM: 36eed9057c01ea7840ff4c8ee6ca6117ab745d56 <span class="token number">192.168</span>.187.135:8001\n   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master\nM: 11a8d28417768e04be9c598d5fde4b59a887514b <span class="token number">192.168</span>.187.130:8002\n   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master\nM: 1e42168a50e1fcd0a8642d256aef8d4be0a4e54f <span class="token number">192.168</span>.187.132:8003\n   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master\nS: 9b597d1b70d9a88af9d6bc159c3dfb0f5449beca <span class="token number">192.168</span>.187.135:8004\n   replicates 1e42168a50e1fcd0a8642d256aef8d4be0a4e54f\nS: d29f715ae86b3b2df7e103ee3ed60059e7c5fd7e <span class="token number">192.168</span>.187.130:8005\n   replicates 36eed9057c01ea7840ff4c8ee6ca6117ab745d56\nS: ce6df359a628d48ff15d529f195dab8bee30fda6 <span class="token number">192.168</span>.187.132:8006\n   replicates 11a8d28417768e04be9c598d5fde4b59a887514b\nCan I <span class="token builtin class-name">set</span> the above configuration? <span class="token punctuation">(</span>type <span class="token string">&#39;yes&#39;</span> to accept<span class="token punctuation">)</span>: <span class="token function">yes</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Nodes configuration updated\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Assign a different config epoch to each <span class="token function">node</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Sending CLUSTER MEET messages to <span class="token function">join</span> the cluster\nWaiting <span class="token keyword">for</span> the cluster to <span class="token function">join</span>\n\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Performing Cluster Check <span class="token punctuation">(</span>using <span class="token function">node</span> <span class="token number">192.168</span>.187.135:8001<span class="token punctuation">)</span>\nM: 36eed9057c01ea7840ff4c8ee6ca6117ab745d56 <span class="token number">192.168</span>.187.135:8001\n   slots:<span class="token punctuation">[</span><span class="token number">0</span>-5460<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master\n   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>\nS: ce6df359a628d48ff15d529f195dab8bee30fda6 <span class="token number">192.168</span>.187.132:8006\n   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave\n   replicates 11a8d28417768e04be9c598d5fde4b59a887514b\nS: 9b597d1b70d9a88af9d6bc159c3dfb0f5449beca <span class="token number">192.168</span>.187.135:8004\n   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave\n   replicates 1e42168a50e1fcd0a8642d256aef8d4be0a4e54f\nM: 1e42168a50e1fcd0a8642d256aef8d4be0a4e54f <span class="token number">192.168</span>.187.132:8003\n   slots:<span class="token punctuation">[</span><span class="token number">10923</span>-16383<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5461</span> slots<span class="token punctuation">)</span> master\n   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>\nS: d29f715ae86b3b2df7e103ee3ed60059e7c5fd7e <span class="token number">192.168</span>.187.130:8005\n   slots: <span class="token punctuation">(</span><span class="token number">0</span> slots<span class="token punctuation">)</span> slave\n   replicates 36eed9057c01ea7840ff4c8ee6ca6117ab745d56\nM: 11a8d28417768e04be9c598d5fde4b59a887514b <span class="token number">192.168</span>.187.130:8002\n   slots:<span class="token punctuation">[</span><span class="token number">5461</span>-10922<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">5462</span> slots<span class="token punctuation">)</span> master\n   <span class="token number">1</span> additional replica<span class="token punctuation">(</span>s<span class="token punctuation">)</span>\n<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All nodes agree about slots configuration.\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check <span class="token keyword">for</span> <span class="token function">open</span> slots<span class="token punctuation">..</span>.\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Check slots coverage<span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>OK<span class="token punctuation">]</span> All <span class="token number">16384</span> slots covered.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="验证集群⭐" tabindex="-1"><a class="header-anchor" href="#验证集群⭐" aria-hidden="true">#</a> 验证集群⭐</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>（1）连接任意一个客户端即可：./redis-cli <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">-p</span> <span class="token punctuation">(</span>-a访问服务端密码，-c表示集群模式，指定ip地址和端口号）\n    如：/usr/redis/redis-6.2.6/src/redis-cli <span class="token parameter variable">-a</span> Root.123456 <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.187.130 <span class="token parameter variable">-p</span> <span class="token number">8002</span>\n    \n（2）进行验证： cluster info（查看集群信息）、cluster nodes（查看节点列表）\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="/images/Redis/image-20211115041340393.png" alt=""></p><h3 id="数据验证" tabindex="-1"><a class="header-anchor" href="#数据验证" aria-hidden="true">#</a> 数据验证</h3><p><img src="/images/Redis/image-20211115043752020.png" alt=""></p><h2 id="重新启动集群❤️" tabindex="-1"><a class="header-anchor" href="#重新启动集群❤️" aria-hidden="true">#</a> 重新启动集群❤️</h2><p>由于之前已经创建集群成功了，所以在启动集群的时候，只要把每一个Redis实例启动即可，因为集群的配置信息，已经写入到了对应的nodes-800*.conf文件中。Redis启动的时候，会默认找到加载集群的信息。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cd /usr/redis-cluster/</span>\n<span class="token comment"># 启动135机器的redis</span>\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8001/redis.conf\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8004/redis.conf\n<span class="token comment"># 启动130机器的redis</span>\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8002/redis.conf\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8005/redis.conf\n<span class="token comment"># 启动132机器的redis</span>\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8003/redis.conf\n/usr/redis/redis-6.2.6/src/redis-server  /usr/redis-cluster/8006/redis.conf\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="关闭集群" tabindex="-1"><a class="header-anchor" href="#关闭集群" aria-hidden="true">#</a> 关闭集群</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>关闭集群则需要逐个进行关闭，使用命令：\n/usr/redis/redis-6.2.6/src/redis-cli <span class="token parameter variable">-a</span> Root.123456 <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.187.130 <span class="token parameter variable">-p</span> <span class="token number">8001</span> <span class="token function">shutdown</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',23),p={},r=(0,a(66262).A)(p,[["render",function(s,n){return e}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);