
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
     <PropsStudents />
     {/* name = key 
      */}
     {/* students - child  
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
