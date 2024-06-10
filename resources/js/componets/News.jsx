export default function  News({news}){
    
    return(
       <div className="BlogBody">
      
        {news.map((post) => (
        <div key={post.id} >
            <div className="Post">
                <div >
                <img className="PostImg" src={post.image} />
                </div>
                <div className="PostText">
                <h1>{post.title}</h1>
                <p>{post.main}</p>
                </div>

            </div>
        </div>
       ))}
       </div>
    )
}