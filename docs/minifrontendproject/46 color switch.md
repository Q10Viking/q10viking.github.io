---
sidebarDepth: 3
sidebar: auto
prev:
  text: Back To 目录
  link: /minifrontendproject/
typora-root-url: ..\.vuepress\public
---



## Color Switch

[项目预览（Project view）](https://q10viking.github.io/Mini-FrontEnd-project/49%20color%20switch/dist/)

[Source Code](https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/49%20color%20switch)

<common-progresson-snippet src="https://q10viking.github.io/Mini-FrontEnd-project/49%20color%20switch/dist/"/>



## 局部变量

```html
<section class="colors">
    <span class="color active" style="--clr: #1dd1a1"></span>
    <span class="color" style="--clr: #ff6b6b"></span>
    <span class="color" style="--clr: #2e86de"></span>
    <span class="color" style="--clr: #f368e0"></span>
    <span class="color" style="--clr: #ff9f43"></span>
</section>
```

```scss
.color{
    // 直接使用
    background-color: var(--clr);
}
```



## Js获取css变量

```tsx
const colors = document.querySelectorAll(".color")!;
const btn = document.getElementById("btn")! as HTMLInputElement;
const txt = document.querySelector(".txt")! as HTMLInputElement;

colors.forEach((color) => color.addEventListener("click", changeColor));

function changeColor(event: Event) {
  const target = event.target as HTMLElement;
  // get color
  if (target) {
    // 使用getComputedStyle来获取css变量
    const color = getComputedStyle(target).getPropertyValue("--clr");
    document.body.style.backgroundColor = color;
    txt.style.borderLeftColor = color;
    btn.style.backgroundColor = color;

    // active color
    colors.forEach((color) => color.classList.remove("active"));
    target.classList.add("active");
  }
}
```

