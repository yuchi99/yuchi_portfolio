# 昕力資訊設計部 gulp 靜態頁面模板

## Check for node, npm, and npx

_[what is node.js and npm?](https://miahsuwork.medium.com/%E7%AC%AC%E4%BA%8C%E9%80%B1-%E4%B8%8D%E5%86%8D%E8%88%87-node-js-npm-%E6%93%A6%E8%82%A9%E8%80%8C%E9%81%8E-fb188b3baf20)_

```
$ node --version
$ npm --version
$ npx --version
```

## 使用的編譯

### html:

1. [gulp-inject](https://github.com/klei/gulp-inject) - 串接 html

### CSS:

1. [SCSS](https://www.npmjs.com/package/gulp-sass) - 使用 SCSS 撰寫
1. [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - 自動添加前綴
1. [gulp-csso](https://www.npmjs.com/package/gulp-csso) - 最小化 CSS
1. [uncss](https://www.npmjs.com/package/postcss-uncss) - 刪除未使用 CSS

### js:

1. [babelify]
2. [Browserify]

### image:

<!-- 1. [imageMin] - 圖片最小化 -->

2. [spritesmith] - 對一般圖片進行 sprite
3. [gulp-svg-sprite] - 對 svg 圖片進行 sprite

## Install

```
$ npm install
```

## Usage

### ✏️ dev

```
npm run dev
```

### ✏️ production

```
npm run build
```
