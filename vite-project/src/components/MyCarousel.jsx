import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
export default function MyCarousel () {
    return (
        <Carousel autoPlay infiniteLoop={true} showArrows={true} showThumbs={false} >
            <div className="carousel">
                    <a href=""><img src="/Images/linkedInProfilePicJuly2024Cropped.png"/></a>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="carousel">
                    <a href=""><img src="/Images/outdoorDiningFiltered.png"/></a>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="carousel">
                <a href=""><img src="/Images/Screenshot 2024-07-24 174711.png" /></a>
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