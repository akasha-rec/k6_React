export default function TailButton({caption, handleClick, color}) {
   const hoverObj = {
        "blue" : "hover:bg-blue-600",
        "red" : "hover:bg-red-600",
        "orange" : "hover:bg-orange-600"
    }
    const colorObj = {
    "blue" : "bg-blue-800",
    "red" : "bg-red-800",
    "orange" : "bg-orange-800"
  }

  const bColor = `px-4 py-2 m-4 rounded-md ${colorObj[color]} ${hoverObj[color]} text-white` 
  return (
    <button className= {bColor}
                 onClick={handleClick}>
      {caption}
    </button>
  )
}