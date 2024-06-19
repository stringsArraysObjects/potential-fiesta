import Nav from "./Nav";
import Sidebar from "./Sidebar";



export default function App(){
 
   
    return (
       <>
         <header><h1>Fantastic</h1></header>
         <nav class="containter-nav">
            <Nav/>
         </nav>
         <div class="container-main">
            <section class="item item-type-a"></section>
            <section class="item item-type-b"></section>
            <section class="item item-type-b"></section>
            <section class="item container-inner">
               <section className="item-inner"><Sidebar/></section>
            </section>

         </div>
        
       </>
    )
   }         
      
       

        
           