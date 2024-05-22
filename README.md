- ⛺ 如果你期望使用 Astro + MDX 技术栈
- 🌆 如果你希望在博客中增加一点不一样的东西
- 😍 欢迎来使用和反馈新主题 [astro-theme-mia](https://github.com/infinity-ooo/astro-theme-mia)
- 🚅 Astro 相比 Hexo 性能更强，MDX 提供的能力可实现更强大的交互能力

---

![hexo-theme-apollo](https://cloud.githubusercontent.com/assets/9530963/13026956/08e76eca-d277-11e5-8bfc-2e80cea20a0d.png)

## 文档

- [中文文档](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc%2Fdoc-zh.md)
- [Document](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc%2Fdoc-en.md)

## 贡献

通过 Fork 该项目，自由发挥自己的创造性想法可能更适合你。

## 安装

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `apollo`:

```yaml
theme: apollo

# 在归档页面显示所有文章
# 需要上面安装的 hexo-generator-archive 插件支持
archive_generator:
    per_page: 0
    yearly: false
    monthly: false
    daily: false
```

## 更新

``` bash
cd themes/apollo 
git pull
```

## License

MIT
