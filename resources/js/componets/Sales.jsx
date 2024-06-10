import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Sales(){
    var settings={
        
        infinite:true,
        arrows:true,
        slidesToShow: 2,
        }
    return(
        
        <Slider {...settings}>
            <div><img src="storage/sales_img/sale1.jpg" /></div>    
            <div><img src="storage/sales_img/sale2.jpg"/></div>
            <div><img src="storage/sales_img/sale3.jpg"/></div>
            <div><img src="storage/sales_img/sale4.jpg"/></div>
            <div><img src="storage/sales_img/sale5.jpg"/></div>
            <div><img src="storage/sales_img/sale6.jpg"/></div>
            <div><img src="storage/sales_img/sale7.jpg"/></div>
                               
        </Slider>
        
        )
}