import Alcohol from "../componets/Alcohol";
import Beer from "../componets/Beer";
import Cigarets from "../componets/Cigarets";
import Other from "../componets/Other";
import Snacks from "../componets/Snacks";
import Footer from "../componets/footer";
import Header from "../componets/header";

export default function  Catalog({beer,alcohol,snack,cigaret,other}){
    
    return(
       <>
       <Header />
       <Beer beers = {beer} />
       <Alcohol alcohols={alcohol} />
        <Snacks snacks={snack}/> 
        <Cigarets cigarets={cigaret} />
        <Other others={other} />

       <Footer />
       </>

    )
}