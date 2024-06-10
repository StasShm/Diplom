import Header from "../componets/header";
import Footer from "../componets/footer";
import News from "../componets/News";
import "../componets/ComponentsCss/Blog.css"
import "../../css/app.css"

export default function Blog({news}) {
    return (
            <>
            <Header />
            <News news={news}/>
            <Footer />
            </>
    )
}
