
import Card from './card'
import Navbar from './navbar'
import Footer from './footer'
import SectionOne from './sectionOne'
import Button from './button/button'
import PropsStudents from './propsStudents'
// import card component from location

function App() {


  return (
    <>
    <Navbar/>

     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Button/>
     <SectionOne/>
     <PropsStudents name="Dave" age={30} isStudent={true} />
     <PropsStudents name="Queen" age={20} isStudent={false}/>
     <PropsStudents name="Mel" age={22} isStudent={false}/>
     <PropsStudents />
     {/* sinnce we didnt pass any key-value above
     its going to take the key-value of the
     defualtProps */}
     {/* if the data we are storing as a value is not a
      string literal (e.g "Dave") we enclosed them in
       a curly braces e.g (age={55}) */}
     {/* name = key 
     Dave = value
      */}
      {/* we send the key-value pair  from here {parent}
      to child component {propsStudent}
      the values are stored in props object  */}
     {/* propsStudents - child  
     App - parent
     */}



<Footer/>
    </>
    // react components can only return a single element
    // but we can place children element inside the main element
    // i used angle bracket here as the parent element

  )
}

export default App
// we always export components so we can re use them
// by imorting them where we want to use them
