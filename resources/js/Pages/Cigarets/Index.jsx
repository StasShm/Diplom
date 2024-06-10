import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({cigarets}){
    return(
        <div className="Tables">
        
        <table className="TableContainer">
            <thead>
            <tr>
                <th>Назва</th>
                <th>Ціна</th>
                <th>Нікотин</th>
                <th>Шлях до фото</th>
            </tr>
            </thead>
            <tbody>
            {cigarets.map((cigaret) => ( 
            <tr key={cigaret.id}>
            <th>{cigaret.name}</th>
            <th>{cigaret.nicotine}</th>
            <th>{cigaret.price}</th>
            <th>{cigaret.image}</th>
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/cigarets/create" className="LinksOut">Додати цигарки</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}