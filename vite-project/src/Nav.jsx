
// const pokemonCharacters =[ 'Charizard','Squirtle', 'Bulbasaur', 'Charmander', 'Weedle', 'Pikachu','Sandshrew']

// export default function Nav(){
//     const listItems = pokemonCharacters.map(poke =>
//         <li><a href="">{poke}</a></li>
//     );
//     return (

//         <ul>{listItems}</ul>
          
//     ) 
// }

 
// const navLinks = [ 'Home', 'Page 1', 'Page 2', 'About']


// export default function Nav(){
//     const navItems = navLinks.map(i =>
//         <li key={i}>{i}</li>
//     );
//     return (

//         <ul>{navItems}</ul>
          
//     ) 
// }
export default function Nav(){
   
    return (

        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="placeholderPage1.html">Page 1</a></li>
            <li><a href="placeholderPage2.html">Page 2</a></li>
            <li><a href="about.html">About</a></li>
            
        </ul>
          
    ) 
}