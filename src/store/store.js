import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: '深圳'
    },
    mutations: {
        changeCity(state,city) {
            state.city = city
        }
    },
    actions: {
        changeCity({commit},city) {
            commit('changeCity',city)  // commit changeCity mutation
        }
    }
})

export default store
