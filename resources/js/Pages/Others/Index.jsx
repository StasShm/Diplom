import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({others}){
    return(
        <div className="Tables">
        
        <table table className="TableContainer">
            <thead>
            <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Тип</th>
                <th>Шлях до фото</th>
            </tr>
            </thead>
            <tbody>
            {others.map((other) => ( 
            <tr key={other.id}>
            <th>{other.name}</th>
            <th>{other.price}</th>
            <th>{other.type}</th>
            <th>{other.image}</th>
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/others/create" className="LinksOut">Додати інший товар</Link>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}