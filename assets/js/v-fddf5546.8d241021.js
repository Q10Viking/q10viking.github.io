"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[37888],{21676:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-fddf5546",path:"/vuepress/07%20aloglic%20docSearch%E9%9B%86%E6%88%90.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/vuepress/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"docsearch",slug:"docsearch",children:[]},{level:2,title:"手动执行爬虫🚀",slug:"手动执行爬虫",children:[{level:3,title:"python环境安装",slug:"python环境安装",children:[]},{level:3,title:"安装爬虫环境",slug:"安装爬虫环境",children:[]},{level:3,title:"Algolia环境配置",slug:"algolia环境配置",children:[]},{level:3,title:"安装pipenv",slug:"安装pipenv",children:[]},{level:3,title:"下载Chrome driver",slug:"下载chrome-driver",children:[]},{level:3,title:"下载爬虫代码",slug:"下载爬虫代码",children:[]},{level:3,title:"配置config.json文件",slug:"配置config-json文件",children:[]},{level:3,title:"执行爬虫⭐",slug:"执行爬虫",children:[]}]},{level:2,title:"博客配置docsearch插件",slug:"博客配置docsearch插件",children:[]},{level:2,title:"预览效果😸",slug:"预览效果",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"vuepress/07 aloglic docSearch集成.md"}},40079:(n,s,a)=>{a.r(s),a.d(s,{default:()=>K});var e=a(20641);const p=(0,e.Fv)('<h2 id="docsearch" tabindex="-1"><a class="header-anchor" href="#docsearch" aria-hidden="true">#</a> docsearch</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>官方文档有两种方式来集成algolia docSearch. 1️⃣ 向algolia官方注册信息 2️⃣ 自己构建爬虫</p><p>由于第一种方式简单，但是我迟迟没有收到邮件，所以推荐第二种方式自己构建爬虫</p></div><hr><h2 id="手动执行爬虫" tabindex="-1"><a class="header-anchor" href="#手动执行爬虫" aria-hidden="true">#</a> 手动执行爬虫🚀</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>以下操作基于windows环境</p></div><h3 id="python环境安装" tabindex="-1"><a class="header-anchor" href="#python环境安装" aria-hidden="true">#</a> python环境安装</h3>',6),t={href:"https://www.python.org/downloads/release/python-366/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Lk)("p",null,[(0,e.Lk)("img",{src:"/images/vuepress/202111281725342.png",alt:"202111281725342"})],-1),l=(0,e.Lk)("p",null,"配置python环境变量",-1),o=(0,e.Lk)("p",null,[(0,e.Lk)("img",{src:"/images/vuepress/202111290600550.png",alt:"202111290600550"})],-1),c=(0,e.Lk)("h3",{id:"安装爬虫环境",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#安装爬虫环境","aria-hidden":"true"},"#"),(0,e.eW)(" 安装爬虫环境")],-1),i={href:"https://docsearch.algolia.com/docs/legacy/run-your-own/#running-the-crawler-from-the-code-base",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Lk)("h3",{id:"algolia环境配置",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#algolia环境配置","aria-hidden":"true"},"#"),(0,e.eW)(" Algolia环境配置")],-1),d={href:"https://www.algolia.com",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Fv)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>用户名：cau1403090523@gmail.com 密码：同邮箱\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/images/vuepress/202111281559173.png" alt="202111281559173"></p><p>我创建了一个应用，并命名为Blog,然后切换到该应用，点击API keys</p><p><img src="/images/vuepress/202111281602375.png" alt="202111281602375"></p>',4),h={href:"https://docsearch.algolia.com/docs/legacy/run-your-own/#set-up-your-environment",target:"_blank",rel:"noopener noreferrer"},g={class:"custom-container tip"},k=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),m=(0,e.Lk)("li",null,[(0,e.Lk)("code",null,"APPLICATION_ID"),(0,e.eW)(" set to your Algolia Application ID")],-1),v=(0,e.Lk)("code",null,"API_KEY",-1),y=(0,e.Lk)("strong",null,"write",-1),f={href:"https://www.algolia.com/doc/guides/security/api-keys/#acl",target:"_blank",rel:"noopener noreferrer"},q=(0,e.Lk)("code",null,"addObject",-1),L=(0,e.Lk)("code",null,"editSettings",-1),x=(0,e.Lk)("code",null,"deleteIndex",-1),w=(0,e.Fv)('<p><strong>注意在生成API的时候不要指定index name,保持为空，表示这个api key可以操作所有的索引</strong></p><p><img src="/images/vuepress/202111281612220.png" alt="202111281612220"></p><p>新生成的api key 应该如下所示，<strong>api key用于爬虫上传数据的凭证</strong></p><p><img src="/images/vuepress/202111290900539.png" alt="202111290900539"></p><h3 id="安装pipenv" tabindex="-1"><a class="header-anchor" href="#安装pipenv" aria-hidden="true">#</a> 安装pipenv</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>pipenv 用于执行python程序时构建一个虚拟环境，在这个环境中能够很好的管理包依赖</p><p>它会创建一个Pipfile 这个文件的作用类似npm下的package.json，用于管理项目中需要的依赖</p></div>',6),_={href:"https://pipenv.pypa.io/en/latest/install/#installing-pipenv",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Fv)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip install --user pipenv\npipenv install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>默认安装在了</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>你的用户名<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>Python<span class="token punctuation">\\</span>Python38<span class="token punctuation">\\</span>Scripts\n<span class="token comment"># 如： C:\\Users\\11930\\AppData\\Roaming\\Python\\Python38\\Scripts</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>配置该环境变量</p><p><img src="/images/vuepress/202111290900049.png" alt="202111290900049"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 验证</span>\n<span class="token operator">&gt;</span> pipenv <span class="token parameter variable">--version</span>\npipenv, version <span class="token number">2021.11</span>.23\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="下载chrome-driver" tabindex="-1"><a class="header-anchor" href="#下载chrome-driver" aria-hidden="true">#</a> 下载Chrome driver</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>use the browser emulation 即爬虫使用浏览模拟的方式，经过自己的实验，这样能够让爬虫爬取到更多的数据</p></div><p>目前我的chrome浏览器是 96.0.4664.45</p><p><img src="/images/vuepress/202111290558310.png" alt="202111290558310"></p>',10),P={href:"https://chromedriver.chromium.org/downloads",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Fv)('<p><img src="/images/vuepress/202111290559323.png" alt="202111290559323"></p><h3 id="下载爬虫代码" tabindex="-1"><a class="header-anchor" href="#下载爬虫代码" aria-hidden="true">#</a> 下载爬虫代码</h3><p>https://github.com/algolia/docsearch-scraper</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/algolia/docsearch-scraper.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>进入到docsearch-scraper文件夹，并在里面创建**.env**文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>Github<span class="token punctuation">\\</span>docsearch-scraper<span class="token operator">&gt;</span> <span class="token function">touch</span> .env\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在**.env**文件中填入在algolia上配置的application_id和api_key</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">APPLICATION_ID</span><span class="token operator">=</span>在aloglia上配置的应用ID\n<span class="token assign-left variable">API_KEY</span><span class="token operator">=</span>在aloglia配置的api key\n<span class="token comment"># 配置chrome的驱动</span>\n<span class="token assign-left variable">CHROMEDRIVER_PATH</span><span class="token operator">=</span>E:/chromedriver/chromedriver.exe\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="配置config-json文件" tabindex="-1"><a class="header-anchor" href="#配置config-json文件" aria-hidden="true">#</a> 配置config.json文件</h3>',9),I={class:"custom-container tip"},F=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),j={href:"https://q10viking.github.io/",target:"_blank",rel:"noopener noreferrer"},D=(0,e.Lk)("p",null,"config.json文件如下，我放在了.vuepress文件夹下",-1),C={href:"https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html#get-search-index",target:"_blank",rel:"noopener noreferrer"},E=(0,e.Fv)('<ol><li>index_name配置为索引的名字，爬虫会将数据存储到该索引名下</li><li>start_urls，博客网站</li><li>js_render，添加这行，表示使用浏览器模拟，这样使得爬虫能够爬取到博客更多的数据</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;http://q10viking.github.io&quot;</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;stop_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.sidebar-heading.active&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h3&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h4&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content h5&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.theme-default-content p, .theme-default-content li&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/html/@lang&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xpath&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;custom_settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;attributesForFaceting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;lang&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;js_render&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="执行爬虫" tabindex="-1"><a class="header-anchor" href="#执行爬虫" aria-hidden="true">#</a> 执行爬虫⭐</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在windows上使用gitbash来执行</p></div><p>进入到文件夹docsearch-scraper，执行命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 下载docsearch-scraper依赖的文件</span>\npipenv <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/vuepress/202111281804501.png" alt="202111281804501"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 创建virtualenv 虚拟环境</span>\npipenv shell\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/vuepress/202111290609031.png" alt="202111290609031"></p><p>执行爬虫代码</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 指定爬虫的配置文件</span>\n./docsearch run D:/Github/q10viking.github.io/docs/.vuepress/config.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/vuepress/202111290613633.png" alt="202111290613633"></p>',12),S={href:"https://www.algolia.com/apps/20P1NJDB7B/indices",target:"_blank",rel:"noopener noreferrer"},T=(0,e.Fv)('<p><img src="/images/vuepress/202111290412851.png" alt="202111290412851"></p><h2 id="博客配置docsearch插件" tabindex="-1"><a class="header-anchor" href="#博客配置docsearch插件" aria-hidden="true">#</a> 博客配置docsearch插件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 下载插件</span>\n<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-docsearch@next\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>注意官网推荐的版本，看看自己下载的版本是不是符合，因为如果使用的镜像源的话，下载的版本版本有可能落后，我此时安装docsearch插件的时候，淘宝的npm源是2.0.0-beta.26</p><p><img src="/images/vuepress/202111290524749.png" alt="202111290524749"></p><p>config.js文件中配置插件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t<span class="token punctuation">[</span>\n      <span class="token string">&#39;@vuepress/docsearch&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// alogolia docsearch</span>\n      <span class="token punctuation">{</span>\n        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;20P1NJDB7B&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// Add your own Application ID</span>\n        <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;25cd701e07d0762388df4474cbf8c05d&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Set it to your own *search* API key</span>\n        <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="预览效果" tabindex="-1"><a class="header-anchor" href="#预览效果" aria-hidden="true">#</a> 预览效果😸</h2><p><img src="/images/vuepress/202111290536972.png" alt="202111290536972"></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',10),R={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docsearch.algolia.com/docs/legacy/run-your-own/#set-up-your-environment",target:"_blank",rel:"noopener noreferrer"},O={},K=(0,a(66262).A)(O,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.eW)("下载python"),(0,e.Lk)("a",t,[(0,e.eW)("Python Release Python 3.6.6 | Python.org"),(0,e.bF)(a)])]),r,l,o,c,(0,e.Lk)("p",null,[(0,e.eW)("参考"),(0,e.Lk)("a",i,[(0,e.eW)("Run your own | DocSearch by Algolia"),(0,e.bF)(a)])]),u,(0,e.Lk)("p",null,[(0,e.eW)("在 "),(0,e.Lk)("a",d,[(0,e.eW)("algolia"),(0,e.bF)(a)]),(0,e.eW)(" 使用github账号注册的上的dashboad上创建一个应用")]),b,(0,e.Lk)("p",null,[(0,e.eW)("创建一个新的api key,其中需要有相应的权限，根据官网 "),(0,e.Lk)("a",h,[(0,e.eW)("Run your own | DocSearch by Algolia"),(0,e.bF)(a)])]),(0,e.Lk)("div",g,[k,(0,e.Lk)("ul",null,[m,(0,e.Lk)("li",null,[v,(0,e.eW)(" set to your API Key. Make sure to use an API key with "),y,(0,e.eW)(" access to your index. It needs "),(0,e.Lk)("a",f,[(0,e.eW)("the ACL "),q,(0,e.eW)(", "),L,(0,e.eW)(" and "),x,(0,e.bF)(a)]),(0,e.eW)(".")])])]),w,(0,e.Lk)("p",null,[(0,e.Lk)("a",_,[(0,e.eW)("Pipenv & Virtual Environments 官网"),(0,e.bF)(a)])]),W,(0,e.Lk)("p",null,[(0,e.eW)("找到对应浏览器的版本下载驱动 "),(0,e.Lk)("a",P,[(0,e.eW)("ChromeDriver - WebDriver for Chrome - Downloads (chromium.org)"),(0,e.bF)(a)])]),A,(0,e.Lk)("div",I,[F,(0,e.Lk)("p",null,[(0,e.eW)("用于爬虫程序使用,爬取 "),(0,e.Lk)("a",j,[(0,e.eW)("https://q10viking.github.io)"),(0,e.bF)(a)])]),D]),(0,e.Lk)("p",null,[(0,e.eW)("复制官网"),(0,e.Lk)("a",C,[(0,e.eW)("docsearch | VuePress (vuejs.org)"),(0,e.bF)(a)]),(0,e.eW)("的爬虫的配置文件，你需要修改的地方：")]),E,(0,e.Lk)("p",null,[(0,e.eW)("在"),(0,e.Lk)("a",S,[(0,e.eW)("Indices | Algolia"),(0,e.bF)(a)]),(0,e.eW)("查看爬取的结果")]),T,(0,e.Lk)("p",null,[(0,e.Lk)("a",R,[(0,e.eW)("aloglia 官网"),(0,e.bF)(a)]),(0,e.eW)(" ⭐")]),(0,e.Lk)("p",null,[(0,e.Lk)("a",B,[(0,e.eW)("docSearch配置"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",N,[(0,e.eW)("Run your own | DocSearch by Algolia"),(0,e.bF)(a)])])],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);