async function getBeers() {
    const beerResponse = await fetch("https://api.punkapi.com/v2/beers");
    const beerResponseJson = await beerResponse.json();
    
    
    beerResponseJson.forEach((beer) => {
        const beers = document.querySelector(".beers");
        const beerDiv = document.createElement("div");
        let beerHTML = '';
        beerHTML += 
        `
        <div class='beer-wrapper card'>
            <div class='beer'>
                <img class='beer__img' src="${}">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${farts}%</span>
                    <span>IBU: ${burps}</span>
                </span>
            </div>
        </div>
       `;
        beersDiv.innerHTML = beerHTML;
        beers.appendChild(beerDiv);
    })
}


getBeers()