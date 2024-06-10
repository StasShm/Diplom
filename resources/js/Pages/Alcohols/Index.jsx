import { Link } from "@inertiajs/react"
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({alcohols}){
    return(
        <div className="Tables">
        
        <table className="TableContainer">
            <thead>
            <tr>
                <th>Назва</th>
                <th>Класифікація</th>
                <th>Об'єм</th>
                <th>Ціна</th>
                <th>Шлях до фото</th>
            </tr>
            </thead>
            <tbody>
            {alcohols.map((alcohol) => ( 
            <tr key={alcohol.id}>
            <th>{alcohol.name}</th>
            <th>{alcohol.class}</th>
            <th>{alcohol.volume}</th>
            <th>{alcohol.price}</th>
            <th>{alcohol.image}</th>
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/alcohols/create" className="LinksOut">Додати алкоголь</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}