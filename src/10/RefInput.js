import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton"
export default function RefInput() {
  const handleAdd = () => {

  }

  const handleRemove = () => {
    
  }
    return (
    <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
      <TailInput type="text"
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
        <div className="w-full bg-blue-100">

        </div>
    </div>
  )
}
