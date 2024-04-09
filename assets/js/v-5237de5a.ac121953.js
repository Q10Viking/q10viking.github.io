"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[54108],{27313:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-5237de5a",path:"/javahelper/09%20jackson.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/javahelper/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"@JsonCreator",slug:"jsoncreator",children:[]}],filePathRelative:"javahelper/09 jackson.md"}},94416:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(20641).Fv)('<h2 id="jsoncreator" tabindex="-1"><a class="header-anchor" href="#jsoncreator" aria-hidden="true">#</a> @JsonCreator</h2><p>该注解用在对象的反序列时指定特定的构造函数.在反序列化时，Jackson默认会调用对象的无参构造函数</p><p>如果默认构造函数无法满足需求，或者说我们需要在构造对象时做一些特殊逻辑，可以使用该注解。该注解需要搭配@JsonProperty使用</p><p>[Deserialize Immutable Objects with Jackson | Baeldung](https://www.baeldung.com/jackson-deserialize-immutable-objects#:~:text=%40JsonCreator (mode %3D JsonCreator.Mode.PROPERTIES) public Employee(%40JsonProperty (&quot;id&quot;) long,deserializer to use the designated constructor for deserialization.)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Money</span> <span class="token keyword">implements</span> <span class="token class-name">ValueObject</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Money</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">String</span> currency<span class="token punctuation">;</span> <span class="token comment">// 货币</span>\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> amount<span class="token punctuation">;</span> <span class="token comment">// 金额</span>\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> scale<span class="token punctuation">;</span> <span class="token comment">// 精度</span>\n    <span class="token annotation punctuation">@JsonIgnore</span>\n    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">BigDecimal</span> amountAsBigDecimal<span class="token punctuation">;</span> <span class="token comment">// 金额</span>\n\n    <span class="token annotation punctuation">@JsonCreator</span>\n    <span class="token keyword">public</span> <span class="token class-name">Money</span><span class="token punctuation">(</span>\n            <span class="token annotation punctuation">@JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;currency&quot;</span><span class="token punctuation">)</span>\n            <span class="token class-name">String</span> currency<span class="token punctuation">,</span>\n            <span class="token annotation punctuation">@JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;amount&quot;</span><span class="token punctuation">)</span>\n            <span class="token class-name">Integer</span> amount<span class="token punctuation">,</span>\n            <span class="token annotation punctuation">@JsonProperty</span><span class="token punctuation">(</span><span class="token string">&quot;scale&quot;</span><span class="token punctuation">)</span>\n            <span class="token class-name">Integer</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>currency <span class="token operator">=</span> currency<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">=</span> scale<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>amountAsBigDecimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">movePointLeft</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span>scale<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">sameValueAs</span><span class="token punctuation">(</span><span class="token class-name">Money</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',5),e={},t=(0,a(66262).A)(e,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);