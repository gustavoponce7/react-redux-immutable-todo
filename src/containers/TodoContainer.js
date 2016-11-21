import { connect } from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import { addTodo, toggleTodo, removeTodo, removeAllTodo } from '../actions.js';

function mapStateToProps(state) {
    return { todos: state };
}

function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      removeTodo: id => dispatch(removeTodo(id)),
      removeAllTodo: () => dispatch(removeAllTodo())
    };
}

const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoContainer;


