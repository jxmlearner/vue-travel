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