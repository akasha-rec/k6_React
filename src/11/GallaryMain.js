import gData from "./GallaryData.json"
import GallaryCard from "./GallaryCard";

export default function GallaryMain() {
    //어떤 데이터가 와도 활용할 수 있도록 따로 변수로 만들었다.
    const imgUrl = gData.galWebImageUrl;
    const title = gData.galTitle;
    const ptitle = gData.galPhotographyLocation
    let ktag = gData.galSearchKeyword
    
    return (
    <div>
      <GallaryCard imgUrl = {imgUrl}
      title = {title}
      ptitle = {ptitle}
      ktag = {ktag}/>
    </div>
  )
}
