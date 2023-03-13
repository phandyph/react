import { useState } from "react";
import './Add.css';
import { Modal } from 'semantic-ui-react'
import axios from "axios";


const Add = () => {
    const [id, setId] = useState(1);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const [description, setDescription] = useState({});
    
    console.log(name);
    console.log(age);
    console.log(job);
    console.log(description);

    const onAdd = () => {
        setId(id+1)
        setName('')
        setJob('')
        setAge('')
        setDescription({job, age})
        // axios.post('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/',{name,description});
        axios.post('https://restful-api.dev/',{id,name,description})
    }

    return (
        <div>
            <Modal trigger={<button className="rounded add-btn btn bg-primary text-white">Add</button>
            }>
                <div className="form-container">
                    <form onSubmit={e => e.preventDefault()} className="from-group m-4 p-4" action="">
                        Name<input 
                            className="form-control mt-2"
                            type="text"
                            value={name}
                            placeholder="Put Your Name"
                            onChange={(e)=>setName(e.target.value)}
                        />
                        
                        Job<input 
                            className="form-control mt-2"
                            placeholder="Put your job"
                            type="text" 
                            value={job}
                            onChange={(e)=>setJob(e.target.value)}
                        />

                        Age<input 
                            className="form-control mt-2"
                            type="number"
                            value={age}
                            placeholder='Put your age'
                            onChange={(e)=>setAge(e.target.value)}
                        />
                        
                        <button type="submit" onClick={()=>onAdd()} className="btn bg-primary add-btn text-white mt-3">Add</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default Add;