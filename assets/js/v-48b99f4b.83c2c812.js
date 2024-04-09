"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[20364],{44893:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-48b99f4b",path:"/Redis/23%20%E7%AE%A1%E9%81%93pipeline.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Redis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"管道pipeline的用处",slug:"管道pipeline的用处",children:[]},{level:2,title:"测试",slug:"测试",children:[]}],filePathRelative:"Redis/23 管道pipeline.md"}},35430:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var p=a(20641);const e={class:"custom-container tip"},t=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://github.com/Q10Viking/learncode/blob/main/redis/_01_java_redis/src/main/java/org/hzz/PipelineApp.java",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="管道pipeline的用处" tabindex="-1"><a class="header-anchor" href="#管道pipeline的用处" aria-hidden="true">#</a> 管道pipeline的用处</h2><p>客户端可以一次性发送多个请求而不用等待服务器的响应，待所有命令都发送完后再一次性读取服务的响应，这样可以<strong>极大的降低多条命令执行的网络传输开销</strong>，管道执行多条命令的网络开销实际上只相当于一次命令执行的网络开销。需要注意到是用pipeline方式打包命令发送，r<strong>edis必须在处理完所有命令前先缓存起所有命令的处理结果</strong>。打包的命令越多，<strong>缓存消耗内存也越多</strong>。所以并不是打包的命令越多越好。</p><p>pipeline中发送的每个command都会被server立即执行，如果执行失败，将会在此后的响应中得到信息；也就是pipeline并不是表达“所有command都一起成功”的语义，<strong>管道中前面命令失败，后面命令不会有影响，继续执行</strong>。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><blockquote><p>多个命令一起发送，减少网络开销</p><p>注意但是不能保证原子性。</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PipelineApp</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">JedisPoolConfig</span> jedisPoolConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPoolConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        jedisPoolConfig<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// timeout，这里既是连接超时又是读写超时，从Jedis 2.8开始有区分connectionTimeout和soTimeout的构造函数</span>\n        <span class="token class-name">JedisPool</span> jedisPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>jedisPoolConfig<span class="token punctuation">,</span> <span class="token string">&quot;192.168.187.135&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//从redis连接池里拿出一个连接执行命令</span>\n        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> jedisPool<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//管道的命令执行方式：cat redis.txt | redis-cli -h 127.0.0.1 -a password - p 6379 --pipe</span>\n        <span class="token class-name">Pipeline</span> pipeline <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">pipelined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            pipeline<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span><span class="token string">&quot;pipelineKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            pipeline<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;test::q10viking(&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;No.&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//模拟管道报错</span>\n            <span class="token comment">//pl.setbit(&quot;error&quot;, -1, true);</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> results <span class="token operator">=</span> pipeline<span class="token punctuation">.</span><span class="token function">syncAndReturnAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * [1, OK, 2, OK, 3, OK, 4, OK, 5, OK, 6, OK, 7, OK, 8, OK, 9, OK, 10, OK]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>',6),l={},i=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",e,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code PipelineApp.java"),(0,p.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);