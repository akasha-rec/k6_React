import logo from '../logo.svg';
import './Hellostyle.css';

export default function HelloCss() {
  return (
    <div className='main'>
        <img src={logo} className="imgLogo" alt="logo" />
        <h1 className='ch1'>안녕하세요</h1>
    </div>
  );
}
