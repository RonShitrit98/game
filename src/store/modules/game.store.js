import {gameService} from '../../services/game-service'
export const gameStore = {
    state: {
        games: null
    },
    getters: {
        games(state){
            return state.games
        }
    },
    mutations: {
        setGames(state, {games}){
            state.games = games
            console.log(state)
        }
    },
    actions: {
        async getGames({commit}){
            console.log('sdklgjdfkgjbdfg')
            const games = await gameService.query()
            commit({type:'setGames', games})
        },
       async  getGameById({commit},{gameId}){
           console.log(gameId)
          const game = await gameService.getById(gameId)
          return game
        }
    }
};