import React from 'react';
import Todo from './Todo.jsx';
import CustomButton from './CustomButton.jsx';
import { Panel, Grid, Row, Col, FormControl } from 'react-bootstrap';

class TodoList extends React.Component {

  render() {
     
     const title = (<h3>TODO List</h3>);
     const { todos, toggleTodo, removeTodo, addTodo, removeAllTodo } = this.props;

     const toggleClick = id => event => toggleTodo(id);
     const removeClick = id => event => removeTodo(id);
     const removeAllClick = () => event => removeAllTodo();
     const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if(isEnterKey && isLongEnough) {
          input.value = '';
          addTodo(text);
        }
      };
     return (
       <Panel header={title}>
        
        <FormControl type='text'
               placeholder='Add TODO'
               onKeyDown={onSubmit} />
        <Grid>
        {todos.map(t => (
            <Row className="show-grid row_style" key={t.get('id')}> 
              <Col xs={12} md={8}><Todo todo={t.toJS()}  onClick={toggleClick(t.get('id'))}/></Col>
              <Col xs={6} md={4}><CustomButton icon='glyphicon glyphicon-trash btn-xs' onClick={removeClick(t.get('id'))} text=''/></Col>
            </Row>
          ))
        }
        </Grid>
        <br/>
        <CustomButton icon='glyphicon glyphicon-trash btn-xs' onClick={removeAllClick()} text=' Remove All'/>

        </Panel>
      );
    }
}

export default TodoList;
