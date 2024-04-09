"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[73558],{5043:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-03e5f8da",path:"/nacos/05%20nacos%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/nacos/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"配置中心",slug:"配置中心",children:[]},{level:2,title:"Config相关配置",slug:"config相关配置",children:[]},{level:2,title:"文件扩展名",slug:"文件扩展名",children:[{level:3,title:"文件格式",slug:"文件格式",children:[]}]},{level:2,title:"namespace",slug:"namespace",children:[{level:3,title:"自定义命名空间",slug:"自定义命名空间",children:[]}]},{level:2,title:"支持profile粒度的配置",slug:"支持profile粒度的配置",children:[]},{level:2,title:"支持自定义 Group 的配置",slug:"支持自定义-group-的配置",children:[]},{level:2,title:"支持自定义扩展的 Data Id 配置",slug:"支持自定义扩展的-data-id-配置",children:[]},{level:2,title:"优先级",slug:"优先级",children:[]},{level:2,title:"补充",slug:"补充",children:[]}],filePathRelative:"nacos/05 nacos配置中心.md"}},33158:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(20641);const p={href:"https://github.com/Q10Viking/springcloudalibaba/tree/main/05-learn-spring-cloud-alibaba",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Fv)('<h2 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心" aria-hidden="true">#</a> 配置中心</h2><p><img src="/images/nacos/12925.png" alt="img"></p><h2 id="config相关配置" tabindex="-1"><a class="header-anchor" href="#config相关配置" aria-hidden="true">#</a> <strong>Config相关配置</strong></h2><p>Nacos 数据模型 Key 由三元组唯一确定, Namespace默认是空串，公共命名空间（public），分组默认是 DEFAULT_GROUP</p><img src="/images/nacos/14992.png" alt="img" style="zoom:67%;"><h2 id="文件扩展名" tabindex="-1"><a class="header-anchor" href="#文件扩展名" aria-hidden="true">#</a> 文件扩展名</h2><p>项目中配置的使用的文件扩展名</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.88.1<span class="token punctuation">:</span><span class="token number">8848</span>\n\t\t<span class="token comment"># `${spring.application.name}.${file-extension:properties}`</span>\n        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yml    <span class="token comment"># 代表使用配置中心中使用配置的文件格式 </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="文件格式" tabindex="-1"><a class="header-anchor" href="#文件格式" aria-hidden="true">#</a> 文件格式</h3><p>nacos配置中心中文件格式</p><p><img src="/images/nacos/image-20210822172821087.png" alt="image-20210822172821087"></p><p>项目中引用配置中心的配置，根据文件名和文件格式引用</p><p><strong>要一一对应起来nacos-config.yml文件（应用名.文件扩展名）</strong></p><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h2><p>用于进行租户粒度的配置隔离。不同的命名空间下，可以存在相同的 Group 或 Data ID 的配置。Namespace 的常用场景之一是不同环境的配置的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。</p><p>在没有明确指定 ${spring.cloud.nacos.config.namespace} 配置的情况下， 默认使用的是 Nacos 上 Public 这个namespace。如果需要使用自定义的命名空间，可以通过以下配置来实现：</p><h3 id="自定义命名空间" tabindex="-1"><a class="header-anchor" href="#自定义命名空间" aria-hidden="true">#</a> 自定义命名空间</h3><p>如以项目进行隔离</p><p><img src="/images/nacos/image-20210822173333309.png" alt="image-20210822173333309"></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.88.1<span class="token punctuation">:</span><span class="token number">8848</span>\n        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yml    <span class="token comment"># 代表使用配置中心中使用配置的文件格式</span>\n        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 08655487<span class="token punctuation">-</span>b7a7<span class="token punctuation">-</span>43b3<span class="token punctuation">-</span>9ddb<span class="token punctuation">-</span>94874568c3b2  <span class="token comment"># 命名空间ID</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>​ <img src="/images/nacos/image-20210822173632500.png" alt="image-20210822173632500"></p><p><strong>此时就会加载命名空间learnSpringCloud下的nacos-config.yml文件（应用名.文件扩展名）</strong></p><h2 id="支持profile粒度的配置" tabindex="-1"><a class="header-anchor" href="#支持profile粒度的配置" aria-hidden="true">#</a> 支持profile粒度的配置</h2><p>spring-cloud-starter-alibaba-nacos-config 在加载配置的时候，不仅仅加载了以 dataid 为 ${spring.application.name}.${file-extension:properties} 为前缀的基础配置，还加载了dataid为 ${spring.application.name}-${profile}.${file-extension:properties} 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过Spring 提供的 ${spring.profiles.active} 这个配置项来配置。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring:\n  application:\n    name: nacos-config\n  profiles:\n    active: dev      \n  cloud:\n    nacos:\n      config:\n        server-addr: http://192.168.88.1:8848\n        file-extension: yml    # 代表使用配置中心中使用配置的文件格式\n        namespace: 08655487-b7a7-43b3-9ddb-94874568c3b2  # 命名空间\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="/images/nacos/image-20210822174331563.png" alt="image-20210822174331563"></p><p><strong>此时就会加载命名空间learnSpringCloud下的nacos-config-dev.yml文件（应用名-profile.文件扩展名）</strong></p><h2 id="支持自定义-group-的配置" tabindex="-1"><a class="header-anchor" href="#支持自定义-group-的配置" aria-hidden="true">#</a> 支持自定义 Group 的配置</h2><p>如： 订单服务，商品服务这样来实现<strong>配置的一个隔离</strong></p><p>Group是组织配置的维度之一。通过一个有意义的字符串（如 Buy 或 Trade ）对配置集进行分组，从而区分 Data ID 相同的配置集。当您在 Nacos 上创建一个配置时，如果未填写配置分组的名称，则配置分组的名称默认采用 DEFAULT_GROUP 。配置分组的常见场景：不同的应用或组件使用了相同的配置类型，如 database_url 配置和 MQ_topic 配置。</p><p>在没有明确指定 ${spring.cloud.nacos.config.group} 配置的情况下，默认是DEFAULT_GROUP 。如果需要自定义自己的 Group，可以通过以下配置来实现：</p><h2 id="支持自定义扩展的-data-id-配置" tabindex="-1"><a class="header-anchor" href="#支持自定义扩展的-data-id-配置" aria-hidden="true">#</a> 支持自定义扩展的 Data Id 配置</h2><p>Data ID 是组织划分配置的维度之一。Data ID 通常用于组织划分系统的配置集。一个系统或者应用可以包含多个配置集，每个配置集都可以被一个有意义的名称标识。Data ID 通常采用类 Java 包（如 com.taobao.tc.refund.log.level）的命名规则保证全局唯一性。此命名规则非强制。</p><p><strong>通过自定义扩展的 Data Id 配置，既可以解决多个应用间配置共享的问题，又可以支持一个应用有多个配置文件。</strong></p><ol><li>共享配置</li><li>扩展配置</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>config\n  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>\n    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.88.1<span class="token punctuation">:</span><span class="token number">8848</span>\n        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yml    <span class="token comment"># 代表使用配置中心中使用配置的文件格式</span>\n        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> 08655487<span class="token punctuation">-</span>b7a7<span class="token punctuation">-</span>43b3<span class="token punctuation">-</span>9ddb<span class="token punctuation">-</span>94874568c3b2  <span class="token comment"># 命名空间</span>\n        <span class="token key atrule">shared-configs</span><span class="token punctuation">:</span>     <span class="token comment"># 共享配置，list集合</span>\n          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> share<span class="token punctuation">-</span>config01.yml   <span class="token comment">#自定义 Data Id 的配置</span>\n            <span class="token key atrule">group</span><span class="token punctuation">:</span> REFRESH_GROUP\n            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> share<span class="token punctuation">-</span>config02.yml\n            <span class="token key atrule">group</span><span class="token punctuation">:</span> REFRESH_GROUP\n            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n        <span class="token key atrule">extension-configs</span><span class="token punctuation">:</span>   <span class="token comment"># 扩展配置，list集合</span>\n          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> ext<span class="token punctuation">-</span>config01.yml\n            <span class="token key atrule">group</span><span class="token punctuation">:</span> REFRESH_GROUP\n            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n          <span class="token punctuation">-</span> <span class="token key atrule">data-id</span><span class="token punctuation">:</span> ext<span class="token punctuation">-</span>config02.yml\n            <span class="token key atrule">group</span><span class="token punctuation">:</span> REFRESH_GROUP\n            <span class="token key atrule">refresh</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><img src="/images/nacos/image-20210822181642093.png" alt="image-20210822181642093"></p><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>都会加载，只不过优先级不同，会产生覆盖的效果</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ${spring.application.name}-${profile}.${file-extension:properties}</span>\n<span class="token comment">#${spring.application.name}.${file-extension:properties}</span>\n<span class="token comment">#${spring.application.name}</span>\n<span class="token comment">#extensionConfigs</span>\n<span class="token comment">#sharedConfigs </span>\n\n<span class="token number">1</span><span class="token punctuation">)</span> nacos-config-dev.yaml 精准配置\n<span class="token number">2</span><span class="token punctuation">)</span> nacos-config.yaml 同工程不同环境的通用配置\n<span class="token number">3</span><span class="token punctuation">)</span> ext-config: 不同工程 扩展配置\n<span class="token number">4</span><span class="token punctuation">)</span> shared-dataids 不同工程通用配置\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><p>以上的配置都在bootstrap.yml文件中配置而不是application.yml</p>',42),l={},c=(0,s(66262).A)(l,[["render",function(n,a){const s=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",p,[(0,e.eW)("Nacos配置中心实战-github"),(0,e.bF)(s)])]),t],64)}]])},66262:(n,a)=>{a.A=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);