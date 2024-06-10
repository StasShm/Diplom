import Sales from "../componets/Sales";
import Footer from "../componets/footer";
import Header from "../componets/header";
import Map from "../componets/Map";
import "../../css/Main.css"

export default function Main({markers}){
    return(
       <>
       <Header  />
       
            <h1 className="MainText">Ми поруч, заходьте</h1>
            <Map markers={markers}/>
            
            <h1 className="MainText">Актуальні акції</h1>
            <div className="MainSlider"><Sales /></div>
            
       <Footer />
       </>
    )
}
