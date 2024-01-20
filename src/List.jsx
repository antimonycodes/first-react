
function List() {
  // const fruits =["apple","orange","banana","coconut"]
   const fruits = [
  {id: 1, name: "apple", calories: 52 },
  {id: 2, name: "orange", calories: 43 },
  {id: 3, name: "banana", calories: 105 },
  {id: 4, name: "coconut", calories: 354 }, 
  {id: 5,name: "pineapple", calories:37},
];
//  fruits.sort((a,b) => a.name.localeCompare(b.name));  \\ALPHABETICAL
// fruits.sort((a,b) => b.name.localeCompare(a.name)) \\REVERSE ALPHABETICAL
// fruits.sort((a,b) => a.calories - b.calories)  \\NUMERIC
// fruits.sort((a,b) => b.calories - a.calories)   \\REVERSE NUMERIC

// obJECT FILTERING
// const lowCalFruits = fruits.filter(fruits =>fruits.calories <100 )
// const highCalFruits = fruits.filter(fruits => fruits.calories >= 100)
  const listItems = /*lowCalFruits */ fruits.map(fruit => <li key={fruit.id} 
                                       >{fruit.name}: &nbsp;
                                      <b>{fruit.calories}</b></li>)
  return (<ul>{listItems}</ul>

  )
}

export default List