
function List(props) {
  // const fruits =["apple","orange","banana","coconut"]

//  fruits.sort((a,b) => a.name.localeCompare(b.name));  \\ALPHABETICAL
// fruits.sort((a,b) => b.name.localeCompare(a.name)) \\REVERSE ALPHABETICAL
// fruits.sort((a,b) => a.calories - b.calories)  \\NUMERIC
// fruits.sort((a,b) => b.calories - a.calories)   \\REVERSE NUMERIC

// obJECT FILTERING
// const lowCalFruits = fruits.filter(fruits =>fruits.calories <100 )
// const highCalFruits = fruits.filter(fruits => fruits.calories >= 100)
const category = props.category;
const itemList = props.items;
  const listItems =  /*lowCalFruits */ itemList.map(item => <li key={item.id} 
                                       >{item.name}: &nbsp;
                                      <b>{item.calories}</b></li>)
  return ( <>
  <h3 className="list-category">{category}</h3>
  
  <ol className="list-items">{listItems}</ol>
  <br/>

</>
  )
}

export default List