import { AiFillLike } from "react-icons/ai";
import {useState} from "react";

export default function MyList({title, imgUrl, content}) {
  //state 변수
  const [stCnt, setStCnt] = useState(0);

  //지역변수
  let cnt = 0;

  const handleLike = (t) => {
    console.log("handleLike"+t);
    cnt = cnt + 1;
    console.log(`cnt = ${cnt}`)
    setStCnt(stCnt + 1);
  };

  return (
    <div className="flex w-full border rounded">
      <div className="w-1/4 max-w-40">
        <img src={imgUrl} alt="{title}" />
      </div>
      <div className="px-5 py-3 w-3/4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="w-full">{content}</p>
        <div className="w-full flex justify-end">
        <span onClick= {() => {handleLike(title)}}>
          <AiFillLike className="text-xl text-red-600 hover:text-black"/>
          </span>
          <span>Like</span> <span>{stCnt}</span>
        </div>
      </div>
    </div>
  )
}
