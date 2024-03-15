import { FcLikePlaceholder } from "react-icons/fc";
export default function MyList({title, imgUrl, content}) {
  return (
    <div className="flex w-full border rounded">
      <div className="w-1/4 max-w-40">
        <img src={imgUrl} alt="html" />
      </div>
      <div className="pl-5 w-3/4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="w-full mb-3">{content}</p>
        <div className="w-full flex justify-end"><FcLikePlaceholder />
        <span>Like 0</span>
        </div>
      </div>
    </div>
  )
}
