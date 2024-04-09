"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[72105],{78872:(t,r,e)=>{e.r(r),e.d(r,{data:()=>n});const n={key:"v-6ea8c956",path:"/netty/23%20%E6%B0%B4%E5%B9%B3%E8%A7%A6%E5%8F%91%E4%B8%8E%E8%BE%B9%E7%BC%98%E8%A7%A6%E5%8F%91.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/netty/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"netty/23 水平触发与边缘触发.md"}},7554:(t,r,e)=>{e.r(r),e.d(r,{default:()=>g});var n=e(20641);const o={href:"https://www.zhihu.com/question/22524908",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Fv)("<p><strong>水平触发(level-triggered，也被称为条件触发)LT:</strong> 只要满足条件，就触发一个事件(只要有数据没有被获取，内核就不断<strong>通知</strong>你)</p><p><strong>边缘触发(edge-triggered)ET:</strong> 每当状态变化时，触发一个事件。</p><p><strong>Java的NIO属于水平触发，即条件触发</strong></p><p>这里介绍下<strong>水平触发和条件触发</strong>在IO编程的区别</p><p>举个读socket的例子，假定经过长时间的沉默后，现在来了100个字节，这时无论<strong>边缘触发</strong>和<strong>条件触发</strong>都会产生一个read ready notification通知应用程序可读。</p><p>应用程序读了50个字节，然后重新调用<strong>API</strong>等待io事件。这时<strong>条件触发的api会因为还有50个字节可读从 而立即返回用户一个read ready notification</strong>。</p><p>而<strong>边缘触发</strong>的api会因为<strong>可读这个状态没有发生变化而陷入长期等待。 因此在使用边缘触发的api时，要注意每次都要读到socket返回EWOULDBLOCK为止，否则这个socket就算废了</strong>。</p><p>而使用<strong>条件触发</strong>的API 时，如果应用程序不需要写就不要关注socket可写的事件，否则就会无限次的立即返回一个write ready notification。大家常用的select就是属于条件触发这一类，长期关注socket写事件会出现CPU 100%的毛病。</p><p><strong>所以在使用Java的NIO编程的时候，在没有数据可以往外写的时候要取消写事件，在有数据往外写的时候再注册写事件。</strong></p>",9),a={},g=(0,e(66262).A)(a,[["render",function(t,r){const e=(0,n.g2)("OutboundLink");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("blockquote",null,[(0,n.Lk)("p",null,[(0,n.eW)("参考"),(0,n.Lk)("a",o,[(0,n.eW)("java nio使用的是水平触发还是边缘触发"),(0,n.bF)(e)]),(0,n.eW)(" nio是水平触发")])]),s],64)}]])},66262:(t,r)=>{r.A=(t,r)=>{const e=t.__vccOpts||t;for(const[t,n]of r)e[t]=n;return e}}}]);