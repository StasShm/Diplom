import { Link, useForm } from '@inertiajs/react';

export default function Index({snacks}){
    return(
        <>{snacks.map((snack) => (
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
 
 
     )}</>
     )}