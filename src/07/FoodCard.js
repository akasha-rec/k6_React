import bank from "./img/bank.png"
import market from "./img/market.png"
import busan from "./img/busan.png"

export default function FoodCard() {
  const fObj =   {
    "구분": "광역지원센터",
    "시군구": "부산시",
    "사업장명": "부산광역푸드뱅크",
    "신고기준": "당연",
    "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    "연락처(대표번호)": "051-791-1377",
    "팩스번호": "051-714-3096",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "부산광역시사회복지협의회"
  }
    return (
    <div className="flex flex-row justify-center items-center">
      <div>
       <img src={bank} alt="푸드뱅크" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{fObj.구분}</h1>
        <h2 className="text-lg">{fObj.운영주체명}</h2>
        <h3>{fObj['사업장 소재지']}</h3>
        <h4 className="">{fObj['연락처(대표번호)']}</h4>
      </div>
    </div>
  )
}
