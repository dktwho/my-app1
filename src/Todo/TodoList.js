import React from 'react';
import Todoitem from './TodoItem';
import PropTypes  from 'prop-types';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
}




 function TodoList(props) {
  return (
    <ul style={styles.ul}>
    { props.todos.map((todo, index) => {
      return <Todoitem 
      todo={todo} 
      key={todo.id} 
      index={index} 
      onChange={props.onToggle}
      ></Todoitem>
    })}
    </ul>
  )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}
export default TodoList
