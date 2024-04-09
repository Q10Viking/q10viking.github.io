"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[8850],{54616:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-42a15caa",path:"/sentinel/04%20sentinel%E4%BD%BF%E7%94%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/sentinel/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"官方模板",slug:"官方模板",children:[]},{level:2,title:"Sentinel资源保护的方式",slug:"sentinel资源保护的方式",children:[{level:3,title:"注解",slug:"注解",children:[]}]}],filePathRelative:"sentinel/04 sentinel使用.md"}},66391:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<h2 id="官方模板" tabindex="-1"><a class="header-anchor" href="#官方模板" aria-hidden="true">#</a> 官方模板</h2><p>定义的Sentinel进行资源保护的几个步骤</p><ol><li><p>定义资源</p></li><li><p>定义规则</p></li><li><p>检验规则是否生效</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Entry</span> entry <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token comment">// 务必保证 finally 会被执行</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 资源名可使用任意有业务语义的字符串  开启资源的保护</span>\n    entry <span class="token operator">=</span> <span class="token class-name">SphU</span><span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token string">&quot;自定义资源名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 被保护的业务逻辑    method</span>\n    <span class="token comment">// do something...</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BlockException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 资源访问阻止，被限流或被降级   Sentinel定义异常  流控规则，降级规则，热点参数规则。。。。   服务降级(降级规则)</span>\n    <span class="token comment">// 进行相应的处理操作</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 若需要配置降级规则，需要通过这种方式记录业务异常    RuntimeException     服务降级   mock  feign:fallback </span>\n    <span class="token class-name">Tracer</span><span class="token punctuation">.</span><span class="token function">traceEntry</span><span class="token punctuation">(</span>ex<span class="token punctuation">,</span> entry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 务必保证 exit，务必保证每个 entry 与 exit 配对</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        entry<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="sentinel资源保护的方式" tabindex="-1"><a class="header-anchor" href="#sentinel资源保护的方式" aria-hidden="true">#</a> <strong>Sentinel资源保护的方式</strong></h2><blockquote><p>依赖</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.8.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>编写测试逻辑</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>\n<span class="token annotation punctuation">@Slf4j</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">RESOURCE_NAME</span> <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/hello&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span> entry <span class="token operator">=</span> <span class="token class-name">SphU</span><span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token constant">RESOURCE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 被保护的逻辑</span>\n            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BlockException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 处理被流控的逻辑</span>\n            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;blocked!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token string">&quot;被流控了&quot;</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    \n    <span class="token punctuation">}</span>\n    <span class="token doc-comment comment">/**\n     * 定义流控规则\n     */</span>\n    <span class="token annotation punctuation">@PostConstruct</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">initFlowRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FlowRule</span><span class="token punctuation">&gt;</span></span> rules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">FlowRule</span> rule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlowRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//设置受保护的资源</span>\n        rule<span class="token punctuation">.</span><span class="token function">setResource</span><span class="token punctuation">(</span><span class="token constant">RESOURCE_NAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 设置流控规则 QPS</span>\n        rule<span class="token punctuation">.</span><span class="token function">setGrade</span><span class="token punctuation">(</span><span class="token class-name">RuleConstant</span><span class="token punctuation">.</span><span class="token constant">FLOW_GRADE_QPS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 设置受保护的资源阈值</span>\n        <span class="token comment">// Set limit QPS to 20.</span>\n        rule<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        rules<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 加载配置好的规则</span>\n        <span class="token class-name">FlowRuleManager</span><span class="token punctuation">.</span><span class="token function">loadRules</span><span class="token punctuation">(</span>rules<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="/images/sentinel/54397.png" alt="https://note.youdao.com/yws/public/resource/7ccbbecd48d3f995e3e36aab39a11049/xmlnote/80F68144D61543CCB96625745E23FDA2/54397"></p><p>缺点</p><ul><li>业务侵入性很强，需要在controller中写入非业务代码.</li><li>配置不灵活 若需要添加新的受保护资源 需要手动添加 init方法来添加流控规则</li></ul><hr><h3 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h3><p><strong>@SentinelResource注解实现</strong></p><p>@SentinelResource 注解用来标识资源是否被限流、降级。</p><ul><li>blockHandler: 定义当资源内部发生了BlockException应该进入的方法（捕获的是Sentinel定义的异常）</li><li>fallback: 定义的是资源内部发生了Throwable应该进入的方法</li><li>exceptionsToIgnore：配置fallback可以忽略的异常</li></ul><p>源码入口：com.alibaba.csp.sentinel.annotation.aspectj.SentinelResourceAspect</p><ol><li>引入依赖</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-annotation-aspectj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.8.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li><p>配置切面</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SentinelAspectConfiguration</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">SentinelResourceAspect</span> <span class="token function">sentinelResourceAspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SentinelResourceAspect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>UserController中编写测试逻辑，添加@SentinelResource，并配置blockHandler和fallback</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>\n                  blockHandler <span class="token operator">=</span> <span class="token string">&quot;handleException&quot;</span><span class="token punctuation">,</span>\n                  fallback <span class="token operator">=</span> <span class="token string">&quot;fallbackException&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/hello2&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//int i = 1 / 0;</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleException</span><span class="token punctuation">(</span><span class="token class-name">BlockException</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;被流控了&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">fallbackException</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;被异常降级了&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/findOrderByUserId/{id}&quot;</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@SentinelResource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;findOrderByUserId&quot;</span><span class="token punctuation">,</span>\n                  fallback <span class="token operator">=</span> <span class="token string">&quot;fallback&quot;</span><span class="token punctuation">,</span>fallbackClass <span class="token operator">=</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>\n                  blockHandler <span class="token operator">=</span> <span class="token string">&quot;handleException&quot;</span><span class="token punctuation">,</span>blockHandlerClass <span class="token operator">=</span> <span class="token class-name">ExceptionUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span>\n                 <span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">R</span>  <span class="token function">findOrderByUserId</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//ribbon实现</span>\n    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;http://mall-order/order/findOrderByUserId/&quot;</span><span class="token operator">+</span>id<span class="token punctuation">;</span>\n    <span class="token class-name">R</span> result <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">==</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;非法参数异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>​</p><ol start="4"><li>编写ExceptionUtil，注意如果指定了class，方法必须是static方法</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExceptionUtil</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">R</span> <span class="token function">fallback</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token class-name">Throwable</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;===被异常降级啦===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">R</span> <span class="token function">handleException</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">BlockException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;===被限流啦===&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',25),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);