import logo from '../logo.svg'
import './Hellostyle.css'

export default function HelloCss() {
  return (
    <div className='main'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>안녕하세요</h1>
    </div>
  );
}
