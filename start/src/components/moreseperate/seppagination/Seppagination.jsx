import './Seppagination.css';
const Seppagination = ({
        people, 
        onClickCurrentPeople,
        onClickPreviousPeople,
        onClickNextPeople, 
        currentPage,
        pages,
    }) => {
    return (
        <div>
            {/* what we can use are: currentPage, page and index. */}
            <div className="paginate mt-4">
            <button disabled={currentPage === 1} onClick={()=>onClickPreviousPeople(currentPage)} className='p-1 rounded'>PREV</button>
                {pages.map((page,p)=>{
                    const index = people[page].id
                    return (
                        <div key={p}>
                            <div onClick={()=>onClickCurrentPeople(index)} style={{color: currentPage===index? 'blue':'black'}} className="pagi">
                                {page+1}
                            </div>
                        </div>
                    )
                })}
                {/* currentPage refer to index+1. */}
                {/* proplem when check next btn. */}
            <button disabled={currentPage === 10} onClick={()=>onClickNextPeople(currentPage)} className='p-1 rounded'>NEXT</button>
            </div>
        </div>
    )
}

export default Seppagination;