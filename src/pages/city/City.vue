<template>
    <div>
        <city-header></city-header>
        <city-search />
        <city-list :cities="cities" :hot="hotCities" :letter="letter"/>
        <city-alphabet :cities="cities" @change="handleLetterChange" />
    </div>
</template>

<script>
    import CityApi from '@/API/CityApi'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'

    export default {
        name: 'City',
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        mounted() {
            this.getCityInfo()
        },
        methods: {
            async getCityInfo() {
                let res = await CityApi.getCityInfo()
                let data = res.data
                if(data.ret && data.data) {
                    this.cities = data.data.cities
                    this.hotCities =data.data.hotCities
                }
            },
            handleLetterChange(letter) {
                this.letter = letter
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }   
    }
</script>

<style scoped>

</style>