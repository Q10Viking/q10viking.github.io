"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[96301],{9791:(e,t,r)=>{r.r(t),r.d(t,{data:()=>a});const a={key:"v-02d07fbb",path:"/tomcat/02%20Servlet%E8%A7%84%E8%8C%83%E4%B8%8EServlet%E5%AE%B9%E5%99%A8.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/tomcat/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Servlet Container",slug:"servlet-container",children:[]},{level:2,title:"Http请求过程",slug:"http请求过程",children:[]},{level:2,title:"Servlet接口规范",slug:"servlet接口规范",children:[]},{level:2,title:"web.xml",slug:"web-xml",children:[]},{level:2,title:"GET vs POST",slug:"get-vs-post",children:[]}],filePathRelative:"tomcat/02 Servlet规范与Servlet容器.md"}},68617:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(20641);const l=(0,a.Fv)('<h2 id="servlet-container" tabindex="-1"><a class="header-anchor" href="#servlet-container" aria-hidden="true">#</a> Servlet Container</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Java Servlet technology provides dynamic, user-oriented content in web applications using a request-response programming model.</p><p>Servlets don’t have a main() method.They’re under the control of another Java application called a Container.</p><p>把 Servlet 简单理解为运行在服务端的 Java 小 程序，但是 <strong>Servlet 没有 main 方法，不能独立运行</strong>，因此必须把它部署到 Servlet 容器 中，由容器来实例化并调用 Servlet。</p><p>Tomcat就是一个“<strong>HTTP 服务器 + Servlet 容器</strong>”，我们也叫它们 Web 容器</p></div><p><img src="/images/tomcat/202112061010707.jpg" alt="202112061010707"></p><p><img src="/images/tomcat/202112061011290.jpg" alt="202112061011290"></p><p><img src="/images/tomcat/202112061026358.jpg" alt="202112061026358"></p><h2 id="http请求过程" tabindex="-1"><a class="header-anchor" href="#http请求过程" aria-hidden="true">#</a> Http请求过程</h2><p><img src="/images/tomcat/202112041331328.jpg" alt="202112041331328"></p><h2 id="servlet接口规范" tabindex="-1"><a class="header-anchor" href="#servlet接口规范" aria-hidden="true">#</a> Servlet接口规范</h2>',8),n={class:"custom-container tip"},o=(0,a.Lk)("p",{class:"custom-container-title"},"TIP",-1),s=(0,a.Lk)("p",null,[(0,a.Lk)("strong",null,"Apache Tomcat version 8.5 implements the Servlet 3.1")],-1),i={href:"https://download.oracle.com/otn-pub/jcp/servlet-3_1-fr-spec/servlet-3_1-final.pdf?AuthParam=1638599308_cd92a269e7bc665ec5ae0fcd9287053b",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Fv)('<p>HTTP 服 务器不直接跟业务类打交道，而是把请求交给 Servlet 容器去处理，Servlet 容器会将请求 转发到具体的 Servlet，如果这个 Servlet 还没创建，就加载并实例化这个 Servlet，然后调 用这个 Servlet 的接口方法。因此 <strong>Servlet 接口其实是Servlet 容器跟具体业务类之间的接口</strong></p><p>Servlet属于JavaEE的内容</p><p><img src="/images/tomcat/202112041337554.jpg" alt="202112041337554"></p><h2 id="web-xml" tabindex="-1"><a class="header-anchor" href="#web-xml" aria-hidden="true">#</a> web.xml</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Using the Deployment Descriptor to map URLs to servlets</p></div><p>When you deploy your servlet into your web Container, you’ll create a fairly simple XML document called the <strong>Deployment Descriptor (DD)</strong> to tell the Container how to run your servlets.</p><p>you’ll use the DD for more than just mapping names, you’ll use two XML elements to map URLs to servlets—one to map the client-known public URL name to your own internal name, and the other to map your own internal name to a fully-qualified class name.</p><h2 id="get-vs-post" tabindex="-1"><a class="header-anchor" href="#get-vs-post" aria-hidden="true">#</a> GET vs POST</h2><p><img src="/images/tomcat/202112061039060.jpg" alt="202112061039060"></p><p><img src="/images/tomcat/202112061040240.jpg" alt="202112061040240"></p>',10),c={},h=(0,r(66262).A)(c,[["render",function(e,t){const r=(0,a.g2)("OutboundLink");return(0,a.uX)(),(0,a.CE)(a.FK,null,[l,(0,a.Lk)("div",n,[o,s,(0,a.Lk)("p",null,[(0,a.Lk)("a",i,[(0,a.eW)("JAVA™ Servlet规范(oracle.com)"),(0,a.bF)(r)])])]),p],64)}]])},66262:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,a]of t)r[e]=a;return r}}}]);