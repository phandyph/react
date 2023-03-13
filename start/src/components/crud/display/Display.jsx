import './Display.css';

/**
 * Display is the parent component of edit and delete.
 */
const Display = ({datas}) => {    
    return (
        <div className="user-container">
            {datas.map((user, i)=>{
                return (
                    <div className='card m-3 p-3' key={user.id}>
                        <div className='each-card'>
                            <div className='content'>
                                <h6>{user.id}</h6>
                                <h6>{user.name}</h6>
                            </div>
                            <div className='btns'>
                                <button className='btn text-white bg-warning m-1'>Edit</button>
                                {/* <button onClick={() => onDelete(user.id)} className='btn bg-danger text-white'>Delete</button> */}
                                <button className='btn bg-danger text-white'>Delete</button>

                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Display;