import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(todos=init, action) {
  console.log(action.type);
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });

     case 'REMOVE_TODO':
     var itemToDelete;
     todos.map(t => {
        if(t.get('id') === action.payload) {
          itemToDelete = t;
        } 

      });
      var newState = todos.filter(function(item) { 
        return item.get('id') !== itemToDelete.get('id')  
      });
      return newState;
    case 'REMOVE_ALL_TODO':
      return todos.clear();
    default:
      return todos;
  }
}

