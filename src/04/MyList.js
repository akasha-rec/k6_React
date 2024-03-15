import { FcLikePlaceholder } from "react-icons/fc";
export default function MyList() {
  return (
    <div className="flex flex-row w-1/2 h-1/2">
      <div>
        <img src="./image/html.png" alt="html" />
      </div>
      <div className="pl-5 w-1/2">
        <h1 className="font-bold">HTML</h1>
        <p className="mb-10">HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
        <div className="w-full flex justify-end"><FcLikePlaceholder />
        <span>Like</span>
        </div>
      </div>
    </div>
  )
}
