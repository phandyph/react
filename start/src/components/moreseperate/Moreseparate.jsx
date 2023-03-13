import { useState, useEffect } from "react";
import './Moreseparate.css';
import Seppagination from "./seppagination/Seppagination";
import Detailseparate from "./detailseparate/Detailseparate";
import Carddisplay from "./carddisplay/Carddisplay";
import Correction from './correction/Correction';

/**
 * boostrap is not change when we set new style in css.
 */

const URL = 'https://jsonplaceholder.typicode.com/users'
const Separate = () => {
    // In mobile.
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('');
    const [cardClicked, setCardClicked] = useState('');
    const pages = Array.from(Array(people.length).keys())
    const [detailPeopleByPagin, setDetailPeopleByPagin] = useState({});
    // we can keep state in one object to reduse line code.
    // const [pagination, setPagination] = useState({
    //     currentPage:currentPage,
    //     people:people,
    //     });

    const onClickDetailCard = (id) => {
        people.forEach((person)=>{
            if (person.id === id){
                setDetailPeopleByPagin(person)
                setCardClicked(id)
                setCurrentPage(null)
            }
        })
    }

    const onClickCurrentPeople = (para) => {
        setCurrentPage(para)
        setDetailPeopleByPagin(people[para-1]);   
        setCardClicked(null)
    }

    const onClickPreviousPeople = (para) => {
        setCurrentPage(currentPage-1)
        setDetailPeopleByPagin(people[currentPage-1])
        setCardClicked(null)
    }

    const onClickNextPeople = (para) => {
        setCurrentPage(currentPage+1)
        setDetailPeopleByPagin(people[currentPage])   
        setCardClicked(null)
    }

    useEffect(()=>{
        fetch(URL)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setLoading(false)
            setPeople(data)
        })
        .catch(e=>{
            console.log(e)
        })

    },[])

    return (
        <div className="big-container">
            {loading}
            <div className="paginate seppag mt-2 w-full">
    
                <Seppagination 
                    pages={pages}
                    people={people} 
                    currentPage={currentPage}
                    onClickCurrentPeople={onClickCurrentPeople} 
                    onClickPreviousPeople={onClickPreviousPeople} 
                    onClickNextPeople={onClickNextPeople}
                />
            </div>

            {/*Fix the problem when I click on each card (not smoothly)  */}

            <div className="containers">
                <div className="allcards m-4 p-3">
                    <Carddisplay
                        cardClicked={cardClicked}
                        people={people}
                        onClickDetailCard={onClickDetailCard}
                    />
                </div>

                <div className="desep">
                    <Detailseparate
                        detailPeopleByPagin={detailPeopleByPagin}
                    />
                </div>
            </div>

            <Correction 
            />
        </div>   
    )
}

export default Separate;