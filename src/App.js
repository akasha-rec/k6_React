// svg(image)도 모듈처럼 갖고 와서 사용
// import MainHeader from './01/MainHeader';
// import Hello from './01/Hello';
// import MyClock from './01_1/MyClock';
import './App.css';
import HelloCss from './02/HelloCss';

function App() {
  return (
    // JSX 문법 사용
    <>
    <div className="App">
    <HelloCss />
    </div>
    </>
  );
}

//반드시 있어야 자바스크립트의 모듈형 함수 > index.js에서 사용하려면 / improt할 때 {} 안 써도 된다
export default App;
