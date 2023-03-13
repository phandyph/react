import { useState, useEffect} from "react";
import Display from "./display/Display";
import 'semantic-ui-css/semantic.min.css';
import Add from './add/Add';
import axios from "axios";
import './Crud.css';

const URL='https://api.restful-api.dev/objects';
/**
 * Parent component, we create crudment in it. 
 */

const Crud = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false);

    /**
     * get or fetch data from dev url. Return all data
     */
    useEffect(()=>{
        //I observe that, however we use get or not, it display datas.
        axios.get(URL)
        .then(datas=>{
            setLoading(true);
            setDatas(datas.data)
        })
    },[])
    console.log(loading);

    return (
        <div className="crud-container">
            {/* <NavLink className='rounded add-btn btn bg-primary text-white' exact="true" to='/add'>ADD</NavLink> */}
            <Add 
            />
            <Display 
                datas={datas}
            />
        </div>
    )
}

export default Crud;