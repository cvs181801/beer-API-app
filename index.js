async function getBeers() {
    const beerResponse = await fetch("https://api.punkapi.com/v2/beers");
    const beerResponseJson = await beerResponse.json();
    
    
    beerResponseJson.forEach((beer) => {
        const beers = document.querySelector(".beers");
        const beerDiv = document.createElement("div");
        beerDiv.innerText = `${beer.name}`;
        beers.appendChild(beerDiv);
    })
}


getBeers()