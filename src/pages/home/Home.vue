<template>
    <div class="home">
        <home-header />
        <home-swiper :swiperList="swiperList" />
        <home-icons :iconList='iconList' />
        <home-recommend :likeList='likeList' />
        <home-weekend :weekendList='weekendList' />
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'

    import HomeApi from '@/API/HomeApi'

    export default {
        data() {
            return {
                lastCity: '',
                swiperList:[],
                iconList:[],
                likeList:[],
                weekendList:[]
            }
        },
        computed: {
            ...mapState(['city'])
        },
        mounted() {
            this.lastCity = this.city
            this.getHomeInfo()
        },
        activated() {
            if(this.lastCity === this.city) { // 还是原来的城市,直接return,不去请求数据
                return
            }
            this.lastCity = this.city  // 当前城市已经变了,所以也赋值给lastCity
            this.getHomeInfo()
        },
        methods: {
            async getHomeInfo() {
                let curCity = this.city
                let res = await HomeApi.getHomeInfo(curCity)  //因为使用了keep-alive,所以带上个city,以便切换了城市后会重新去请求数据
                let data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList //因为只是单纯的本地json数据,对返回没作判断,真实的生产环境数据可能还要判断返回的code正确与否
                this.likeList = data.likeList
                this.weekendList = data.weekendList
            }
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        }
    }
</script>

<style scoped lang="stylus">
.home {
    
}
</style>