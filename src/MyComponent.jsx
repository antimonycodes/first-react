import { useState } from "react";

function MyComponent() {
  // Declare a state variable 'name' and a function 'setName' to update it
  const [name, setName] = useState();

  // Define a function 'updateName' that updates the 'name' state variable
  const updateName = () => {
     // name = "Bee"
    // name = bee wont work we use setName instaed

    // Use the 'setName' function to update the 'name' state variable
    setName("Bee");
  };

  // Render a component with a paragraph displaying the current 'name' state
  // and a button that, when clicked, calls the 'updateName' function
  return (
    <div>
            {/* Display the current value of the 'name' state variable */}
      <p>Name: {name}</p>
      
      {/* Button that triggers the 'updateName' function when clicked */}
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponent;


