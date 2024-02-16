import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles.AppBody)}> 
         <p>Login to access the full dashboard</p>
         <label className={css(styles.label)} htmlFor="email">Email:</label>
         <input className={css(styles.input)} type="text" id="email" name="email"></input>
         <label className={css(styles.label)} htmlFor="password">Password:</label>
         <input className={css(styles.input)} type="password" id="password" name="password"></input>
         <button style={{
               background: "transparent",
               borderRadius: '5px',
               margin: "0 0 0 10px",
               border: "1px solid gray"
         }}>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
    padding: '50px',
  },
  label: {
    marginRight: '5px',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  },
  input: {
    marginRight: '5px',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
})

export default Login