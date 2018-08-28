import Vue from 'vue'
import Vuex from 'vuex'
import { trivia } from './../services/TriviaService'
import ChuckService from './../services/ChuckService'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        chuck: {
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
        },

        trivia: {
            state: {
                trivias: []
            },
            mutations: {
                setTrivias(state, trivias) {
                    state.trivias = trivias
                }
            },
            getters: {
                getRandomTrivias(state) {
                    // return state.trivias.filter(trivia => {
                    //     return trivia.question
                    // })
                    return state.trivias
                }
            },
            actions: {
                fatchRandomTrivias(context) {
                    trivia.getRandomTrivias().then((response) => {
                        context.commit('setTrivias', response.data)
                    })
                }
            }
        }
    }
}) 
