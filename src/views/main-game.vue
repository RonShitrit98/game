<template>
    <game-list :games="games" v-if="games">{{ games }}</game-list>
</template>


<script>
import gameList from "../components/game-list.vue"
export default {
    data() {
        return {
            games: this.$store.getters.games
        }
    },
    created() {
        this.getGames()
    },
    methods: {
        getGames() {
            this.$store.dispatch({ type: 'getGames' })
        }
    },
    components: { gameList }
}
</script>

