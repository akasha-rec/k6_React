import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react"

export default function RefInput() {
    const inputRef = useRef();
    const [bts, setBts] = useState([]); //caption의 내용을 bts에 넣으려
    const [tags, setTags] = useState([]);

  const handleAdd = () => {
    if (inputRef.current.value === "") {
        alert("값을 입력하세요.");
        inputRef.current.focus();
        return;//return이 없으면 빈 버튼이 생겨
    }
    setBts([inputRef.current.value, ...bts])
  }

  useEffect(()=>{
    inputRef.current.value = ""; //입력 후 공백으로 만들어줌
    inputRef.current.focus();
    let tm = bts.map((item, idx) =>
            <TailButton caption={item}
                        key= {`bt${idx}`}
                        color="orange" />
        );
        setTags(tm)
  },[bts])

  const handleRemove = () => {
    setBts([]); //값을 다시 비워주면 취소
    inputRef.current.value = "";
    inputRef.current.focus();
  }

    return (
    <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
        <TailInput type="text"
                inputRef = {inputRef}
                ph = "값 입력" />
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <TailButton caption="등록"
                    color="blue"
                    handleClick={handleAdd} />
        <TailButton caption="취소"
                    color="blue"
                    handleClick={handleRemove} />
        </div>
        </div>
        <div className="w-full p-5 bg-blue-100">
        {tags}
        </div>
    </div>
  )
}
