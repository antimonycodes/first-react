
import PropTypes from 'prop-types';

// the key-value pair we send from App{parent} are stored inside props here

function PropsStudents(props) {
  //  in other for a component to accept props, we pass in
  // we pass in a props parameter
  // props are javascript objects

  return (
    <>
    <div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    {/* with boolean its reconmmended to use ternary operator
    if true do this else do ths*/}
    {/* condition ? <expression if true> : <expression if false>  */}
    <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    
    {/* to get the value associated with the key 
    we pass in {props.(name of the key) e.g
    props.name}
    the we get the associated value*/}
    </div>
    </>


  )
}
// setting up propTYpes
PropsStudents.PropTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,

}
// setting up default props
PropsStudents.defaultProps ={
  name: "Guest",
  age: 0,
  isStudent:false,
}

export default PropsStudents