// svg(image)도 모듈처럼 갖고 와서 사용
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from './03_1/MyDiv1';
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05_1/BoxOfficeTb';
// import Lotto from './06/Lotto';
// import FoodMain from './07/FoodMain';
// import './App.css';
// import MyClock from './08/MyClock';
import TrafficMain from "./09/TrafficMain";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

function App() {
  return (
    <div className='flex flex-col 
                    w-full max-w-screen-xl
                    h-screen
                    mx-auto
                    overscroll-y-auto'>
      <header className='flex justify-between items-center
                        h-20 p-10
                        text-xl font-bold text-indigo-600
                        bg-sky-300
                        scroll-auto'>
        <div>리액트 실습</div>
        <div><HiMiniBuildingLibrary className='text-3xl text-gray-800'/></div>
      </header>
      <main className='grow flex flex-col 
                      justify-center items-center'
                      >
      <TrafficMain />
      </main>
      <footer className='flex justify-center items-center
                       h-20 p-10
                       bg-sky-500
                       text-white'>
      @ 2024 leenayoung. All rights reserved.
      </footer>
    </div>
  );
}

//반드시 있어야 자바스크립트의 모듈형 함수 > index.js에서 사용하려면 / improt할 때 {} 안 써도 된다
export default App;
