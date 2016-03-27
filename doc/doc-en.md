![hexo-theme-apollo](https://cloud.githubusercontent.com/assets/9530963/13026956/08e76eca-d277-11e5-8bfc-2e80cea20a0d.png)

## Install

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## Enable

Go to `_config.yml` and change the `theme` property to `apollo` value:

```yaml
theme: apollo

# Show all posts in archive page using hexo-generator-archive
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```

## Update

``` bash
cd themes/apollo 
git pull
```

## Meta Description

If you want to set meta description information, please set `desc` property and value to each post — the better method is setting default `desc` property to your scaffolds files, just like:

```md
title: Lorem ipsum dolor
date: 2015-12-31 14:49:13
desc: Lorem ipsum dolor sit amet, consectetur.
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, non numquam saepe ex ut. Deleniti culpa inventore consectetur nam saepe!
```

result:

```html
<meta name="description" content="Lorem ipsum dolor sit amet, consectetur.">
```

If there is no `desc` property or value, hexo-theme-apollo will use `page.title` and `page.author` instead of it. 

## H1~H6 Title

In fact, Hexo-theme-apollo only supoort two kinds of titles: h1~h3 belongs to what i called `big title`, and h4~h6 belongs to `small title`, this means that `#` and `###` have the same styles。

Why i do this? I support that an article should be short and clean, dont let visitors spend much time to recognise the blog post structure.

Another reason is that: i don't have met a great styles to distinguish between different kinds of headers.If you have gread idea about it, please let me know.

## post excerpt

If you want to show excerpt(core content of article) to your visitors, do add HTML comment tag `<!--more-->` before else content，and finally the tag will be parsed to be a variable which represents post excerpt by Hexo:

![https://cloud.githubusercontent.com/assets/9530963/14064341/0fa3c754-f432-11e5-8ad7-5d063d4a0886.png](https://cloud.githubusercontent.com/assets/9530963/14064341/0fa3c754-f432-11e5-8ad7-5d063d4a0886.png)

## Comment Plugin

Hexo-theme-apollo support two comment plugins: Disqus and Duoshuo. please set like this in your `theme/_config.yml`:

```yaml
disqus: seansun
```

## Danger Block

Use html tag with special class property to render block:

```html
<div class="tip">
    预处理器很强大，但它只是编写 CSS 的辅助工具。出于对扩展和维护等方面的考虑，在大型项目中有必要使用预处理器构建 CSS；但是对于小型项目，原生的 CSS 可能是一种更好的选择。不要肆意使用预处理器！
</div>
```

![danger](https://cloud.githubusercontent.com/assets/9530963/11359678/489a510c-92b9-11e5-9256-341cef6999b6.png)

## Legends

This may lead to disappointed: i don't have spacial tool to create diagrams，but just Microsoft Powerpoint。

## Last but not Least

Focus on blog posts, not blog's styles. Have fun :) !
