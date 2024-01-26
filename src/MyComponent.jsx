import { useState } from "react";

function MyComponent() {
  // Declare a state variable 'name' and a function 'setName' to update it
  // we can pass an initial value for the useState => useState("initial-value")
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0)
  const [isCool,setisCool] = useState(false)
  

  // Define a function 'updateName' that updates the 'name' state variable
  const updateName = () => {
     // name = "Bee"
    // name = "Bee" wont work. we use setName instaed

    // Use the 'setName' function to update the 'name' state variable
    setName("Bee");
   
  };
   const updateAge =()=>{
      setAge(age+1);
    }
    //
    const updateCool = ()=>{
      setisCool(!isCool)
    }

  // Render a component with a paragraph displaying the current 'name' state
  // and a button that, when clicked, calls the 'updateName' function
  return (
    <div>
            {/* Display the current value of the 'name' state variable */}
      {/* <p>Name: {name}</p> */}
      
      {/* Button that triggers the 'updateName' function when clicked */}
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <br/>
       <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age </button>
      <br/>
      <p>isCool: {isCool ? "Yes": "No"}</p>
      <button onClick={updateCool}>update coolness </button>

    </div>

  );
}

export default MyComponent;


