import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({snacks}){
    return(
        <div className="Tables">
        
        <table className="TableContainer">
            <thead>
            <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Класифікація</th>
                <th>Вага</th>
                <th>Шлях до фото</th>
            </tr>
            </thead>
            <tbody>
            {snacks.map((snack) => ( 
            <tr key={snack.id}>
            <th>{snack.name}</th>
            <th>{snack.class}</th>
            <th>{snack.mass}</th>
            <th>{snack.price}</th>
            <th>{snack.image}</th>
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/snacks/create" className="LinksOut">Додати снеки</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}