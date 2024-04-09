"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[72285],{54045:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-32d72447",path:"/java/44%20properties%E6%96%87%E4%BB%B6.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/java/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"1. ResourceBundle解析",slug:"_1-resourcebundle解析",children:[{level:3,title:"1.1 ResourceBundle是用于国际化的",slug:"_1-1-resourcebundle是用于国际化的",children:[]}]},{level:2,title:"2 Properties解析",slug:"_2-properties解析",children:[{level:3,title:"2.1 类加载器",slug:"_2-1-类加载器",children:[]},{level:3,title:"2.2 加载Properties文件",slug:"_2-2-加载properties文件",children:[]},{level:3,title:"2.3 使用Spring 封装好的ClasspathResource",slug:"_2-3-使用spring-封装好的classpathresource",children:[]}]},{level:2,title:"3 Properties与Map之间的相互转化",slug:"_3-properties与map之间的相互转化",children:[]},{level:2,title:"4 Propterties常用方法",slug:"_4-propterties常用方法",children:[{level:3,title:"4.1 clear清空",slug:"_4-1-clear清空",children:[]},{level:3,title:"4.2 putAll 添加Map或者是Properties对象",slug:"_4-2-putall-添加map或者是properties对象",children:[]}]}],filePathRelative:"java/44 properties文件.md"}},77871:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(20641).Fv)('<h2 id="_1-resourcebundle解析" tabindex="-1"><a class="header-anchor" href="#_1-resourcebundle解析" aria-hidden="true">#</a> 1. ResourceBundle解析</h2><ol><li>在maven项目中properties放在类加载路径下，即resource文件夹中</li><li>可以使用<code>java.util.ResourceBundle</code>解析properties文件</li></ol><blockquote><p>获取该文件时不能传入后缀名</p></blockquote><img src="/images/filesystem/image-20201008155013339.png" alt="image-20201008155013339"><h3 id="_1-1-resourcebundle是用于国际化的" tabindex="-1"><a class="header-anchor" href="#_1-1-resourcebundle是用于国际化的" aria-hidden="true">#</a> 1.1 ResourceBundle是用于国际化的</h3><p><img src="/images/java/image-20210205012323301" alt="image-20210205012323300"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourceBundleDemo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span>\n        <span class="token function">printMsg</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">SIMPLIFIED_CHINESE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printMsg</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">ENGLISH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span>  <span class="token function">printMsg</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ResourceBundle</span> resourceBundle <span class="token operator">=</span> <span class="token class-name">ResourceBundle</span><span class="token punctuation">.</span><span class="token function">getBundle</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> locale<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> value <span class="token operator">=</span> resourceBundle<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> utf8Value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;ISO-8859-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>utf8Value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n 黄壮壮\n -----------------------\n huangzhuangzhuang\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_2-properties解析" tabindex="-1"><a class="header-anchor" href="#_2-properties解析" aria-hidden="true">#</a> 2 Properties解析</h2><h3 id="_2-1-类加载器" tabindex="-1"><a class="header-anchor" href="#_2-1-类加载器" aria-hidden="true">#</a> 2.1 类加载器</h3><ol><li>thread context ClassLoader 线程上下文加载器</li><li>class loader 类加载器</li><li>bootstrap ClassLoader 引导类加载器</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ClassLoader</span> <span class="token function">getDefaultClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token class-name">ClassLoader</span> cl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\tcl <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// Cannot access thread context ClassLoader - falling back...</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>cl <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// No thread context class loader -&gt; use class loader of this class.</span>\n\t\t\tcl <span class="token operator">=</span> <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>cl <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token comment">// getClassLoader() returning null indicates the bootstrap(引导类) ClassLoader</span>\n\t\t\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\t\t\tcl <span class="token operator">=</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t\t<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token comment">// Cannot access system ClassLoader - oh well, maybe the caller can live with null...</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">return</span> cl<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_2-2-加载properties文件" tabindex="-1"><a class="header-anchor" href="#_2-2-加载properties文件" aria-hidden="true">#</a> 2.2 加载Properties文件</h3><ol><li><p>Properties <strong>load方法</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span><span class="token punctuation">;</span>\t<span class="token comment">//\t可以借助类加载器来加载进来流</span>\n<span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Reader</span> reader<span class="token punctuation">)</span><span class="token punctuation">;</span>\t<span class="token comment">//\tspring EncodeResource.getReader</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>类加载器的getResourceAsStream ,进行辅助即可</p></li></ol><h4 id="_2-2-1-通过classloader" tabindex="-1"><a class="header-anchor" href="#_2-2-1-通过classloader" aria-hidden="true">#</a> 2.2.1 通过ClassLoader</h4><ol><li>主要是为了解决<code>classpath</code>问题</li></ol><h5 id="_1-测试用例-单个properties文件" tabindex="-1"><a class="header-anchor" href="#_1-测试用例-单个properties文件" aria-hidden="true">#</a> 1 测试用例(单个properties文件)</h5><p><img src="/images/java/image-20210203173832205.png" alt="image-20210203173832205"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertiesTestDemo</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> resourceName <span class="token operator">=</span> <span class="token string">&quot;META-INF/spring.handlers&quot;</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">ClassLoader</span> classLoaderToUse <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">URL</span> url <span class="token operator">=</span> classLoaderToUse<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span>resourceName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\n        <span class="token comment">//\tInputStream is = url.openConnection().getInputStream();</span>\n\t   <span class="token class-name">InputStream</span> is <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">openStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\t<span class="token comment">//\t简化版</span>\n        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>\n            is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//  {http://time.geekbang.org/schema/users=org.geekbang.thinking.in.spring.configuration.meta.UsersNamespaceHandler}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h5 id="_2-更加简便的方法" tabindex="-1"><a class="header-anchor" href="#_2-更加简便的方法" aria-hidden="true">#</a> 2 更加简便的方法</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertiesTestDemo</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> resourceName <span class="token operator">=</span> <span class="token string">&quot;META-INF/spring.handlers&quot;</span><span class="token punctuation">;</span>\n        <span class="token comment">//  相比 new FileInputStream() 容易解决classpath路径问题</span>\n        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">PropertiesTestDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resourceName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n            props<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>\n            is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">//  {http://time.geekbang.org/schema/users=org.geekbang.thinking.in.spring.configuration.meta.UsersNamespaceHandler}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_2-3-使用spring-封装好的classpathresource" tabindex="-1"><a class="header-anchor" href="#_2-3-使用spring-封装好的classpathresource" aria-hidden="true">#</a> 2.3 使用Spring 封装好的ClasspathResource</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> resourceName <span class="token operator">=</span> <span class="token string">&quot;META-INF/spring.handlers&quot;</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">ClassPathResource</span> resource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathResource</span><span class="token punctuation">(</span>resourceName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> resource<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span>\n            properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>\n            is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token comment">//  {http://time.geekbang.org/schema/users=org.geekbang.thinking.in.spring.configuration.meta.UsersNamespaceHandler}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><hr><h2 id="_3-properties与map之间的相互转化" tabindex="-1"><a class="header-anchor" href="#_3-properties与map之间的相互转化" aria-hidden="true">#</a> 3 Properties与Map之间的相互转化</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// map转化为properties</span>\n<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//\tproperties 转化为 map</span>\n<span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nproperties<span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TravelProperties</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;META-INF/default.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n       <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> entry<span class="token operator">:</span> properties<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n <span class="token punctuation">{</span>school=CAU, name=Q10Viking<span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_4-propterties常用方法" tabindex="-1"><a class="header-anchor" href="#_4-propterties常用方法" aria-hidden="true">#</a> 4 Propterties常用方法</h2><h3 id="_4-1-clear清空" tabindex="-1"><a class="header-anchor" href="#_4-1-clear清空" aria-hidden="true">#</a> 4.1 clear清空</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\tClears this hashtable so that it contains no keys.</span>\n<span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-2-putall-添加map或者是properties对象" tabindex="-1"><a class="header-anchor" href="#_4-2-putall-添加map或者是properties对象" aria-hidden="true">#</a> 4.2 putAll 添加Map或者是Properties对象</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\tProperties extends HashTable 而 HashTable实现了Map</span>\n<span class="token function">putAll</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',31),e={},t=(0,a(66262).A)(e,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);