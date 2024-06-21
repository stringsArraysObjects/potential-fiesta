import Nav from "./Nav";
import Sidebar from "./Sidebar";



export default function App(){
 
   
    return (
       <>
         <header><h1>Fantastic</h1></header>
         <nav className="containter-nav">
            <Nav/>
         </nav>
         <div className="container-main">
            <section className="item item-type-a"></section>
            <section className="item item-type-b"></section>
            <section className="item item-type-b"></section>
            <section className="item container-inner">
               <section className="item-inner"><Sidebar/></section>
            </section>

         </div>
        
       </>
    )
   }         
      
       

        
           