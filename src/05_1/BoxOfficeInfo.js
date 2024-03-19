export default function BoxOfficeInfo({selMv}) {

    return (
        <div className="w-4/5 h-10 text-center
                     bg-blue-400 text-white">
            {selMv === undefined && "영화를 선택해주세요"}
            {selMv && `[${selMv.movieCd}] ${selMv.movieNm} -
            총 매출액 : ${parseInt(selMv.salesAmt).toLocaleString()}원,
            누적관객수 : ${parseInt(selMv.audiCnt).toLocaleString()}명`}
        </div>
    )
}
