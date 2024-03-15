import MyList from "./MyList"
export default function MyListMain() {
  return (
    <div className="w-10/12 grid grid-col1
                    md:grid-cols-2
                    gap-4">
      <MyList title="1" imgUrl="./image/html.png" content="test"/>
      <MyList title="2" imgUrl="./image/css.png" content="test2"/>
      <MyList title="3" imgUrl="./image/js.png" content="test3"/>
      <MyList title="4" imgUrl="./image/react.png" content="test4"/>
    </div>
  )
}
