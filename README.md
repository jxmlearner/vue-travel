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
        <swiper v-if="swiperList && swiperList.length>0" :options="swiperOption" ref="swiperDom">
            <!-- slides -->
            <swiper-slide v-for="(item,index) of swiperList" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">            
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
                pagination: { // 如果需要分页器
                    el: '.swiper-pagination'                    
                }
            },
            swiperList: [
                { id: 1, title:'欢乐谷', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/854b2a57bf7025a0f7c639514665dfe4.jpg_750x200_08fdbadb.jpg'},
                { id: 2, title:'东部华侨城', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/61/44400d6591891202.jpg_750x200_7565a05c.jpg'}
            ]
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
    background-color: #eee;
}
.swiper-img {
    width: 100%;
}
</style>
```
5. 构造swiper的分页数据
```javascript
<script>
    export default {
        data() {
            return {
                swiperOption: {              
                    pagination: { // 如果需要分页器
                        el: '.swiper-pagination'                    
                    }
                },
                iconList: [
                    {id:'0001',title:'景点门票',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',},
                    {id:'0002',title:'一日游',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',},
                    {id:'0003',title:'深圳必游',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',},
                    {id:'0004',title:'海洋馆',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',},
                    {id:'0005',title:'动植物园',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',},
                    {id:'0006',title:'泡温泉',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',},
                    {id:'0007',title:'世界之窗',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png',},
                    {id:'0008',title:'滑雪秀',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',},
                    {id:'0009',title:'东部华侨城',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',}
                ]
            }
        },
        computed: {
            pages() {
                let pages = []
                this.iconList.forEach((icon,index)=> {
                    const page = Math.floor(index/8)
                    if(!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(icon)
                })
                return pages
            }
        }
    }
</script>
```
## 三、stylus使用记录
1. 定义和使用mixin
```css
ellipsis()  //定义
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

// 使用
@import '~@/assets/css/stylus/mixins.styl'

.icon-tit {
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    line-height: .44rem;
    height: .44rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis()
}
```