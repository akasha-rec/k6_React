import { useEffect, useState } from "react"
import TrafficNav from "./TrafficNav";
export default function TrafficMain() {
  // 전체 데이터를 17개
  const [tData, setTdata] = useState(); //전체 fetch 17개 배열 데이터
  const [c1, setC1] = useState(); //대분류 중복 제거
  const [selC1, setSelC1] = useState(); //선택된 대분류 < TrafficNav에서 결정
  
  const [c2, setC2] = useState(); //중분류 중복 제거
  const [selC2, setSelC2] = useState(); //선택된 중분류
  
  const [detail, setDetail] = useState();//상세 정보
  const [info, setInfo] = useState();//상세 정보 rendering

  const getDataFetch = (url)=>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{ //1. url 만들기
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=20&`;
        url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;
        
        console.log(url)

        getDataFetch(url);

    }, []);

    useEffect(()=>{
      // c1
      if(!tData) return; //Data가 없는 경우 거르고
      let tm = tData.map(item => item["사고유형_대분류"])
      tm = new Set(tm) //Set으로 중복 제거
      tm = [...tm] //Set은 map을 돌릴 수 없어서 전개연산자...를 써서 배열로 만든다.
      console.log("tData tm=>", tm)
      setC1(tm)
    }, [tData]);
    
    //selC1이 변경이 되면 C2 생성 > 대분류가 C1인 정보 가져와야
    useEffect(() => {
      if(!tData) return;
      let tm1 = tData.filter(item => item.사고유형_대분류 === selC1)
                      .map(item => item.사고유형_중분류)
    setInfo("")//초기화
    setC2(tm1)
    }, [selC1]);

    //selC1, selC2와 일치하는 detail 만들어줘야 > 중분류가 선택될 때마다 변화 > [selC2] 
    useEffect(()=>{
      if(!tData) return;
      console.log("detail : ", detail)
      let tm2 = tData.filter(item => item.사고유형_대분류 === selC1 && item.사고유형_중분류 === selC2)
      setDetail(tm2[0]); //filter로 나온 결과는 array인데 그 결과값인 요소가 오브젝트라서 jsx가 출력X
    }, [selC2])

    useEffect(()=>{//useEffect로 출력한다?
      if(!tData) return;
      console.log("detail : ", detail)
      const keyArr = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]
      let tm3 = keyArr.map(k =>
        <div className="w-full flex mt-5 font-bold
                        justify-center items-center" key={k}>
          <div className="w-1/2 h-10 mx-2
                          flex justify-center items-center bg-blue-200">{k}</div>
          <div>{parseInt(detail[k]).toLocaleString()}</div>
        </div>
        )
        setInfo(tm3)
    },[detail])

  return (
    <div className="w-full h-full mt-5
                    flex flex-col
                    justify-start items-center">
      {c1 && <TrafficNav title="대분류" category={c1}
                  sel={selC1} setSel={setSelC1}/> }
      {c2 && <TrafficNav title="중분류" category={c2}
                  sel={selC2} setSel={setSelC2}/> }
      <div className="w-full grid grid-cols-2
                      sm:grid-cols-3
                      md:grid-cols-5
                      gap-4">
      {info}
      </div>
    </div>
  )
}
