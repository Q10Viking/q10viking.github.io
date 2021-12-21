---
prev:
  text: Back To 目录
  link: /topicNav/
---



::: tip 提示
学习 vue3之旅  [介绍 | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/guide/introduction.html)

使用vuepress博客仿照vue的官网，进行交互式学习

:::

![image (1)](https://gitee.com/q10viking/PictureRepos/raw/master/images//202112020913845.jpg)


<div id="root">
    {{msg}}
    <button @click="greet">Geet！</button>
</div>


::: details 点击查看代码

```js
<div id="root">
    {{msg}}
    <button @click="greet">Geet！</button>
</div>

<script>

export default {
    setup(){
        const msg = 'Hello Vue'
        return {
            msg
        }
    },
    methods: {
        greet(e){
            alert('😁'+this.msg)
        }
    }
}
</script>
```

:::







<script>

export default {
    setup(){
        const msg = 'Hello Vue'
        return {
            msg
        }
    },
    methods: {
        greet(e){
            alert('😁'+this.msg)
        }
    }
}
</script>



## VUE生态

[Home | VueUse](https://vueuse.org/)

## 学习项目

[VueCook (liuwenxing1996.github.io)](https://liuwenxing1996.github.io/vue-cook/)

## TODO

[newbee-ltd/newbee-mall-vue-app: 🔥 🎉Vue2 全家桶 + Vant 搭建大型单页面商城项目。新蜂商城前后端分离版本-前端Vue项目源码 (github.com)](https://github.com/newbee-ltd/newbee-mall-vue-app)



https://github.com/anncwb/vue-vben-admin

https://github.com/chuzhixin/vue-admin-beautiful-pro

https://github.com/xiaoxian521/vue-pure-admin

https://github.com/hiparker/opsli-boot
