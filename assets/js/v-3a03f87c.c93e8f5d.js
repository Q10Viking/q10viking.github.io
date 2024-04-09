"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[45519],{26502:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3a03f87c",path:"/Algorithm/621%20%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E5%99%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"贪心算法",slug:"贪心算法",children:[]}],filePathRelative:"Algorithm/621 任务调度器.md"}},50350:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(20641);const p={class:"custom-container tip"},o=(0,t.Lk)("p",{class:"custom-container-title"},"TIP",-1),e={href:"https://leetcode.cn/problems/task-scheduler/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Fv)('<h2 id="贪心算法" tabindex="-1"><a class="header-anchor" href="#贪心算法" aria-hidden="true">#</a> 贪心算法</h2><p>以考虑使用贪心：<strong>每次都是优先（贪心）选择不在冷却中并且剩余执行次数最多的那个任务，并且让这个类型的任务两次执行的时间间隔至少要等于大于n，再在这个时间间隔内填充其他的任务</strong>。</p><p>以示例1的 tasks = [&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;B&quot;,&quot;B&quot;,&quot;B&quot;], n = 2为例来说明</p><p>​ <img src="/images/algorithm/image-20230422083653967.png" alt="image-20230422083653967"></p><p>我们先安排出现次数最多的任务&quot;A&quot;,并且让两次执行&quot;A&quot;的时间间隔为2。在这个时间间隔内，我们用其他任务类型去填充，当然是继续选择出现次数最多的任务，这里是任务B，B也是需要2个时间间隔的，但是继续选择下去并没有其他任务可供选择了，因此额外需要一个冷却时间间隔。</p><p>示例3的tasks = [&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;,&quot;E&quot;,&quot;F&quot;,&quot;G&quot;], n = 2按照这种方法则如下图：</p><p><img src="/images/algorithm/image-20230422083723916.png" alt="image-20230422083723916"></p><p>但是不管是示例1还是示例3，图中一共占用的方格即为完成所有任务需要的时间，就是：</p><blockquote><p>(最大执行次数-1)*(n+1)+拥有最大执行次数的任务类型数。</p></blockquote><p>但是如果出现类似这种情况呢？</p><p><img src="/images/algorithm/image-20230422083744666.png" alt="image-20230422083744666"></p><p><strong>为了符合我们上面的计算公式，表格填入的方法如上图，这样根据公式算出来的值是 (3-1)*(2+1)+2 = 8，但是实际的数组长度为10，这就说明当可选择的任务类型超过了n的值，或者n的值为0时</strong>，上面的公式算出来的值要小于数组长度，这种情况的实际意义其实也就是在安排时无需冷却时间。</p><p>这种只需要在一个任务的两次出现间只需要填充其他任务，而无冷却时间这种情况下，所需要的时间即为tasks的长度，大于公式结果值。而可以根据公式正确获得结果的情况里，因为存在着冷却时间，tasks是要小于公式结果值的，所以在获得最终结果时，要取“tasks的长度”和“公式结果值”两者的较大值。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">leastInterval</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tasks<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> charOccurenceCountArr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">/*统计各个字母出现的次数*/</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token operator">:</span> tasks<span class="token punctuation">)</span> charOccurenceCountArr<span class="token punctuation">[</span>c<span class="token operator">-</span><span class="token char">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token comment">/*找到最大次数*/</span>\n        <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token operator">:</span> charOccurenceCountArr<span class="token punctuation">)</span> max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>max<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 最大任务数类型有多少种\t</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token operator">:</span> charOccurenceCountArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// (最大执行次数-1)*(n+1)+拥有最大执行次数的任务类型数。</span>\n        \t<span class="token keyword">if</span><span class="token punctuation">(</span>max <span class="token operator">==</span> v<span class="token punctuation">)</span> result<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>tasks<span class="token punctuation">.</span>length<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',14),u={},l=(0,a(66262).A)(u,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("div",p,[o,(0,t.Lk)("p",null,[(0,t.Lk)("a",e,[(0,t.eW)("621. 任务调度器 - 力扣（LeetCode）"),(0,t.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);