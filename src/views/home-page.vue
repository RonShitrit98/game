<template>
<router-link to="/game">go to games</router-link>
</template>


<script>
import gameList from "../components/game-list.vue"
export default {
  data() {
    return {
      games: null
    }
  },
  methods: {
    async getGames() {
      const games = await this.$store.dispatch({ type: 'getGames' })
      this.games = games
    }
  },
  components: { gameList }
}
</script>

