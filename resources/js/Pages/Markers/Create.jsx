import { useForm,Link } from '@inertiajs/react';
import "../../../css/Admin.css"
import "../../../css/Create.css"
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
        <><form onSubmit={submit} className='Form'>
                    
                    <div className="FormInputWrapper">
                    <input
                        id="x"
                        name="x"
                        value={data.x}
                        placeholder="X-координата"
                        className="FormInput"
                        onChange={(e) => setData("x", e.target.value)}
                    />
                    <input
                        id="y"
                        name="y"
                        value={data.y}
                        placeholder="Y-координата"
                        className="FormInput"
                        onChange={(e) => setData("y", e.target.value)}
                    />
                    <input
                        id="adress"
                        name="adress"
                        value={data.adress}
                        placeholder="Адреса"
                        className="FormInput"
                        onChange={(e) => setData("adress", e.target.value)}
                    />
                    
                
                    </div>
                    <button type="submit" className="LinksOut" disabled={processing}>Створити</button>
                    <Link href='/admin/markers/index' className="LinksOut">Повернутися</Link>
                </form>
                </>
            
    )
}
