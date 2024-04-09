"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[88684],{94587:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-78006bbc",path:"/spring/07%20%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%89%B9%E4%BE%8B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/spring/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"泛型注入",slug:"泛型注入",children:[{level:3,title:"泛型类型",slug:"泛型类型",children:[]},{level:3,title:"Spring中的泛型注入",slug:"spring中的泛型注入",children:[]}]},{level:2,title:"@Qualifier的使用",slug:"qualifier的使用",children:[]},{level:2,title:"@Resource",slug:"resource",children:[]}],filePathRelative:"spring/07 依赖注入特例.md"}},19190:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var p=a(20641);const t=(0,p.Fv)('<h2 id="泛型注入" tabindex="-1"><a class="header-anchor" href="#泛型注入" aria-hidden="true">#</a> 泛型注入</h2><h3 id="泛型类型" tabindex="-1"><a class="header-anchor" href="#泛型类型" aria-hidden="true">#</a> 泛型类型</h3><p>首先在Java反射中，有一个Type接口，表示类型，具体分类为：</p><ol><li>raw types：也就是普通Class</li><li>parameterized types：对应ParameterizedType接口，泛型类型</li><li>array types：对应GenericArrayType，泛型数组</li><li>type variables：对应TypeVariable接口，表示类型变量，也就是所定义的泛型，比如T、K</li><li>primitive types：基本类型，int、boolean</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TypeTest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">int</span> i<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">Integer</span> it<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> iarray<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">List</span> list<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> slist<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> tlist<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">T</span> t<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> tarray<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchFieldException</span> <span class="token punctuation">{</span>\n\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;it&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;iarray&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;slist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;tlist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">TypeTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;tarray&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Field</span> field<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isPrimitive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;是基本数据类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;不是基本数据类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getGenericType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">ParameterizedType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;是泛型类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;不是泛型类型&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;是普通数组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;不是普通数组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getGenericType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">GenericArrayType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;是泛型数组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;不是泛型数组&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getGenericType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">TypeVariable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;是泛型变量&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;不是泛型变量&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>输出</p><ul><li>泛型类型 <code>List&lt;String&gt; List&lt;T&gt;</code></li><li>泛型数组 <code>T[] tarray</code>;</li><li>泛型变量 <code>T t;</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>i是基本数据类型\ni不是泛型类型\ni不是普通数组\ni不是泛型数组\ni不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nit不是基本数据类型\nit不是泛型类型\nit不是普通数组\nit不是泛型数组\nit不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\niarray不是基本数据类型\niarray不是泛型类型\niarray是普通数组\niarray不是泛型数组\niarray不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nlist不是基本数据类型\nlist不是泛型类型\nlist不是普通数组\nlist不是泛型数组\nlist不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nslist不是基本数据类型\nslist是泛型类型\nslist不是普通数组\nslist不是泛型数组\nslist不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\ntlist不是基本数据类型\ntlist是泛型类型\ntlist不是普通数组\ntlist不是泛型数组\ntlist不是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\nt不是基本数据类型\nt不是泛型类型\nt不是普通数组\nt不是泛型数组\nt是泛型变量\n<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>\ntarray不是基本数据类型\ntarray不是泛型类型\ntarray是普通数组\ntarray是泛型数组\ntarray不是泛型变量\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="spring中的泛型注入" tabindex="-1"><a class="header-anchor" href="#spring中的泛型注入" aria-hidden="true">#</a> Spring中的泛型注入</h3><p>Spring中，但注入点是一个泛型时，也是会进行处理的，比如： ​</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">BaseService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderService</span><span class="token punctuation">,</span> <span class="token class-name">StockService</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">O</span><span class="token punctuation">,</span> <span class="token class-name">S</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token keyword">protected</span> <span class="token class-name">O</span> o<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token keyword">protected</span> <span class="token class-name">S</span> s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol><li>Spring扫描时发现UserService是一个Bean</li><li>那就取出注入点，也就是BaseService中的两个属性o、s</li><li>接下来需要按注入点类型进行注入，但是o和s都是泛型，所以Spring需要确定o和s的具体类型。</li><li>因为当前正在创建的是UserService的Bean，所以可以通过<code>userService.getClass().getGenericSuperclass().getTypeName()</code>获取到具体的泛型信息，比如<code>com.zhouyu.service.BaseService&lt;com.zhouyu.service.OrderService, com.zhouyu.service.StockService&gt;</code></li><li>然后再拿到UserService的父类BaseService的泛型变量：<code> for (TypeVariable&lt;? extends Class&lt;?&gt;&gt; typeParameter : userService.getClass().getSuperclass().getTypeParameters()) { System._out_.println(typeParameter.getName()); }</code></li><li>通过上面两段代码，就能知道，o对应的具体就是OrderService，s对应的具体类型就是StockService</li><li>然后再调用<code>oField.getGenericType()</code>就知道当前field使用的是哪个泛型，就能知道具体类型了</li></ol><h2 id="qualifier的使用" tabindex="-1"><a class="header-anchor" href="#qualifier的使用" aria-hidden="true">#</a> @Qualifier的使用</h2><blockquote><p>限定注入</p></blockquote><p>定义两个注解：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;random&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Random</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;roundRobin&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">RoundRobin</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>定义一个接口和两个实现类，表示负载均衡：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">LoadBalance</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@Random</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RandomStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">LoadBalance</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@RoundRobin</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RoundRobinStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">LoadBalance</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>使用：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span>  <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Autowired</span>\n    <span class="token annotation punctuation">@RoundRobin</span>\n    <span class="token keyword">private</span> <span class="token class-name">LoadBalance</span> loadBalance<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>loadBalance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="resource" tabindex="-1"><a class="header-anchor" href="#resource" aria-hidden="true">#</a> @Resource</h2><p>@Resource注解底层工作流程图：</p>',23),e={href:"https://www.processon.com/view/link/5f91275f07912906db381f6e",target:"_blank",rel:"noopener noreferrer"},c={},o=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,p.g2)("OutboundLink"),c=(0,p.g2)("common-progresson-snippet");return(0,p.uX)(),(0,p.CE)(p.FK,null,[t,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("Link"),(0,p.bF)(a)])]),(0,p.bF)(c,{src:"https://www.processon.com/view/link/5f91275f07912906db381f6e"})],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);