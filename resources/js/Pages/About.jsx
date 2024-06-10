import OficeMap from "../componets/OficeMap";
import Footer from "../componets/footer";
import Header from "../componets/header";
import "../../css/app.css"
import "../componets/ComponentsCss/Blog.css"
export default function About() {
    return (
        <>
            <Header />
            <div className="Post">
                
                
                
                    <div >
                    <OficeMap />
                    </div>
                    <div className="PostText">
                    
                    <h3>Ви неодноразово могли нас бачити, але не до кінця розуміти хто ми.<br/><br/> Мережа магазинів Akcent має понад 100 торгових точок у Волинській, Рівненській та Львівській областях.<br/><br/></h3><h3> Ми продаємо велику кількість, смачного, свіжого та головне якісного пива. Також не варто забувати про хороший алкоголь та смачні закуски.<br/><br/></h3>
                    <h3>Знайти наш головний офіс ви можете за адресою Бригадний двір, 15, Княгининок, Волинська область</h3>
                    </div>
                    
                    
               
                
            </div>
            <h2 className="MainText">Виникли питання? Зателефонуйте на гарячу лінію +380509090900</h2>
            <Footer />
        </>
    )
}
