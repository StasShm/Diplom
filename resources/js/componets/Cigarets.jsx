export default function  Cigarets({cigarets}){
    return(
       <>{cigarets.map((cigaret) => (
        <div key={cigaret.id} >
            <div>
                <img src={cigaret.image} />
                <p>{cigaret.name}</p>
                <p>{cigaret.nicotine} нікотину/смол</p>
                <p>{cigaret.price}₴</p>

            </div>
        </div>
       )


    )}</>
    )
}