export default function  Alcohol({alcohols}){
    return(
       <>
       {alcohols.map((alcohol) => (
        <div key={alcohol.id} >
            <div>
                <img src={alcohol.image}/>
                <p>{alcohol.name}</p>
                <p>{alcohol.class}</p>
                <p>{alcohol.volume}Л</p>
                <p>{alcohol.price}₴</p>
            </div>
        </div>
       )


    )}</>
    )
}