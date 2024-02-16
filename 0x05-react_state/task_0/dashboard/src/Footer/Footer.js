import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';


const Footer = () => {
  return (
    <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
  </div>
  )
}

export default Footer;