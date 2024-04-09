"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[5190],{91483:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-d22df758",path:"/springmvc/01%20SpringMVC%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/springmvc/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"SpringMVC执行过程",slug:"springmvc执行过程",children:[]}],filePathRelative:"springmvc/01 SpringMVC执行过程.md"}},11983:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(20641).Fv)('<h2 id="springmvc执行过程" tabindex="-1"><a class="header-anchor" href="#springmvc执行过程" aria-hidden="true">#</a> SpringMVC执行过程</h2><ul><li>DispatcherServlet： 前端调度器 ， 负责将请求拦截下来分发到各控制器方法中</li><li>负责根据请求的URL和配置@RequestMapping映射去匹配， 匹配到会返回Handler（具体控制器的方法）</li><li>负责调用Handler-具体的方法- 返回视图的名字 Handler将它封装到ModelAndView(封装视图名，request域的数据）</li><li>根据ModelAndView里面的视图名地址去找到具体的jsp封装在View对象中</li><li>进行视图渲染（将jsp转换成html内容 --这是Servlet容器的事情了） 最终response到的客户端</li></ul><p><img src="/images/springmvc/460" alt="img"></p><ol><li><p>用户发送请求至前端控制器DispatcherServlet</p></li><li><p>DispatcherServlet收到请求调用处理器映射器HandlerMapping。</p></li><li><ol><li>处理器映射器根据请求url找到具体的处理器，生成处理器执行链HandlerExecutionChain(包括处理器对象和处理器拦截器)一并返回给DispatcherServlet。</li></ol></li><li><p>DispatcherServlet根据处理器Handler获取处理器适配器HandlerAdapter,执行HandlerAdapter处理一系列的操作，如：参数封装，数据格式转换，数据验证等操作</p></li><li><p>执行处理器Handler(Controller，也叫页面控制器)。</p></li><li><ol><li>Handler执行完成返回ModelAndView</li><li>HandlerAdapter将Handler执行结果ModelAndView返回到DispatcherServlet</li></ol></li><li><p>DispatcherServlet将ModelAndView传给ViewReslover视图解析器</p></li><li><ol><li>ViewReslover解析后返回具体View</li></ol></li><li><p>DispatcherServlet对View进行渲染视图（即将模型数据model填充至视图中）。</p></li><li><p>DispatcherServlet响应用户。</p></li></ol><blockquote><p><strong>整个调用过程其实都在DispatcherServlet#doDispatch中体现了</strong></p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n   \n   <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      \n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n          <span class="token comment">// 文件上传相关</span>\n         processedRequest <span class="token operator">=</span> <span class="token function">checkMultipart</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         multipartRequestParsed <span class="token operator">=</span> <span class="token punctuation">(</span>processedRequest <span class="token operator">!=</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         \n        <span class="token comment">// DispatcherServlet收到请求调用处理器映射器HandlerMapping。</span>\n        <span class="token comment">// 处理器映射器根据请求url找到具体的处理器，生成处理器执行链HandlerExecutionChain(包括处理器对象和处理器拦截器)一并返回给DispatcherServlet。</span>\n         mappedHandler <span class="token operator">=</span> <span class="token function">getHandler</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>mappedHandler <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">noHandlerFound</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n\n        <span class="token comment">// 4.DispatcherServlet根据处理器Handler获取处理器适配器HandlerAdapter,</span>\n         <span class="token class-name">HandlerAdapter</span> ha <span class="token operator">=</span> <span class="token function">getHandlerAdapter</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n         <span class="token comment">// Process last-modified header, if supported by the handler.  HTTP缓存相关</span>\n         <span class="token class-name">String</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token keyword">boolean</span> isGet <span class="token operator">=</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>isGet <span class="token operator">||</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">HEAD</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">long</span> lastModified <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">getLastModified</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServletWebRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkNotModified</span><span class="token punctuation">(</span>lastModified<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isGet<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n               <span class="token keyword">return</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n         <span class="token punctuation">}</span>\n         <span class="token comment">// 前置拦截器</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mappedHandler<span class="token punctuation">.</span><span class="token function">applyPreHandle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 返回false就不进行后续处理了</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n\n         <span class="token comment">// 执行HandlerAdapter处理一系列的操作，如：参数封装，数据格式转换，数据验证等操作</span>\n         <span class="token comment">// 执行处理器Handler(Controller，也叫页面控制器)。</span>\n         <span class="token comment">// Handler执行完成返回ModelAndView</span>\n         <span class="token comment">// HandlerAdapter将Handler执行结果ModelAndView返回到DispatcherServlet</span>\n         mv <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>asyncManager<span class="token punctuation">.</span><span class="token function">isConcurrentHandlingStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n         <span class="token comment">// 如果没有视图，给你设置默认视图  json忽略</span>\n         <span class="token function">applyDefaultViewName</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token comment">//后置拦截器</span>\n         mappedHandler<span class="token punctuation">.</span><span class="token function">applyPostHandle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         dispatchException <span class="token operator">=</span> ex<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token comment">// As of 4.3, we&#39;re processing Errors thrown from handler methods as well,</span>\n         <span class="token comment">// making them available for @ExceptionHandler methods and other scenarios.</span>\n         dispatchException <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NestedServletException</span><span class="token punctuation">(</span><span class="token string">&quot;Handler dispatch failed&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// DispatcherServlet将ModelAndView传给ViewReslover视图解析器</span>\n      <span class="token comment">// ViewReslover解析后返回具体View</span>\n      <span class="token comment">// DispatcherServlet对View进行渲染视图（即将模型数据model填充至视图中）。</span>\n      <span class="token comment">// DispatcherServlet响应用户。</span>\n      <span class="token comment">// 最后执行拦截器的afterCompletion</span>\n      <span class="token function">processDispatchResult</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span> mv<span class="token punctuation">,</span> dispatchException<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">triggerAfterCompletion</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">triggerAfterCompletion</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span>\n            <span class="token keyword">new</span> <span class="token class-name">NestedServletException</span><span class="token punctuation">(</span><span class="token string">&quot;Handler processing failed&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   <span class="token keyword">finally</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>asyncManager<span class="token punctuation">.</span><span class="token function">isConcurrentHandlingStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token comment">// Instead of postHandle and afterCompletion</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>mappedHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            mappedHandler<span class="token punctuation">.</span><span class="token function">applyAfterConcurrentHandlingStarted</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">else</span> <span class="token punctuation">{</span>\n         <span class="token comment">// Clean up any resources used by a multipart request.</span>\n         <span class="token keyword">if</span> <span class="token punctuation">(</span>multipartRequestParsed<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">cleanupMultipart</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div>',6),e={},t=(0,a(66262).A)(e,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);