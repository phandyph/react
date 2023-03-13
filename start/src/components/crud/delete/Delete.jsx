
const Delete = ({clickDelete}) => {
    return (
        <button onClick={()=>clickDelete()} className='btn bg-danger'>Delete</button>
    )
}

export default Delete;