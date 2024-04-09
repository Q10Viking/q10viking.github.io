"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[32436],{96309:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-ca399054",path:"/ElasticStack/19%20%E5%9C%B0%E5%9B%BE%E4%BD%8D%E7%BD%AE%E6%A3%80%E7%B4%A2.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/ElasticStack/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"geo point - 地理位置搜索和聚合分析",slug:"geo-point-地理位置搜索和聚合分析",children:[{level:3,title:"定义geo point mapping",slug:"定义geo-point-mapping",children:[]},{level:3,title:"录入数据",slug:"录入数据",children:[]}]},{level:2,title:"搜索指定区域范围内的数据",slug:"搜索指定区域范围内的数据",children:[{level:3,title:"搜索矩形范围内的数据",slug:"搜索矩形范围内的数据",children:[]}]},{level:2,title:"搜索多边形范围内的数据",slug:"搜索多边形范围内的数据",children:[]},{level:2,title:"搜索某地点附近的数据❤️",slug:"搜索某地点附近的数据❤️",children:[]},{level:2,title:"统计某位置附近区域内的数据",slug:"统计某位置附近区域内的数据",children:[]}],filePathRelative:"ElasticStack/19 地图位置检索.md"}},89794:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(20641).Fv)('<h2 id="geo-point-地理位置搜索和聚合分析" tabindex="-1"><a class="header-anchor" href="#geo-point-地理位置搜索和聚合分析" aria-hidden="true">#</a> geo point - 地理位置搜索和聚合分析</h2><p>ES支持地理位置的搜索和聚合分析，可实现在<strong>指定区域内搜索数据、搜索指定地点附近的数据</strong>、聚合分析指定地点附近的数据等操作</p><p>ES中如果使用地理位置搜索的话，<strong>必须提供一个特殊的字段类型。GEO - geo_point。地理位置的坐标点</strong></p><h3 id="定义geo-point-mapping" tabindex="-1"><a class="header-anchor" href="#定义geo-point-mapping" aria-hidden="true">#</a> 定义geo point mapping</h3><p>如果需要使用地址坐标，则<strong>需要定义一个指定的mapping类型</strong>。具体如下：</p><p>使用什么数据可以确定，地球上的一个具体的点？经纬度。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /hotel_app\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geo_point&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="录入数据" tabindex="-1"><a class="header-anchor" href="#录入数据" aria-hidden="true">#</a> 录入数据</h3><p>新增一个基于geo point类型的数据，可以使用多种方式。</p><p><strong>多种类型描述geo_point类型字段的时候，在搜索数据的时候，显示的格式和录入的格式是统一的。不影响搜索。任何数据描述的geo_point类型字段，都适用地理位置搜索。</strong></p><p>数据范围要求：纬度范围是-90~90之间，经度范围是-180~180之间。经纬度数据都是浮点数或数字串（数字组成的字符串），最大精度：小数点后7位。（常用小数点后6位即可。）</p><p>基于对象：latitude：纬度、longitude：经度。<strong>语义清晰，建议使用</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /hotel_app/_doc/1\n{\n  &quot;name&quot;: &quot;七天连锁酒店&quot;,\n  &quot;pin&quot;: {\n    &quot;lat&quot;: 40.12,\n    &quot;lon&quot;: -71.34\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>基于字符串：依次定义纬度、经度。不推荐使用</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /hotel_app/_doc/<span class="token number">2</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;维多利亚大酒店&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;40.99, -70.81&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>基于数组：依次定义经度、纬度。不推荐使用</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /hotel_app/_doc/<span class="token number">3</span>\n<span class="token punctuation">{</span>\n <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot; 红树林宾馆&quot;</span><span class="token punctuation">,</span>\n <span class="token property">&quot;pin&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">-73.81</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="搜索指定区域范围内的数据" tabindex="-1"><a class="header-anchor" href="#搜索指定区域范围内的数据" aria-hidden="true">#</a> 搜索指定区域范围内的数据</h2><p>矩形范围搜索：传入的top_left和bottom_right坐标点是有固定要求的。地图中以北作为top，南作为bottom，西作为left，东作为right。也就是top_left应该从西北向东南。Bottom_right应该从东南向西北。</p><p>Top_left的纬度应该大于bottom_right的纬度，top_left的经度应该小于bottom_right的经度。</p><p>多边形范围搜索：对传入的若干点的坐标顺序没有任何的要求。只要传入若干地理位置坐标点，即可形成多边形。</p><h3 id="搜索矩形范围内的数据" tabindex="-1"><a class="header-anchor" href="#搜索矩形范围内的数据" aria-hidden="true">#</a> 搜索矩形范围内的数据</h3><p>不会进行打分</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;geo_bounding_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;top_left&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">41.73</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-74.1</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;bottom_right&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40.01</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-70.12</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;constant_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;geo_bounding_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;top_left&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">-70</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">39</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;bottom_right&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">-75</span><span class="token punctuation">,</span>\n              <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">41</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>用传统的搜索方式，会进行打分</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;geo_bounding_box&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;top_left&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">41.73</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-74.1</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;bottom_right&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40.01</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-70.12</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><hr><h2 id="搜索多边形范围内的数据" tabindex="-1"><a class="header-anchor" href="#搜索多边形范围内的数据" aria-hidden="true">#</a> 搜索多边形范围内的数据</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;geo_polygon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;points&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40.73</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-74.1</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40.01</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-71.12</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">50.56</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-90.58</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="搜索某地点附近的数据❤️" tabindex="-1"><a class="header-anchor" href="#搜索某地点附近的数据❤️" aria-hidden="true">#</a> 搜索某地点附近的数据❤️</h2><blockquote><p><strong>这个搜索在项目中更加常用。类似附近搜索功能。</strong></p></blockquote><ol><li>Distance距离的单位，常用的有米（m）和千米（km）。</li><li><strong>建议使用filter来过滤geo_point数据</strong>。因为geo_point数据相关度评分计算比较耗时。使用query来搜索geo_point数据效率相对会慢一些。建议使用filter。</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;geo_distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200km&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-70</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="/images/elasticsearch/image-20211113063856507.png" alt=""></p><h2 id="统计某位置附近区域内的数据" tabindex="-1"><a class="header-anchor" href="#统计某位置附近区域内的数据" aria-hidden="true">#</a> 统计某位置附近区域内的数据</h2><ol><li>聚合统计分别距离某位置80英里，300英里，1000英里范围内的数据数量。</li><li>其中unit是距离单位，常用单位有：米（m），千米（km），英里（mi）</li><li>distance_type是统计算法：sloppy_arc默认算法、arc最高精度、plane最高效率</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /hotel_app/_doc/_search\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;agg_by_pin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;geo_distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;distance_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arc&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pin&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;lat&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;lon&quot;</span><span class="token operator">:</span> <span class="token number">-70</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;unit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mi&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;ranges&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">80</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">300</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">1000</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><img src="/images/elasticsearch/image-20211113064129636.png" alt=""></p>',39),t={},e=(0,a(66262).A)(t,[["render",function(n,s){return p}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);