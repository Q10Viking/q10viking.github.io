"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[32668],{85171:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4de98392",path:"/Algorithm/4%20%E5%AF%BB%E6%89%BE%E4%B8%A4%E4%B8%AA%E6%AD%A3%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/Algorithm/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"Algorithm/4 寻找两个正序数组的中位数.md"}},30865:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var p=a(20641);const t={class:"custom-container tip"},o=(0,p.Lk)("p",{class:"custom-container-title"},"TIP",-1),e={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/Q10Viking/learncode/blob/main/algorithm/src/main/java/org/hzz/array/Medianof2SortedArrays_4.java",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Fv)('<blockquote><p>双指针+二分法找指定位置的数</p></blockquote><p>两个数组的长度已知，因此中位数对应的两个数组的下标之和也是已知的。维护两个指针，初始时分别指向两个数组的下标 0 的位置，每次将指向较小值的指针后移一位（如果一个指针已经到达数组末尾，则只需要移动另一个数组的指针），直到到达中位数的位置</p><p>看到题目给的O(log (m+n))的时间复杂度，很容易联想到二分查找，而且是在不合并两个数组的情况下进行</p><p>两个有序数组的长度已知，假设分别为m和n，在合并后的大有序数组里中位数在什么位置呢？如果m+n是奇数，中位数当然在(m+n)/2的位置，如果m+n是偶数，中位数就是(m+n)/2和((m+n)/2)+1这个两个元素的平均值。所以说到底，这个问题就是要找在两个有序数组中第(m+n)/2小（当然对m+n是偶数的情况还要加上寻找第((m+n)/2)+1小的元素）</p><p>那么我们可以这样做，以下图中的两个数组来进行说明</p><p><img src="/images/algorithm/image-20220816000536419.png" alt="image-20220816000536419"></p><p>这里很明显，我们要寻找第6小（第7小的我们暂时不考虑）的元素。于是比较两个数组的第 6/2=3 个数字，上边数组中的 3 和下边数组中的 6，很明显3小，就表明该数组的前 3 个数字都不是第6 小的元素，所以可以排除，也就是 1，2，3不满足条件。</p><p><img src="/images/algorithm/image-20220816000905120.png" alt="image-20220816000905120"></p><p>很明显，既然1，2，3被排除了，将 4、6 和 4、5、6、7、8、9、10 两个数组作为新的数组进行比较。那么中位数在新的合并数组中的位置自然就发生了变化，变为了6-3=3。</p><p>于是我们接下来就要比较3/2=1 处的数字，两个都是4，这就无所谓，随便排除哪个4都可以：</p><p><img src="/images/algorithm/image-20220816001033269.png" alt="image-20220816001033269"></p><p>同样，中位数在新的合并数组中的位置又发生了变化，变为了3-1=2，于是我们接下来就要比较2/2=1 处的数字，一个指向4，一个指向5，再排除一个4：</p><p><img src="/images/algorithm/image-20220816001147856.png" alt="image-20220816001147856"></p><p>中位数在新的合并数组中的位置又发生了变化，变为了2-1=1，于是我们接下来要找第1小的数字，所以只需判断两个数组中第一个数字哪个小就可以了，也就是 5，所以第 6 小的数字是 5。</p><p><img src="/images/algorithm/image-20220816001332801.png" alt="image-20220816001332801"></p><p>这两个数组的元素个数加起来是偶数，所以还需要找第7小的元素，方法和上面的一样，这里就不赘述了</p><blockquote><p>两个数组中如果有一个数组空了，或者说k/2的下标值超过了数组的长度，就可以直接返回结果了</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Medianof2SortedArrays_4</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> m <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">,</span>n <span class="token operator">=</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        <span class="token comment">/*将奇数个数和偶数个数情况统一处理\n         * 奇数个数: left==right\n         * 偶数个数: left==right+1 */</span>\n        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> right <span class="token operator">=</span> <span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">getKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>nums2<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>left<span class="token punctuation">)</span> <span class="token operator">+</span>\n                <span class="token function">getKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>nums2<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token number">2.0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getKth</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums1<span class="token punctuation">,</span><span class="token keyword">int</span> nums1Start<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums2<span class="token punctuation">,</span><span class="token keyword">int</span> nums2Start<span class="token punctuation">,</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 两个数组中如果有一个数组空了，或者说k/2的下标值超过了数组的长度，就可以直接返回结果了</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nums1Start <span class="token operator">&gt;</span> nums1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums2<span class="token punctuation">[</span>nums2Start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nums2Start <span class="token operator">&gt;</span> nums2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums1<span class="token punctuation">[</span>nums1Start <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">// find it</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>nums1Start<span class="token punctuation">]</span><span class="token punctuation">,</span>nums2<span class="token punctuation">[</span>nums2Start<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">int</span> minMid1 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">,</span>minMid2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nums1Start<span class="token operator">+</span>k<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&lt;</span> nums1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            minMid1 <span class="token operator">=</span> nums1<span class="token punctuation">[</span>nums1Start<span class="token operator">+</span>k<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>nums2Start<span class="token operator">+</span>k<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&lt;</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            minMid2 <span class="token operator">=</span> nums2<span class="token punctuation">[</span>nums2Start<span class="token operator">+</span>k<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">if</span><span class="token punctuation">(</span>minMid1 <span class="token operator">&lt;</span> minMid2<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">getKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span>nums1Start <span class="token operator">+</span> k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>nums2<span class="token punctuation">,</span>nums2Start<span class="token punctuation">,</span>k<span class="token operator">-</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">getKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span>nums1Start<span class="token punctuation">,</span>nums2<span class="token punctuation">,</span>nums2Start<span class="token operator">+</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>k<span class="token operator">-</span>k<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Medianof2SortedArrays_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Medianof2SortedArrays_4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findMedianSortedArrays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/**\n * 2.0\n * 3.5\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>',18),l={},k=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,p.g2)("OutboundLink");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("div",t,[o,(0,p.Lk)("p",null,[(0,p.Lk)("a",e,[(0,p.eW)("4. 寻找两个正序数组的中位数 - 力扣（LeetCode）"),(0,p.bF)(a)])]),(0,p.Lk)("p",null,[(0,p.Lk)("a",c,[(0,p.eW)("Source Code Medianof2SortedArrays_4.java"),(0,p.bF)(a)])])]),u],64)}]])},66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);