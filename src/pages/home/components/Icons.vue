<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="page in pages">
                <div class="category-item" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl">
                    </div>            
                    <p class="icon-tit">{{item.title}}</p>
                </div>
            </swiper-slide>           
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

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

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
@import '~@/assets/css/stylus/mixins.styl'
.icons {
    padding-bottom: .4rem;
}
>>>.swiper-pagination {
    width: 100%;
    padding-top: .1rem;
    &.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 4px;
    }
}
.icons .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0px;
}
.icons >>> .swiper-container {
    height: 0;
    padding-top: .1rem;
    padding-bottom: 43.224%;
    .category-item {
        position: relative;
        width: 25%;
        height: 0;
        padding-bottom: 21.612%;
        float: left;
        overflow: hidden;
        .icon-img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: .44rem;
            padding: .1rem .1rem 0;
            text-align: center;
            vertical-align: bottom;
            >img {                
                height: 100%;
            }
        }
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
    }
}
</style>