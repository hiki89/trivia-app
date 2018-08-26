import Vue from 'vue'
import Vuex from 'vuex'
// import TriviaService from './../services/TriviaService'
import ChuckService from './../services/ChuckService'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        joke: {},
        categories: []
    },
    mutations: {
        setJoke(state, joke) {
            state.joke = joke
        },
        setCategories(state, categories) {
            state.categories = categories
        }
    },
    getters: {
        getRandomJoke(state) {
            return state.joke
        },
        getCategories(state) {
            return state.categories
        }
    },
    actions: {
        fatchRandomJoke(context, category) {
            ChuckService.getRandomJoke(category).then((data) => {
                context.commit('setJoke', data)
            })
        },
        fatchCategories(context) {
            ChuckService.getJokeCategories().then((data) => {
                context.commit('setCategories', data)
            })
        }
    }
}) 
