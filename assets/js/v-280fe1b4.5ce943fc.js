"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[86400],{77271:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-280fe1b4",path:"/javahelper/04%20Junit%E6%B5%8B%E8%AF%95%E5%8D%95%E5%85%83.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/javahelper/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"依赖",slug:"依赖",children:[]},{level:2,title:"注解",slug:"注解",children:[]},{level:2,title:"assert",slug:"assert",children:[]}],filePathRelative:"javahelper/04 Junit测试单元.md"}},75019:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(20641);const p={href:"https://junit.org/junit5/docs/current/user-guide/",target:"_blank",rel:"noopener noreferrer"},e=(0,t.Fv)('<h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-bom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.9.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token comment">&lt;!-- idea的支持，因为我们使用的版本是5.9.3 --&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.platform<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-platform-launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter-engine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.vintage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-vintage-engine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>',2),o=(0,t.Lk)("p",null,[(0,t.eW)("IntelliJ IDEA supports running tests on the JUnit Platform。In order to use a different JUnit 5 version (e.g., 5.9.3)（本次项目我们使用的是5.9.3）, you may need to include the corresponding versions of the "),(0,t.Lk)("code",null,"junit-platform-launcher"),(0,t.eW)(", "),(0,t.Lk)("code",null,"junit-jupiter-engine"),(0,t.eW)(", and "),(0,t.Lk)("code",null,"junit-vintage-engine"),(0,t.eW)(" JARs in the classpath.")],-1),c={href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-ide-intellij-idea",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Lk)("blockquote",null,[(0,t.Lk)("p",null,"scope说明，如果标注了test，那么junit只能在test目录生效，在我们正式的代码不会生效，如IDEA导入包的时候甚至都没有提示")],-1),u=(0,t.Lk)("p",null,[(0,t.Lk)("img",{src:"/images/java/image-20230514152150010.png",alt:"image-20230514152150010"})],-1),i=(0,t.Lk)("h2",{id:"注解",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#注解","aria-hidden":"true"},"#"),(0,t.eW)(" 注解")],-1),k={href:"https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Fv)('<blockquote><p>常用注解</p></blockquote><table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@BeforeEach</td><td>相当于Junit4的@Before</td></tr><tr><td>@AfterEach</td><td>相当于Junit4的@After</td></tr></tbody></table><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h2><ul><li>Assertions <ul><li><code>assertTrue</code></li><li><code>assertFalse</code></li><li><code>assertNull</code></li><li><code>assertNotNull</code></li><li><code>assertEquals</code> 内容相同</li><li><code>assertNotEquals</code></li><li><code>assertArrayEquals</code></li><li><code>assertSame</code> 一样的引用地址</li><li><code>assertNotSame</code></li><li><code>assertThrows</code></li></ul></li><li>Assumptions <ul><li><code>assumeTrue</code></li><li><code>assumeFalse</code></li></ul></li></ul><blockquote><p>assertEquals与assertSame的区别</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test_object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token string">&quot;Thinking in Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bruce Eckel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;author&quot;:&quot;Bruce Eckel&quot;,&quot;name&quot;:&quot;Thinking in Java&quot;}</span>\n    <span class="token class-name">Book</span> book1 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// assertSame(book, book1); // 失败，报错</span>\n    <span class="token function">assertEquals</span><span class="token punctuation">(</span>book<span class="token punctuation">,</span> book1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 成功</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@Data</span>\n<span class="token annotation punctuation">@AllArgsConstructor</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',6),g={},d=(0,a(66262).A)(g,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("blockquote",null,[(0,t.Lk)("p",null,[(0,t.eW)("本文章采用Junit5版本"),(0,t.Lk)("a",p,[(0,t.eW)("官方文档"),(0,t.bF)(a)])])]),e,(0,t.Lk)("blockquote",null,[o,(0,t.Lk)("p",null,[(0,t.eW)("还需要添加上面提到的三个依赖到IDEA中，方便IDEA运行Junit"),(0,t.Lk)("a",c,[(0,t.eW)("JUnit 5 User Guide running-tests-ide-intellij-idea"),(0,t.bF)(a)])])]),l,u,i,(0,t.Lk)("p",null,[(0,t.Lk)("a",k,[(0,t.eW)("JUnit 5 User Guide"),(0,t.bF)(a)])]),r],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);