# hexo-theme-apollo

## 截图

![hexo-theme-apollo](https://cloud.githubusercontent.com/assets/9530963/11295742/8f3d451a-8fa8-11e5-90d2-397af60a992d.png)

## 安装

``` bash
$ hexo init Blog && cd Blog && npm install
$ npm install --save hexo-renderer-jade hexo-generator-feed
$ git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `apollo`:

```yaml
theme: apollo
```

添加 `feed` 配置项：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
```

## 更新

``` bash
$ cd themes/apollo && git pull
```

## License

MIT
