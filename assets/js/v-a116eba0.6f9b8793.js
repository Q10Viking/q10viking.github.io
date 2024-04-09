"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[21589],{69223:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-a116eba0",path:"/springsecurity/15%20JWT-%E6%95%B4%E5%90%88oauth2.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/springsecurity/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"jwt(Json web token)",slug:"jwt-json-web-token",children:[{level:3,title:"payload",slug:"payload",children:[]}]},{level:2,title:"JJWT",slug:"jjwt",children:[{level:3,title:"测试",slug:"测试",children:[]}]},{level:2,title:"token解析",slug:"token解析",children:[]},{level:2,title:"token过期校验",slug:"token过期校验",children:[]},{level:2,title:"Spring security oauth2整合jwt",slug:"spring-security-oauth2整合jwt",children:[{level:3,title:"依赖",slug:"依赖",children:[]}]},{level:2,title:"添加配置文件JwtTokenEnhancerConfig.java",slug:"添加配置文件jwttokenenhancerconfig-java",children:[]},{level:2,title:"测试",slug:"测试-1",children:[]}],filePathRelative:"springsecurity/15 JWT-整合oauth2.md"}},68583:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(20641);const p=(0,t.Fv)('<h2 id="jwt-json-web-token" tabindex="-1"><a class="header-anchor" href="#jwt-json-web-token" aria-hidden="true">#</a> jwt(Json web token)</h2><ul><li>OAuth 2.0是当前业界标准的授权协议，它的核心是若干个针对不同场景的令牌颁发和管理流程；</li><li>JWT是一种轻量级、自包含的令牌，可用于在微服务间安全地传递用户信息。</li></ul><h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> payload</h3><p>标准中注册的声明（建议但不强制使用）</p><ul><li><strong>iss</strong>: jwt签发者</li><li><strong>sub</strong>: jwt所面向的用户</li><li><strong>aud</strong>: 接收jwt的一方</li><li><strong>exp</strong>: jwt的过期时间，这个过期时间必须要大于签发时间</li><li><strong>nbf</strong>: 定义在什么时间之前，该jwt都是不可用的.</li><li><strong>iat</strong>: jwt的签发时间</li><li><strong>jti</strong>: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。</li></ul><h2 id="jjwt" tabindex="-1"><a class="header-anchor" href="#jjwt" aria-hidden="true">#</a> JJWT</h2><p>JJWT是一个提供端到端的JWT创建和验证的Java库</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--JWT依赖--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.jsonwebtoken<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jjwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.9.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><blockquote><p>能够生成token,并能解析token</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtdemoApplicationTests</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SECRETKEY</span> <span class="token operator">=</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">JwtBuilder</span> jwtBuilder <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token comment">//声明的标识{&quot;jti&quot;:&quot;666&quot;}</span>\n                <span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">)</span>\n                <span class="token comment">//主体，用户{&quot;sub&quot;:&quot;hzz&quot;}</span>\n                <span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">&quot;hzz&quot;</span><span class="token punctuation">)</span>\n                <span class="token comment">//创建日期{&quot;ita&quot;:&quot;xxxxxx&quot;}</span>\n                <span class="token punctuation">.</span><span class="token function">setIssuedAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token comment">//设置过期时间   1分钟</span>\n                <span class="token punctuation">.</span><span class="token function">setExpiration</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token comment">//直接传入map</span>\n                <span class="token comment">// .addClaims(map)</span>\n                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;roles&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token string">&quot;logo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xxx.jpg&quot;</span><span class="token punctuation">)</span>\n                <span class="token comment">//签名手段，参数1：算法，参数2：盐</span>\n                <span class="token punctuation">.</span><span class="token function">signWith</span><span class="token punctuation">(</span><span class="token class-name">SignatureAlgorithm</span><span class="token punctuation">.</span><span class="token constant">HS256</span><span class="token punctuation">,</span> <span class="token constant">SECRETKEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">String</span> token <span class="token operator">=</span> jwtBuilder<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//三部分的base64解密</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> split <span class="token operator">=</span> token<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Base64Codec</span><span class="token punctuation">.</span><span class="token constant">BASE64</span><span class="token punctuation">.</span><span class="token function">decodeToString</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Base64Codec</span><span class="token punctuation">.</span><span class="token constant">BASE64</span><span class="token punctuation">.</span><span class="token function">decodeToString</span><span class="token punctuation">(</span>split<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//无法解密</span>\n<span class="token comment">//        System.out.println(Base64Codec.BASE64.decodeToString(split[2]));</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjYiLCJzdWIiOiJoenoiLCJpYXQiOjE2Nzg4NTI0MzYsImV4cCI6MTY3ODg1MjQ5Niwicm9sZXMiOiJhZG1pbiIsImxvZ28iOiJ4eHguanBnIn0.LmGgOqi71YyhekY9pgbN1S3xCoeTNAI5jX3J0lwfXG8\n * =========\n * <span class="token punctuation">{</span>&quot;alg&quot;:&quot;HS256&quot;<span class="token punctuation">}</span>\n * <span class="token punctuation">{</span>&quot;jti&quot;:&quot;666&quot;,&quot;sub&quot;:&quot;hzz&quot;,&quot;iat&quot;:1678852436,&quot;exp&quot;:1678852496,&quot;roles&quot;:&quot;admin&quot;,&quot;logo&quot;:&quot;xxx.jpg\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="token解析" tabindex="-1"><a class="header-anchor" href="#token解析" aria-hidden="true">#</a> token解析</h2><p>在web应用中由服务端创建了token然后发给客户端，客户端在下次向服务端发送请求时需要携带这个token（这就好像是拿着一张门票一样），那服务端接到这个token应该解析出token中的信息（例如用户id）,根据这些信息查询数据库返回相应的结果。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testParseToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NjYiLCJzdWIiOiJoenoiLCJpYXQiOjE2Nzg4NjMxNzQsImV4cCI6MTY3ODg2MzIzNCwicm9sZXMiOiJhZG1pbiIsImxvZ28iOiJ4eHguanBnIn0.vgpt0JT9R3cioTCH5bjRrhJgOff28kKooChZrRKLGOo&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">Claims</span> claims <span class="token operator">=</span> <span class="token class-name">Jwts</span><span class="token punctuation">.</span><span class="token function">parser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token constant">SECRETKEY</span><span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">parseClaimsJws</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>\n                <span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span><span class="token operator">+</span>claims<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;subject:&quot;</span><span class="token operator">+</span>claims<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;issuedAt:&quot;</span><span class="token operator">+</span>claims<span class="token punctuation">.</span><span class="token function">getIssuedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">DateFormat</span> sf <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;签发时间:&quot;</span><span class="token operator">+</span>sf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">getIssuedAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;过期时间:&quot;</span><span class="token operator">+</span>sf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>claims<span class="token punctuation">.</span><span class="token function">getExpiration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间:&quot;</span><span class="token operator">+</span>sf<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;roles:&quot;</span><span class="token operator">+</span>claims<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;roles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;logo:&quot;</span><span class="token operator">+</span>claims<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;logo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token doc-comment comment">/**\n     * id:666\n     * subject:hzz\n     * issuedAt:Wed Mar 15 14:52:54 GMT+08:00 2023\n     * 签发时间:2023-03-15 14:52:54\n     * 过期时间:2023-03-15 14:53:54\n     * 当前时间:2023-03-15 14:53:37\n     * roles:admin\n     * logo:xxx.jpg\n     */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="token过期校验" tabindex="-1"><a class="header-anchor" href="#token过期校验" aria-hidden="true">#</a> token过期校验</h2><p>不希望签发的token是永久生效的，所以我们可以为token添加一个过期时间。原因：从服务器发出的token，服务器自己并不做记录，就存在一个弊端：服务端无法主动控制某个token的立刻失效。</p><p>当未过期时可以正常读取，当过期时会引发io.jsonwebtoken.ExpiredJwtException异常</p><p><img src="/images/springsecurity/image-20230315145914569.png" alt="image-20230315145914569"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>io.jsonwebtoken.ExpiredJwtException: JWT expired at <span class="token number">2023</span>-03-15T14:53:54Z. Current time: <span class="token number">2023</span>-03-15T14:57:21Z, a difference of <span class="token number">207417</span> milliseconds.  Allowed clock skew: <span class="token number">0</span> milliseconds.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="spring-security-oauth2整合jwt" tabindex="-1"><a class="header-anchor" href="#spring-security-oauth2整合jwt" aria-hidden="true">#</a> Spring security oauth2整合jwt</h2>',20),e={href:"https://github.com/Q10Viking/springcloudalibaba/tree/main/jwt/jwt-basic",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Fv)('<h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.security<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-security-jwt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.9.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="添加配置文件jwttokenenhancerconfig-java" tabindex="-1"><a class="header-anchor" href="#添加配置文件jwttokenenhancerconfig-java" aria-hidden="true">#</a> 添加配置文件JwtTokenEnhancerConfig.java</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtTokenEnhancerConfig</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">TokenStore</span> <span class="token function">jwtTokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JwtTokenStore</span><span class="token punctuation">(</span><span class="token function">jwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">JwtAccessTokenConverter</span> <span class="token function">jwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">JwtAccessTokenConverter</span> accessTokenConverter <span class="token operator">=</span> <span class="token keyword">new</span>\n                <span class="token class-name">JwtAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//配置JWT使用的秘钥</span>\n        accessTokenConverter<span class="token punctuation">.</span><span class="token function">setSigningKey</span><span class="token punctuation">(</span><span class="token string">&quot;123123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> accessTokenConverter<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在授权服务器配置中指定令牌的存储策略为JWT</p><p><img src="/images/springsecurity/56876" alt="https://note.youdao.com/yws/public/resource/91c79470710860cce7e3c8dcf444d0e3/xmlnote/84FA56CB45DB41F39C0A0537C041D7B7/56876"></p><h2 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h2><p>使用密码模式获取授权token</p>',8),c={href:"http://localhost:8080/oauth/token?username=hzz&password=Root.123456&grant_type=password&client_id=client&client_secret=123123&scope=all",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Fv)('<p><img src="/images/springsecurity/image-20230315161615974.png" alt="image-20230315161615974"></p><p>发现获取到的令牌已经变成了JWT令牌，将access_token拿到https://jwt.io/ 网站上去解析下可以获得其中内容</p><p><img src="/images/springsecurity/image-20230315161710643.png" alt="image-20230315161710643"></p><p><strong>扩展JWT中的存储内容</strong></p><p>有时候我们需要扩展JWT中存储的内容，这里我们在JWT中扩展一个 key为enhance，value为enhance info 的数据。 继承TokenEnhancer实现一个JWT内容增强器</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JwtTokenEnhancer</span> <span class="token keyword">implements</span> <span class="token class-name">TokenEnhancer</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">OAuth2AccessToken</span> <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AccessToken</span> accessToken<span class="token punctuation">,</span> <span class="token class-name">OAuth2Authentication</span> authentication<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        info<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;enhancer&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;enhancer-info&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DefaultOAuth2AccessToken</span><span class="token punctuation">)</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAdditionalInformation</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> accessToken<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>向资源服务器请求资源</p><p><img src="/images/springsecurity/image-20230315162005375.png" alt="image-20230315162005375"></p><p><img src="/images/springsecurity/image-20230315162031737.png" alt="image-20230315162031737"></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n\t<span class="token property">&quot;enhancer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;enhancer-info&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hzz&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;all&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;exp&quot;</span><span class="token operator">:</span> <span class="token number">1678871304</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;authorities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;admin&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;jti&quot;</span><span class="token operator">:</span> <span class="token string">&quot;34cac767-4e3b-474e-a19a-bf7cfc9b82d7&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;client_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',10),u={},i=(0,a(66262).A)(u,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[p,(0,t.Lk)("p",null,[(0,t.Lk)("a",e,[(0,t.eW)("Source Code"),(0,t.bF)(a)])]),o,(0,t.Lk)("p",null,[(0,t.Lk)("a",c,[(0,t.eW)("localhost:8080/oauth/token?username=hzz&password=Root.123456&grant_type=password&client_id=client&client_secret=123123&scope=all"),(0,t.bF)(a)])]),l],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);