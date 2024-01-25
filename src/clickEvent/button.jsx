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
  let count = 0


  //we dont need curly braces for one line arrow function
  const handleClick =()=> console.log("ouch..")
  // a handleclick function with parameter
  // const handleClick2 =(name)=> console.log(`${name} stop`)
  return (
  <>
  {/* css module */}
  {/* <button className={styles.button}>Hire Me</button> */}
  {/* we use {} because its a dynamic value */}
  {/* inline css */}
    {/*we have to wrap the call back in afunction. if not
  the function will run before we click the button  */}

  {/* <button style={styles} onClick={()=>handleClick2("sb")}>Click me</button> */}
  <button style={styles} onClick={()=>handleClick}>Click me</button>


  </>
  )
}

export default Button