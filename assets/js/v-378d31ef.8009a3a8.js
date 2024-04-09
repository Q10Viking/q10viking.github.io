"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[48647],{38549:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-378d31ef",path:"/cloudnative/03%20Docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/cloudnative/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"搜索镜像",slug:"搜索镜像",children:[]},{level:2,title:"下载镜像",slug:"下载镜像",children:[]},{level:2,title:"列出镜像",slug:"列出镜像",children:[]},{level:2,title:"运行镜像",slug:"运行镜像",children:[{level:3,title:"新建并启动容器",slug:"新建并启动容器",children:[]},{level:3,title:"容器的网络模式",slug:"容器的网络模式",children:[]},{level:3,title:"运行nginx",slug:"运行nginx",children:[]}]},{level:2,title:"启动已停止的容器⭐",slug:"启动已停止的容器",children:[]},{level:2,title:"列出容器",slug:"列出容器",children:[]},{level:2,title:"查看容器所有信息",slug:"查看容器所有信息",children:[]},{level:2,title:"查看容器日志",slug:"查看容器日志",children:[]},{level:2,title:"查看容器里的进程",slug:"查看容器里的进程",children:[]},{level:2,title:"容器与宿主机相互复制文件",slug:"容器与宿主机相互复制文件",children:[]},{level:2,title:"进入容器⭐",slug:"进入容器",children:[]},{level:2,title:"容器内安装vim、ping、ifconfig等指令",slug:"容器内安装vim、ping、ifconfig等指令",children:[]},{level:2,title:"停止容器",slug:"停止容器",children:[{level:3,title:"强制停止容器",slug:"强制停止容器",children:[]}]},{level:2,title:"删除本地镜像",slug:"删除本地镜像",children:[]},{level:2,title:"删除容器",slug:"删除容器",children:[]}],filePathRelative:"cloudnative/03 Docker常用命令.md"}},6291:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(20641);const l={class:"custom-container tip"},p=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),c={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Lk)("p",null,"1️⃣ 镜像命令",-1),i=(0,e.Lk)("p",null,"2️⃣ 容器命令",-1),o=(0,e.Fv)('<h2 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像" aria-hidden="true">#</a> <strong>搜索镜像</strong></h2><p>可使用 docker search命令搜索存放在 Docker Hub中的镜像。执行该命令后， Docker就会在Docker Hub中搜索含有 java这个关键词的镜像仓库。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> search <span class="token function">java</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker search java</span>\nNAME                               DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\n<span class="token function">node</span>                               Node.js is a JavaScript-based platform <span class="token keyword">for</span> s…   <span class="token number">10852</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ntomcat                             Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">3193</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nopenjdk                            OpenJDK is an open-source implementation of …   <span class="token number">3058</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\n<span class="token function">java</span>                               DEPRECATED<span class="token punctuation">;</span> use <span class="token string">&quot;openjdk&quot;</span> <span class="token punctuation">(</span>or other JDK impl…   <span class="token number">1976</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nghost                              Ghost is a <span class="token function">free</span> and <span class="token function">open</span> <span class="token builtin class-name">source</span> blogging pla…   <span class="token number">1451</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ncouchdb                            CouchDB is a database that uses JSON <span class="token keyword">for</span> doc…   <span class="token number">451</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\njetty                              Jetty provides a Web server and javax.servle…   <span class="token number">379</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ngroovy                             Apache Groovy is a multi-faceted language fo…   <span class="token number">120</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nlwieske/java-8                     Oracle Java <span class="token number">8</span> Container - Full + Slim - Base…   <span class="token number">50</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nnimmis/java-centos                 This is <span class="token function">docker</span> images of CentOS <span class="token number">7</span> with diffe…   <span class="token number">42</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nfabric8/java-jboss-openjdk8-jdk    Fabric8 Java Base Image <span class="token punctuation">(</span>JBoss, OpenJDK <span class="token number">8</span><span class="token punctuation">)</span>      <span class="token number">29</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ntimbru31/java-node                 OpenJDK JRE or JDK <span class="token punctuation">(</span><span class="token number">8</span> or <span class="token number">11</span><span class="token punctuation">)</span> with Node.js <span class="token number">12</span>…   <span class="token number">19</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ncloudbees/java-build-tools         Docker image with commonly used tools to bui…   <span class="token number">16</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nfabric8/java-centos-openjdk8-jdk   Fabric8 Java Base Image <span class="token punctuation">(</span>CentOS, OpenJDK <span class="token number">8</span>, …   <span class="token number">14</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nfrekele/java                       <span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">--name</span> <span class="token function">java</span> frekele/java        <span class="token number">12</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nblacklabelops/java                 Java Base Images.                               <span class="token number">8</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nfabric8/java-centos-openjdk8-jre   Fabric8 Java Base Image <span class="token punctuation">(</span>CentOS, OpenJDK <span class="token number">8</span>, …   <span class="token number">4</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nrightctrl/java                     Oracle Java                                     <span class="token number">3</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ncfje/java-test-applications        Java Test Applications CI Image                 <span class="token number">2</span>\njelastic/javaengine                An image of the Java Engine server maintaine…   <span class="token number">1</span>\nbuildo/java8-wkhtmltopdf           Java <span class="token number">8</span> + wkhtmltopdf                            <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\ncfje/java-buildpack                Java Buildpack CI Image                         <span class="token number">1</span>\ncfje/java-resource                 Java Concourse Resource                         <span class="token number">1</span>\nthingswise/java-docker             Java + dcd                                      <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\nadorsys/java                       Java Runtime Image                              <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></details><p>以上列表包含五列，含义如下：</p><ul><li><p>NAME:镜像仓库名称。</p></li><li><p>DESCRIPTION:镜像仓库描述。</p></li><li><p>STARS：镜像仓库收藏数，表示该镜像仓库的受欢迎程度，类似于 GitHub的 stars0</p></li><li><p>OFFICAL:表示是否为官方仓库，该列标记为[0K]的镜像均由各软件的官方项目组创建和维护。</p></li><li><p>AUTOMATED：表示是否是自动构建的镜像仓库。</p></li></ul><h2 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h2><p>使用命令docker pull命令即可从 Docker Registry上下载镜像，执行该命令后，Docker会从 Docker Hub中的 java仓库下载最新版本的 Java镜像。如果要下载指定版本则在java后面加冒号指定版本，例如：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull java:8\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker pull java:8</span>\n<span class="token number">8</span>: Pulling from library/java\n5040bd298390: Pull complete\nfce5728aad85: Pull complete\n76610ec20bf5: Pull complete\n60170fec2151: Pull complete\ne98f73de8f0d: Pull complete\n11f7af24ed9c: Pull complete\n49e2d6393f32: Pull complete\nbb9cdec9c7f3: Pull complete\nDigest: sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d1815a66b7f8c0e9d\nStatus: Downloaded newer image <span class="token keyword">for</span> java:8\ndocker.io/library/java:8\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></details><p>不指定版本默认会下载latest版本</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker pull nginx</span>\nUsing default tag: latest\nlatest: Pulling from library/nginx\ne5ae68f74026: Pull complete\n21e0df283cd6: Pull complete\ned835de16acd: Pull complete\n881ff011f1c9: Pull complete\n77700c52c969: Pull complete\n44be98c0fab6: Pull complete\nDigest: sha256:9522864dd661dcadfd9958f9e0de192a1fdda2c162a35668ab6ac42b465f0603\nStatus: Downloaded newer image <span class="token keyword">for</span> nginx:latest\ndocker.io/library/nginx:latest\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h2 id="列出镜像" tabindex="-1"><a class="header-anchor" href="#列出镜像" aria-hidden="true">#</a> <strong>列出镜像</strong></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>列出已下载的镜像</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> images\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker images</span>\nREPOSITORY   TAG       IMAGE ID       CREATED       SIZE\nnginx        latest    f652ca386ed1   <span class="token number">12</span> days ago   141MB\n<span class="token function">java</span>         <span class="token number">8</span>         d23bdf5b1b1b   <span class="token number">4</span> years ago   643MB\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><h2 id="运行镜像" tabindex="-1"><a class="header-anchor" href="#运行镜像" aria-hidden="true">#</a> 运行镜像</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>需要注意的是，使用 docker run命令创建容器时，会先检查本地是否存在指定镜像。如果本地不存在该名称的镜像， Docker就会自动从 Docker Hub下载镜像并启动一个 Docker容器</p></div><h3 id="新建并启动容器" tabindex="-1"><a class="header-anchor" href="#新建并启动容器" aria-hidden="true">#</a> 新建并启动容器</h3><p>使用以下docker run命令即可新建并启动一个容器，该命令是最常用的命令，它有很多选项，下面将列举一些常用的选项。</p><ul><li><p>-d选项：表示后台运行</p></li><li><p>-P选项：随机端口映射</p></li><li><p>-p选项：指定端口映射，有以下四种格式。</p><ul><li><p>-- ip:hostPort:containerPort</p></li><li><p>-- ip::containerPort</p></li><li><p>-- hostPort:containerPort</p></li><li><p>-- containerPort</p></li></ul></li></ul><h3 id="容器的网络模式" tabindex="-1"><a class="header-anchor" href="#容器的网络模式" aria-hidden="true">#</a> 容器的网络模式</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>--net选项：指定网络模式，该选项有以下可选参数：</p><p>​ --net=bridge:<strong>默认选项</strong>，表示连接到默认的网桥。</p><p>​ --net=host:容器使用宿主机的网络。</p><p>​ --net=container:NAME-or-ID：告诉 Docker让新建的容器使用已有容器的网络配置。</p><p>​ --net=none：不配置该容器的网络，用户可自定义网络配置。</p></div><h3 id="运行nginx" tabindex="-1"><a class="header-anchor" href="#运行nginx" aria-hidden="true">#</a> 运行nginx</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>这样就能启动一个 Nginx容器。在本例中，为 docker run添加了两个参数，含义如下：</p><p>-d 后台运行</p><p>-p 宿主机端口:容器端口 #开放容器端口到宿主机端口</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">91</span>:80 nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>http://192.168.187.132:91/</p><p><img src="/images/cloudnative/202112151838311.jpg" alt="202112151838311"></p><h2 id="启动已停止的容器" tabindex="-1"><a class="header-anchor" href="#启动已停止的容器" aria-hidden="true">#</a> 启动已停止的容器⭐</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>使用docker run命令，即可<strong>新建</strong>并启动一个容器。对于已停止的容器，可使用 docker start命令来<strong>启动</strong></p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> start f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="列出容器" tabindex="-1"><a class="header-anchor" href="#列出容器" aria-hidden="true">#</a> <strong>列出容器</strong></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>列出<strong>运行中</strong>的容器，其中可以获取到容器的ID(CONTAINER ID)</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost docker<span class="token punctuation">]</span><span class="token comment"># docker ps</span>\nCONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                NAMES\n13bc65da0321   nginx     <span class="token string">&quot;/docker-entrypoint.…&quot;</span>   <span class="token number">12</span> minutes ago   Up <span class="token number">12</span> minutes   <span class="token number">0.0</span>.0.0:91-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp   boring_kowalevski\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><p>如需列出所有容器（包括已停止的容器），可使用-a参数。该列表包含了7列，含义如下:</p><ul><li>CONTAINER_ID：表示容器 ID。</li><li>IMAGE:表示镜像名称。</li><li>COMMAND：表示启动容器时运行的命令。</li><li>CREATED：表示容器的创建时间。</li><li>STATUS：表示容器运行的状态。UP表示运行中， Exited表示已停止。</li><li>PORTS:表示容器对外的端口号。</li><li>NAMES:表示容器名称。该名称默认由 Docker自动生成，也可使用 docker run命令的--name选项自行指定。</li></ul><h2 id="查看容器所有信息" tabindex="-1"><a class="header-anchor" href="#查看容器所有信息" aria-hidden="true">#</a> 查看容器所有信息</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> inspect f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="查看容器日志" tabindex="-1"><a class="header-anchor" href="#查看容器日志" aria-hidden="true">#</a> <strong>查看容器日志</strong></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container logs f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="查看容器里的进程" tabindex="-1"><a class="header-anchor" href="#查看容器里的进程" aria-hidden="true">#</a> <strong>查看容器里的进程</strong></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="容器与宿主机相互复制文件" tabindex="-1"><a class="header-anchor" href="#容器与宿主机相互复制文件" aria-hidden="true">#</a> <strong>容器与宿主机相互复制文件</strong></h2><ul><li><p>从容器里面拷文件到宿主机</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker cp 容器id:要拷贝的文件在容器里面的路径  宿主机的相应路径 \n如：docker cp 7aa5dc458f9d:/etc/nginx/nginx.conf /mydata/nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>从宿主机拷文件到容器里面：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker cp 要拷贝的宿主机文件路径 容器id:要拷贝到容器里面对应的路径\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器⭐</h2><p>使用docker exec命令用于进入一个正在运行的docker容器。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> f0b1c8ab3633 /bin/bash  <span class="token punctuation">(</span>有的容器需要把 /bin/bash 换成 <span class="token function">sh</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="容器内安装vim、ping、ifconfig等指令" tabindex="-1"><a class="header-anchor" href="#容器内安装vim、ping、ifconfig等指令" aria-hidden="true">#</a> 容器内安装vim、ping、ifconfig等指令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update\n<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">vim</span>           <span class="token comment">#安装vim</span>\n<span class="token function">apt-get</span> <span class="token function">install</span> iputils-ping  <span class="token comment">#安装ping</span>\n<span class="token function">apt-get</span> <span class="token function">install</span> net-tools     <span class="token comment">#安装ifconfig </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> <strong>停止容器</strong></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># CONTAINER ID 其中f0b1c8ab3633是容器 ID,当然也可使用 docker stop容器名称来停止指定容器</span>\n<span class="token function">docker</span> stop f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="强制停止容器" tabindex="-1"><a class="header-anchor" href="#强制停止容器" aria-hidden="true">#</a> <strong>强制停止容器</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 可使用 docker kill命令发送 SIGKILL信号来强制停止容器</span>\n<span class="token function">docker</span> <span class="token function">kill</span> f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="删除本地镜像" tabindex="-1"><a class="header-anchor" href="#删除本地镜像" aria-hidden="true">#</a> <strong>删除本地镜像</strong></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>删除指定镜像，强制删除加 -f</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token function">java</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除所有镜像</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> <strong>删除容器</strong></h2><p>删除指定容器</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># CONTAINER ID</span>\n<span class="token function">docker</span> <span class="token function">rm</span> f0b1c8ab3633\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>该命令只能删除<strong>已停止</strong>的容器，如需删除正在运行的容器，可使用-f参数</p><p>强制删除所有容器</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',66),r={},u=(0,a(66262).A)(r,[["render",function(n,s){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",l,[p,(0,e.Lk)("p",null,[(0,e.Lk)("a",c,[(0,e.eW)("docker | Docker Documentation 命令"),(0,e.bF)(a)])]),t,i]),o],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);