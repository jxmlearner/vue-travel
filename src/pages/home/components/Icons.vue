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
                }
            }
        },
        props: {
            iconList: {
                type: Array,
                default: function() { return [] }
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