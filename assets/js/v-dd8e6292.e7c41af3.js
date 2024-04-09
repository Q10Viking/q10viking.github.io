"use strict";(self.webpackChunkq10viking_github_io=self.webpackChunkq10viking_github_io||[]).push([[50152],{84883:(l,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-dd8e6292",path:"/MySQL/66%20%E4%B8%80%E6%9D%A1SQL%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html",title:"",lang:"zh-CN",frontmatter:{sidebarDepth:3,sidebar:"auto",prev:{text:"Back To 目录",link:"/MySQL/"},"typora-root-url":"..\\.vuepress\\public"},excerpt:"",headers:[],filePathRelative:"MySQL/66 一条SQL执行流程.md"}},49610:(l,i,t)=>{t.r(i),t.d(i,{default:()=>r});const o=(0,t(20641).Fv)('<p><img src="/images/MySQL/image-20240325122301638.png" alt="image-20240325122301638"></p><ol><li><strong>连接器：</strong></li></ol><ul><li><ul><li>客户端与数据库建立连接，并发送 SQL 语句给数据库服务。</li><li>连接器验证客户端的身份和权限，确保用户有足够的权限执行该 SQL 语句。</li></ul></li></ul><ol><li><strong>查询缓存：</strong></li></ol><ul><li><ul><li>连接器首先检查查询缓存，尝试找到与当前 SQL 语句完全相同的查询结果。</li><li>如果在缓存中找到匹配的结果，查询缓存直接返回结果，避免了后续的执行过程。</li></ul></li></ul><ol><li><strong>分析器：</strong></li></ol><ul><li><ul><li>若查询不命中缓存，连接器将 SQL 语句传递给分析器进行处理。</li><li>分析器对 SQL 语句进行语法分析，确保语句的结构和语法正确。</li><li>分析器还会进行语义分析，检查表、列、函数等对象的存在性和合法性，并进行权限验证。</li></ul></li></ul><ol><li><strong>优化器：</strong></li></ol><ul><li><ul><li>分析器将经过验证的 SQL 语句传递给优化器。</li><li>优化器根据统计信息和数据库的规则，生成多个可能的执行计划，这些计划包括不同的索引选择、连接顺序、筛选条件等。</li><li>目的是选出最优的执行路径以提高查询性能。</li></ul></li></ul><ol><li><strong>执行器：</strong></li></ol><ul><li><ul><li>优化器选择一个最优的执行计划，并将其传递给执行器。</li><li>执行器根据执行计划执行具体的查询操作。</li><li>它负责调用存储引擎的接口，处理数据的存储、检索和修改。</li><li>执行器会根据执行计划从磁盘或内存中获取相关数据，并进行联接、过滤、排序等操作，生成最终的查询结果。</li></ul></li></ul><ol><li><strong>存储引擎：</strong></li></ol><ul><li><ul><li>执行器将查询请求发送给存储引擎组件。</li><li>存储引擎组件负责具体的数据存储、检索和修改操作。</li><li>存储引擎根据执行器的请求，从磁盘或内存中读取或写入相关数据。</li></ul></li></ul><ol><li><strong>返回结果：</strong></li></ol><ul><li><ul><li>存储引擎将查询结果返回给执行器。</li><li>执行器将结果返回给连接器。</li><li>最后，连接器将结果发送回客户端，完成整个执行过程</li></ul></li><li></li><li></li></ul>',15),u={},r=(0,t(66262).A)(u,[["render",function(l,i){return o}]])},66262:(l,i)=>{i.A=(l,i)=>{const t=l.__vccOpts||l;for(const[l,o]of i)t[l]=o;return t}}}]);