import { Link, useForm } from '@inertiajs/react';

export default function Index({beers}){
    return(
        <>
        <Link href="/admin/beer/create">Додати пиво</Link>
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
 
 
     )}</>
     )}