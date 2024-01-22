
function List(props) {
  // const fruits =["apple","orange","banana","coconut"]

//  fruits.sort((a,b) => a.name.localeCompare(b.name));  \\ALPHABETICAL
// fruits.sort((a,b) => b.name.localeCompare(a.name)) \\REVERSE ALPHABETICAL
// fruits.sort((a,b) => a.calories - b.calories)  \\NUMERIC
// fruits.sort((a,b) => b.calories - a.calories)   \\REVERSE NUMERIC

// obJECT FILTERING
// const lowCalFruits = fruits.filter(fruits =>fruits.calories <100 )
// const highCalFruits = fruits.filter(fruits => fruits.calories >= 100)
const itemList = props.item
  const listItems =  /*lowCalFruits */ itemList.map(item => <li key={item.id} 
                                       >{item.name}: &nbsp;
                                      <b>{item.calories}</b></li>)
  return (<ul>{listItems}</ul>

  )
}

export default List