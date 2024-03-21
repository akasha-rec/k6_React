import bank from "./img/bank.png"
import market from "./img/market.png"
import busan from "./img/busan.png"

export default function FoodCard({fObj}) {

  const fimg = fObj["구분"] ==="기초푸드뱅크"? bank :
                fObj["구분"] ==="기초푸드마켓"? market : busan
    return (
    <div className="w-11/12 flex justify-center items-center
                    border">
      <div className="w-1/6 max-w-xl">
       <img src={fimg} alt={bank}/>
      </div>
      <div className="w-5/6 mx-3">
        <h1 className="text-xl font-bold">{fObj.사업장명}</h1>
        <h2 className="">{fObj.운영주체명}</h2>
        <h3 className="">{fObj['사업장 소재지']}</h3>
        <h4 className="w-full text-sm
                     bg-slate-600 text-white mt-5 p-2">
                    {`Tel : ${fObj['연락처(대표번호)']}, Fax : ${fObj['팩스번호']}`}</h4>
      </div>
    </div>
  )
}
