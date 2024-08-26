import { useState, useEffect } from "react";

function Pokemon() {
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('https://pokeapi.co/api/v2/pokemon/butterfree')
                data = await response.json()
                 return setData(data);
             
                }catch (error){
                    console.error('Error fetching data:', error)
                }
            };
            fetchData()
            console.log(data)
        },[])
        return (
            <div>
                
                    
                    <h3>{data.name}</h3>
                    <img src={data.sprites.other['official-artwork'].front_default} />
                
               
            </div>
        )
    }

export default Pokemon


// const url = `https://pokeapi.co/api/v2/pokemon/${name}`
// const url2 = 'https://pokeapi.co/api/v2/ability/battle-armor'
// getAbility(url2)
// getData(url)
// })

// async function getAbility(url2) {
// try {
//  const response = await fetch(url2);
//  if (!response.ok) {
//    throw new Error(`Response status: ${response.status}`);
//  }

//  const data = await response.json();

//   document.querySelector('#flavorHeader').innerHTML = 'flavor:'
//   document.querySelector('#abilityPara').innerHTML = data.flavor_text_entries[10].flavor_text

//  console.log(data);
// } catch (error) {
//    console.error(error.message);
// }

// }


// async function getData(url) {
// try {
//  const response = await fetch(url);
//  if (!response.ok) {
//    throw new Error(`Response status: ${response.status}`);
//  }

//  const data = await response.json();
//  document.querySelector('#staticNamePic').src =  data.sprites.other['official-artwork'].front_default   
//  document.querySelector('#staticName').innerText = data.name