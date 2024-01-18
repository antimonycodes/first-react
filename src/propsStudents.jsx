import React from 'react'

function PropsStudents(props) {
  //  in other for a component to accept props, we pass in
  // we pass in a props parameter
  // props are javascript objects

  return (
    <>
    <p>Name: {props.name}</p>
    </>


  )
}

export default PropsStudents