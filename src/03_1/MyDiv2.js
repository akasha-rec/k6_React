import MyDiv3 from "./MyDiv3"

export default function MyDiv2({d1, d2, d3}) {

    return (
        <div className="w-4/5 h-4/5 flex-col
                        flex justify-center items-center
                        bg-lime-200
                        text-lime-500">
          <p className="w-4/5 flex justify-start
                        font-bold text-2xl
                        my-5">
            {`${d1} > ${d2}`}
            </p>
            <MyDiv3 d1={d1} d2={d2} d3={d3}/>
        </div>
      )
}
