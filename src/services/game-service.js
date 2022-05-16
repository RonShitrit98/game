import { storageService } from "./async-storage-sevice";
export const gameService = {
    query,
    getById
}

const GAME_KEY = 'gameDB'

async function query() {
    var games = await storageService.query(GAME_KEY)
    console.log(games)
    if (!games[0] || !games.length) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '82feba1f61msh1b562c02cad59f1p1781ddjsndf589b7e24e5'
            }
        };

        return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
            .then(response => response.json())
            .then(response => {
                storageService.postMany(GAME_KEY, response)
                games = response
            })
            .catch(err => console.error(err));
    }
    return games
}

async function getById(id){
    console.log(id)
    const games = await query()
    const game = games.find(game => game.id === +id)
    console.log(game)
    return game
}