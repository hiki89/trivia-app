import axios from 'axios'

export default class Trivia {
    constructor() {
        axios.defaults.baseURL = "http://jservice.io/api";
    }

    getRandomTrivias() {
        return axios.get('random?count=2')
    }
}

export const trivia = new Trivia()


