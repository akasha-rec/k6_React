import MyDiv3 from "./MyDiv3"

export default function MyDiv2(probs) {

    return (
        <div className="w-4/5 h-4/5 flex-col
                        flex justify-center items-center
                        bg-lime-200
                        text-lime-500">
          <p className="w-4/5 flex justify-start
                        font-bold text-2xl
                        my-5">
            {`${probs.d1} > ${probs.d2}`}
            </p>
            <MyDiv3 />
        </div>
      )
}
