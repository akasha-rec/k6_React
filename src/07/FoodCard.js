import bank from "./img/bank.png"
import market from "./img/market.png"
import busan from "./img/busan.png"
import { useState } from "react"

export default function FoodCard({ fObj }) {

    const fimg = fObj["구분"] === "기초푸드뱅크" ? bank :
        fObj["구분"] === "기초푸드마켓" ? market : busan

    // 초기값을 false(숨김)으로 하고 handleIsClick 함수를 만들어서 클릭했을 때만 나타나게
    const [isClick, setIsClick] = useState(false);
    const handleIsClick = () => {
        setIsClick(!isClick);
    }
    return (
        <div className="w-11/12 flex justify-center items-center
                    border"
            onClick={handleIsClick}>
            <div className="w-1/6 max-w-xl">
                <img src={fimg} alt={bank} />
            </div>
            <div className="w-5/6 mx-3">
                <h1 className="text-xl font-bold">{fObj.사업장명}</h1>
                <h2 className="">{fObj.운영주체명}</h2>
                <h3 className="">{fObj['사업장 소재지']}</h3>
                <h4 className="w-full h-8 text-sm
                     bg-slate-600 text-white mt-5 p-2">
                        {/* 클릭했을 때만 나타나게 하고 싶다 */}
                    {isClick && `Tel : ${fObj['연락처(대표번호)']}, Fax : ${fObj['팩스번호']}`}</h4>
            </div>
        </div>
    )
}
