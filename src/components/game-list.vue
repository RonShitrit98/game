<template>
    <section class="game-list">
        <ul>
            <li class="game-card" v-for="game in games" :key="game.id" @click="getDetails(game)">

                <img :src="game.thumbnail" />
                <h2>{{ game.title }}</h2>
                <div class="game-card-details-hover">
                    <p>{{game.genre}}</p>
                    <p>{{game.publisher}}</p>
                    <p>{{game.platform}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        games: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getDetails(game) {
            this.$router.push('/game/' + game.id)
        }
    }

}
</script>