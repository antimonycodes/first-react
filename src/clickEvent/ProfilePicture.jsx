// import profilePicture from './assets/IMG_1166.jpeg'

function ProfilePicture() {
  const imageUrl = './src/assets/IMG_1166.jpeg'
  const handlePicClick = (e)=> e.target.style.display ="none"
//  here we access the event object property and hide the image when its clicked

  return (
  <img onClick={(e)=>handlePicClick(e)} src={imageUrl} alt="" />

  )
}

export default ProfilePicture