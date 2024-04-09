"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[10859],{63685:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0658c6ef",path:"/Nginx/04%20nginx%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Nginx/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"nginx.conf配置文件",slug:"nginx-conf配置文件",children:[]},{level:2,title:"全局配置",slug:"全局配置",children:[]},{level:2,title:"events模块",slug:"events模块",children:[]},{level:2,title:"http模块配置",slug:"http模块配置",children:[{level:3,title:"include 引入外部配置❤️",slug:"include-引入外部配置❤️",children:[]},{level:3,title:"高效文件传输",slug:"高效文件传输",children:[]},{level:3,title:"请求超时时间",slug:"请求超时时间",children:[]},{level:3,title:"压缩",slug:"压缩",children:[]},{level:3,title:"server虚拟主机配置❤️",slug:"server虚拟主机配置❤️",children:[]}]}],filePathRelative:"Nginx/04 nginx配置文件.md"}},13633:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(20641);const p=(0,e.Lk)("h2",{id:"nginx-conf配置文件",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#nginx-conf配置文件","aria-hidden":"true"},"#"),(0,e.eW)(" nginx.conf配置文件")],-1),t={href:"https://www.processon.com/view/link/62f2a1ad5653bb1344cca1fa",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Fv)('<p><img src="/images/nginx/image-20220810020213337.png" alt="image-20220810024257850"></p><h2 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 指的linux中的用户，会涉及到nginx操作目录或文件的一些权限，默认为nobody</span>\n<span class="token comment"># 可以配置成user root  这样worker工作进程就有了root的权限</span>\nuser  nobody<span class="token punctuation">;</span>\nworker_processes  <span class="token number">2</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>默认是nobody</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep nginx</span>\nroot      <span class="token number">10003</span>      <span class="token number">1</span>  <span class="token number">0</span> Mar12 ?        00:00:00 nginx: master process ./nginx\nnobody    <span class="token number">10119</span>  <span class="token number">10003</span>  <span class="token number">0</span> 02:32 ?        00:00:00 nginx: worker process\nnobody    <span class="token number">10120</span>  <span class="token number">10003</span>  <span class="token number">0</span> 02:32 ?        00:00:00 nginx: worker process\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>修改配置文件后，我们再看看,配置成了root</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s reload  </span>\n<span class="token punctuation">[</span>root@localhost sbin<span class="token punctuation">]</span><span class="token comment"># ps -ef | grep nginx</span>\nroot      <span class="token number">10003</span>      <span class="token number">1</span>  <span class="token number">0</span> Mar12 ?        00:00:00 nginx: master process ./nginx\nroot      <span class="token number">10124</span>  <span class="token number">10003</span>  <span class="token number">0</span> 02:32 ?        00:00:00 nginx: worker process\nroot      <span class="token number">10125</span>  <span class="token number">10003</span>  <span class="token number">0</span> 02:32 ?        00:00:00 nginx: worker process\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="events模块" tabindex="-1"><a class="header-anchor" href="#events模块" aria-hidden="true">#</a> events模块</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>nginx的事件处理</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>events <span class="token punctuation">{</span>\n    <span class="token comment"># 默认的多路复用linux epoll</span>\n    use\tepoll<span class="token punctuation">;</span>\n    <span class="token comment"># 每个worker允许客户端最大连接数</span>\n    worker_connections  <span class="token number">10240</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="http模块配置" tabindex="-1"><a class="header-anchor" href="#http模块配置" aria-hidden="true">#</a> http模块配置</h2><h3 id="include-引入外部配置❤️" tabindex="-1"><a class="header-anchor" href="#include-引入外部配置❤️" aria-hidden="true">#</a> include 引入外部配置❤️</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>提高可读性，避免单个配置文件过大</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#引入mime类型的配置，mime.types文件与nginx.conf在同一个文件夹下（同路径）</span>\ninclude       mime.types<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="/images/nginx/image-20220810022820855.png" alt="image-20220810022820855"></p><h3 id="高效文件传输" tabindex="-1"><a class="header-anchor" href="#高效文件传输" aria-hidden="true">#</a> 高效文件传输</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>sendfile使用高效文件传输，提升传输性能。启用后才能使用tcp_nopush，是指当数据表累积一定大小后才发送，提高了效率</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sendfile        on<span class="token punctuation">;</span>\ntcp_nopush      on<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="请求超时时间" tabindex="-1"><a class="header-anchor" href="#请求超时时间" aria-hidden="true">#</a> 请求超时时间</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>keepalive_timeout设置客户端与服务端请求的超时时间，保证客户端多次请求的时候不会重复建立新的连接，节约资源损耗。</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#keepalive_timeout  0;</span>\nkeepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>\t<span class="token comment">#\t65s</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>gzip启用压缩，html/js/css压缩后传输会更快</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">gzip</span>  on<span class="token punctuation">;</span>\n<span class="token comment">#\t限制最小压缩，小于1字节文件不会被压缩</span>\ngzip_min_length <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token comment">#\t定义压缩级别（压缩比，文件越大，压缩越多，但是cpu使用也越多）</span>\ngzip_comp_level <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token comment">#\t定义压缩文件类型</span>\ngzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg  image/gif  image/png application/json<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="server虚拟主机配置❤️" tabindex="-1"><a class="header-anchor" href="#server虚拟主机配置❤️" aria-hidden="true">#</a> server虚拟主机配置❤️</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>可以配置多台虚拟主机：端口可以不同，端口相同，server_name可以不同</p></div><ol><li>listen 监听端口</li><li>**server_name 可以配置为localhost、ip地址、域名（一个服务器可以绑定多个域名）**⭐</li><li>location 请求路由映射，匹配拦截</li><li>**root 请求位置 (相对路径的话是以nginx的安装目录为当前目录)**⭐</li><li>index 首页设置⭐</li></ol><h4 id="实验案例❤️" tabindex="-1"><a class="header-anchor" href="#实验案例❤️" aria-hidden="true">#</a> 实验案例❤️</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>本次实现目的主要是测试root请求位置的地址以及server_name的作用</p></div><blockquote><p>我在/usr/webproject下分别放置了两个不同的前端页面。主要用于区分</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>\n    listen <span class="token number">8001</span><span class="token punctuation">;</span>\n    server_name q10viking.formwave.org<span class="token punctuation">;</span>\n    location / <span class="token punctuation">{</span>\n        root    /usr/webproject/formwave<span class="token punctuation">;</span>\n        index   index.html<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nserver <span class="token punctuation">{</span>\n    listen <span class="token number">8001</span><span class="token punctuation">;</span>\n    server_name q10viking.drinkwater.org<span class="token punctuation">;</span>\n    location / <span class="token punctuation">{</span>\n        root    /usr/webproject/drinkwater<span class="token punctuation">;</span>\n        index   index.html<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>当浏览器访问<code>http://q10viking.formwave.org:8001/</code>时出现表单</p><p><img src="/images/nginx/image-20220810033400193.png" alt="image-20220810033400193"></p><p>当浏览器访问<code>http://q10viking.drinkwater.org:8001/</code>出现喝水的页面</p><p><img src="/images/nginx/image-20220810033521336.png" alt="image-20220810033521336"></p><p>当以IP地址访问时<code>http://192.168.187.135:8001/</code>,出现的是表单</p><p><img src="/images/nginx/image-20220810033643644.png" alt="image-20220810033643644"></p><h4 id="server-name小结❤️" tabindex="-1"><a class="header-anchor" href="#server-name小结❤️" aria-hidden="true">#</a> server_name小结❤️</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>server_name 有匹配优先级</p></div><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>http://q10viking.drinkwater.org:8001/</td><td>表单</td></tr><tr><td>http://q10viking.drinkwater.org:8001/</td><td>喝水</td></tr><tr><td>http://192.168.187.135:8001/</td><td>表单</td></tr></tbody></table><h5 id="匹配优先级❤️" tabindex="-1"><a class="header-anchor" href="#匹配优先级❤️" aria-hidden="true">#</a> 匹配优先级❤️</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server_name与host匹配优先级如下：\n\n<span class="token number">1</span>、完全匹配\n\n<span class="token number">2</span>、通配符在前的，如*.test.com\n\n<span class="token number">3</span>、在后的，如www.test.*\n\n<span class="token number">4</span>、正则匹配，如~^<span class="token punctuation">\\</span>.www<span class="token punctuation">\\</span>.test<span class="token punctuation">\\</span>.com$\n\n如果都不匹配\n\n<span class="token number">1</span>、优先选择listen配置项后有default或default_server的\n\n<span class="token number">2</span>、找到匹配listen端口的第一个server块 ⭐\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',42),r={},i=(0,a(66262).A)(r,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("Progresson On"),(0,e.bF)(a)])]),l],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);