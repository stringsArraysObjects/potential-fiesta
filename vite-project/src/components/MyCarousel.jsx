import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel () {
    return (
        <Carousel autoPlay showArrows={true} showThumbs={false} >
            <div className="carousel">
                    <a href=""><img src="/static/img/linkedInProfilePicJuly2024Cropped.png"/></a>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="carousel">
                    <a href=""><img src="/static/img/outdoorDiningFiltered.png"/></a>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="carousel">
                <a href=""><img src="/static/img/Screenshot 2024-07-24 174711.png" /></a>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                {/* <div className="carousel">
                <a href=""><img src="src/assets/img/hotelLobby1.JPG" /></a>
                    <p className="legend">Legend 4</p>
                </div>
                <div className="carousel">
                <a href=""><img src="src/assets/img/hotelDining1.JPG" /></a>
                    <p className="legend">Legend 5</p>
                </div> */}
        </Carousel>
    )
}