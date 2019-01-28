<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons :iconList='iconList' />
        <home-recommend :likeList='likeList' />
        <home-weekend :weekendList='weekendList' />
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'

    import HomeApi from '@/API/HomeApi'

    export default {
        data() {
            return {
                iconList:[],
                likeList:[],
                weekendList:[]
            }
        },
        mounted() {
            this.getHomeInfo()
        },
        methods: {
            async getHomeInfo() {
                let res = await HomeApi.getHomeInfo()
                let data = res.data
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