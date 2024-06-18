
const pokemonCharacters =[ 'Charizard','Squirtle', 'Bulbasaur', 'Charmander', 'Weedle', 'Pikachu','Sandshrew']

export default function List(){
    const listItems = pokemonCharacters.map(poke =>
        <li><a href="">{poke}</a></li>
    );
    return <ul>{listItems}</ul>
}