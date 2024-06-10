import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({beers}){
    return(
        <div className="Tables">
        
        <table className="TableContainer">
            <thead>
            <tr>
                <th>Назва</th>
                <th>Класифікація</th>
                <th>Ціна</th>
                <th>Шлях до фото</th>
            </tr>
            </thead>
            <tbody>
            {beers.map((beer) => ( 
            <tr key={beer.id}>
            <th>{beer.name}</th>
            <th>{beer.class}</th>
            <th>{beer.price}</th>
            <th>{beer.image}</th>
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/beers/create" className="LinksOut">Додати пиво</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}
        
     