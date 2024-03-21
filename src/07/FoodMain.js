import fData from "./fooddata.json"
import FoodCard from "./FoodCard"
import TailButton from "../UI/TailButton";
import { useState } from "react";

export default function FoodMain() {
    console.log(fData)
    let c1 = fData.map(item => item["운영주체 분류"]);
    c1 = new Set(c1);
    c1 = [...c1]
    console.log(c1)

    const [cards, setCards] = useState();
//????
    const handleList=(citem)=>{
      console.log(citem)
      
      const tm = fData.filter(item => item["운영주체 분류"] === citem)
                      .map(item =>
                        <FoodCard fObj={item} key={item.사업장명}/>
                        );

      setCards(tm);
      // const cards = fData.map(item =>
      //   <FoodCard fObj={item} key={item.사업장명}/>
      //   );
    }

    const c1Bts = c1.map(item =>
      <TailButton caption = {item} color="blue"
                  key={item} handleClick={()=>handleList(item)}/>
      );

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
        <div className="w-full bg-blue-100 p-5">
        {c1Bts}
        </div>
        <div className="w-full grid grid-col-1 md:grid-cols-2
                        xl:grid-cols-3
                        gap-2">

      {/* 버튼을 누를 때마다 바뀔 내용 > useState */}
      {cards}
    </div>
    </div>
  )
}
