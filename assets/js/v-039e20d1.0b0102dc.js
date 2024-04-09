"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[98214],{43261:(e,n,t)=>{t.r(n),t.d(n,{data:()=>o});const o={key:"v-039e20d1",path:"/springboot/03%20springboot%E5%90%AF%E5%8A%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/springboot/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Springboot启动流程",slug:"springboot启动流程",children:[]},{level:2,title:"选择context",slug:"选择context",children:[]},{level:2,title:"创建webServer",slug:"创建webserver",children:[]}],filePathRelative:"springboot/03 springboot启动.md"}},40022:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var o=t(20641);const r=(0,o.Fv)('<h2 id="springboot启动流程" tabindex="-1"><a class="header-anchor" href="#springboot启动流程" aria-hidden="true">#</a> Springboot启动流程</h2><ol><li><p>加载一些监听器</p></li><li><p>发布启动事件</p></li><li><p>发布一个事件，通过监听器来加载全局配置文件</p></li><li><p>打印banner</p></li><li><p>创建容器Serlvet容器</p></li><li><p>spring容器启动</p></li><li><p>全局配置文件的加载</p></li></ol>',2),a={href:"https://www.processon.com/view/link/60d865e85653bb049a4b77ff",target:"_blank",rel:"noopener noreferrer"},i=(0,o.Fv)('<h2 id="选择context" tabindex="-1"><a class="header-anchor" href="#选择context" aria-hidden="true">#</a> 选择context</h2><blockquote><p>在springboot中已经在spring.factories中配置了创建相应context的factory</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Application Context Factories</span>\norg.springframework.boot.ApplicationContextFactory=\\\norg.springframework.boot.web.reactive.context.AnnotationConfigReactiveWebServerApplicationContext.Factory<span class="token punctuation">,</span>\\\norg.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext.Factory\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="/images/springboot/image-20230409101441490.png" alt="image-20230409101441490"></p><p>springboot在选择context的时候，主要是根据WebApplicationType来进行创建</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>WebApplicationType.NONE--<span class="token operator">&gt;</span> DefaultApplicationContextFactory--<span class="token operator">&gt;</span> AnnotationConfigApplicationContext\nWebApplicationType.SERVLET--<span class="token operator">&gt;</span>AnnotationConfigServletWebServerApplicationContext.Factory\nWebApplicationType.REACTIVE--<span class="token operator">&gt;</span>AnnotationConfigReactiveWebServerApplicationContext.Factory\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="创建webserver" tabindex="-1"><a class="header-anchor" href="#创建webserver" aria-hidden="true">#</a> 创建webServer</h2>',7),s={href:"https://www.processon.com/view/link/5feb409a07912910e48b61c0",target:"_blank",rel:"noopener noreferrer"},p={},l=(0,t(66262).A)(p,[["render",function(e,n){const t=(0,o.g2)("OutboundLink"),p=(0,o.g2)("common-progresson-snippet");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r,(0,o.Lk)("p",null,[(0,o.Lk)("a",a,[(0,o.eW)("Link"),(0,o.bF)(t)])]),(0,o.bF)(p,{src:"https://www.processon.com/view/link/60d865e85653bb049a4b77ff"}),i,(0,o.Lk)("p",null,[(0,o.Lk)("a",s,[(0,o.eW)("Link"),(0,o.bF)(t)])]),(0,o.bF)(p,{src:"https://www.processon.com/view/link/5feb409a07912910e48b61c0"})],64)}]])},66262:(e,n)=>{n.A=(e,n)=>{const t=e.__vccOpts||e;for(const[e,o]of n)t[e]=o;return t}}}]);