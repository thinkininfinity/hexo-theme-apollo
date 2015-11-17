# hexo-theme-apollo

> 根据 [http://cn.vuejs.org/](http://cn.vuejs.org/) 改写而来

## 截图


## 安装

``` bash
$ hexo init Blog && cd Blog && npm install
$ npm install --save hexo-renderer-jade hexo-generator-feed
$ git clone https://github.com/pinggod/hexo-theme-apollo.git themes/apollo
```

## 启用

修改 `_config.yml` 的 `theme` 配置项为 `apollo`:

```yaml
theme: jekyll
```

添加 `feed` 配置项：

```yaml
feed:
  type: atom
  path: atom.xml
  limit: 20
```

## 运行

```bash
$ hexo g && hexo s
```

## 更新

``` bash
$ cd themes/apollo && git pull
```

## License

MIT

