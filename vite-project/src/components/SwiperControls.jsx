import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons/faChevronRight"
import {faPlay} from "@fortawesome/free-solid-svg-icons/faPlay"
import {useSwiper} from 'swiper/react'

export default function SwiperControls (){
  let swiper = useSwiper();

    return (
        
        <div className="music-player">
            <h1></h1>
            <p></p>
    
            <audio id="song">
            <source src="" type="audio/mpeg" />
            </audio>
    
            {/* <input type="range" value="0" id="progress" /> */}
    
            <div className="controls">
                <button onClick={() => swiper.slidePrev(1)} className="backward">
                    <FontAwesomeIcon icon={faChevronLeft} className="fa-solid fa-chevron-left" />             
                </button>
                <button className="play-pause-btn">
                    <FontAwesomeIcon icon={faPlay} className="fa-solid fa-play" id="controlIcon"/>
                </button>
                <button onClick={() => swiper.slideNext('active')} className="forward">
                    <FontAwesomeIcon icon={faChevronRight} className="fa-solid fa-chevron-right"/>
                </button>
            </div>
        </div>
      
    
    )
}