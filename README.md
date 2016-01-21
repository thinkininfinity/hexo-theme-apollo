![hexo-theme-apollo](https://cloud.githubusercontent.com/assets/9530963/11295742/8f3d451a-8fa8-11e5-90d2-397af60a992d.png)

## 计划(2016.3 之前)

- 归档页面
- 文章目录组件（toc）
- SEO

ps. 请不要提交合并请求，fork 之后做任何你想做的吧。

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

## 图例

因为实际写博的过程中会用到各种类型的图例，比如流程图、序列图或者只是简单的模拟图，所以目前用的工具是 Microsoft PowerPoint。实际上，有一个工具可以满足对图例的需求，这个工具是一个在线制图网站[ProcessOn](https://www.processon.com)，唯一遗憾的是不可以自定义配色，所以我只能使用 PPT 创建与网站配色相适应的图例。

## 自定义块

Markdown 生成的标签暂时比较简单，所以提供了一些 HTML 标签来标识特殊样式，详见 [custrom-blocks](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc/custom-blocks.md)。

