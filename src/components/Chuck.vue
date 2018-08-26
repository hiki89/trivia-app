<template>
    <div>
        <NavBar />
        <div class="card-body">
            <h5 class="card-title">Random Chuck Joke:</h5>
            <p class="card-text">{{ randomJoke.value }}</p>
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

    computed: {
        ...mapGetters({
            randomJoke: 'getRandomJoke'
        })
    },

    methods: {
        ...mapActions({
            fatchRandomJoke: 'fatchRandomJoke'
        })
    },

    beforeRouteEnter(to, from, next) {
        store.dispatch('fatchRandomJoke').then(() => {
            next()
        })
    }
}
</script>

