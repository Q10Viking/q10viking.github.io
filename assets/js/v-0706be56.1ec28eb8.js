"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[76767],{22538:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-0706be56",path:"/Docker/04%20%E6%9E%84%E5%BB%BA%E5%BE%AE%E6%9C%8D%E5%8A%A1%E9%95%9C%E5%83%8F.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Docker/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Dockfile常用指令",slug:"dockfile常用指令",children:[]},{level:2,title:"CMD",slug:"cmd",children:[]},{level:2,title:"build",slug:"build",children:[]},{level:2,title:"构建node服务",slug:"构建node服务",children:[]},{level:2,title:"构建微服务镜像❤️",slug:"构建微服务镜像❤️",children:[]}],filePathRelative:"Docker/04 构建微服务镜像.md"}},96489:(s,n,a)=>{a.r(n),a.d(n,{default:()=>c});var e=a(20641);const t={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://linux.die.net/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Fv)('<h2 id="dockfile常用指令" tabindex="-1"><a class="header-anchor" href="#dockfile常用指令" aria-hidden="true">#</a> Dockfile常用指令</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件</li><li>CMD命令则是在容器启动后执行</li><li>一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令</li><li>ENTRYPINT</li></ul></div><table><thead><tr><th>命令</th><th>用途</th></tr></thead><tbody><tr><td>FROM</td><td>基础镜像文件</td></tr><tr><td>RUN</td><td>构建镜像阶段执行命令</td></tr><tr><td>ADD</td><td>添加文件，从src目录复制文件到容器的dest，其中 src可以是 Dockerfile所在目录的相对路径，也可以是一个 URL,还可以是一个压缩包</td></tr><tr><td>COPY</td><td>拷贝文件，和ADD命令类似，但不支持URL和压缩包</td></tr><tr><td>CMD</td><td>容器启动后执行命令</td></tr><tr><td>EXPOSE</td><td>声明容器在运行时对外提供的服务端口</td></tr><tr><td>WORKDIR</td><td>指定容器工作路径</td></tr><tr><td>ENV</td><td>指定环境变量</td></tr><tr><td>ENTRYPINT</td><td>容器入口， ENTRYPOINT和 CMD指令的目的一样，都是指定 Docker容器启动时执行的命令，可多次设置，但只有最后一个有效。</td></tr><tr><td>USER</td><td>该指令用于设置启动镜像时的用户或者 UID,写在该指令后的 RUN、 CMD以及 ENTRYPOINT指令都将使用该用户执行命令。</td></tr><tr><td>VOLUME</td><td>指定挂载点，该指令使容器中的一个目录具有持久化存储的功能，该目录可被容器本身使用，也可共享给其他容器。当容器中的应用有持久化数据的需求时可以在 Dockerfile中使用该指令。格式为： VOLUME[&quot;/data&quot;]。</td></tr></tbody></table><h2 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h2><blockquote><p>The main purpose of a CMD is to provide defaults for an executing container.</p></blockquote><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;src/index.js&quot;</span>]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># -t tag标签  . 代表当前目录下的Dockerfile</span>\n<span class="token function">docker</span> build <span class="token parameter variable">-t</span> jingmo-hello-docker:latest <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="构建node服务" tabindex="-1"><a class="header-anchor" href="#构建node服务" aria-hidden="true">#</a> 构建node服务</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># syntax=docker/dockerfile:1</span>\n<span class="token instruction"><span class="token keyword">FROM</span> node:12-alpine</span>\n<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache python2 g++ make</span>\n<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>\n<span class="token instruction"><span class="token keyword">COPY</span> . .</span>\n<span class="token instruction"><span class="token keyword">RUN</span> yarn install --production --network-timeout 1000000</span>\n<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;src/index.js&quot;</span>]</span>\n<span class="token instruction"><span class="token keyword">EXPOSE</span> 3000</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="构建微服务镜像❤️" tabindex="-1"><a class="header-anchor" href="#构建微服务镜像❤️" aria-hidden="true">#</a> 构建微服务镜像❤️</h2><ol><li><p>将jar包上传linux服务器<code>/home/q10viking/learndocker</code>目录，在jar包所在目录创建名为Dockerfile的文件</p></li><li><p>Dockerfile添加以下内容</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment"># 基于哪个镜像</span>\n<span class="token instruction"><span class="token keyword">From</span> java:8</span>\n<span class="token comment"># 复制文件到容器</span>\n<span class="token instruction"><span class="token keyword">ADD</span> microservice-eureka-server-0.0.1-SNAPSHOT.jar /app.jar</span>\n<span class="token comment"># 声明需要暴露的端口</span>\n<span class="token instruction"><span class="token keyword">EXPOSE</span> 8761</span>\n<span class="token comment"># 配置容器启动后执行的命令</span>\n<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> java <span class="token variable">${JAVA_OPTS}</span> -jar /app.jar</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="/images/Docker/image-20230423210442125.png" alt="image-20230423210442125"></p></li><li><p>使用docker build命令构建镜像</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#  格式： docker  build  -t  镜像名称:标签  Dockerfile的相对位置</span>\n<span class="token function">docker</span> build <span class="token parameter variable">-t</span> hzz-microservice-server:0.0.1 <span class="token builtin class-name">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>q10viking@LAPTOP-PJLAUUSP:~/learndocker$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span>  hzz-microservice-server:0.0.1 <span class="token builtin class-name">.</span>\n<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Building <span class="token number">13</span>.4s <span class="token punctuation">(</span><span class="token number">7</span>/7<span class="token punctuation">)</span> FINISHED\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build definition from Dockerfile                                                                                                   <span class="token number">1</span>.8s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring dockerfile: 284B                                                                                                                   <span class="token number">0</span>.0s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load .dockerignore                                                                                                                      <span class="token number">1</span>.5s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: 2B                                                                                                                        <span class="token number">0</span>.0s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load metadata <span class="token keyword">for</span> docker.io/library/java:8                                                                                              <span class="token number">0</span>.0s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build context                                                                                                                      <span class="token number">1</span>.8s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: <span class="token number">39</span>.94MB                                                                                                                   <span class="token number">0</span>.3s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>/2<span class="token punctuation">]</span> FROM docker.io/library/java:8                                                                                                                <span class="token number">6</span>.9s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span>/2<span class="token punctuation">]</span> ADD microservice-eureka-server-0.0.1-SNAPSHOT.jar /app.jar                                                                                   <span class="token number">2</span>.8s\n <span class="token operator">=</span><span class="token operator">&gt;</span> exporting to image                                                                                                                                 <span class="token number">1</span>.3s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> exporting layers                                                                                                                                <span class="token number">0</span>.7s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> writing image sha256:176bcabc7ced853b48bb6c2a98c0594cd0b69f86ffdf1cd7de98a2741ec83a01                                                           <span class="token number">0</span>.1s\n <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> naming to docker.io/library/hzz-microservice-server:0.0.1                                                                                       <span class="token number">0</span>.1s\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><p><img src="/images/Docker/image-20230423210915088.png" alt="image-20230423210915088"></p><ol start="4"><li><p>启动镜像，加-d可在后台启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8761</span>:8761 hzz-microservice-server:0.0.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>加上JVM参数：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># --cap-add=SYS_PTRACE 这个参数是让docker能支持在容器里能执行jdk自带类似jinfo，jmap这些命令，如果不需要在容器里执行这些命令可以不加</span>\n<span class="token function">docker</span> run <span class="token parameter variable">-e</span> <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&#39;-Xms1028M -Xmx1028M -Xmn512M -Xss512K -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M&#39;</span> --cap-add<span class="token operator">=</span>SYS_PTRACE <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8761</span>:8761 hzz-microservice-server:0.0.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><hr>',16),l={},c=(0,a(66262).A)(l,[["render",function(s,n){const a=(0,e.g2)("OutboundLink");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",t,[(0,e.eW)("Dockerfile reference | Docker Documentation"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",r,[(0,e.eW)("Linux命令大全(手册)"),(0,e.bF)(a)])]),(0,e.Lk)("p",null,[(0,e.Lk)("a",p,[(0,e.eW)("Linux Documentation (die.net)"),(0,e.bF)(a)])]),o],64)}]])},66262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);