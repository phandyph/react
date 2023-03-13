import { useState, useEffect } from "react";
const URL = 'https://jsonplaceholder.typicode.com/users';
/**
 * Purpose: 
 * 1. show only three pagination.
 * 2. No need click on card.
 */

const Paginationmodel = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const pageNumberLimit = 5;
    // const [currentPage, setCurrentPage] = useState(1);
    // const [maxPageLimit, setMaxPageLimit] = useState(5);
    // const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(()=>{
        fetch(URL)
        .then(res=>{
            return res.json()
        })
        .then(users=>{
            setLoading(false)
            setUsers(users)
        })
    }, [])
    console.log(users)
    console.log(loading);


    // const onPageChange= (pageNumber)=>{
    //     setCurrentPage(pageNumber);
    // }


    // const onPrevClick = ()=>{
    //     if((currentPage-1) % pageNumberLimit === 0){
    //         setMaxPageLimit(maxPageLimit - pageNumberLimit);
    //         setMinPageLimit(minPageLimit - pageNumberLimit);
    //     }
    //     setCurrentPage(prev=> prev-1);
    // }
    
    // const onNextClick = ()=>{
    //     if(currentPage+1 > maxPageLimit){
    //         setMaxPageLimit(maxPageLimit + pageNumberLimit);
    //         setMinPageLimit(minPageLimit + pageNumberLimit);
    //     }
    //     setCurrentPage(prev=>prev+1);
    // }

    return (
        <div>
            <h4>Show pagination guys!</h4>
        </div>
    )


}

export default Paginationmodel