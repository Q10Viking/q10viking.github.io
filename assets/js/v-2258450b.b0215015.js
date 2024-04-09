"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[90540],{12779:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-2258450b",path:"/netty/19%20%E6%A3%80%E6%B5%8Bsocket%E5%85%B3%E9%97%AD.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/netty/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"netty/19 检测socket关闭.md"}},86919:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(20641);const p=(0,t.Fv)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>研究为什么服务端关闭了socket,客户端怎么能够立即感知到？</p><ul><li>selector检测到了读事件</li><li>读取的时候，发现读取长度为-1</li></ul></div><p>If the client has disconnected properly:</p><ul><li><code>read()</code> will return -1</li><li><code>readLine()</code> returns null</li><li><code>readXXX()</code> for any other X throws <code>EOFException</code>.</li></ul><p>The only really reliable way to detect a lost TCP connection is to write to it. Eventually this will throw an <code>IOException: connection reset</code>, but it takes at least two writes due to buffering.</p><p>select阻塞被唤醒，然后处理key, 进行read，发现是EOF则关闭线程。</p>',5),e={href:"https://www.processon.com/view/link/643a0aa496a2d95a10083ab8",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Fv)('<p><img src="/images/netty/socket关闭.png" alt="socket关闭 (2)"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">isReadable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">ByteBuffer</span> readBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> readBytes <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>readBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>readBytes <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        readBuffer<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>readBuffer<span class="token punctuation">.</span><span class="token function">remaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        readBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> body <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;客户端收到消息：&quot;</span> <span class="token operator">+</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>readBytes <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 会读取到-1</span>\n        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;客户端关闭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        key<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">//读到0字节，忽略</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',2),c={},l=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,t.g2)("OutboundLink"),c=(0,t.g2)("common-progresson-snippet");return(0,t.uX)(),(0,t.CE)(t.FK,null,[p,(0,t.Lk)("p",null,[(0,t.Lk)("a",e,[(0,t.eW)("socket关闭| ProcessOn免费在线作图,在线流程图,在线思维导图"),(0,t.bF)(a)])]),(0,t.bF)(c,{src:"https://www.processon.com/diagraming/643a011740a0dd65f6a74008"}),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);