import { useState, useEffect } from "react";
import Pagindisplay from "./pagindisplay/Pagindisplay";
import Carddisplay from "./carddisplay/Carddisplay";
import Paginresult from './paginresult/Paginresult'
import './Paginate.css';

const URL = 'https://jsonplaceholder.typicode.com/users';
const Paginate = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true);
    const fivePages = Array.from(Array(datas.length/2).keys())
    const [currentPage, setCurrentPage] = useState('');
    const [detailPage, setDetailPage] = useState('')
    const [twoDatas, setTwoData] = useState([]);
    const [resDetail, setResDetail] = useState({});

    useEffect(()=>{
        fetch(URL)
        .then(res=>{
            return res.json()
        })
        .then(datas=>{
            setLoading(false)
            setDatas(datas)
        })
    }, [])


    const seeDetail = (id) => {
        twoDatas.forEach((d)=>{
            if (d.id === id) {
                setResDetail(d)
                setDetailPage(d.id)
            }
        })
    }

    
    const onClickCurrentPage = (para) => {
        setCurrentPage(para)
        setTwoData([datas[para*2], datas[para*2+1]])
        setResDetail({})

    }

    const onClickPreviousPage = (para) => {
        setCurrentPage(para)
        setTwoData([datas[para*2], datas[para*2+1]])
        setResDetail({})

    }

    const onClickNextPage = (para) => {
        setCurrentPage(para)
        setTwoData([datas[para*2], datas[para*2+1]])
        setResDetail({})
        
    }
  
    return (
        <div className="new-paginate">
            <Pagindisplay 
                fivePages={fivePages}
                onClickCurrentPage={onClickCurrentPage}
                onClickPreviousPage={onClickPreviousPage}
                onClickNextPage={onClickNextPage}
                datas={datas}
                twoDatas={twoDatas}
                currentPage={currentPage}
            />

            <div className="child-pagin">
                <Carddisplay
                    twoDatas={twoDatas}
                    seeDetail={seeDetail}
                    detailPage={detailPage}
                />

                <Paginresult
                    resDetail={resDetail}
                />
            </div>

        </div>

    )
}
export default  Paginate;
