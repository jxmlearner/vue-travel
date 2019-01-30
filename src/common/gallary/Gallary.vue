<template>
    <div class="gallary" @click="closeGallary">
        <div class="wrapper">
            <swiper v-if="swiperList && swiperList.length>0" :options="swiperOption" ref="swiperDom">
                <!-- slides -->
                <swiper-slide v-for="(item,index) of swiperList" :key="item.id">
                    <img :src="item.imgUrl" class="gallary-img" @click="clickImg">            
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    data() {
        return  {
            swiperOption: {            
                pagination: { // 如果需要分页器
                    el: '.swiper-pagination',
                    type:'fraction'                    
                },
                observer:true,
                observeParents:true
            }
        }
    },
    props: {
        swiperList: {
            type: Array,
            default: function() { return [] }
        }
    },
    methods: {
        closeGallary() {
            this.$emit('close')
        },
        clickImg(e) {
            e.stopPropagation()
            return false
        }
    }
}
</script>

<style scoped lang="stylus">
.gallary >>> .swiper-container {
    overflow: inherit;
}
.gallary {
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .wrapper {
        height: 0;
        width: 100%;
        padding-bottom: 100%;
        .gallary-img {
            width: 100%;
        }
        .swiper-pagination {
            color: #fff;
            bottom: -1rem;
        }
    }
}
</style>