import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function App(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        let ignore = false;
        fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json", {method:"Post", mode: "no-cors"})
        .then(response => response.json())
        .then(json => {
            if(!ignore){
                setData(json);
                console.log(json.insult)
            }else{
                ignore = true 
                return <Spinner fullPage /> 
            }
            });
            
            });
            
            
            return (
            <>
            <div>
            <span>{data.insult}</span>
            </div>

            </>
            )
}       
        
        // return (
        //     <>
        //         <div>
        //          <span>{json.insult}</span>
        //         </div>
        //         </>
        //     
            
            
            // if(!data) {
            //     return <Spinner fullPage />;
            // }