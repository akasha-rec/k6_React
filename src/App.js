// svg(image)도 모듈처럼 갖고 와서 사용
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
import './App.css';

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
                        '>
        <div>리액트 실습</div>
        <div>홈</div>
      </header>
      <main>
        메인
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
