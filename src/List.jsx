
function List() {
  // const fruits =["apple","orange","banana","coconut"]
   const fruits = [
  { name: "apple", calories: 52 },
  { name: "orange", calories: 43 },
  { name: "banana", calories: 105 },
  { name: "coconut", calories: 354 }, 
  {name: "pineapple", calories:37},
];

  const listItems = fruits.map(fruit => <li >{fruit.name}</li>)
  return (<ul className="fruit-list">{listItems}</ul>

  )
}

export default List