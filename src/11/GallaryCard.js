export default function GallaryCard({imgUrl, title, ptitle, ktag}) {
    let tags;
    if (ktag.includes(",")) {//,가 포함된 경우에는 분리해서 문자열로 만들어 map을 돌려서 요소로 만든다.
         tags = ktag.split(",").map(item =>
            <span key= {item} 
            className="inline-block bg-gray-200 
                rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {item}
                    </span>
    )} else {//,가 포함되지 않았을 경우 그대로 넣은 span 태그 하나만 만들겠다.
        tags = <span 
        className="inline-block bg-gray-200 
            rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {ktag}
                </span>
     }


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full"
                src={imgUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
                <p className="text-gray-700 text-base">
                    {ptitle}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags}
            </div>
        </div>
    );
    }
