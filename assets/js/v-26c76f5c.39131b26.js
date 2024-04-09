"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[69798],{11352:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-26c76f5c",path:"/designpattern/02%20%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/designpattern/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"工厂方法模式定义",slug:"工厂方法模式定义",children:[{level:3,title:"基本模型",slug:"基本模型",children:[]}]},{level:2,title:"开发优点",slug:"开发优点",children:[]},{level:2,title:"简单工厂",slug:"简单工厂",children:[]},{level:2,title:"工厂方法",slug:"工厂方法",children:[]},{level:2,title:"源码应用",slug:"源码应用",children:[]},{level:2,title:"案例",slug:"案例",children:[{level:3,title:"日志记录器的设计",slug:"日志记录器的设计",children:[]}]}],filePathRelative:"designpattern/02 工厂方法模式.md"}},99091:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var p=a(20641);const e=(0,p.Fv)('<h2 id="工厂方法模式定义" tabindex="-1"><a class="header-anchor" href="#工厂方法模式定义" aria-hidden="true">#</a> 工厂方法模式定义</h2><p>简单工厂模式最大的缺点是当有新产品要加入系统中时，必须修改工厂类，需要在其中加入必要的业务逻辑，这违背了开闭原则。此外，在简单工厂模式中，所有的产品都由同一个工厂创建，工厂类职责较重，业务逻辑较为复杂，具体产品与工厂类之间的耦合度高，严重影响了系统的灵活性和扩展性，而工厂方法模式则可以很好地解决这一问题。</p><blockquote><p>定义一个用于创建对象的接口，让子类决定实例化哪一个类。Factory Method <strong>使得一个类的实例化延迟到子类</strong></p></blockquote><ul><li><strong>工厂方法模式</strong>将对象的创建延迟到子类中进行。它定义一个用于创建对象的抽象方法，由子类决定具体实例化哪个类。工厂方法模式适用于需要根据不同条件动态地创建不同类型的对象。它通常由抽象工厂、具体工厂、抽象产品和具体产品组成。通过切换具体工厂子类，可以改变单个产品。</li><li>工厂方法模式（Factory Method Pattern又简称为<strong>工厂模式（Factory Pattern）</strong>，又可称作<strong>虚拟构造器模式（Virtual Constructor Pattern</strong>）或<strong>多态工厂模式（Polymorphic Factory Pattern）</strong></li></ul><img src="/images/designpattern/image-20210327152534426.png" alt="image-20210327152534426"><h3 id="基本模型" tabindex="-1"><a class="header-anchor" href="#基本模型" aria-hidden="true">#</a> 基本模型</h3>',6),t={href:"https://gitee.com/q10viking/design-patterns/tree/master/springboot-design-patterns/src/main/java/org/hzz/%E5%88%9B%E5%BB%BA%E8%80%85%E6%A8%A1%E5%BC%8F/CP3_%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F/%E5%9F%BA%E6%9C%AC%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<p><img src="/images/designpattern/image-20240329234920233.png" alt="image-20240329234920233"></p><p>产品统一接口</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**\n * 产品统一接口\n */\npublic interface Product {\n    void method();\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>具体产品实现</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 产品A\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体业务</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Product A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * 产品B\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token keyword">implements</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体业务</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Product B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="工厂相关类" tabindex="-1"><a class="header-anchor" href="#工厂相关类" aria-hidden="true">#</a> 工厂相关类</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 抽象工厂\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ProductFactory</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 具体工厂子类实现</span>\n    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 获取产品</span>\n    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>具体工厂实现</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 产品A工厂\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductAFactory</span> <span class="token keyword">extends</span> <span class="token class-name">ProductFactory</span><span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ConcreteProductA</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 进行一些初始化</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化Product A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> product<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * 产品B工厂\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductBFactory</span> <span class="token keyword">extends</span> <span class="token class-name">ProductFactory</span><span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ConcreteProductB</span> product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 进行一些初始化</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化Product B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> product<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 场景测试\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScenarioTest</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteProductAFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteProductBFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ProductFactory</span> factory<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">Product</span> product  <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        product<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 初始化Product A\n * Product A\n * 初始化Product B\n * Product B\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="开发优点" tabindex="-1"><a class="header-anchor" href="#开发优点" aria-hidden="true">#</a> 开发优点</h2><ol><li><p><strong>将具体产品与创建者解耦</strong></p></li><li><p>符合单一职责原则</p></li><li><p>符合开闭原则</p><ol><li><strong>稳定的代码</strong></li></ol></li></ol><h2 id="简单工厂" tabindex="-1"><a class="header-anchor" href="#简单工厂" aria-hidden="true">#</a> 简单工厂</h2>',14),o={href:"https://github.com/Q10Viking/learncode/tree/main/designpattern/src/org/hzz/factory/simple",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="工厂方法" tabindex="-1"><a class="header-anchor" href="#工厂方法" aria-hidden="true">#</a> 工厂方法</h2>',2),r={href:"https://github.com/Q10Viking/learncode/tree/main/designpattern/src/org/hzz/factory/abstractfactory",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 工厂方法</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// do something else...</span>\n        <span class="token keyword">return</span> product<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>实现</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token keyword">extends</span> <span class="token class-name">Application</span><span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="源码应用" tabindex="-1"><a class="header-anchor" href="#源码应用" aria-hidden="true">#</a> 源码应用</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 工厂方法 </span>\n<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span>URLStreamHandlerFactory</span> \t<span class="token comment">//\t如tomcat中自己实现的协议</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="日志记录器的设计" tabindex="-1"><a class="header-anchor" href="#日志记录器的设计" aria-hidden="true">#</a> 日志记录器的设计</h3>',7),i={href:"https://gitee.com/q10viking/design-patterns/tree/master/springboot-design-patterns/src/main/java/org/hzz/%E5%88%9B%E5%BB%BA%E8%80%85%E6%A8%A1%E5%BC%8F/CP3_%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F/%E6%A1%88%E4%BE%8B/%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%E5%99%A8%E7%9A%84%E8%AE%BE%E8%AE%A1",target:"_blank",rel:"noopener noreferrer"},k=(0,p.Fv)('<p><img src="/images/designpattern/image-20240409115159642.png" alt="image-20240409115159642"></p><h4 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> Logger</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 日志记录器接口，充当抽象产品角色\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>\n    <span class="token keyword">void</span> <span class="token function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token doc-comment comment">/**\n * 数据库日志记录器，充当具体产品角色\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataBaseLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数据库日志记录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * 文件日志记录器，充当具体产品角色\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件日志记录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="loggerfactory" tabindex="-1"><a class="header-anchor" href="#loggerfactory" aria-hidden="true">#</a> LoggerFactory</h4><blockquote><p>使用SpringBoot的方式来创建</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\n * 日志记录器工厂接口，充当抽象工厂角色\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 抽象工厂方法</span>\n    <span class="token class-name">Logger</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token doc-comment comment">/**\n * 文件日志记录器工厂类，充当具体工厂角色\n */</span>\n<span class="token annotation punctuation">@Service</span>\n<span class="token annotation punctuation">@Primary</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileLoggerFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">Logger</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 创建具体产品</span>\n        <span class="token class-name">Logger</span> fileLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// 其他操作</span>\n        <span class="token keyword">return</span> fileLogger<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token doc-comment comment">/**\n * 数据库日志记录器工厂类，充当具体工厂角色\n */</span>\n<span class="token annotation punctuation">@Service</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataBaseLoggerFactory</span> <span class="token keyword">implements</span> <span class="token class-name">LoggerFactory</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">Logger</span> <span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//连接数据库，代码省略</span>\n        <span class="token comment">//创建数据库日志记录器对象</span>\n        <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataBaseLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//初始化数据库日志记录器，代码省略</span>\n        <span class="token keyword">return</span> logger<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>scanBasePackages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;org.hzz.创建者模式.CP3_工厂方法模式.案例.日志记录器的设计&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClientApplication</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;dataBaseLoggerFactory&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">private</span> <span class="token class-name">LoggerFactory</span> loggerFactory<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ConfigurableApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ClientApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//        LoggerFactory loggerFactory = applicationContext.getBean(&quot;dataBaseLoggerFactory&quot;,LoggerFactory.class);</span>\n<span class="token comment">//</span>\n<span class="token comment">//        Logger logger = loggerFactory.createLogger();</span>\n<span class="token comment">//        logger.writeLog();</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">CommandLineRunner</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span> <span class="token class-name">LoggerFactory</span> loggerFactory<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>loggerFactory<span class="token punctuation">.</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> _arg <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>\n            <span class="token class-name">Logger</span> logger <span class="token operator">=</span> loggerFactory<span class="token punctuation">.</span><span class="token function">createLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            logger<span class="token punctuation">.</span><span class="token function">writeLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 数据库日志记录\n * 文件日志记录\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>',8),b={},m=(0,a(66262).A)(b,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",t,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),c,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),l,(0,p.Lk)("p",null,[(0,p.Lk)("a",r,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),u,(0,p.Lk)("p",null,[(0,p.Lk)("a",i,[(0,p.eW)("Source Code"),(0,p.bF)(a)])]),k],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);