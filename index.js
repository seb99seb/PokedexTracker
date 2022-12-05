const app = Vue.createApp({
    data() {
        return {
            pokemonList: [],
            counter: 0,
            max: 10,
            test: "<b>OKAY</b>"
        }
    },
    computed:{
        //stuff for printing
    },
    methods: {
        lol(){
            this.counter++
            console.log(this.counter)
        },
        count(){
            console.log(this.pokemonList)
        }
    }
})