import BoxOfficeData from "./BoxOffice.json"
import { useState } from "react";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

export default function BoxOfficeTb() {
    //Json에서 영화목록 가져오기
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;
    // setter(update func)도 props로 전달 가능
    const [selMv, setSelMv] = useState();

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <table className="w-4/5 border">
                
            <BoxOfficeThead />

                {/* tbody를 컴포넌트로 뺐다. 필요한 걸 props로 전달 */}
                <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv}/>

            </table>
        <BoxOfficeInfo selMv={selMv}/ >
        </div>
    )
}
