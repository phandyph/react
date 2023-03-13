import './Pagindisplay.css';

const pagindisplay = ({
    fivePages,
    onClickCurrentPage,
    onClickPreviousPage,
    onClickNextPage,
    currentPage
    }) => {
    
    return (
        <div className='mt-3'>
            <div className='paginate'>
                <button disabled={currentPage === 0} onClick={()=>onClickPreviousPage(currentPage-1)} className='pagi'>{'<'}</button>
                {fivePages.map((page,i)=>{
                    return (
                        <div className="pages" key={i}>
                            <div onClick={()=>onClickCurrentPage(page)} style={{color: currentPage===page? 'blue':'black'}}  className='pagi'>{page+1}</div>
                        </div>
                    )
                })}            
                <button disabled={currentPage === 4} onClick={()=>onClickNextPage(currentPage+1)} className='pagi'>{'>'}</button>
            </div>
        </div>
    )
}

export default pagindisplay;