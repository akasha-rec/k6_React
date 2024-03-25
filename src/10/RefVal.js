import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function RefVal() {
    //버튼을 누르면 값이 증가하게
    let cnt = 0; //지역변수
    const [stCnt, setStCnt] = useState(0); //State 변수
    const refCnt = useRef(0); //Ref 변수는 자체가 객체라서 ref변수명.current

    const handleLocal = () => {
        cnt = cnt + 1;
        console.log("cnt =", cnt);
    }
    
    const handleState = () => {
        setStCnt(stCnt+1);
    }

    const handleRef = () => {
        refCnt.current = refCnt.current + 1;
        console.log("refCnt =", refCnt.current);
    }
    useEffect(()=>{
        console.log("stCnt = ", stCnt)
    }, [stCnt]);
    
  return (
    <div className="w-10/12 grid grid-cols-3
                    text-center
                    gap-4">
    <div>
        컴포넌트 변수(지역변수) : {cnt}
    </div>
    <div>
        State 변수 : {stCnt}
    </div>
    <div>
        Ref 변수 : {refCnt.current}
    </div>
    <div>
        <TailButton caption="컴포넌트 변수"
                    color="blue"
                    handleClick={handleLocal} />
    </div>
    <div>
        <TailButton caption="State 변수"
                    color="blue"
                    handleClick={handleState} />
    </div>
    <div>
        <TailButton caption="Ref 변수"
                    color="blue"
                    handleClick={handleRef} />
    </div>
    </div>
  )
}
