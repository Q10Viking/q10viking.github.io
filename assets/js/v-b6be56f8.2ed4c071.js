"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[17140],{99039:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-b6be56f8",path:"/rabbitmq/04%20WorkQueues%E5%B7%A5%E4%BD%9C%E6%A8%A1%E5%BC%8F.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/rabbitmq/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Work queues 工作队列模式",slug:"work-queues-工作队列模式",children:[]},{level:2,title:"短信通知服务例子❤️",slug:"短信通知服务例子❤️",children:[{level:3,title:"生产者❤️",slug:"生产者❤️",children:[]},{level:3,title:"消费者❤️",slug:"消费者❤️",children:[]}]},{level:2,title:"总结⭐",slug:"总结⭐",children:[]}],filePathRelative:"rabbitmq/04 WorkQueues工作模式.md"}},15498:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(20641);const t={class:"custom-container tip"},e=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),o={href:"https://github.com/Q10Viking/learncode/tree/main/rabbitmq/_01_rabbitmq_java_api/src/main/java/org/hzz/workqueue",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Fv)('<h2 id="work-queues-工作队列模式" tabindex="-1"><a class="header-anchor" href="#work-queues-工作队列模式" aria-hidden="true">#</a> Work queues 工作队列模式</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>**Work Queues：**与入门程序的简单模式相比，多了一个或一些消费端，<strong>多个消费端共同消费同一个队列中的消息(不会重复消费,消费者之间是竞争关系)</strong>。</p></div><p><img src="/images/RabbitMQ/image-20211031011008065.png" alt="image-20211031011008065"></p><p>l<strong>应用场景</strong>：对于任务过重或任务较多情况使用工作队列可以❤️提高任务处理的速度❤️。</p><hr><h2 id="短信通知服务例子❤️" tabindex="-1"><a class="header-anchor" href="#短信通知服务例子❤️" aria-hidden="true">#</a> 短信通知服务例子❤️</h2><p><strong>Work Queues</strong> 与入门程序的简单模式的代码几乎是一样的。可以完全复制，并<strong>多复制一个消费者进行多个消费者同时对消费消息的测试。</strong></p><p><img src="/images/RabbitMQ/image-20211031011112216.png" alt="image-20211031011112216"></p><h3 id="生产者❤️" tabindex="-1"><a class="header-anchor" href="#生产者❤️" aria-hidden="true">#</a> 生产者❤️</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>模拟发送短信</p></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderSystem</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token class-name">RabbitConstant</span><span class="token punctuation">.</span><span class="token constant">QUEUE_SMS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">SMS</span> sms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SMS</span><span class="token punctuation">(</span><span class="token string">&quot;乘客&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&quot;13900000&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&quot;您的车票已预订成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">String</span> jsonSMS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span>sms<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">,</span> <span class="token class-name">RabbitConstant</span><span class="token punctuation">.</span><span class="token constant">QUEUE_SMS</span> <span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token punctuation">,</span> jsonSMS<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;发送数据成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="消费者❤️" tabindex="-1"><a class="header-anchor" href="#消费者❤️" aria-hidden="true">#</a> 消费者❤️</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>模拟三个消费者，消费消息。但是每个消费者处理的消息的速度不一样，分别是10ms,100ms,1500ms，最终模拟的结果分别是：消费道理7条数，2条数据，1条数据</p></div><blockquote><p>其中一个消费者</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SMSSender2</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">RabbitUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">final</span> <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token class-name">RabbitConstant</span><span class="token punctuation">.</span><span class="token constant">QUEUE_SMS</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//如果不写basicQos（1），则自动MQ会将所有请求平均发送给所有消费者</span>\n        <span class="token comment">//basicQos,MQ不再对消费者一次发送多个请求，而是消费者处理完一个消息后（确认后），在从队列中获取一个新的</span>\n        channel<span class="token punctuation">.</span><span class="token function">basicQos</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//处理完一个取一个</span>\n\n        channel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span><span class="token class-name">RabbitConstant</span><span class="token punctuation">.</span><span class="token constant">QUEUE_SMS</span> <span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token annotation punctuation">@Override</span>\n            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n                <span class="token class-name">String</span> jsonSMS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">SMS</span> sms <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Gson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>jsonSMS<span class="token punctuation">,</span> <span class="token constant">SMS</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;SMSSender2-短信发送成功:&quot;</span> <span class="token operator">+</span> sms<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">try</span> <span class="token punctuation">{</span>\n                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n\n                channel<span class="token punctuation">.</span><span class="token function">basicAck</span><span class="token punctuation">(</span>envelope<span class="token punctuation">.</span><span class="token function">getDeliveryTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 0 [main] INFO org.hzz.util.RabbitUtils  - 成功连接到： /192.168.187.135:5672\n * SMSSender2-短信发送成功:SMS<span class="token punctuation">{</span>name=&#39;乘客2&#39;, mobile=&#39;139000002&#39;, content=&#39;您的车票已预订成功&#39;<span class="token punctuation">}</span>\n * SMSSender2-短信发送成功:SMS<span class="token punctuation">{</span>name=&#39;乘客10&#39;, mobile=&#39;1390000010&#39;, content=&#39;您的车票已预订成功&#39;<span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="总结⭐" tabindex="-1"><a class="header-anchor" href="#总结⭐" aria-hidden="true">#</a> 总结⭐</h2><ol><li><p>在一个队列中如果有多个消费者，那么消费者之间对于同一个消息的关系是<strong>竞争⭐</strong>的关系</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  由于存在竞争关系，设置basicQos<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 很重要，处理完一条再拿一条，而不是先全部揽过来。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><strong>Work Queues</strong> 对于任务过重或任务较多情况使用工作队列可以提高任务处理的速度。例如：短信服务部署多个，只需要有一个节点成功发送即可。</p></li></ol>',17),l={},u=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[e,(0,p.Lk)("p",null,[(0,p.Lk)("a",o,[(0,p.eW)("Source Code"),(0,p.bF)(a)])])]),c],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);