import BoxOfficeData from "./BoxOffice.json"
import { FaMinus } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import TailInput from "../UI/TailInput"

export default function BoxOffice() {
    const boxRef = useRef();
    //boxoffice data fetch
    const getData = (dt) => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = url + `key=${process.env.REACT_APP_MV_API}&targetDt=${dt}`

        console.log(url)
    }
    const handleSelDate = () => {
        console.log(boxRef.current.value.replaceAll("-",""))
        getData(boxRef.current.value.replaceAll("-",""));
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
        </div>
    )
    }
