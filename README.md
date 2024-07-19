> [!NOTE]
>
> 感谢 [vueuse](https://vueuse.org/functions.html) 页面提供的设计灵感。
>
> 感谢 [vitepress](https://vitepress.dev/zh/) 开源

## frontmatter

[详情参考](https://vitepress.dev/zh/reference/frontmatter-config)

### vitepress 自带

``` markdown
---
title: 页面标题
description: 这里是页面描述。
titleTemplate: false
---
```

| 参数              | 类型                  | 说明                                                                           |
|-----------------|---------------------|------------------------------------------------------------------------------|
| `title`         | `string`            | [页面标题](https://vitepress.dev/zh/reference/frontmatter-config#title)          |
| `titleTemplate` | `string \| boolean` | [标题的后缀](https://vitepress.dev/zh/reference/frontmatter-config#titletemplate) |
| `description`   | `string`            | [页面的描述](https://vitepress.dev/zh/reference/frontmatter-config#description)   |

### 默认主题

``` markdown
---
layout: doc
navbar: false
sidebar: false
aside: false
lastUpdated: false
editLink: false
footer: false
pageClass: custom-class-name
---
```

| 参数            | 类型                   | 说明                                                                                                                                                                     |
|---------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `layout`      | `doc \| home\| page` | [指定页面的布局](https://vitepress.dev/zh/reference/frontmatter-config#layout)  ，默认 `doc`                                                                                     |
| `navbar`      | `boolean`            | [是否显示导航栏](https://vitepress.dev/zh/reference/frontmatter-config#navbar)                                                                                                |
| `sidebar`     | `boolean`            | [是否显示侧边栏](https://vitepress.dev/zh/reference/frontmatter-config#sidebar)                                                                                               |
| `aside`       | `boolean \| 'left'`  | [是否显示文章目录](https://vitepress.dev/zh/reference/frontmatter-config#aside)     <br>  将此值设置为 `false` 可禁用侧边栏容器。<br> 将此值设置为 `true` 会将侧边栏渲染到右侧。<br> 将此值设置为 `left` 会将侧边栏渲染到左侧。 |
| `lastUpdated` | `boolean \| Date`    | [是否显示最后更新时间](https://vitepress.dev/zh/reference/frontmatter-config#lastupdated)                                                                                        |
| `editLink`    | `boolean`            | [是否显示编辑链接](https://vitepress.dev/zh/reference/frontmatter-config#editlink)                                                                                             |
| `footer`      | `boolean`            | [是否显示页脚](https://vitepress.dev/zh/reference/frontmatter-config#footer)                                                                                                 |
| `pageClass`   | `string`             | [将额外的类名称添加到特定页面](https://vitepress.dev/zh/reference/frontmatter-config#pageclass)                                                                                      |

### 扩展

``` markdown
---
image: src | null
tags: 
  - 单个标签
  - 多个标签1
  - 多个标签2
---
```

| 参数    | 类型             | 说明                                                         |
| ------- | ---------------- | ------------------------------------------------------------ |
| `tags`  | `string`         | 标签                                                         |
| `image` | `string \| null` | 预览图，可用于 `x` 分享展示<br />**注意：支支持 png 或 jpg格式** |

### 示例

``` markdown
---
title: 页面标题
description: 这里是页面描述/文章摘要。
image: http://xxx/xxx.png
titleTemplate: false
tags: 
  - 单个标签
  - 多个标签1
  - 多个标签2
---
```

