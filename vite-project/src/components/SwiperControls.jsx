
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
                    <i className="fa-solid fa-backward"></i>
                </button>
                <button className="play-pause-btn">
                    <i className="fa-solid fa-play" id="controlIcon"></i>
                </button>
                <button className="forward">
                    <i className=" fa-solid fa-forward"></i>
                </button>
            </div>
        </div>
      
    
    )
}