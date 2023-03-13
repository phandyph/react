import './Carddisplay.css';
const Carddisplay = ({
    cardClicked,
    people,
    onClickDetailCard
}) => {
    return (
        <div className='full'>
            {/* style={{color: currentPage===index? 'blue':'black'}}
            = here is a condition to ask (currentPage===index) */}
            {people.map((person, i)=>{
                return (
                    <div onClick={()=>onClickDetailCard(person.id)} style={{border: cardClicked === person.id? '1px solid blue':'1px solid black'}} key={person.id} className="card m-2 p-2">
                        {person.id}
                        <br/>
                        {person.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Carddisplay