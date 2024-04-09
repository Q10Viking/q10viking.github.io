"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[77738],{25431:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-a78d3fc4",path:"/FileSystem/05%20ByteBuffer.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/FileSystem/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[{level:2,title:"Basic Usage",slug:"basic-usage",children:[]},{level:2,title:"Capacity, Position and Limit",slug:"capacity-position-and-limit",children:[{level:3,title:"Position",slug:"position",children:[]},{level:3,title:"Limit",slug:"limit",children:[]}]},{level:2,title:"wrapper",slug:"wrapper",children:[]},{level:2,title:"rewind",slug:"rewind",children:[]},{level:2,title:"flip",slug:"flip",children:[]}],filePathRelative:"FileSystem/05 ByteBuffer.md"}},85488:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(20641);const p=(0,t.Fv)('<h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>Using a <code>Buffer</code> to read and write data typically follows this little 4-step process</p><ol><li>Write data into the Buffer</li><li>Call <code>buffer.flip()</code></li><li>Read data out of the Buffer</li><li>Call <code>buffer.clear()</code> or <code>buffer.compact()</code></li></ol>',3),e=(0,t.Lk)("p",null,[(0,t.eW)("When you write data into a buffer, the buffer keeps track of how much data you have written. Once you need to read the data, you need to switch the buffer from writing mode into reading mode using the "),(0,t.Lk)("code",null,"flip()"),(0,t.eW)(" method call. In reading mode the buffer lets you read all the data written into the buffer.")],-1),o={href:"https://jenkov.com/tutorials/java-nio/buffers.html",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReadAndWriteByteChannel</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Path</span> readPath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;tmp\\\\chapter04\\\\small.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Path</span> writePath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;tmp\\\\chapter04\\\\small-channel.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">SeekableByteChannel</span> inChannel <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">newByteChannel</span><span class="token punctuation">(</span>readPath<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">SeekableByteChannel</span> outChannel <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">newByteChannel</span><span class="token punctuation">(</span>writePath<span class="token punctuation">,</span> <span class="token class-name">StandardOpenOption</span><span class="token punctuation">.</span><span class="token constant">CREATE</span><span class="token punctuation">,</span><span class="token class-name">StandardOpenOption</span><span class="token punctuation">.</span><span class="token constant">WRITE</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">BUFFER_CAPACITY</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n            <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token constant">BUFFER_CAPACITY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// 1. write data into Buffer</span>\n            <span class="token keyword">while</span><span class="token punctuation">(</span>inChannel<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token comment">// 2. Call flip</span>\n                byteBuffer<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// 3. Read data out of Buffer</span>\n                outChannel<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">// 4. Call buffer.clear() or buffer.compact()</span>\n                byteBuffer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="capacity-position-and-limit" tabindex="-1"><a class="header-anchor" href="#capacity-position-and-limit" aria-hidden="true">#</a> Capacity, Position and Limit</h2><p>position和limit代表的意思，取决于是读模式还是写模式</p><p><img src="/images/filesystem/image-20221009215315193.png" alt="image-20221009215315193"></p><h3 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> Position</h3><p>When you write data into the <code>Buffer</code>, you do so at a certain position. Initially the position is 0. When a byte, long etc. has been written into the <code>Buffer</code> the position is advanced to point to the next cell in the buffer to insert data into. Position can maximally become <code>capacity - 1</code>. 写到哪，算哪</p><p>When you read data from a <code>Buffer</code> you also do so from a given position. When you flip a <code>Buffer</code> from writing mode to reading mode, the position is reset back to 0. As you read data from the <code>Buffer</code> you do so from <code>position</code>, and <code>position</code> is advanced to next position to read. 也就是，读的时候，通过flip将position置为0。</p><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> Limit</h3><p>In write mode the limit of a <code>Buffer</code> is the limit of how much data you can write into the buffer. In write mode the limit is equal to the capacity of the <code>Buffer</code>.</p><p>When flipping the <code>Buffer</code> into read mode, limit means the limit of how much data you can read from the data. Therefore, when flipping a <code>Buffer</code> into read mode, limit is set to write position of the write mode. In other words, you can read as many bytes as were written (limit is set to the number of bytes written, which is marked by position). 在读模式的时候，通过flip，可以将limit设置到写的模式时的位置。</p><hr><h2 id="wrapper" tabindex="-1"><a class="header-anchor" href="#wrapper" aria-hidden="true">#</a> wrapper</h2><blockquote><p>wrapper method is used to wraps a byte array into a buffer</p></blockquote><p>重下面的例子来看，wrapper并没有改变position的位置。和初始化时的一样，都是最开始的写模式。只不过默认填充了数据而已。</p>',14),l={href:"https://github.com/Q10Viking/learncode/blob/main/filesystem/src/org/hzz/chapter05/ByteBufferWrapper.java",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteBufferWrapper</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ByteBuffer</span> defaultBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>defaultBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// position = 0; limit = 11</span>\n\n        <span class="token class-name">ByteBuffer</span> buffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">// wrap byte array</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// position = 0; limit = 11</span>\n        buffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 手动改变position</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// position = 3; limit = 11</span>\n        <span class="token comment">// array并没有改变position,和position没有关系，只是复制值。</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// position = 0; limit = 11</span>\n\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span><span class="token class-name">ByteBuffer</span> buffer<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;position = %s; limit = %s%n&quot;</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * position = 0; limit = 11\n * position = 0; limit = 11\n * position = 3; limit = 11\n * [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]\n * position = 3; limit = 11\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="rewind" tabindex="-1"><a class="header-anchor" href="#rewind" aria-hidden="true">#</a> rewind</h2>',2),u={href:"https://github.com/Q10Viking/learncode/blob/main/filesystem/src/org/hzz/chapter05/ByteBufferRewind.java",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteBufferRewind</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        byteBuffer<span class="token punctuation">.</span><span class="token function">rewind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将position重置为了0,但是limit没有变化，还是为写模式时的capcacity</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">.</span><span class="token function">hasRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            byteBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            i<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;执行了 %d 次 %n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span><span class="token class-name">ByteBuffer</span> buffer<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;position = %s; limit = %s%n&quot;</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * position = 2; limit = 4\n * position = 0; limit = 4\n * 执行了 4 次\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="flip" tabindex="-1"><a class="header-anchor" href="#flip" aria-hidden="true">#</a> flip</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>与rewind的相同的地方：都会重置position</p><p>不同的地方在于：flip会重置limit到position,而rewind则不会。</p></div>',3),k={href:"https://github.com/Q10Viking/learncode/blob/main/filesystem/src/org/hzz/chapter05/ByteBufferFlip.java",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Fv)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ByteBufferFlip</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ByteBuffer</span> byteBuffer <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        byteBuffer<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        byteBuffer<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将position重置为了0,limit重置到position的位置</span>\n        <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span><span class="token punctuation">(</span>byteBuffer<span class="token punctuation">.</span><span class="token function">hasRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            byteBuffer<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            i<span class="token operator">++</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;执行了 %d 次 %n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printPositionAndLimit</span><span class="token punctuation">(</span><span class="token class-name">ByteBuffer</span> buffer<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;position = %s; limit = %s%n&quot;</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">position</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>buffer<span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * position = 2; limit = 4\n * position = 0; limit = 2\n * 执行了 2 次 \n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>',1),m={},f=(0,a(66262).A)(m,[["render",function(n,s){const a=(0,t.g2)("OutboundLink");return(0,t.uX)(),(0,t.CE)(t.FK,null,[p,(0,t.Lk)("blockquote",null,[e,(0,t.Lk)("p",null,[(0,t.eW)("--- from "),(0,t.Lk)("a",o,[(0,t.eW)("Java NIO Buffer (jenkov.com)"),(0,t.bF)(a)])])]),c,(0,t.Lk)("p",null,[(0,t.Lk)("a",l,[(0,t.eW)("Source Code ByteBufferWrapper.java"),(0,t.bF)(a)])]),i,(0,t.Lk)("p",null,[(0,t.Lk)("a",u,[(0,t.eW)("Source Code ByteBufferRewind.java"),(0,t.bF)(a)])]),r,(0,t.Lk)("p",null,[(0,t.Lk)("a",k,[(0,t.eW)("Source Code ByteBufferFlip.java"),(0,t.bF)(a)])]),b],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);