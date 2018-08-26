import Vue from 'vue'
import Vuex from 'vuex'
// import TriviaService from './../services/TriviaService'
import ChuckService from './../services/ChuckService'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        joke: {}
    },
    mutations: {
        setJoke(state, joke) {
            state.joke = joke
        }
    },
    getters: {
        getRandomJoke(state) {
            return state.joke
        }
    },
    actions: {
        async fatchRandomJoke(context) {
            ChuckService.getRandomJoke().then((data) => {
                context.commit('setJoke', data)
            })
        }
    }
}) 