"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[27430],{95239:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-78df7ede",path:"/mybatis/18%20mybatis-plus.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/mybatis/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"依赖",slug:"依赖",children:[]},{level:2,title:"分页",slug:"分页",children:[]}],filePathRelative:"mybatis/18 mybatis-plus.md"}},35021:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--        &lt;dependency&gt;--&gt;</span>\n<span class="token comment">&lt;!--            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;--&gt;</span>\n<span class="token comment">&lt;!--            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;--&gt;</span>\n<span class="token comment">&lt;!--            &lt;version&gt;2.1.1&lt;/version&gt;--&gt;</span>\n<span class="token comment">&lt;!--        &lt;/dependency&gt;--&gt;</span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="C:\\Users\\11930\\AppData\\Roaming\\Typora\\typora-user-images\\image-20230524000555126.png" alt="image-20230524000555126"></p><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><blockquote><p>需要配置一个bean,<code>PaginationInterceptor</code>,否则分页不生效</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 分页配置</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">PaginationInterceptor</span> <span class="token function">paginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">PaginationInterceptor</span> paginationInterceptor <span class="token operator">=</span>\n                <span class="token keyword">new</span> <span class="token class-name">PaginationInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 数据库类型配置</span>\n        paginationInterceptor<span class="token punctuation">.</span><span class="token function">setDbType</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">return</span> paginationInterceptor<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">PageResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">PageQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserQueryDTO</span><span class="token punctuation">&gt;</span></span> pageQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>pageQuery<span class="token punctuation">.</span><span class="token function">getPageNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>pageQuery<span class="token punctuation">.</span><span class="token function">getPageSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">UserDO</span> userDO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>pageQuery<span class="token punctuation">.</span><span class="token function">getQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>userDO<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>userDO<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> userDOPage <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 结果解析</span>\n        <span class="token keyword">final</span> <span class="token class-name">PageResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> userDTOPageResult <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        userDTOPageResult<span class="token punctuation">.</span><span class="token function">setPageNo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>userDOPage<span class="token punctuation">.</span><span class="token function">getCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        userDTOPageResult<span class="token punctuation">.</span><span class="token function">setPageSize</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>userDOPage<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        userDTOPageResult<span class="token punctuation">.</span><span class="token function">setTotal</span><span class="token punctuation">(</span>userDOPage<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        userDTOPageResult<span class="token punctuation">.</span><span class="token function">setPageNum</span><span class="token punctuation">(</span>userDOPage<span class="token punctuation">.</span><span class="token function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span></span> userDTOList <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>userDOPage<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>userDO1 <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n                    <span class="token class-name">UserDTO</span> userDTO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>userDO1<span class="token punctuation">,</span> userDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token keyword">return</span> userDTO<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        userDTOPageResult<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>userDTOList<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> userDTOPageResult<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">&gt;</span>  Preparing: SELECT COUNT<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> FROM user \n<span class="token operator">==</span><span class="token operator">&gt;</span> Parameters: \n<span class="token operator">&lt;=</span><span class="token operator">=</span>    Columns: COUNT<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;=</span><span class="token operator">=</span>        Row: <span class="token number">5</span>\n<span class="token operator">==</span><span class="token operator">&gt;</span>  Preparing: SELECT id,username,password,email,age,phone,created,modified,creator,operator,status,version FROM user LIMIT ?,? \n<span class="token operator">==</span><span class="token operator">&gt;</span> Parameters: <span class="token number">0</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span>, <span class="token number">2</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">&gt;</span>  Preparing: SELECT COUNT<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> FROM user WHERE username <span class="token operator">=</span> ? AND email <span class="token operator">=</span> ? AND age <span class="token operator">=</span> ? \n<span class="token operator">==</span><span class="token operator">&gt;</span> Parameters: Q10Viking<span class="token punctuation">(</span>String<span class="token punctuation">)</span>, <span class="token number">1193094618</span>@qq.com<span class="token punctuation">(</span>String<span class="token punctuation">)</span>, <span class="token number">18</span><span class="token punctuation">(</span>Integer<span class="token punctuation">)</span>\n<span class="token operator">&lt;=</span><span class="token operator">=</span>    Columns: COUNT<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;=</span><span class="token operator">=</span>        Row: <span class="token number">1</span>\n<span class="token operator">==</span><span class="token operator">&gt;</span>  Preparing: SELECT id,username,password,email,age,phone,created,modified,creator,operator,status,version FROM user WHERE <span class="token assign-left variable">username</span><span class="token operator">=</span>? AND <span class="token assign-left variable">email</span><span class="token operator">=</span>? AND <span class="token assign-left variable">age</span><span class="token operator">=</span>? LIMIT ?,? \n<span class="token operator">==</span><span class="token operator">&gt;</span> Parameters: Q10Viking<span class="token punctuation">(</span>String<span class="token punctuation">)</span>, <span class="token number">1193094618</span>@qq.com<span class="token punctuation">(</span>String<span class="token punctuation">)</span>, <span class="token number">18</span><span class="token punctuation">(</span>Integer<span class="token punctuation">)</span>, <span class="token number">0</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span>, <span class="token number">2</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span>\n<span class="token operator">&lt;=</span><span class="token operator">=</span>    Columns: id, username, password, email, age, phone, created, modified, creator, operator, status, version\n<span class="token operator">&lt;=</span><span class="token operator">=</span>        Row: <span class="token number">1220708537638920195</span>, Q10Viking, <span class="token number">123456</span>, <span class="token number">1193094618</span>@qq.com, <span class="token number">18</span>, <span class="token number">17801054400</span>, <span class="token number">2023</span>-05-23 <span class="token number">15</span>:23:37, <span class="token number">2020</span>-01-24 08:05:50, TODO 从上下文获取当前人, TODO 从上下文获取当前人, <span class="token number">1</span>, <span class="token number">1</span>\n<span class="token operator">&lt;=</span><span class="token operator">=</span>      Total: <span class="token number">1</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',9),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);