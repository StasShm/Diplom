import { Link, useForm } from '@inertiajs/react';
export default function Admin({auth}){
    const { data, setData, post, processing, reset } = useForm({
        email: "",
        password: "",
    });
    function submit(e) {
        e.preventDefault();
        post('login')
    }; 
    

    return(
        <>{auth?.user == null &&
           
         
        <form onSubmit={submit}>
                    <h1 className="text-center py-3 font-bold font text-xl font-comfortaa">Увійти</h1>
                    <div className="flex items-stretch flex-col">
                    <input
                        id="email"
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        className="mx-6 mb-6  w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400 " 
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Пароль"
                        className="mx-6 mb-6 block w-auto bg-white border-slate-200 
                        border-2 placeholder:px-3 placeholder-zinc-400"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                <button type="submit" className=" bg-sky-300 mx-32 rounded-md hover:bg-sky-500" disabled={processing}>Увійти</button>
                    </div>
                </form>
                
            }  
            <Link href="/admin/addnews">Додати новину</Link>
            
            <Link href="/admin/addalcohol">Додати алкоголь</Link>  
            <Link href="/admin/addcigarets">Додати цигарки</Link>
            <Link href="/admin/addsnacks">Додати снеки</Link>
            <Link href="/admin/addother">Додати інші товари</Link>
            </>         
    )
}