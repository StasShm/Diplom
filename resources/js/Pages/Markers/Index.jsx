import { Link, useForm } from '@inertiajs/react';
import "../../../css/AdminTables.css"
import "../../../css/Admin.css"
export default function Index({markers}){
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
            {markers.map((marker) => ( 
            <tr key={marker.id}>
            <th>{marker.x}</th>
            <th>{marker.y}</th>
            <th>{marker.adress}</th>
            
            
            </tr>
            
            ))} 
            </tbody>
        </table>
        <Link href="/admin/markers/create" className="LinksOut">Додати маркери</Link><br/>
        <Link href="/admin" className="LinksOut">Повернутися</Link>
        </div>
     )}