import Chuck from 'chucknorris-io'
let client = new Chuck()

export default {
    getRandomJoke(){
        return client.getRandomJoke()
    }
}