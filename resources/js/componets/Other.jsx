import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
export default function  Other({others}){
    var settings ={
        slidesToShow: 4,
        dots:true,
        infinite:true,
        slidesToScroll: 4,
    };
    return(
       <div className="Sliders"><Slider {...settings}>{others.map((other) => (
        <div key={other.id} >
            <div>
                <img src={other.image} />
                <p>{other.name}</p>
                <p>{other.type}</p>
                <p>{other.price}₴</p>

            </div>
        </div>
       )


    )}</Slider></div>
    )
}