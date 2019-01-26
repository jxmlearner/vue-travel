<template>
    <div class="home">
        <home-header />
        <home-swiper />
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    export default {
        mounted() {
            
        },
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>

<style scoped lang="stylus">
.home {
    
}
</style>