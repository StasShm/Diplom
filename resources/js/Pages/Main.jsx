import Sales from "../componets/Sales";
import Footer from "../componets/footer";
import Header from "../componets/header";
import Map from "../componets/Map";
// import Map from "../componets/Map";
export default function Main({markers}){
    return(
       <>
       <Header />
            <h1>Ми поруч, заходьте</h1>
            <Map markers={markers}/>
            
            <h1>Актуальні акції</h1>
            <Sales />
            <h2>Виникли питання? Зателефонуйте нам +380ХХХХХХХХХ</h2>
       <Footer />
       </>
    )
}
