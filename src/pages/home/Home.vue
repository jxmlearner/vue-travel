<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
        <home-recommend />
        <home-weekend />
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'

    export default {
        mounted() {
            
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