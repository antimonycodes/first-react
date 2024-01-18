import React from 'react'

function SectionOne() {
  const food1 = "Pizza"
  const food2 = "Chicken Pie"
  return (
  <>
  <div className="section-one">
    <ul>
      <li>Candy</li>
      <li>{food1}</li>
      <li>{food2.toLocaleUpperCase()}</li>

    </ul>

  </div>
  </>
  )
}

export default SectionOne