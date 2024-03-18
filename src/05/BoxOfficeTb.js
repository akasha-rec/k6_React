import BoxOfficeData from "./BoxOffice.json"
import { FaMinus } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState } from "react";

export default function BoxOfficeTb() {
    const boxlist = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxlist);
    const [selMv, setSelMv] = useState();
    const handleClick = (mv) => {
        setSelMv(mv)
    }
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

    return (
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
    )
}
