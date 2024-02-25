
let card = document.querySelector('.card')

async function jogos() {
    try{
        const apiKey = 'f39f7c60209849bbb2c3d08d9f8f1e55';

        const response = await axios.get(`https://rawg.io/api/games?token&key=${apiKey}`)

        const games = response.data.results.slice(0, 3);

        console.log(games);

        // i terar sobre os cards e definir as imagens
        const imagens = document.querySelectorAll('.card-img-top');
        const $h5 = document.querySelectorAll('.card-title');

        games.forEach((game, index) => {
            imagens[index].src = game.background_image;
            $h5[index].textContent = game.name
        });

    } catch (err) {
        console.error('Erro na requisição:', err);
    }
}

jogos();


/*
gta - 271590
the witcher - 112330
portal - 82
*/

// async function buscarJogos(){
//     try {
//         const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=portal`)
//         const data = response.data;
//         console.log(data)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// buscarJogos()