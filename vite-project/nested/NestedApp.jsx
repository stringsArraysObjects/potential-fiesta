import React from "react";
import Footer from "/src/components/Footer.jsx"
import Pokemon from "../src/components/Pokemon";
export default function NestedApp(){
 
   
    return (
    
      <>
       <header>
        <h2>Howdy! I'm Mason,</h2>
       </header>
       <main>
         <h3>Follow the links below to connect with me.
         <br/>Thanks for stopping by.
         </h3>
         <Pokemon/>
       </main>
         <footer>
            <Footer />  
         </footer>
      
      </>
       
       
   
        
       
        
    


    
         
               
    
       
    )
   }         