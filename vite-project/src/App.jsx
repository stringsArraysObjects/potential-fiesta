
import { useEffect, useState } from "react";
import List from "./List";

const apiURL = ("https://evilinsult.com/generate_insult.php?lang=en&type=json")

export default function App(){
 const [data, setData] = useState("terrific");

    useEffect(() =>{
      fetch(apiURL).then(result =>{
         if(!ignore){
            setData(result.json())
            console.log(result)

         } 
        
      });
         return () => {
            ignore = true
         };     
      },[]);
   
    return (
       <>
        <nav class="containter-nav"><List/></nav>
         <section className="item item-type-a">
            <h1>Fantastic</h1>
         </section>
         <section className="item item-type-b"><p>{data}</p></section>
         
       </>
    )
   }         
      
       

        
           