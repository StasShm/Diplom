import { useForm,Link } from '@inertiajs/react';
import "../../../css/Admin.css"
import "../../../css/Create.css"
export default function Create(){
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        price: "",
        type: "",
        image: "",
        });
        function submit(e) {
            e.preventDefault();
            post('/admin/others/create',{
                onFinish: () => reset(),
            });}
    return(
        <><form onSubmit={submit} className='Form'>
                    
                    <div className="FormInputWrapper">
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Назва"
                        className="FormInput"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <input
                        id="price"
                        name="price"
                        value={data.price}
                        placeholder="Ціна"
                        className="FormInput"
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    <input
                        id="type"
                        name="type"
                        value={data.type}
                        placeholder="Класифікація"
                        className="FormInput"
                        onChange={(e) => setData("type", e.target.value)}
                    />
                    
                    <input
                        id="image"
                        name="image"
                        value={data.image}
                        placeholder="Шлях до фото"
                        className="FormInput"
                        onChange={(e) => setData("image", e.target.value)}
                    />
                
                    </div>
                    <button type="submit" className="LinksOut" disabled={processing}>Створити</button>
                    <Link href='/admin/others/index' className="LinksOut">Повернутися</Link>
                </form></>
                
            
    )
}
