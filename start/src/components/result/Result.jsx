import './Result.css';
function Result ({idRe, name, phone, idP, nameP, phoneP,
    image, title, author, price, detail}) 
    
    {
    return (
        <div>
            {/* display */}
            <div>{idRe}</div>
            <div>{name}</div>
            <div>{phone}</div>


            {/* pagi */}
            <div>{idP}</div>
            <div>{nameP}</div>
            <div>{phoneP}</div>


            {/* home */}
            <img id='img' className='image' src={image} alt="" width={500}/>

            <div className="info">
                <div>
                    <span>{title}</span>
                    <span>{author}</span>
                </div>
                <div className='m-0'>{price}</div>
            </div>
            <p>{detail}</p>
        </div>
        
    )
}

export default Result;