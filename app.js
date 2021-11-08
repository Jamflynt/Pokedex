// POKEDEX Project 

const pokeContainer = document.querySelector(`#container`);
// Number of Pokemon (aka Objects) using the first 150 Pokemon in the PokeAPI
const numbOfPokemon = 150;

// The createPokeCard function creates a new card (aka section element) and adds the new card to the DOM inside of the div with the id of "container"
function createPokeCard (pokemon) {
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text
    pokeCard.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}