"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[68387],{57241:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-21f73b91",path:"/springboot/24%20springboot%20cache.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/springboot/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"spring",slug:"spring",children:[]},{level:2,title:"简单使用",slug:"简单使用",children:[{level:3,title:"常用属性说明",slug:"常用属性说明",children:[]}]},{level:2,title:"引入第三方缓存Redis",slug:"引入第三方缓存redis",children:[{level:3,title:"小结",slug:"小结",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"springboot/24 springboot cache.md"}},35348:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var p=a(20641);const t=(0,p.Lk)("h2",{id:"spring",tabindex:"-1"},[(0,p.Lk)("a",{class:"header-anchor",href:"#spring","aria-hidden":"true"},"#"),(0,p.eW)(" spring")],-1),e={href:"https://github.com/Q10Viking/learncode/tree/main/springbootcache",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<p>在spring中就已经引入了本地缓存，spring-context中就有了<code>CacheEvict</code>等注解</p><p>在springboot中，自动配置类中就配置了ConcurrentMapCacheManager，默认的。</p><p>下面这个依赖，方便引入其他缓存，如RedisCache,Ehcache等</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;\n    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n    &lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;\n&lt;/dependency&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><p>Spring 从 3.1 开始就引入了对 Cache 的支持。定义了 <code>org.springframework.cache.Cache</code> 和 <code>org.springframework.cache.CacheManager</code> 接口来统一不同的缓存技术。并支持使用 <code>JCache（JSR-107）</code>注解简化我们的开发。</p><p>其使用方法和原理都类似于 Spring 对事务管理的支持。Spring Cache 是作用在方法上的，其核心思想是，当我们在调用一个缓存方法时会把该方法参数和返回结果作为一个键值对存在缓存中。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>引入了springboot，就可以使用缓存了</p><ol><li><p>开启基于注解的缓存，使用 <code>@EnableCaching</code> 标识在 SpringBoot 的主启动类上。</p></li><li><p>标注缓存注解即可</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>\n<span class="token annotation punctuation">@EnableCaching</span>  <span class="token comment">// 开启基于注解的缓存</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@Log</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleRunner</span> <span class="token keyword">implements</span> <span class="token class-name">CommandLineRunner</span><span class="token punctuation">,</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----------msg-------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token doc-comment comment">/**\n         * 因为spring的缓存是通过代理实现的，类似aop.被Spring包装了。\n         * 在该类方法直接执行，不会走代理，所以我们需要拿到代理类\n         */</span>\n        <span class="token class-name">SimpleRunner</span> simpleRunner <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">SimpleRunner</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>simpleRunner<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>simpleRunner<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>simpleRunner<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;emps&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;msg&quot;</span><span class="token operator">+</span>count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="/images/springboot/image-20231222191923432.png" alt="image-20231222191923432"></p><h3 id="常用属性说明" tabindex="-1"><a class="header-anchor" href="#常用属性说明" aria-hidden="true">#</a> 常用属性说明</h3><h4 id="常用属性说明-1" tabindex="-1"><a class="header-anchor" href="#常用属性说明-1" aria-hidden="true">#</a> 常用属性说明</h4><p>下面介绍一下 <code>@Cacheable </code>这个注解常用的几个属性：</p><blockquote><ul><li><code>cacheNames/value</code> ：用来指定缓存组件的名字</li><li><code>key</code> ：缓存数据时使用的 key，可以用它来指定。默认是使用方法参数的值。（这个 key 你可以使用 spEL 表达式来编写）</li><li><code>keyGenerator</code> ：key 的生成器。 key 和 keyGenerator 二选一使用</li><li><code>cacheManager</code> ：可以用来指定缓存管理器。从哪个缓存管理器里面获取缓存。</li><li><code>condition</code> ：可以用来指定符合条件的情况下才缓存</li><li><code>unless</code> ：否定缓存。当 unless 指定的条件为 true ，方法的返回值就不会被缓存。当然你也可以获取到结果进行判断。（通过 <code>#result</code> 获取方法结果）</li><li><code>sync</code> ：是否使用异步模式。</li></ul></blockquote><h4 id="spel-编写-key" tabindex="-1"><a class="header-anchor" href="#spel-编写-key" aria-hidden="true">#</a> spEL 编写 key</h4><p>前面说过，缓存的 key 支持使用 spEL 表达式去编写，下面总结一下使用 spEL 去编写 key 可以用的一些元数据：</p><p><img src="/images/springboot/0b94988b3cde463ed16ca1edec244c1e.png" alt="img"></p><h2 id="引入第三方缓存redis" tabindex="-1"><a class="header-anchor" href="#引入第三方缓存redis" aria-hidden="true">#</a> 引入第三方缓存Redis</h2><p>springboot自动配置类配置了<code>RedisCacheConfiguration</code>,引入下面的依赖，就会注册<code>RedisCacheManager</code>。</p><p><img src="/images/springboot/image-20231222193138072.png" alt="image-20231222193138072"></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># redis连接配置</span>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">redis</span><span class="token punctuation">:</span>\n    <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.135.130\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6379</span>\n    <span class="token key atrule">jedis</span><span class="token punctuation">:</span>\n      <span class="token key atrule">pool</span><span class="token punctuation">:</span>\n        <span class="token comment"># 连接池最大连接数（使用负值表示没有限制）</span>\n        <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">8</span>\n        <span class="token comment"># 连接池最大阻塞等待时间（使用负值表示没有限制）</span>\n        <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>1ms\n        <span class="token comment"># 连接池中的最大空闲连接</span>\n        <span class="token key atrule">max-idle</span><span class="token punctuation">:</span> <span class="token number">8</span>\n        <span class="token comment"># 连接池中的最小空闲连接</span>\n        <span class="token key atrule">min-idle</span><span class="token punctuation">:</span> <span class="token number">0</span>\n      <span class="token comment"># 连接超时时间（毫秒）默认是2000ms</span>\n    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 2000ms\n  <span class="token key atrule">cache</span><span class="token punctuation">:</span>\n    <span class="token key atrule">redis</span><span class="token punctuation">:</span>\n      <span class="token comment">## Entry expiration in milliseconds. By default the entries never expire.</span>\n      <span class="token key atrule">time-to-live</span><span class="token punctuation">:</span> 1d\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="/images/springboot/image-20231222194901593.png" alt="image-20231222194901593"></p><p>由于出现乱码，我们需要配置一下,首先需要引入jackson</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.16.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token annotation punctuation">@Primary</span>\n    <span class="token keyword">public</span> <span class="token class-name">CacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">RedisCacheConfiguration</span> redisCacheConfiguration <span class="token operator">=</span> <span class="token class-name">RedisCacheConfiguration</span><span class="token punctuation">.</span><span class="token function">defaultCacheConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">serializeKeysWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">serializeValuesWith</span><span class="token punctuation">(</span><span class="token class-name">RedisSerializationContext<span class="token punctuation">.</span>SerializationPair</span><span class="token punctuation">.</span><span class="token function">fromSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token class-name">RedisCacheManager<span class="token punctuation">.</span>RedisCacheManagerBuilder</span><span class="token punctuation">.</span><span class="token function">fromConnectionFactory</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">cacheDefaults</span><span class="token punctuation">(</span>redisCacheConfiguration<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="/images/springboot/image-20231222201249988.png" alt="image-20231222201249988"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>key <span class="token operator">=</span> <span class="token string">&quot;#root.targetClass.simpleName+&#39;:&#39;+#id&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;msg&quot;</span><span class="token operator">+</span>count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.18.18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token comment">&lt;!--   redis cache     --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n        <span class="token comment">&lt;!--   解决乱码     --&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.16.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',34),o={href:"https://xie.infoq.cn/article/001e0f5ab65fa7dd1484c51e5",target:"_blank",rel:"noopener noreferrer"},l={href:"https://spring.io/guides/gs/caching/",target:"_blank",rel:"noopener noreferrer"},i={href:"https://cloud.tencent.com/developer/article/1824707",target:"_blank",rel:"noopener noreferrer"},u={},r=(0,a(66262).A)(u,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),c,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("SpringBoot 缓存之 @Cacheable 详细介绍"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",l,[(0,p.eW)("Caching Data with Spring"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",i,[(0,p.eW)("“8个步骤”手把手带你用SpringBoot操作Redis，实现数据缓存"),(0,p.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);