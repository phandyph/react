import './Detailseparate.css';
const Detailseparate = ({detailPeopleByPagin}) => {
    return (
        <div className="card-contain">
            <div >
                {/* It appear,unless id have been clicked*/}
               {detailPeopleByPagin.id && <div className='card m-5 w-full p-3'>
                    Name:{detailPeopleByPagin.name}
                    <br/>
                    Id: {detailPeopleByPagin.id}
                    <br/>
                    Email: {detailPeopleByPagin.email}
                    <br/>
                    Phone Number: {detailPeopleByPagin.phone}
                </div> }
            </div>
        </div>
    )
}

export default Detailseparate;