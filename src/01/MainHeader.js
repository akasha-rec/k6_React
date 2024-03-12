import logo from '../logo.svg';
function MainHeader() {
    
    return ( //html과 js 섞인 확장형 jsx?
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
}

export default MainHeader;