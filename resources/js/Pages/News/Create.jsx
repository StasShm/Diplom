import { useForm } from '@inertiajs/react';
export default function Create(){
    const { data, setData, post, processing, reset } = useForm({
        image: "",
        title: "",
        main: "",

        });
        function submit(e) {
            e.preventDefault();
            post('/admin/news/create',{
                onFinish: () => reset(),
            });}
    return(
        <form onSubmit={submit}>
                    
                    <div className="flex items-stretch flex-col">
                    <input
                        id="image"
                        name="image"
                        value={data.image}
                        placeholder="Шлях до фото"
                        className="mx-6 mb-6  w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400 " 
                        onChange={(e) => setData("image", e.target.value)}
                    />
                    <input
                        id="title"
                        name="title"
                        value={data.title}
                        placeholder="Заголовок"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <input
                        id="main"
                        name="main"
                        
                        value={data.main}
                        placeholder="Новина"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("main", e.target.value)}
                    />
                   
                <button type="submit" className=" bg-sky-300 mx-32 rounded-md hover:bg-sky-500" disabled={processing}>Створити</button>
                    </div>
                </form>
                
            
    )
}