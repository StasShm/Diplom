import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
export default function Alcohol({ alcohols }) {
    var settings = {
        slidesToShow: 4, 
      };
    return (
        <>
        
            <Slider {...settings}>
                {alcohols.map((alcohol) => (

                    <div key={alcohol.id} >

                        <div>
                            <img src={alcohol.image} />
                            <p>{alcohol.name}</p>
                            <p>{alcohol.class}</p>
                            <p>{alcohol.volume}Л</p>
                            <p>{alcohol.price}₴</p>
                        </div>

                    </div>

                ))}
            </Slider></>
    )
}