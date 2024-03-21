import { useState, useEffect } from "react";

function MyClockTime() {
    const [currentTime, setCurrentTime] = useState();
    const [tm, setTm] = useState(0);

    //component 생성 시 최초 1번
    useEffect(()=>{
    //     // 인수가 없는 경우 : 바뀔 때마다 찍어 [] 무조건 한 번 실행돼?
        const t = setInterval(()=>{
            setCurrentTime(new Date())
        }, 1000)
        console.log("[] => ", currentTime)

        return () => {clearInterval(t)}
    }, []);
    
    //dependency 값이 바뀔 때마다
    // useEffect(()=>{
    //     console.log("[tm] => ", currentTime, tm)
    // }, [tm]);

    //rendering이 일어날 때마다
    // useEffect(()=>{
    //     console.log("[] 없는 경우 => ", currentTime, tm)
    // })

    // const currentTime = new Date();
    return (
        <h1 className="font-bold text-2xl">
        {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
    </h1>
    );
}
export default MyClockTime;