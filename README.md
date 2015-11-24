![hexo-theme-apollo](https://cloud.githubusercontent.com/assets/9530963/11295742/8f3d451a-8fa8-11e5-90d2-397af60a992d.png)

## 安装

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync
git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `apollo`:

```yaml
theme: apollo
```

## 更新

``` bash
cd themes/apollo 
git pull
```

## 自定义块

Markdown 生成的标签暂时比较简单，所以提供了一些 HTML 标签来标识特殊样式，详见 [custrom-blocks](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc/custom-blocks.md)。

## License

MIT
