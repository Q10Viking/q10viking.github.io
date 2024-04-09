"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[37233],{36427:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a={key:"v-433a66f8",path:"/Redis/13%20%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"keys：全量遍历键",slug:"keys-全量遍历键",children:[]},{level:2,title:"scan：渐进式遍历键",slug:"scan-渐进式遍历键",children:[]},{level:2,title:"Info：查看redis服务运行信息",slug:"info-查看redis服务运行信息",children:[]},{level:2,title:"命令使用建议",slug:"命令使用建议",children:[]}],filePathRelative:"Redis/13 其他命令.md"}},99269:(s,n,e)=>{e.r(n),e.d(n,{default:()=>c});var a=e(20641);const l={class:"custom-container tip"},r=(0,a.Lk)("p",{class:"custom-container-title"},"TIP",-1),p={href:"https://gitee.com/q10viking/Books/blob/master/01-Redis%E5%91%BD%E4%BB%A4%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C%E5%AE%8C%E6%95%B4%E7%89%88.pdf",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Fv)('<h2 id="keys-全量遍历键" tabindex="-1"><a class="header-anchor" href="#keys-全量遍历键" aria-hidden="true">#</a> <strong>keys：全量遍历键</strong></h2><p>用来列出所有满足特定正则字符串规则的key，当redis数据量比较大时，性能比较差，要避免使用</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>keys *\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="scan-渐进式遍历键" tabindex="-1"><a class="header-anchor" href="#scan-渐进式遍历键" aria-hidden="true">#</a> <strong>scan：渐进式遍历键</strong></h2><p>scan 参数提供了三个参数，第一个是 cursor 整数值(hash桶的索引值)，第二个是 key 的正则模式，第三个是一次遍历的key的数量(参考值，底层遍历的数量不一定)，并不是符合条件的结果数量。第一次遍历时，cursor 值为 0，然后将返回结果中第一个整数值作为下一次遍历的 cursor。<strong>一直遍历到返回的 cursor 值为 0 时结束</strong>。</p><p>注意：但是scan并非完美无瑕， 如果在scan的过程中如果有键的变化（增加、 删除、 修改） ，那么遍历效果可能会碰到如下问题： 新增的键可能没有遍历到， 遍历出了重复的键等情况， 也就是说scan并不能保证完整的遍历出来所有的键， 这些是我们在开发时需要考虑的。</p><p><img src="/images/Redis/80858.png" alt=""></p><p><img src="/images/Redis/80856.png" alt=""></p><h2 id="info-查看redis服务运行信息" tabindex="-1"><a class="header-anchor" href="#info-查看redis服务运行信息" aria-hidden="true">#</a> <strong>Info：查看redis服务运行信息</strong></h2><blockquote><p><strong>分为 9 大块，每个块都有非常多的参数，这 9 个块分别是:</strong></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Server \t\t\t服务器运行的环境参数 \nClients \t\t客户端相关信息 \nMemory\t\t\t服务器运行内存统计数据 \nPersistence \t持久化信息 \nStats\t\t    通用统计数据 \nReplication \t主从复制相关信息 \nCPU CPU\t\t    使用情况 \nCluster \t    集群信息 \nKeySpace \t\t键值对统计数量信息\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>connected_clients:2                  <span class="token comment"># 正在连接的客户端数量</span>\n\ninstantaneous_ops_per_sec:789        <span class="token comment"># 每秒执行多少次指令</span>\n\nused_memory:929864                   <span class="token comment"># Redis分配的内存总量(byte)，包含redis进程内部的开销和数据占用的内存</span>\nused_memory_human:908.07K            <span class="token comment"># Redis分配的内存总量(Kb，human会展示出单位)</span>\nused_memory_rss_human:2.28M          <span class="token comment"># 向操作系统申请的内存大小(Mb)（这个值一般是大于used_memory的，因为Redis的内存分配策略会产生内存碎片）</span>\nused_memory_peak:929864              <span class="token comment"># redis的内存消耗峰值(byte)</span>\nused_memory_peak_human:908.07K       <span class="token comment"># redis的内存消耗峰值(KB)</span>\n\nmaxmemory:0                         <span class="token comment"># 配置中设置的最大可使用内存值(byte),默认0,不限制</span>\nmaxmemory_human:0B                  <span class="token comment"># 配置中设置的最大可使用内存值</span>\nmaxmemory_policy:noeviction         <span class="token comment"># 当达到maxmemory时的淘汰策略</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="命令使用建议" tabindex="-1"><a class="header-anchor" href="#命令使用建议" aria-hidden="true">#</a> 命令使用建议</h2><ol><li><p>【推荐】 O(N)命令关注N的数量</p><p>例如hgetall、lrange、smembers、zrange、sinter等并非不能使用，但是需要明确N的值。有遍历的需求可以使用hscan、sscan、zscan代替。</p></li><li><p>【推荐】：禁用命令</p><p>禁止线上使用keys、flushall、flushdb等，通过redis的rename机制禁掉命令，或者使用scan的方式渐进式处理。</p></li><li><p>【推荐】合理使用select</p><p>redis的多数据库较弱，使用数字进行区分，很多客户端支持较差，同时多业务用多数据库实际还是单线程处理，会有干扰。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SELECT\n格式：select index \n切换到指定的数据库，数据库索引号 index 用数字值指定，以 <span class="token number">0</span> 作为起始索引值。\n默认使用 <span class="token number">0</span> 号数据库。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis<span class="token operator">&gt;</span> SET db_number <span class="token number">0</span> <span class="token comment"># 默认使用 0 号数据库</span>\nOK\nredis<span class="token operator">&gt;</span> SELECT <span class="token number">1</span> <span class="token comment"># 使用 1 号数据库</span>\nOK\nredis<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> GET db_number <span class="token comment"># 已经切换到 1 号数据库，注意 Redis 现在的</span>\n命令提示符多了个 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>\nredis<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> SET db_number <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>【推荐】使用批量操作提高效率</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>原生命令：例如mget、mset。\n非原生命令：可以使用pipeline提高效率。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但要注意控制一次批量操作的元素个数(例如500以内，实际也和元素字节数有关).注意两者不同：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. 原生命令是原子操作，pipeline是非原子操作。\n<span class="token number">2</span>. pipeline可以打包不同的命令，原生命令做不到\n<span class="token number">3</span>. pipeline需要客户端和服务端同时支持。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>【建议】Redis事务功能较弱，不建议过多使用，❤️可以用lua替代❤️</p></li></ol>',14),t={},c=(0,e(66262).A)(t,[["render",function(s,n){const e=(0,a.g2)("OutboundLink");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",l,[r,(0,a.Lk)("p",null,[(0,a.Lk)("a",p,[(0,a.eW)("Redis命令参考手册.pdf"),(0,a.bF)(e)])])]),i],64)}]])},66262:(s,n)=>{n.A=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}}}]);