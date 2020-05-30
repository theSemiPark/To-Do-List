import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
    render(){
        var {todos, onToggle, onRemove} = this.props;
        todos = [...todos].sort(function compare(a, b){
          if (a.dueDate > b.dueDate) return 1;
          if (b.dueDate > a.dueDate) return -1;
          return 0;
        });
        var todoList = todos.map(
            ({id, text, dueDate, checked}) => (
              <TodoItem
                id={id}
                text={text}
                dueDate={dueDate}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
              />
            )
          );
          
          return (
            <div>
              {todoList}    
            </div>
          );
    }
}

export default TodoItemList;