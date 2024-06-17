
const pokemonCharacters =[ 'Charizard','Squirtle', 'Bulbasaur', 'Charmander', 'Weedle', 'Pikachu','Sandshrew']

export default function List(){
    const listItems = pokemonCharacters.map(poke =>
        <li>{poke}</li>
    );
    return <ul>{listItems}</ul>
}