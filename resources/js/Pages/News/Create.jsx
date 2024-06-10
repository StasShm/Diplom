import { useForm,Link } from '@inertiajs/react';
import "../../../css/Admin.css"
import "../../../css/Create.css"
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
            });};
    return(
        <><form onSubmit={submit} className='Form'>
                    
                    <div className="FormInputWrapper">
                    <input
                        id="image"
                        name="image"
                        value={data.image}
                        placeholder="Шлях до фото"
                        className="FormInput" 
                        onChange={(e) => setData("image", e.target.value)}
                    />
                    <input
                        id="title"
                        name="title"
                        value={data.title}
                        placeholder="Заголовок"
                        className="FormInput"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <input
                        id="main"
                        name="main"
                        value={data.main}
                        placeholder="Новина"
                        className="FormInput" 
                        onChange={(e) => setData("main", e.target.value)}
                    />
                   
                
                    </div>
                    <button type="submit" className="LinksOut" disabled={processing}>Створити</button>
                <Link href='/admin/news/index' className="LinksOut">Повернутися</Link>
                </form>
                
                </>
    )
}