"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[32635],{89823:(t,a,e)=>{e.r(a),e.d(a,{data:()=>r});const r={key:"v-41f357b1",path:"/ElasticStack/01%20%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2%E5%8E%9F%E7%90%86-%E5%80%92%E6%8E%92%E7%B4%A2%E5%BC%95.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/ElasticStack/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"什么是全文检索",slug:"什么是全文检索",children:[]},{level:2,title:"分词原理之倒排索引",slug:"分词原理之倒排索引",children:[{level:3,title:"倒排索引⭐",slug:"倒排索引⭐",children:[]}]}],filePathRelative:"ElasticStack/01 全文检索原理-倒排索引.md"}},35421:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});const r=(0,e(20641).Fv)('<h2 id="什么是全文检索" tabindex="-1"><a class="header-anchor" href="#什么是全文检索" aria-hidden="true">#</a> 什么是全文检索</h2><ol><li>通过一个程序扫描文本中的每一个单词，<strong>针对单词建立索引</strong>，并保存该单词在文本中的<strong>位置</strong>、以及出现的<strong>次数</strong></li><li>用户查询时，通过之前建立好的索引来查询，将<strong>索引中单词对应的文本位置、出现的次数返回给用户</strong>，因为有了具体文本的位置，所以就可以将具体内容读取出来了</li></ol><h2 id="分词原理之倒排索引" tabindex="-1"><a class="header-anchor" href="#分词原理之倒排索引" aria-hidden="true">#</a> <strong>分词原理之倒排索引</strong></h2><ol><li>数据放入到es中会进行<strong>分词</strong>处理</li><li>分词处理之后会进行去重</li><li>去重之后会进行排序，如会根据WORD进行排序</li></ol><p>如查询的时候，输入hello what world,也会进行分词</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>hello   what  world    <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">&gt;</span>   hello\n                                what\n                                world\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="/images/elasticsearch/image-20210501224750408.png" alt=""></p><p><img src="/images/elasticsearch/3218.png" alt=""></p><p><img src="/images/elasticsearch/3216.png" alt=""></p><h3 id="倒排索引⭐" tabindex="-1"><a class="header-anchor" href="#倒排索引⭐" aria-hidden="true">#</a> 倒排索引⭐</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>倒排索引总结：</p><p>❤️索引就类似于目录，平时我们使用的都是索引，都是通过主键定位到某条数据，那么倒排索引呢，刚好相反，数据对应到主键．❤️</p></div><p>这里以一个博客文章的内容为例:</p><table><thead><tr><th>文章ID</th><th>文章标题</th><th>文章内容</th></tr></thead><tbody><tr><td>1</td><td>浅析JAVA设计模式</td><td>JAVA设计模式是每一个JAVA程序员都应该掌握的进阶知识</td></tr><tr><td>2</td><td>JAVA多线程设计模式</td><td>JAVA多线程与设计模式结合</td></tr></tbody></table><p>假如，我们有一个站内搜索的功能，通过某个关键词来搜索相关的文章，那么这个关键词可能出现在标题中，也可能出现在文章内容中，那我们将会在创建或修改文章的时候，建立一个<strong>关键词（经过了分词）与文章的对应关系表</strong>⭐，这种，我们可以称之为倒排索引,因此倒排索引，也可称之为反向索引．如：</p><table><thead><tr><th>关键词</th><th>文章ID</th></tr></thead><tbody><tr><td>JAVA</td><td>1</td></tr><tr><td>设计模式</td><td>1,2</td></tr><tr><td>多线程</td><td>2</td></tr></tbody></table>',15),s={},l=(0,e(66262).A)(s,[["render",function(t,a){return r}]])},66262:(t,a)=>{a.A=(t,a)=>{const e=t.__vccOpts||t;for(const[t,r]of a)e[t]=r;return e}}}]);