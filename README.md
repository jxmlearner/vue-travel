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
2. 安装 `yarn add vue-awesome-swiper`  [vue-awesome-swiper github](https://github.com/surmon-china/vue-awesome-swiper)
3. 在`main.js`中全局引入
```javascript
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
```
4. Swiper.vue组件   [防抖动参考](https://blog.csdn.net/m0_37828249/article/details/80794155)
```javascript
<template>
    <div class="swiper-box">
        <swiper :options="swiperOption" ref="swiperDom">
            <!-- slides -->
            <swiper-slide>
                <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/854b2a57bf7025a0f7c639514665dfe4.jpg_750x200_08fdbadb.jpg" class="swiper-img">            
            </swiper-slide>
            <swiper-slide>
                <img src="http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg" class="swiper-img">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>	
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return  {
            swiperOption: {
                autoplay:true,
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'                    
                },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.swiperDom.swiper
        }
    }
}
</script>

<style scoped lang="stylus">
>>>.swiper-pagination-bullet {   // 使样式影响到子组件
    background: rgba(255,255,255,0.95);
}
>>>.swiper-pagination-bullet-active {
    background: rgba(255,255,255,1);
}
.swiper-box {   // css 防抖动的写法, 原理在于,overflow:hidden不会隐藏padding的内容, 因为padding的内容也属于盒子模型的内容区域
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.667%;
}
.swiper-img {
    width: 100%;
}
</style>
```