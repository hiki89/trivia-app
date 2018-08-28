<template>
    <div>
        <NavBar />
        <div v-for="trivia in randomTrivias" :key="trivia.id">
        <h5 @click="showAnswer">Question: {{trivia.question}}</h5>
        <div v-if="shownAnswer">
            <h6>Answer: {{trivia.answer}}</h6>
        </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import { mapGetters } from 'vuex'
import { store } from './../store'

export default {
    data() {
        return {
            shownAnswer: false
        }
    },
    components: {
        NavBar
    },
    computed: {
        ...mapGetters({
            randomTrivias: 'getRandomTrivias'
        })
    },
    methods: {
        getTrivia() {
            store.dispatch('fatchRandomTrivias')
        },
        showAnswer() {
            this.shownAnswer = !this.shownAnswer
        }
    },
    created() {
        this.getTrivia()
    }
}
</script>

