import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel () {
    return (
        <Carousel autoPlay showArrows={true} showThumbs={false} >
            <div className="carousel">
                    <a href=""><img src="src/assets/img/hotelDining1.JPG"/></a>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carousel">
                    <a href=""><img src="src/assets/img/hotelGardenDining1.JPG"/></a>
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel">
                <a href=""><img src="src/assets/img/hotelLobby1.JPG" /></a>
                    <p className="legend">Legend 3</p>
                </div>
                <div className="carousel">
                <a href=""><img src="src/assets/img/hotelLobby2.JPG" /></a>
                    <p className="legend">Legend 4</p>
                </div>
                <div className="carousel">
                <a href=""><img src="src/assets/img/hotelRoomBath1.JPG" /></a>
                    <p className="legend">Legend 5</p>
                </div>
        </Carousel>
    )
}