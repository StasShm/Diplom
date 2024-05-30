import { useForm } from '@inertiajs/react';
import Alcohol from '../../componets/Alcohol';
export default function Edit({alcohol}){
    const { data, setData, put, processing, reset } = useForm({
        name: alcohol.name,
        price: alcohol.price,
        class: alcohol.class,
        volume: alcohol.volume,
        image: alcohol.image,
        });
        function submit(e) {
            e.preventDefault();
            put('alcohol.update')
        }; 
    return(
        <form onSubmit={submit}>
                    
                    <div className="flex items-stretch flex-col">
                    <input
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Назва"
                        className="mx-6 mb-6  w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400 " 
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <input
                        id="price"
                        name="price"
                        value={data.price}
                        placeholder="Ціна"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    <input
                        id="volume"
                        name="volume"
                        value={data.volume}
                        placeholder="Об'єм"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    <input
                        id="class"
                        name="class"
                        value={data.class}
                        placeholder="Класифікація"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("class", e.target.value)}
                    />
                    <input
                        id="image"
                        name="image"
                        value={data.image}
                        placeholder="Шлях до фото"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("image", e.target.value)}
                    />
                <button type="submit" className=" bg-sky-300 mx-32 rounded-md hover:bg-sky-500" disabled={processing}>Змінити</button>
                    </div>
                </form>
                
            
    )
}