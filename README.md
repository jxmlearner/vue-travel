# vue-travel
依照去哪儿旅游网

## 一、项目初始化
1. 先 `git clone git@gitee.com:jxmlearner/vue-travel.git`将仓库克隆到本地
2. `vue create vue-travel` 使用vue-cli3.x建立项目的时候选择merge(合并)--vue router和vuex后面用到的时候再加
3. 删除那些不用的文件,使这个项目是一个空项目
4. 建立重置样式 `assets/css/reset.css`,在main.js中引入 `import './assets/css/reset.css'`
5. 安装 `stylus`: `yarn add -D stylus stylus-loader`
6. 参照微信小程序使用pages目录代表各个页面,页面目录下再有components
7. vue-cli下@代表src目录, 在样式引入时要加上~符号,如 `@import '~@/assets/css/stylus/variable.styl'`

## 二、`vue-awesome-swiper`使用
1. github上创建一个分支 
  - `git checkout -b index-swiper` --创建并切换到分支, 这个命令相当于 `git branch index-swiper`和`git checkout index-swiper`两个命令
1. 安装 `yarn add vue-awesome-swiper`