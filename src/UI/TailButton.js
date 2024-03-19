export default function TailButton({caption, handleClick}) {
  return (
    <button className="px-4 py-2 m-4 rounded-md
                 bg-blue-400 text-white"
                 onClick={handleClick}>
      {caption}
    </button>
  )
}
