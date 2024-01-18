// import React from 'react'
import styles from './button.module.css'
// import our css module

function Button() {
  // inline css
  // we cant use "-" in jsx 
  // we switch them to camelCase
  // values should be string
  const styles = {
  
  backgroundColor: "blue",
  padding: "5px 10px",
  border: "none", 
   color:" white",
  borderRadius: "3px",
  display:" block",
  margin:" 0 auto",
  cursor: "pointer",
  // hover{backgroundColor: "red"},

// button:hover{
//   background-color: red;
// }
  }
  return (
  <>
  {/* css module */}
  {/* <button className={styles.button}>Hire Me</button> */}
  {/* we use {} because its a dynamic value */}
  {/* inline css */}
  <button style={styles}>Hire Me</button>

  </>
  )
}

export default Button