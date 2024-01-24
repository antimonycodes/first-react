// import card component from location
import Card from './card'
import Navbar from './navbar'
import Footer from './footer'
import SectionOne from './sectionOne'
import Button from './clickEvent/button'
import PropsStudents from './propsStudents'
import UserGreeting from './UserGreeting'
import List from './list'



function App() {
     const fruits = [
  {id: 1, name: "apple", calories: 52 },
  {id: 2, name: "orange", calories: 43 },
  {id: 3, name: "banana", calories: 105 },
  {id: 4, name: "coconut", calories: 354 }, 
  {id: 5,name: "pineapple", calories:37},
];
     const vegetables= [
  {id: 6, name: "potatoes", calories: 52 },
  {id: 7, name: "carrots ", calories: 43 },
  {id: 8, name: "broccoli", calories: 105 },
  {id: 9, name: "cora", calories: 354 }, 
  {id: 10,name: "pcelery", calories:37},
];


  return (
    <>
    <Navbar/>
 <UserGreeting isLoggedIn={false} username="AntMan"/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     {/* <Button/> */}
     <SectionOne/>
     <PropsStudents name="Dave" age={30} isStudent={true} />
     <PropsStudents name="Queen" age={20} isStudent={false}/>
     <PropsStudents name="Mel" age={22} isStudent={false}/>
     {/*  */}
     <PropsStudents />
     {/* sinnce we didnt pass any key-value above
     its going to take the key-value of the
     defualtProps */}

     {/*  */}

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
    

{/* conditional rendering */}
{fruits.length > 0 ?<List items={fruits}  category="Fruits"/>: null}
{vegetables.length > 0 && <List items={vegetables}  category="Vegetables"/>}
<Button/>
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
