---
layout: home

title: 一〇四〇七〇
titleTemplate: false
description: 一个专注于分享互联网软件、图片和工具的资源平台。发现、学习、分享，让每一次访问都充满惊喜。

hero:
  name: 一〇四〇七〇
  text: 互联网拾荒者<br>喜欢开宝箱
  tagline: 欢迎来到我的世界！<br>宝箱偶尔附带说明书！
  image:
    light: /logo/logo_light.svg
    dark: /logo/logo_dark.svg
    alt: 一〇四〇七〇

features:
  - icon: 🛠️
    title: 宝箱
    details: 寻宝一时爽，天天寻宝天天爽
    linkText: 宝箱
    link: /tools/
  - icon: 😍
    title: 赏饭
    details: 赏饭一时爽，你天天赏我饭我天天爽
    linkText: 赏饭
    link: /about/#🤩-赏饭
  - icon: 📱
    title: 联系
    details: 投稿、发牢骚、调情随你怎么爽
    linkText: 赏饭
    link: /about/#📱-联系
---

<script setup>
import {onMounted} from 'vue';

onMounted(()=>{
    const latter = document.querySelector('.main .text');
    latter.style.fontSize = '32px';
    latter.style.lineHeight = '1.5em';
    latter.style.marginTop='15px';
    
     // 将 tag=全部 保存到 localStorage
    if (!localStorage.getItem('tag')) {
        localStorage.setItem('tag', '全部')
    };

   

})

</script>