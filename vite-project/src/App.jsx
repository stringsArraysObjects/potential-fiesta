import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import MyCarousel from "./components/MyCarousel";
import { Footer } from "./components/Footer";


export default function App(){
 
   
    return (
       <>
         <header><h1><i>Hi There!</i></h1>
       
         </header>
         <div className="casousel-container">
            <MyCarousel/>
         </div>
         <nav className="container-nav">
            <Nav/>
         </nav>
         {/* <div className="container-main">
            <section className="item item-type-a"></section>
            <section className="item item-type-b"></section>
            <section className="item item-type-b"></section>
            </div> */}
            <section className="item container-inner">
               <section className="item-inner"><Sidebar/></section>
            </section>
            <footer className="footer">
               <Footer />
            </footer>
       </>
    )
   }         
      
       

        
           