async function game() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const gameParam = urlParams.get('g');

        const cdn = await (await fetch("./Hosting/CDN.json")).json();
        const games = await (await fetch(cdn + "list.json")).json();
        const gameObject = games.find(game => game.game === gameParam);

        if (gameObject) {
            const iframey = document.getElementById('iframey');
            iframey.src = (cdn + gameObject.gameroot);
        } else {
            console.log('Game not found in the list.');
        }
    } catch (error) {
        console.error(error);
    }
}

game();