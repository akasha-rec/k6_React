export default function MyDiv3(props) {
    return (
        <div className="w-4/5 h-4/5 flex-col
                        flex justify-center items-center
                        bg-lime-300
                        text-lime-600">
          <p className="w-4/5 flex justify-start
                        font-bold text-2xl">
            {`${props.d1} > ${props.d2} > ${props.d3}`}
            </p>
        </div>
      )
}
