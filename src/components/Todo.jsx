import React from 'react';

class Todo extends React.Component {
    render() {		  
    	 const { todo, onClick } = this.props;
		  if(this.props.todo.isDone) {
		    return <span className="glyphicon glyphicon-triangle-right"><strike onClick={onClick}>{todo.text}</strike></span>;
		  } else {
		    return <span className="glyphicon glyphicon-triangle-right" onClick={onClick}>{todo.text}</span>;
		  }
    }
}
export default Todo;