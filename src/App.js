// svg(image)도 모듈처럼 갖고 와서 사용
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          K-digital 6기 이나영
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

//화살표 함수로 가능
//const App = () => {

// return (
// );
// });

//반드시 있어야 자바스크립트의 모듈형 함수 > index.js에서 사용하려면 / improt할 때 {} 안 써도 된다
export default App;
