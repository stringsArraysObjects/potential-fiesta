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
            
        },[])
        return (
            <div>
                
                    
                    <h3>{data.name}</h3>
                    <img src={data.sprites.other['official-artwork'].front_default} alt="" />
                
               
            </div>
        )
    }

export default Pokemon




