import { useForm,Link } from '@inertiajs/react';
export default function Create(){
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        price: "",
        nicotine: "",
        image: "",
        });
        function submit(e) {
            e.preventDefault();
            post('/admin/cigarets/create',{
                onFinish: () => reset(),
            });};
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
                        id="nicotine"
                        name="nicotine"
                        value={data.nicotine}
                        placeholder="Нікотин/смоли"
                        className="FormInput"
                        onChange={(e) => setData("nicotine", e.target.value)}
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
                    <Link href='/admin/cigarets/index' className="LinksOut">Повернутися</Link>
                </form>
                </>
            
    )
}
