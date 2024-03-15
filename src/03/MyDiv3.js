export default function MyDiv3(probs) {
    return (
        <div className="w-4/5 h-4/5 flex-col
                        flex justify-center items-center
                        bg-lime-300
                        text-lime-600">
          <p className="w-4/5 flex justify-start
                        font-bold text-2xl">
            {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
            </p>
        </div>
      )
}
