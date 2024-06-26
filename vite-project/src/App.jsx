import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import MyCarousel from "./components/MyCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearhBar from "./components/SearchBar";


export default function App(){
 
   
    return (
       <>
         <header><h1><i>Fantastic</i></h1>
         <SearhBar/>
         </header>
         <MyCarousel/>
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
      
       

        
           