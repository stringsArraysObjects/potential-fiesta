import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight"


export default function SwiperControls (){
    const progress = document.getElementById("progress");
    return (
        
        <div className="music-player">
            <h1></h1>
            <p></p>
    
            <audio id="song">
            <source src="" type="audio/mpeg" />
            </audio>
    
            {/* <input type="range" value="0" id="progress" /> */}
    
            <div className="controls">
                <button className="backward">
                    <FontAwesomeIcon icon={faChevronLeft} className="fa-solid fa-chevron-left" />             
                </button>
                <button className="play-pause-btn">
                    <i className="fa-solid fa-play" id="controlIcon"></i>
                </button>
                <button className="forward">
                    <FontAwesomeIcon icon={faChevronRight} className="fa-solid fa-chevron-right"/>
                </button>
            </div>
        </div>
      
    
    )
}