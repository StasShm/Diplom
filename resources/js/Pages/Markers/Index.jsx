import { Link, useForm } from '@inertiajs/react';

export default function Index({cigarets}){
    return(
        <>
        <Link href="/admin/cigaret/create">Додати пиво</Link>
        {cigarets.map((cigaret) => (
         <div key={cigaret.id} >
             <div>
                 <img src={cigaret.image} />
                 <p>{cigaret.name}</p>
                 <p>{cigaret.class}</p>
                 <p>{cigaret.price}₴</p>
 
             </div>
             
         </div>
        )
 
 
     )}</>
     )}