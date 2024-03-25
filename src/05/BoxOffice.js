// import BoxOfficeData from "./BoxOffice.json"
import { FaMinus } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import TailInput from "../UI/TailInput"

export default function BoxOffice() {
    const boxRef = useRef();
    const [boxlist, setBoxList] = useState([]);
    const [myBoxlist, setMyBoxList] = useState([]);

    //boxoffice data fetch
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`

        fetch(url)
        .then(resp => resp.json()) //.then 정보를 받아서 resp에 받아서 .json에 저장
        .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList)) //.json 파일의 정보를 data 변수에 저장
        .catch(err => console.log(err))
        console.log(url)
    }

    useEffect(()=>{
        if(!boxlist) return;
        const myBoxlist = boxlist.map(item =>
            <tr key={item.movieCd} onClick={()=>{handleClick(item)}} className="h-10
            hover:bg-blue-100 hover:font-bold  w-full">
                <td className="text-center">
                    <span className="inline-flex w-11/12
                                    p-1 rounded-lg
                                    justify-center items-center
                                    bg-blue-200">
                        {item.rank}
                        </span>
                    </td>
                <td className="text-center">
                    {item.movieNm}
                    </td>
                <td className="text-right">
                    {parseInt(item.salesAmt).toLocaleString()}원
                    </td>
                <td className="text-right">
                    {parseInt(item.audiCnt).toLocaleString()}명
                    </td>
                <td className="w-30 p-3 flex justify-center items-center">
                    <span>{parseInt(item.rankInten) === 0 ? <FaMinus />
                    :parseInt(item.rankInten) > 0 ? <FaLongArrowAltUp className="text-red-500"/>
                    : <FaLongArrowAltDown className="text-blue-500"/>}</span>
                    {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
                    </td>
            </tr>
        );
        setMyBoxList(myBoxlist)
    },[boxlist])

    const handleSelDate = () => {
        console.log(boxRef.current.value.replaceAll("-",""))
        getData(boxRef.current.value.replaceAll("-",""));
    }

    const [selMv, setSelMv] = useState();
    const handleClick = (mv) => {
        //setter로 update
        setSelMv(mv)
    }
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-4/5 flex justify-end items-center">
            <span className="text-sm mx-5 font-bold">날짜 선택 </span>
                <div className="flex">
                    <TailInput type="date"
                        inputRef={boxRef}
                        handleChange = {handleSelDate}
                        ph="" />
            </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <table className="w-4/5 border">
                <thead>
                    <tr className="h-10 w-full
                    text-center bg-blue-500 text-white">
                        <th className="w-10">순위</th>
                        <th>영화명</th>
                        <th className="w-1/5">매출액</th>
                        <th className="w-1/5">관객수</th>
                        <th className="w-30">증감율</th>
                    </tr>
                </thead>
                <tbody>
                    {myBoxlist}
                </tbody>
            </table>
            <div className="w-4/5 h-10 text-center
                             bg-blue-400 text-white">
                {selMv === undefined && "영화를 선택해주세요"}
              {selMv &&  `[${selMv.movieCd}] ${selMv.movieNm} -
                총 매출액 : ${parseInt(selMv.salesAmt).toLocaleString()}원,
                누적관객수 : ${parseInt(selMv.audiCnt).toLocaleString()}명`}
            </div>
        </div>
        </div>

    )
    }
