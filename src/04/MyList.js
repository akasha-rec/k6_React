import { FcLikePlaceholder } from "react-icons/fc";
export default function MyList({title, imgUrl, content}) {
  return (
    <div className="flex w-full border rounded hover:bg-gray-100">
      <div className="w-1/4 max-w-40">
        <img src={imgUrl} alt="{title}" />
      </div>
      <div className="px-5 py-3 w-3/4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="w-full">{content}</p>
        <div className="w-full flex justify-end"><FcLikePlaceholder />
        <span>Like 0</span>
        </div>
      </div>
    </div>
  )
}
