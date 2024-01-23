import PropTypes from 'prop-types';
function List(props) {
  // const fruits =["apple","orange","banana","coconut"]

//  fruits.sort((a,b) => a.name.localeCompare(b.name));  \\ALPHABETICAL
// fruits.sort((a,b) => b.name.localeCompare(a.name)) \\REVERSE ALPHABETICAL
// fruits.sort((a,b) => a.calories - b.calories)  \\NUMERIC
// fruits.sort((a,b) => b.calories - a.calories)   \\REVERSE NUMERIC

// obJECT FILTERING
// const lowCalFruits = fruits.filter(fruits =>fruits.calories <100 )
// const highCalFruits = fruits.filter(fruits => fruits.calories >= 100)
const category = props.category
const itemList = props.items;
  const listItems =  /*lowCalFruits */ itemList.map(item => <li key={item.id} 
                                       >{item.name}: &nbsp;
                                      <b>{item.calories}</b></li>)
  return ( <>
  <br/>

  <h3 className="list-category">{category}</h3>
  
  <ol className="list-items">{listItems}</ol>
  <br/>

</>
  )
}

List.prototype ={
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
}
List.defaultProps ={
  category: "category",
  items:[],
}

export default List