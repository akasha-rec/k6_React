import logo from '../logo.svg';
import './Hellostyle.css';
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';

export default function HelloCss() {
  return (
    <div className='main'>
        <img src={logo} className="imgLogo" alt="logo" />
        <HelloWhite />
        <HelloYellow />
    </div>
  );
}
