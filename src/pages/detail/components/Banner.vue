<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <a class="head-back" @click="goback($event)"><i class="icon iconfont icon-left"></i></a>
            <img src="http://img1.qunarzz.com/sight/p0/1901/f5/f5b48f8f5748c818a3.water.jpg_600x330_86af884e.jpg">
            <div class="title">深圳欢乐谷(AAAAA景区)</div>
            <div class="imgicon">
                <i class="icon iconfont icon-image"></i>
                56
            </div>
        </div>
        <common-gallary :swiperList="swiperList" v-show="showGallary" @close="closeGallary" />
    </div>
</template>

<script>
    import CommonGallary from '@/common/gallary/Gallary'
    export default {
        data() {
            return {
                swiperList: [
                    { "id": 1, "title":"欢乐谷", "imgUrl": "http://img1.qunarzz.com/sight/p0/1901/f5/f5b48f8f5748c818a3.water.jpg_r_800x800_b11972d0.jpg"},
                    { "id": 2, "title":"东部华侨城", "imgUrl": "http://img1.qunarzz.com/sight/p0/1412/6c/6f771be863fc45f43cdb313964830e44.water.jpg_r_800x800_0f5e9e7e.jpg"}
                ],
                showGallary: false
            }            
        },
        methods: {
            goback(e) {
                e.stopPropagation()
                this.$router.go(-1)
            },
            handleBannerClick() {
                this.showGallary = true
            },
            closeGallary() {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary
        }
    }
</script>

<style scoped lang="stylus">
.banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    color: #fff;
    position: relative;
    .head-back {
        position: absolute;
        left: .1rem;
        top: .1rem;
        height: .72rem;
        width: .72rem;
        background: rgba(0,0,0,0.5);
        border-radius: 50%;
        text-align: center;        
        line-height: .72rem;
        .iconfont {
            font-size: .4rem;
        }
    }
    img {
        width: 100%;
    }
    .title {
        position: absolute;
        right: .2rem;
        bottom: .36rem;
        left: .2rem;
        min-height: .4rem;
        line-height: .4rem;
        font-size: .36rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    }
    .imgicon {
        position: absolute;
        left: .2rem;
        bottom: .86rem;
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .24rem;
        color: #fff;
        line-height: .4rem;
        text-align: center;
    }
}
</style>