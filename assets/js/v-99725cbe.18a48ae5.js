"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[97682],{77978:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-99725cbe",path:"/RocketMQ/09%20%E9%A1%BA%E5%BA%8F%E6%B6%88%E6%81%AF.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/RocketMQ/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"顺序消息",slug:"顺序消息",children:[]},{level:2,title:"发送者",slug:"发送者",children:[]},{level:2,title:"消费者",slug:"消费者",children:[]}],filePathRelative:"RocketMQ/09 顺序消息.md"}},41019:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(20641).Fv)('<h2 id="顺序消息" tabindex="-1"><a class="header-anchor" href="#顺序消息" aria-hidden="true">#</a> 顺序消息</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>发送者： 确保相同类型的消息发送到同一个队列<strong>MessageQueueSelector</strong></li><li>broker: broker中一个队列内的消息是可以保证有序的。</li><li>消费者： 消费者会从多个消息队列上去拿消息。这时虽然每个消息队列上的消息是有序的，但是多个队列之间的消息仍然是乱序的。消费者端要保证消息有序，就需要按队列一个一个来取消息，<strong>即取完一个队列的消息后，再去取下一个队列的消息</strong>。给consumer注入的<strong>MessageListenerOrderly</strong>对象，在RocketMQ内部就会通过<strong>锁队列</strong>的方式保证消息是一个一个队列来取的。</li></ol></div><h2 id="发送者" tabindex="-1"><a class="header-anchor" href="#发送者" aria-hidden="true">#</a> 发送者</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MQClientException</span><span class="token punctuation">,</span> <span class="token class-name">UnsupportedEncodingException</span><span class="token punctuation">,</span> <span class="token class-name">MQBrokerException</span><span class="token punctuation">,</span> <span class="token class-name">RemotingException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">DefaultMQProducer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultMQProducer</span><span class="token punctuation">(</span><span class="token string">&quot;order_group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        producer<span class="token punctuation">.</span><span class="token function">setNamesrvAddr</span><span class="token punctuation">(</span><span class="token class-name">Addr</span><span class="token punctuation">.</span><span class="token constant">NAME_SERVER_ADDR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        producer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> orderId <span class="token operator">=</span> i<span class="token punctuation">;</span>\n\n            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">5</span> <span class="token punctuation">;</span> j <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token class-name">Message</span> msg <span class="token operator">=</span>\n                        <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token string">&quot;order_topic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;order_&quot;</span><span class="token operator">+</span>orderId<span class="token punctuation">,</span> <span class="token string">&quot;KEY&quot;</span> <span class="token operator">+</span> orderId<span class="token punctuation">,</span>\n                                <span class="token punctuation">(</span><span class="token string">&quot;order_&quot;</span><span class="token operator">+</span>orderId<span class="token operator">+</span><span class="token string">&quot; step &quot;</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">RemotingHelper</span><span class="token punctuation">.</span><span class="token constant">DEFAULT_CHARSET</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">SendResult</span> sendResult <span class="token operator">=</span> producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MessageQueueSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token doc-comment comment">/**\n                     * 保证相同得消息发送到同一个队列，利用队列先进先出得特性\n                     */</span>\n                    <span class="token annotation punctuation">@Override</span>\n                    <span class="token keyword">public</span> <span class="token class-name">MessageQueue</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MessageQueue</span><span class="token punctuation">&gt;</span></span> mqs<span class="token punctuation">,</span> <span class="token class-name">Message</span> msg<span class="token punctuation">,</span> <span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token class-name">Integer</span> id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> arg<span class="token punctuation">;</span>\n                        <span class="token keyword">int</span> index <span class="token operator">=</span> id <span class="token operator">%</span> mqs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mqs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token keyword">return</span> mqs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span> orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s%n&quot;</span><span class="token punctuation">,</span> sendResult<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">500_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        producer<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/** List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MessageQueue</span><span class="token punctuation">&gt;</span></span>\n [\n     [topic=order_topic, brokerName=broker-a, queueId=0],\n     [topic=order_topic, brokerName=broker-a, queueId=1],\n     [topic=order_topic, brokerName=broker-a, queueId=2],\n     [topic=order_topic, brokerName=broker-a, queueId=3], \n     [topic=order_topic, brokerName=broker-b, queueId=0], \n     [topic=order_topic, brokerName=broker-b, queueId=1],\n     [topic=order_topic, brokerName=broker-b, queueId=2],\n     [topic=order_topic, brokerName=broker-b, queueId=3]\n ]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p><img src="/images/RocketMQ/image-20220608011045329.png" alt="image-20220608011045329"></p><h2 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者" aria-hidden="true">#</a> 消费者</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>顺序性：取完一个队列的消息后，再去取下一个队列的消息**。给consumer注入的<strong>MessageListenerOrderly</strong>对象，在RocketMQ内部就会通过<strong>锁队列</strong>的方式保证消息是一个一个队列来取的</li><li>如果不设置自动提交，不会更新消费者位点，过了一段时间，RocketMQ又会发送过来，直到提交了为止</li></ul></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MQClientException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">DefaultMQPushConsumer</span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultMQPushConsumer</span><span class="token punctuation">(</span><span class="token string">&quot;order_consumer_group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        consumer<span class="token punctuation">.</span><span class="token function">setNamesrvAddr</span><span class="token punctuation">(</span><span class="token class-name">Addr</span><span class="token punctuation">.</span><span class="token constant">NAME_SERVER_ADDR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        consumer<span class="token punctuation">.</span><span class="token function">setConsumeFromWhere</span><span class="token punctuation">(</span><span class="token class-name">ConsumeFromWhere</span><span class="token punctuation">.</span><span class="token constant">CONSUME_FROM_LAST_OFFSET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        consumer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;order_topic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        consumer<span class="token punctuation">.</span><span class="token function">registerMessageListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessageListenerOrderly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token annotation punctuation">@Override</span>\n            <span class="token keyword">public</span> <span class="token class-name">ConsumeOrderlyStatus</span> <span class="token function">consumeMessage</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MessageExt</span><span class="token punctuation">&gt;</span></span> msgs<span class="token punctuation">,</span> <span class="token class-name">ConsumeOrderlyContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">// 有一个自动提交，如果设置为false,当consumer重启时会继续消费到</span>\n                context<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">MessageExt</span> msg<span class="token operator">:</span>msgs<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;-&gt;收到消息内容 &quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">return</span> <span class="token class-name">ConsumeOrderlyStatus</span><span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n        consumer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Consumer Started.%n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/** 局部有序性\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 0\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 0\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 0\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 1\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 1\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 1\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 2\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 2\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 3\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 2\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 4\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 3\n ConsumeMessageThread_3-&gt;收到消息内容 order_0 step 5\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 4\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 3\n ConsumeMessageThread_1-&gt;收到消息内容 order_4 step 5\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 4\n ConsumeMessageThread_2-&gt;收到消息内容 order_3 step 5\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 0\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 1\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 2\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 3\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 4\n ConsumeMessageThread_4-&gt;收到消息内容 order_1 step 5\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 0\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 1\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 2\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 3\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 4\n ConsumeMessageThread_5-&gt;收到消息内容 order_2 step 5\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><blockquote><p>没有自动提交时，消费者位点没有更新</p></blockquote><p><img src="/images/RocketMQ/image-20220608012805081.png" alt="image-20220608012805081"></p>',10),e={},t=(0,a(66262).A)(e,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);