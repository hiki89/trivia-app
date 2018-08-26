import Chuck from 'chucknorris-io'
let client = new Chuck()

export default {
    getRandomJoke(category) {
        return client.getRandomJoke(category)
    },
    getJokeCategories() {
        return client.getJokeCategories()
    }
}