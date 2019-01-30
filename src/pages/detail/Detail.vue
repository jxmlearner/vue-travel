<template>
    <div class="detail">
        <detail-header />
        <detail-banner />
        <div class="content">

        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    export default {
        components: {
            DetailBanner,
            DetailHeader
        }
    }
</script>

<style scoped lang="stylus">
.content {
    height: 50rem;
}
</style>