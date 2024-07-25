import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import MyCarousel from "./components/MyCarousel";
import { Footer } from "./components/Footer";


export default function App(){
 
   
    return (
      <>
         <header><h1><i>Hi There!</i></h1></header>
         <div className="container-main">
            <section className="item item-type-a"><MyCarousel/></section>
            <section className="item item-type-b">
               <nav className="container-nav">
                 <Nav/>
               </nav>
            </section>
         </div>
         <footer className="footer">
               <Footer />
         </footer>
      </>
       
    )
   }         
      
       

        
           