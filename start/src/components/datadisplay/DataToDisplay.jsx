import './DataToDisplay.css';
import { useState } from 'react';
import Result from '../result/Result';
const DataDisplay = ({users, user}) => {
    // These data prop to Result.jsx.
    const [idRe, setId] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    const clickDetail = (e) => {
        let i=0;
        while(i < users.length) {
            if (users[i].id === parseInt(e.target.id)){
                console.log('Here is id',users[i].id)
                setId(users[i].id);
                setName(users[i].name)
                setPhone(users[i].phone)
            }
            i++
        }
        e.preventDefault();

    }
    return (
        <div className="container">
            <div className="allCards">
                {users.map((user)=>(
                    <div className="user"  key={user.id}>
                        {/* {console.log(user)} */}
                        <div onClick={clickDetail} id={user.id} className="card m-3 p-3">
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            
            <div className="child m-3 p-3">
                <Result idRe={idRe} />
                <Result name={name} />
                <Result phone={phone} />
            </div>

        </div>
    )
}
export default DataDisplay;
