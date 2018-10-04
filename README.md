# 翻翻看

炉石传说主题的卡牌图案匹配游戏，通过 `webpack` 和 `vue` 实现，卡背图案随机，行列数量及卡牌图片可配置。

布局整体通过flex实现，可以自适应各种比例的屏幕，兼容移动端和PC端。

游戏规则：随意点击某一张牌，翻转180度，如果连续2张相同，则保持翻开状态；如果不同则同时翻回背面，直到翻开所有的牌，游戏结束。

通过反复练习来提高你的速度，挑战一下，不断刷新自己的记录吧。

## 游戏界面

![](https://github.com/yuzhongyuan93/find-the-same/blob/master/src/assets/interface.png)

## 依赖

```
"dependencies": {
    "vue": "^2.5.16"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^0.28.11",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.0.6",
    "mini-css-extract-plugin": "^0.4.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "style-loader": "^0.20.3",
    "vue-loader": "^15.2.4",
    "vue-template-compiler": "^2.5.16",
    "webpack": "^4.12.0",
    "webpack-cli": "^2.0.12",
    "webpack-dev-server": "^3.1.4"
  }
```
