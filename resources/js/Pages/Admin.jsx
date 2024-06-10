import { Link, useForm } from '@inertiajs/react';
import "../../css/Admin.css"
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
        <><div className='Form'>{auth?.user == null &&
           
         
        <form onSubmit={submit} className='LoginForm'>
                    <h1>Увійти</h1>
                    <div className="flex items-stretch flex-col">
                    <input
                        id="email"
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        className="AdminInput" 
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Пароль"
                        className="AdminInput"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                <button type="submit" className=" LoginButton" disabled={processing}>Увійти</button>
                    </div>
                    
                </form>
                
                
            }  </div>
            <div className='LinksHolder'>
            <Link href="/admin/news/index" className='Links'>Новини</Link><br/>
            <Link href="/admin/markers/index" className='Links'>Маркери</Link><br/>
            <Link href="/admin/alcohols/index" className='Links'>Алкогольні напої</Link><br/>
            <Link href="/admin/cigarets/index" className='Links'>Цигарки</Link><br/>
            <Link href="/admin/snacks/index" className='Links'>Снеки</Link><br/>
            <Link href="/admin/others/index" className='Links'>Інші товари</Link><br/>
            <Link href="/admin/beers/index" className='Links'>Пиво</Link><br/>
            
            </div>
            <div className='LinksOutHolder'>
            <Link href="/" className='LinksOut'>На головну</Link>
            { auth.user &&
            <Link href="/logout" method="post" className='LinksOut' as='button'>Вийти</Link>
            }       
            </div>

            </>             
    )
}