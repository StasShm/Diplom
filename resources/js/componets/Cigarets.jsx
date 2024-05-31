import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
export default function  Cigarets({cigarets}){
    return(
       <>
       <Slider>
       {cigarets.map((cigaret) => (
        <div key={cigaret.id} >
            <div>
                <img src={cigaret.image} />
                <p>{cigaret.name}</p>
                <p>{cigaret.nicotine} нікотину/смол</p>
                <p>{cigaret.price}₴</p>

            </div>
        </div>
       )


    )}</Slider></>
    )
}