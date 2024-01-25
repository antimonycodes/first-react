

function EventParam() {
  //the event(e) object have different properties and methods of the event object based on the type of event and your specific needs.
//here we access the even object property which is tectContent
//now when we click on the button the tect content change from "handle e" to "Yo"

  const handleEvent =(e)=> e.target.textContent = "Yo"
  
  return (
    <>
    <button onClick={(e)=> handleEvent(e)}>Handle e</button></>
  )
}

export default EventParam