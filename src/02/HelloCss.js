import logo from '../logo.svg';
import './Hellostyle.css';
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';

export default function HelloCss() {
  const apikey = process.env.REACT_APP_MV_API;
  console.log(apikey)

  return (
    <div className='main'>
        <img src={logo} className="imgLogo" alt="logo" />
        <HelloWhite />
        <HelloYellow />
    </div>
  );
}
