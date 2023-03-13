import './Home.css';
import { useState } from 'react';
import Result from '../result/Result';
// import Pagination from '../pagination/Pagination'

const datas = [
    {id: 1, title: 'Product1', price: '100$', img: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg', author: 'Dydy', detail: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {id: 2, title: 'Product2', price: '200$', img: 'https://cdn.pixabay.com/photo/2019/10/23/20/40/landscape-4572804__480.jpg', author: 'Pypy', detail: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {id: 3, title: 'Product3', price: '300$', img: 'https://img.freepik.com/free-photo/girl-lift-her-hands-sky-feel-freedom_1204-253.jpg?w=360', author: 'Kyky', detail: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {id: 4, title: 'Product4', price: '400$', img: 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__480.jpg', author: 'Tyty', detail: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    {id: 5, title: 'Product5', price: '500$', img: 'https://images.unsplash.com/photo-1529259412305-4e143a297430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80', author: 'Sysy', detail: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
];
function Home() {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] =  useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');

    const ifClick = (id) => {
        // my problem: the first click can be apprear and not appear.
        datas.forEach((data)=>{
            if (data.id === id ){
                setImage(data.img);
                setTitle(data.title)
                setAuthor(data.author);
                setPrice(data.price);
                setDetail(data.detail);
            }
        })
    }
    return (
        <div>
            <p className='title'>Own create data and use only one component is HOME.jsx</p>
            <div className="container">
                <div className='da'>
                    {/* datas && datas.map(())..., I misunderstand here.*/}
                    {/* Not work smoothly */}
                    {datas.map((data)=>(
                        <div className="data" key={data.id}>
                            <div onClick={() => ifClick(data.id)} id={data.id} className="card m-3 p-3">
                                <h3>{data.title}</h3>
                                <h5>{data.price}</h5>
                            </div>
                        </div>
                    ))}
                    
                    <div className='paginate'>
                        {datas.map((d)=>(
                            <div key={d.id}>
                                <div onClick={() => ifClick(d.id)} id={d.id} className="pagi paginate">
                                    {d.id}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
                
                                {/* show card of each data (solve) */}
                <div className='detail card w-result m-3 p-3'>
                    {/* If we put style on child component which are in parent component, it is not work. */}
                    <Result image={image} />
                    <Result title={title} />
                    <Result author={author} />
                    <Result price={price} />
                    <Result detail={detail} />  
                </div>  
            </div>

        </div> 
    )
}

export default Home