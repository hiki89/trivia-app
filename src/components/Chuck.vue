<template>
    <div>
        <NavBar />
        <div class="card-body">
            <h5 class="card-title">Random Chuck Joke:</h5>
            <p class="card-text">{{ randomJoke.value }}</p>
            <form @submit.prevent class="form-group">
                <label for="category">Choose category:</label>
                <select class="form-control" v-model="selectedCategory">
                    <option v-for="(category, index) in categories" :key="index">{{category}}</option>
                </select>
                <button @click="getNewJoke(selectedCategory)" class="btn btn-dark">New Joke</button>
            </form>
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar'
import { mapActions, mapGetters } from 'vuex'
import { store } from './../store'

export default {
    components: {
        NavBar
    },

    data() {
        return {
            selectedCategory: ''
        }
    },
    
    computed: {
        ...mapGetters({
            randomJoke: 'getRandomJoke',
            categories: 'getCategories'
        })
    },

    methods: {
        // ...mapActions({
        //     fatchRandomJoke: 'fatchRandomJoke',
        //     fatchCategories: 'fatchCategories'
        // }),
        getNewJoke(selectedCategory) {
            store.dispatch('fatchRandomJoke', selectedCategory)
        },
        getJokeCategories() {
            store.dispatch('fatchCategories')
        }
    },

    created() {
        this.getJokeCategories()
    },

    beforeRouteEnter(to, from, next) {
        store.dispatch('fatchRandomJoke').then(() => {
            next()
        })
    }
}
</script>

