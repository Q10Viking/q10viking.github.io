"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[78138],{25548:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-4e8f27ca",path:"/ElasticStack/31%20es%E4%B9%90%E8%A7%82%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/ElasticStack/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Elasticsearch乐观并发控制",slug:"elasticsearch乐观并发控制",children:[{level:3,title:"悲观并发控制",slug:"悲观并发控制",children:[]},{level:3,title:"乐观并发控制❤️",slug:"乐观并发控制❤️",children:[]}]}],filePathRelative:"ElasticStack/31 es乐观并发控制.md"}},75540:(s,n,a)=>{a.r(n),a.d(n,{default:()=>t});const e=(0,a(20641).Fv)('<h2 id="elasticsearch乐观并发控制" tabindex="-1"><a class="header-anchor" href="#elasticsearch乐观并发控制" aria-hidden="true">#</a> Elasticsearch乐观并发控制</h2><p><strong>在数据库领域中，有两种方法来确保并发更新，不会丢失数据：</strong></p><h3 id="悲观并发控制" tabindex="-1"><a class="header-anchor" href="#悲观并发控制" aria-hidden="true">#</a> 悲观并发控制</h3><p>这种方法被关系型数据库广泛使用，它假定有变更冲突可能发生，因此阻塞访问资源以防止冲突。 一个典型的例子是读取一行数据之前先将其锁住，确保只有放置锁的线程能够对这行数据进行修改。</p><h3 id="乐观并发控制❤️" tabindex="-1"><a class="header-anchor" href="#乐观并发控制❤️" aria-hidden="true">#</a> 乐观并发控制❤️</h3><p>Elasticsearch 中使用的这种方法假定冲突是不可能发生的，并且不会阻塞正在尝试的操作。 然而，如果源数据在读写当中被修改，更新将会失败。应用程序接下来将决定该如何解决冲突。 例如，可以重试更新、使用新的数据、或者将相关情况报告给用户。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>ES新版本(7.x)不使用version进行并发版本控制 if_seq_no=版本值&amp;if_primary_term=文档位置</p><p>_seq_no： 文档版本号，作用同 _version</p><p>_primary_term：文档所在位置</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /es_sc\n\nPOST /es_sc/_doc/<span class="token number">1</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;q10viking&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;静默学习es&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;create_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2021-02-24&quot;</span>\n<span class="token punctuation">}</span>\n\n\nPOST /es_sc/_update/<span class="token number">1</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;静默&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\nPOST /es_sc/_update/<span class="token number">1</span>/?if_seq_no=<span class="token number">10</span>&amp;if_primary_term=<span class="token number">5</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hzz&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nGET /es_sc/_doc/<span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><img src="/images/elasticsearch/image-20220813001059671.png" alt="image-20220813001059671"></p><p><img src="/images/elasticsearch/image-20220813001223981.png" alt="image-20220813001223981"></p><p><img src="/images/elasticsearch/image-20220813001418232.png" alt="image-20220813001418232"></p>',11),p={},t=(0,a(66262).A)(p,[["render",function(s,n){return e}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);