import { FaMinus } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function BoxOfficeTbody({boxList, setSelMv}) {
    //Json에서 영화목록 가져오기

    const handleClick = (mv) => {
        console.log(mv)
        // //setter로 update
        setSelMv(mv)
    }

    const myBoxlist = boxList.map(item =>
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
    <tbody>
        {myBoxlist}
    </tbody>
  )
}
