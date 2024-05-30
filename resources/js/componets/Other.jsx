export default function  Other({others}){
    return(
       <>{others.map((other) => (
        <div key={other.id} >
            <div>
                <img src={other.image} />
                <p>{other.name}</p>
                <p>{other.type}</p>
                <p>{other.price}₴</p>

            </div>
        </div>
       )


    )}</>
    )
}