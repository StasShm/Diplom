import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
export default function  Snacks({snacks}){
    return(
       <><Slider>{snacks.map((snack) => (
        <div key={snack.id} >
            <div>
                <img src={snack.image} />
                <p>{snack.name}</p>
                <p>{snack.mass}</p>
                <p>{snack.class}</p>
                <p>{snack.price}₴</p>

            </div>
        </div>
       )


    )}</Slider></>
    )
}