import { useForm } from '@inertiajs/react';
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
                        id="type"
                        name="type"
                        value={data.type}
                        placeholder="Класифікація"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("type", e.target.value)}
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
                <button type="submit" className=" bg-sky-300 mx-32 rounded-md hover:bg-sky-500" disabled={processing}>Створити</button>
                    </div>
                </form>
                
            
    )
}
