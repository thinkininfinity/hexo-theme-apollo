## Meta Description

如果你想设置页面的 meta description 信息，请在每篇 markdown 文件的头部添加 `desc` 字段信息——更实用的方式是在 scaffolds 文件夹中，将 `desc` 配置到常用模板中去，示例如下：

```md
title: Lorem ipsum dolor
date: 2015-12-31 14:49:13
desc: Lorem ipsum dolor sit amet, consectetur.
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, non numquam saepe ex ut. Deleniti culpa inventore consectetur nam saepe!
```

生成结果:

```html
<meta name="description" content="Lorem ipsum dolor sit amet, consectetur.">
```

如果没有配置该信息，Hexo-theme-apollo 会使用 `page.title` 和 `page.author` 来配置该标签。

## 标题

实际上，Hexo-theme-apollo 只支持两种标题：`h1~h3` 大标题，`h4~h6` 小标题，也就是说，`#` 和 `###` 的样式是一样的。之所以这么处理，是因为就个人感觉而言，我们不应该为文章设置过多的层级消耗读者的阅读精力。这相当于强制使用 Hexo-theme-apollo 的用户在写文章时注意文章结构，最多只能使用两层结构。

另一个潜在的原因是因为我还没有发现好的样式来处理不同层级的标题，单纯以大小和颜色很容易让页面变得混乱和冗杂。如果你有好的建议，请告诉我:)!

## 文章摘要

如果你想创建文章摘要用于向读者展示文章的核心内容，那么需要在文章摘要之后其他内容之前添加 HTML 注释标签 `<!--more-->`，使用方法如下图所示：

![https://cloud.githubusercontent.com/assets/9530963/14064341/0fa3c754-f432-11e5-8ad7-5d063d4a0886.png](https://cloud.githubusercontent.com/assets/9530963/14064341/0fa3c754-f432-11e5-8ad7-5d063d4a0886.png)

## 评论插件

Hexo-theme-apollo 支持两种评论插件：Disqus 和 Duoshuo. 请在 `themes/apollo/_config.yml` 文件中做如下配置:

```yaml
disqus: seansun
```

## 警告块

使用警告块需要 `div` 标签和 `tip` 类名：

```html
<div class="tip">
    预处理器很强大，但它只是编写 CSS 的辅助工具。出于对扩展和维护等方面的考虑，在大型项目中有必要使用预处理器构建 CSS；但是对于小型项目，原生的 CSS 可能是一种更好的选择。不要肆意使用预处理器！
</div>
```

![danger](https://cloud.githubusercontent.com/assets/9530963/11359678/489a510c-92b9-11e5-9256-341cef6999b6.png)

## 图例

也许你已经在我的博客中看到了很多图例：流程图、草图……也许你想问它们是怎么生成的……实际上，它们是用 Microsoft Powerpoint 制作的，可能这个答案让你有点小失望，但是你还是应该尝试用它制作一下图例，你会发现它真的很适合！

## Last but not Least

专注文章内容的创作胜过博客样式的美观，祝各位玩的开心:) !