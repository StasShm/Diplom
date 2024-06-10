import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({news}){
    return(
        <div className="Tables">
        
        <table className="TableContainer">
            <thead>
            <tr>
                <th>X-координата</th>
                <th>Y-координата</th>
                <th>Адреса</th>
            </tr>
            </thead>
            <tbody>
            {news.map((news) => ( 
            <tr key={news.id}>
            <th>{news.image}</th>
            <th>{news.title}</th>
            <th>{news.main}</th>
            
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/news/create" className="LinksOut">Додати новини</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}