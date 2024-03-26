import TailButton from "../UI/TailButton"
import TailInput from "../UI/TailInput"
import { useRef, useState, useEffect } from "react"
import GallaryCard from "./GallaryCard"


export default function GallaryMain() {
    const keyword = useRef();
    const [tdata, setTdata] = useState();
    const [tags, setTags] = useState();

    useEffect(() => {
        if (!tdata) return;
        let card = tdata.map((item) =>
            <GallaryCard key={item.galContentId}
                imgUrl={item.galWebImageUrl.replace('http://', 'https://')}
                title={item.galTitle}
                ptitle={item.galTitle}
                ktag={item.galSearchKeyword} />)
        setTags(card)
    }, [tdata])
    const getData = (w) => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${w}&_type=json`
        console.log(url)

        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.response.body.items.item)) //원하는 정보가 있는 배열이 있다.
            .catch(err => console.log(err))
    }
    const handleKeyword = () => {
        if (keyword.current.value === "") {
            alert("키워드를 입력하세요.")
            keyword.current.focus()
            return;
        }
        //     console.log(keyword.current.value)
    }

    const handleFetch = () => {
        let w = encodeURI(keyword.current.value)
        console.log(w)
        getData(w)
    }
    const handleClear = () => {
        setTdata("")
        setTags("")
        keyword.current.focus()
    }
    return (
        <div className="flex flex-col mt-5
                        w-11/12 h-full justify-start items-center">
            <div className="w-full p-3 grid grid-cols-1 md:grid-cols-3 gap-4
                    bg-blue-100">
                <div className="p-2">
                    <TailInput type="text"
                        inputRef={keyword}
                        ph="키워드를 입력하세요"
                        handleChange={handleKeyword} />
                </div>
                <div className="px-3">
                    <TailButton caption="조회"
                        color="blue"
                        handleClick={handleFetch} />
                </div>
                <div className="px-3">
                    <TailButton caption="취소"
                        color="blue"
                        handleClick={handleClear} />
                </div>
                </div>
            <div className="w-full p-3 grid grid-cols-1 
                    lg:grid-cols-3 md:grid-cols-2 gap-4">
                {tags}
        </div>
    </div>
)
}
