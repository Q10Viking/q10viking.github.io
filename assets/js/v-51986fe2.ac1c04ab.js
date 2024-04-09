"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[76844],{60037:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-51986fe2",path:"/typescript/18%20type%20check.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"typescript/18 type check.md"}},26536:(n,e,s)=>{s.r(e),s.d(e,{default:()=>b});var a=s(20641);const r=(0,a.Lk)("p",null,"https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type",-1),t=(0,a.Lk)("code",null,"typeof",-1),l=(0,a.Lk)("strong",null,"at runtime to check",-1),o=(0,a.Lk)("code",null,"interface",-1),p={href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Fv)('<p>https://stackoverflow.com/questions/40081332/what-does-the-is-keyword-do-in-typescript</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\nimport { library } from &quot;@fortawesome/fontawesome-svg-core&quot;;\n// import { faPhone,faHatWizard  } from &quot;@fortawesome/free-solid-svg-icons&quot;;\n// import * as all from &quot;@fortawesome/free-brands-svg-icons&quot;\nimport {fab } from &quot;@fortawesome/free-brands-svg-icons&quot;\n// import  {IconDefinition} from &quot;@fortawesome/free-brands-svg-icons&quot;\nlibrary.add(fab)\n// all是modal\n//console.log(all[&#39;faTiktok&#39;] === faTiktok); // true\n// console.log(faTiktok);\n//console.log(faTiktok instanceof IconDefinition);\n\n// console.log(Object.keys(all));\n// console.log(all[&#39;fa42Group&#39;]);\n//library.add()\n\n// Object.keys(all).map(key=&gt;all[key])\n// const icon = (Object.keys(all) as Array&lt;keyof typeof all&gt;).map(key=&gt;all[key])\n\n// const a:Array&lt;keyof typeof all&gt; = []\n// const icon = (Object.keys(all) as Array&lt;keyof typeof all&gt;).forEach(key=&gt;a.push(key))\n// a.filter(i=&gt;i  IconDefinition)\n\n// Object.keys(all).map(key=&gt;extractAndConvert(all,key))\n\n// function extractAndConvert&lt;T extends object, U extends keyof T&gt;(\n//     obj: T,\n//     key: U\n//   ) {\n//     return obj[key];\n//   }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>',2),i={},b=(0,s(66262).A)(i,[["render",function(n,e){const s=(0,a.g2)("OutboundLink");return(0,a.uX)(),(0,a.CE)(a.FK,null,[r,(0,a.Lk)("p",null,[(0,a.eW)("You can't use "),t,(0,a.eW)(),l,(0,a.eW)(" for "),o,(0,a.eW)(" types, which only exist at compile time. Instead you can write a "),(0,a.Lk)("a",p,[(0,a.eW)("user-defined type guard function"),(0,a.bF)(s)]),(0,a.eW)(" to check for such types:")]),c],64)}]])},66262:(n,e)=>{e.A=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}}}]);