import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
export default function  Beer({beers}){
    var settings ={
        slidesToShow: 4,
    }
    return(
       <>
       <Slider {...settings}>
        {beers.map((beer) => (
        <div key={beer.id} >
            <div>
                <img src={beer.image} />
                <p>{beer.name}</p>
                <p>{beer.class}</p>
                <p>{beer.price}₴</p>

            </div>
        </div>
       )


    )}</Slider></>
    )
}

    // {trucks.map((truck) => (
    //     <div key={truck.id} className="m-3 bg-slate-200 size-1/3 rounded-xl flex justify-center">
    //         <div className="size-1/2 p-3 ">
    //             <ol>
    //                 <h1 className="font-bold text-lg text-center pb-4">{truck.name}</h1>
    //                 <li className="font-medium pb-2">Рік випуску: {truck.year}</li>
    //                 <li className="font-medium pb-2">Екологія: {truck.ecology}</li>
    //                 <li className="font-medium pb-2">Тип: {truck.type}</li>
    //                 <li className="font-medium pb-2">Максимальний вантаж: {truck.weight}т</li>
    //                 <li className="font-medium pb-2">Корисний об'єм: {truck.capacity}m3</li>
    //                 <li className="font-medium pb-2">Маршрути: {truck.routes}</li>
    //             </ol>
    //             {auth.user.role == 1 &&
    //                 <div>
    //                     <button
    //                         className="mt-3 text-center w-full bg-blue-300 rounded-md font-medium hover:bg-blue-400"
    //                         onClick={() => openUpdate(truck)}
    //                     >Редагувати</button>
    //                 </div>
    //             }