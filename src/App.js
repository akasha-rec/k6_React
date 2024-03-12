// svg(image)도 모듈처럼 갖고 와서 사용
import MainHeader from './01/MainHeader';
import Hello from './01/Hello';
import './App.css';

function App() {
  return (
    // JSX 문법 사용
    <>
    <div className="App">
    <MainHeader />
    <Hello />
    <Hello />
    <Hello />
    </div>
    </>
  );
}

//화살표 함수로 가능
//const App = () => {

// return (
// );
// });

//반드시 있어야 자바스크립트의 모듈형 함수 > index.js에서 사용하려면 / improt할 때 {} 안 써도 된다
export default App;
