"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[70059],{23939:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-40b2713b",path:"/spring/11%20jdbc%20url%E8%BF%9E%E6%8E%A5.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"JDBC serverTimezone选择",slug:"jdbc-servertimezone选择",children:[]}],filePathRelative:"spring/11 jdbc url连接.md"}},57632:(n,e,a)=>{a.r(e),a.d(e,{default:()=>i});const s=(0,a(20641).Fv)('<h2 id="jdbc-servertimezone选择" tabindex="-1"><a class="header-anchor" href="#jdbc-servertimezone选择" aria-hidden="true">#</a> JDBC serverTimezone选择</h2><p>在mysql文档中可用的时区都在/usr/share/zoneinfo目录下，</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> /usr/share/zoneinfo/\n\n<span class="token punctuation">[</span>root@localhost zoneinfo<span class="token punctuation">]</span><span class="token comment"># ls /usr/share/zoneinfo/</span>\nAfrica      Atlantic   Chile    Eire     GB       GMT+0      Indian       Japan        Mexico   NZ-CHAT   posixrules  ROK        Universal  zone1970.tab\nAmerica     Australia  CST6CDT  EST      GB-Eire  Greenwich  Iran         Kwajalein    MST      Pacific   PRC         Singapore  US         zone.tab\nAntarctica  Brazil     Cuba     EST5EDT  GMT      Hongkong   iso3166.tab  leapseconds  MST7MDT  Poland    PST8PDT     Turkey     UTC        Zulu\nArctic      Canada     EET      Etc      GMT0     HST        Israel       Libya        Navajo   Portugal  right       tzdata.zi  WET\nAsia        CET        Egypt    Europe   GMT-0    Iceland    Jamaica      MET          NZ       posix     ROC         UCT        W-SU\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>选择一个Hongkong</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jdbc:mysql://192.168.187.135:3306/test?characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Hongkong\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),r={},i=(0,a(66262).A)(r,[["render",function(n,e){return s}]])},66262:(n,e)=>{e.A=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);