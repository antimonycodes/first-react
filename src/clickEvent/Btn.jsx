

function Btn() {
  let count = 0
  const handleBtnClick =(name)=>{
    if(count < 3){
      count ++
      console.log(`${name} you clicked me ${count} times`)
    }else{
      console.log(`${name} stop clicking me!`);
    }
  }
  return (
   <>
   <button className="btn" onClick={()=> handleBtnClick(`sb`)}>Handle event</button>
   </>
  )
}

export default Btn