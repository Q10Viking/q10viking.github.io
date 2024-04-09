"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[17429],{32929:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-cc233300",path:"/rabbitmq/22%20%E6%9C%89%E5%87%A0%E7%A7%8D%E4%BA%A4%E6%8D%A2%E6%9C%BA%E7%B1%BB%E5%9E%8B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/rabbitmq/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Direct Exchange(直连交换机)",slug:"direct-exchange-直连交换机",children:[]},{level:2,title:"Topic Exchange(主题交换机)",slug:"topic-exchange-主题交换机",children:[]},{level:2,title:"Headers Exchange",slug:"headers-exchange",children:[]},{level:2,title:"Fanout Exchange(广播交换机)",slug:"fanout-exchange-广播交换机",children:[]},{level:2,title:"Default Exchange",slug:"default-exchange",children:[]}],filePathRelative:"rabbitmq/22 有几种交换机类型.md"}},41883:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const i=(0,t(20641).Fv)('<p>RabbitMQ 支持多种交换机（Exchange）类型，每种类型都用于不同的消息路由和分发策略：</p><h2 id="direct-exchange-直连交换机" tabindex="-1"><a class="header-anchor" href="#direct-exchange-直连交换机" aria-hidden="true">#</a> Direct Exchange(直连交换机)</h2><p>这种交换机根据消息的路由键（Routing Key）将消息发送到与之完全匹配的队列。只有当消息的路由键与队列绑定时指定的路由键完全相同时，消息才会被路由到队列。这是一种简单的路由策略，适用于点对点通信。</p><p>路由键与队列名完全匹配交换机，此种类型交换机，通过RoutingKey路由键将交换机和队列进行绑定， 消息被发送到exchange时，需要根据消息的RoutingKey，来进行匹配，只将消息发送到完全匹配到此RoutingKey的队列。</p><p>比如：如果一个队列绑定到交换机要求路由键为“key”，则只转发RoutingKey标记为“key”的消息，不会转发&quot;key1&quot;，也不会转发“key.1”等等。它是完全匹配、单播的模式</p><p><img src="/images/MySQL/image-20240325161509202.png" alt="image-20240325161509202"></p><p>比如：如果一个队列绑定到交换机要求路由键为“key”，则只转发RoutingKey标记为“key”的消息，不会转发&quot;key1&quot;，也不会转发“key.1”等等。它是完全匹配、单播的模式</p><p>同一个key可以绑定多个queue队列；当匹配到key1时，queue1和queue2都可以收到消息</p><h2 id="topic-exchange-主题交换机" tabindex="-1"><a class="header-anchor" href="#topic-exchange-主题交换机" aria-hidden="true">#</a> Topic Exchange(主题交换机)</h2><p>这种交换机根据消息的路由键与队列绑定时指定的路由键模式（通配符）匹配程度，将消息路由到一个或多个队列。路由键可以使用通配符符号 *（匹配一个单词）和 #（匹配零个或多个单词），允许更灵活的消息路由。用于发布/订阅模式和复杂的消息路由需求。</p><p>Topic，主题类型交换机，此种交换机与Direct类似，也是需要通过routingkey路由键进行匹配分发，<strong>区别在于Topic可以进行模糊匹配，Direct是完全匹配</strong>。</p><ol><li>Topic中，将routingkey通过&quot;.&quot;来分为多个部分</li><li>&quot;*&quot;：代表一个部分</li><li>&quot;#&quot;：代表0个或多个部分(如果绑定的路由键为 &quot;#&quot; 时，则接受所有消息，因为路由键所有都匹配)</li></ol><p><img src="/images/MySQL/image-20240325161638575.png" alt="image-20240325161638575"></p><p>然后发送一条信息，routingkey为&quot;key1.key2.key3.key4&quot;，那么根据&quot;.&quot;将这个路由键分为了4个部分，此条路由键，将会匹配：</p><ol><li>key1.key2.key3.*：成功匹配，因为 * 可以代表一个部分</li><li>key1.# ：成功匹配，因为#可以代表0或多个部分</li><li><em>.key2.</em>.key4： 成功匹配，因为第一和第三部分分别为key1和key3，且为4个部分，刚好匹配</li><li>#.key3.key4：成功匹配，#可以代表多个部分，正好匹配中了我们的key1和key2</li></ol><p>如果发送消息routingkey为&quot;key1&quot;，那么将只能匹配中key1.#，#可以代表0个部分</p><h2 id="headers-exchange" tabindex="-1"><a class="header-anchor" href="#headers-exchange" aria-hidden="true">#</a> Headers Exchange</h2><p>这种交换机根据消息的标头信息（Headers）来决定消息的路由，而不是使用路由键。队列和交换机之间的绑定规则是根据标头键值对来定义的，只有当消息的标头与绑定规则完全匹配时，消息才会被路由到队列。适用于需要复杂消息匹配的场景。</p><p>headers 匹配 AMQP 消息的 header 而不是路由键，此外 headers 交换器和 direct 交换器完全一致，但性能差很多，目前几乎用不到了</p><p>消费方指定的headers中必须包含一个&quot;x-match&quot;的键。</p><p>键&quot;x-match&quot;的值有2个</p><ol><li>x-match = all ：表示所有的键值对都匹配才能接受到消息</li><li>x-match = any ：表示只要有键值对匹配就能接受到消息</li></ol><p><img src="/images/MySQL/image-20240325161813649.png" alt="image-20240325161813649"></p><p>发送消息时间，如果其他参数信息是{ &quot;name&quot;:&quot;xiaomingXX&quot;, &quot;sex&quot;:&quot;男&quot; }，因为queue2的x-match是any，只需要有一个键值对匹配所以就能接收到消息，所以queue2可以接收到消息；queue1的x-match是all，需要所有的键值对都匹配才能接收到消息，所以此时queue1接收不到消息</p><h2 id="fanout-exchange-广播交换机" tabindex="-1"><a class="header-anchor" href="#fanout-exchange-广播交换机" aria-hidden="true">#</a> Fanout Exchange(广播交换机)</h2><p>这种交换机将消息广播到与之绑定的所有队列，无论消息的路由键是什么。用于发布/订阅模式，其中一个消息被广播给所有订阅者。</p><p>Fanout，扇出类型交换机，此种交换机，会将消息分发给所有绑定了此交换机的队列，<strong>此时RoutingKey参数无效</strong></p><p><img src="/images/MySQL/image-20240325161914834.png" alt="image-20240325161914834"></p><p>fanout类型交换机下发送消息一条，无论RoutingKey是什么，queue1,queue2,queue3,queue4都可以收到消息</p><h2 id="default-exchange" tabindex="-1"><a class="header-anchor" href="#default-exchange" aria-hidden="true">#</a> Default Exchange</h2><p>这是 RabbitMQ 默认实现的一种交换机，它不需要手动创建。当消息发布到默认交换机时，路由键会被解释为队列的名称，消息会被路由到与路由键名称相同的队列。默认交换机通常用于点对点通信，但不支持复杂的路由策略。</p>',31),u={},n=(0,t(66262).A)(u,[["render",function(e,a){return i}]])},66262:(e,a)=>{a.A=(e,a)=>{const t=e.__vccOpts||e;for(const[e,i]of a)t[e]=i;return t}}}]);