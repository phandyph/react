import './About.css';
import { useEffect, useState } from 'react';
import DataDisplay from '../datadisplay/DataToDisplay';
import Pagination from '../pagination/Pagination';

let URL = 'https://jsonplaceholder.typicode.com/users'
function About() {
    const [users, setUser] = useState([]);
    /**
     * Load only one time when we render.
     */
    const [loading, setLoading] = useState(true);

    // UseEffect, it show many time in console.
    useEffect(()=>{
        fetch(URL)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setLoading(false)
            setUser(data)
        })
        .catch(e=>{
            console.log(e)
        })

    },[])


    return (
        <div className='about'>
            <p>Data get from API and use child component are Post component and Navigation Component</p>
            <Pagination users={users}/>
            {loading?'loading':
            <DataDisplay users={users}/>
            }
        </div>
    )
}

export default About