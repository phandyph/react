import { useState } from 'react';
import './Pagination.css';
import Result from '../result/Result';
/**
 * pagination controll all cards.
 * each pagination contains two cards.
 * When we click on card, It will show data.
 */


const Pagination = ({users}) => {

    const [currentUser, setCurrentUser] = useState()
    /**
     * useState({}) is refer to empty but not mean it doesn't have data in it after we do any action on it.
     */
    const [showDetail, setShowDetail] = useState({})

    const currentUserPage = (parameter) => {
        setCurrentUser(parameter)
        setShowDetail(users[parameter-1])
    }

    const previousUserPage = (parameter) => {
        setCurrentUser(currentUser-1)
        setShowDetail(users[currentUser-1])
    }

    const nextUserPage = (parameter) => {
        setCurrentUser(currentUser + 1)
        setShowDetail(users[parameter+1])
    }

    const totalUsers = Array.from(Array(users.length).keys())
    return (
        <div>
            <div className='paginate'>
                <button disabled={currentUser === 0} className='btn' onClick={() => previousUserPage(currentUser)}>Previous</button>
                {totalUsers.map((user,i)=>{
                    /**
                     * i mean index (all index in datas.)
                     * i and user are the same each other.
                     */
                const index = users[user].id;
                return (
                    <div key={user.id}>
                        <button onClick={() => currentUserPage(index)} key={i} className='pagi'>
                            {user+1}
                        </button>
                    </div>
                        
                    )
                })}
                <button disabled={currentUser === 9} onClick={() => nextUserPage(currentUser)} className='btn'>Next</button>
            </div>
            {showDetail.id}
            <div className='hidden'>
                <Result idP={showDetail.id} />
                <Result nameP={showDetail.name}/>
                <Result name={showDetail.phone}/>
            </div>
        </div>
    )
}

export default Pagination;