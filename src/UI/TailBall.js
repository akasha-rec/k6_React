export default function TailBall({n}) {
    const bcolor = [
        "bg-red-400",
        "bg-orange-400",
        "bg-lime-400",
        "bg-blue-400",
        "bg-purple-400"
    ]

    const ballColor = `w-16 h-16 flex justify-center items-center  m-5
                        ${bcolor[parseInt(n/10)]} text-white font-bold text-xl rounded-full`
    return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
