import { useForm } from '@inertiajs/react';
export default function Create(){
    const { data, setData, post, processing, reset } = useForm({
        x: "",
        y: "",
        adress: "",
        

        });
        function submit(e) {
            e.preventDefault();
            post('/admin/markers/create',{
                onFinish: () => reset(),
            });}
    return(
        <form onSubmit={submit}>
                    
                    <div className="flex items-stretch flex-col">
                    <input
                        id="x"
                        name="x"
                        value={data.x}
                        placeholder="X-координата"
                        className="mx-6 mb-6  w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400 " 
                        onChange={(e) => setData("x", e.target.value)}
                    />
                    <input
                        id="y"
                        name="y"
                        value={data.y}
                        placeholder="Y-координата"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("y", e.target.value)}
                    />
                    <input
                        id="adress"
                        name="adress"
                        value={data.adress}
                        placeholder="Адреса"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        onChange={(e) => setData("adress", e.target.value)}
                    />
                    
                <button type="submit" className=" bg-sky-300 mx-32 rounded-md hover:bg-sky-500" disabled={processing}>Створити</button>
                    </div>
                </form>
                
            
    )
}
