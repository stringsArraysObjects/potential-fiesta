
const pokemonCharacters =[ 'Charizard','Squirtle', 'Bulbasaur', 'Charmander', 'Weedle', 'Pikachu','Sandshrew']

export default function Nav(){
    const listItems = pokemonCharacters.map(poke =>
        <li><a href="">{poke}</a></li>
    );
    return (

        <ul>{listItems}</ul>
          
    ) 
}