import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";


const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
         <img src={logo} className={css(styles.AppLogo)} alt="logo" />
         <h1>School dashboard</h1>
    </div>
  )
}

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #c1384c',
    color: '#c1384c',
  },

  AppLogo: {
    width: '200px',
    height: 'auto',
  }
})
export default Header;