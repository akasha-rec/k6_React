import fData from "./fooddata.json"
import FoodCard from "./FoodCard"

export default function FoodMain() {
    console.log(fData)
  const cards = fData.map(item =>
    <FoodCard fObj={item} key={item.사업장명}/>
    );

    return (
    <div className="w-full grid 
                    grid-col-1 md:grid-cols-2
                    xl:grid-cols-3
                    gap-2">
      {cards}
    </div>
  )
}
