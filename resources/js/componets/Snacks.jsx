export default function  Snacks({snacks}){
    return(
       <>{snacks.map((snack) => (
        <div key={snack.id} >
            <div>
                <img src={snack.image} />
                <p>{snack.name}</p>
                <p>{snack.mass}</p>
                <p>{snack.class}</p>
                <p>{snack.price}₴</p>

            </div>
        </div>
       )


    )}</>
    )
}