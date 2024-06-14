
import { useEffect, useState } from "react";
import dataFetching from "./components/utilities";


export default function App(){
 const [data, setData] = useState("terrific");

 
    
    useEffect(() =>{
      let ignore = false;
      dataFetching(data).then(result =>{
            if(!ignore){
               setData(result);
            }
      });
      return ()=> {
         ignore = true;
      };
    },[data]);

    return (
      <>
         <div>
            <p>{data}</p>
         </div>
      </>
    )
   }         
      
       

        
           