import logo from '../logo.svg';
function MainHeader() {
    
    return ( //html과 js 섞인 확장형 jsx? className이 예약어라서 class로 바꿈
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
}

export default MainHeader;