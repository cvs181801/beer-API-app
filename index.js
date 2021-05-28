async function getBeers() {
    const beerResponse = await fetch("https://api.punkapi.com/v2/beers");
    const beerResponseJson = await beerResponse.json();
    
    
    beerResponseJson.forEach((beer) => {
        const beers = document.querySelector(".beers");
        const beerDiv = document.createElement("div");
        let beerHTML = '';
        beerHTML += //`<h3>${beer.name}</h3>`;
        `
        <div class='beer-wrapper'>
            <div class='beer'>
                <img class='beer__img' src="${beer.image_url}">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${beer.abv}%</span>
                    <span>IBU: ${beer.ibu}</span>
                </span>
            </div>
                <div class='beer__content'>
                    <div class='beer__name'>${beer.name}</div>
                    <div class='beer__tagline'>${beer.tagline}</div>
                    <div class='beer__description'>${beer.description}</div>
                    <div class='beer__food-pairing'>
                    Pair with: ${beer.food_pairing}
                </div>
        </div>
       `; 
        beerDiv.innerHTML = beerHTML;
        beers.appendChild(beerDiv);
    })
}


getBeers()