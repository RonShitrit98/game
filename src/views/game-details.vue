<template>
    <div v-if="game">
        <h1>{{ game.title }}</h1>
        <img :src="game.thumbnail" />
        <p>{{ game.short_description }}</p>
        <p>Genre: {{ game.genre }}</p>
        <p>Publisher: {{ game.publisher }}</p>
        <a :href="game.freetogame_profile_url">Go to game</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            game: null
        }
    },
    async created() {
        console.log(this.$route.params.gameId)
        const game = await this.$store.dispatch({ type: 'getGameById', gameId: this.$route.params.gameId })
        this.game = game
    }
}
</script> 