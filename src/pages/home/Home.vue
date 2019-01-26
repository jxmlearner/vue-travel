<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    export default {
        mounted() {
            
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons
        }
    }
</script>

<style scoped lang="stylus">
.home {
    
}
</style>